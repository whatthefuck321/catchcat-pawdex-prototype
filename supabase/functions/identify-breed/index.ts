type BreedResponse = {
  nameEn?: string;
  nameZh?: string;
  confidence?: "high" | "medium" | "low";
  descriptionEn?: string;
  descriptionZh?: string;
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const model = Deno.env.get("GEMINI_MODEL") || "gemini-2.5-flash-lite";
const apiKey = Deno.env.get("GEMINI_API_KEY") || "";

function jsonResponse(body: unknown, status = 200) {
  return Response.json(body, {
    status,
    headers: corsHeaders,
  });
}

function parseJsonText(text: string): BreedResponse {
  try {
    return JSON.parse(text);
  } catch {
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) return {};
    try {
      return JSON.parse(match[0]);
    } catch {
      return {};
    }
  }
}

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (request.method !== "POST") return jsonResponse({ error: "Method not allowed" }, 405);
  if (!apiKey) return jsonResponse({ error: "Missing GEMINI_API_KEY" }, 500);

  try {
    const { image, mimeType, rarity, scene, locale } = await request.json();
    if (!image || !mimeType) return jsonResponse({ error: "Missing image or mimeType" }, 400);

    const prompt = `
You are PAWDEX, a playful cat-card breed identifier.
Identify the cat breed from the image. This is for entertainment, not veterinary use.
Return JSON only:
{
  "nameEn": "breed name or Domestic Shorthair",
  "nameZh": "中文品种名或中华田园短毛",
  "confidence": "high|medium|low",
  "descriptionEn": "one short fun sentence",
  "descriptionZh": "一句中文趣味描述"
}
Context:
- UI locale: ${locale || "zh"}
- Current rarity: ${rarity || "common"}
- Scene: ${scene?.place || ""} ${scene?.name || ""}
If the photo is unclear, use Domestic Shorthair / 中华田园短毛 with low confidence.
`.trim();

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: prompt },
                {
                  inlineData: {
                    mimeType,
                    data: image,
                  },
                },
              ],
            },
          ],
          generationConfig: {
            responseMimeType: "application/json",
            temperature: 0.35,
          },
        }),
      },
    );

    if (!response.ok) {
      return jsonResponse({ error: `Gemini request failed: ${response.status}` }, 502);
    }

    const result = await response.json();
    const text = result?.candidates?.[0]?.content?.parts
      ?.map((part: { text?: string }) => part.text || "")
      .join("")
      .trim();
    const breed = parseJsonText(text || "{}");

    return jsonResponse({
      breed: {
        nameEn: breed.nameEn || "Domestic Shorthair",
        nameZh: breed.nameZh || "中华田园短毛",
        confidence: ["high", "medium", "low"].includes(String(breed.confidence))
          ? breed.confidence
          : "low",
        descriptionEn: breed.descriptionEn || "A street-smart cat with a strong PAWDEX aura.",
        descriptionZh: breed.descriptionZh || "一只有明显街区气质的猫。",
        source: "gemini-edge",
      },
    });
  } catch (error) {
    return jsonResponse({ error: error instanceof Error ? error.message : "Unknown error" }, 400);
  }
});
