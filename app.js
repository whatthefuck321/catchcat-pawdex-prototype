const modes = {
  standard: { label: "Steady", cost: 1, multiplier: 1, escapeBase: 0, hint: "Standard mode is the calmest catch" },
  risky: { label: "Risky", cost: 2, multiplier: 2.5, escapeBase: 0.12, hint: "Slightly chaotic, slightly luckier" },
  allin: { label: "All in", cost: 3, multiplier: 6, escapeBase: 0.24, hint: "Maximum sparkle, maximum drama" },
};

const rarities = {
  common: { label: "Common", a: "#9AA0A6", b: "#4D5158", glow: "rgba(154,160,166,.22)", art: "./assets/cat-common.png" },
  uncommon: { label: "Uncommon", a: "#34C759", b: "#0B6A32", glow: "rgba(52,199,89,.34)", art: "./assets/cat-uncommon.png" },
  rare: { label: "Rare", a: "#0A84FF", b: "#5AC8FA", glow: "rgba(10,132,255,.42)", art: "./assets/cat-rare.png" },
  epic: { label: "Epic", a: "#AF52DE", b: "#FF2D55", glow: "rgba(175,82,222,.48)", art: "./assets/cat-epic.png" },
  legendary: { label: "Legendary", a: "#FFD60A", b: "#FF9500", glow: "rgba(255,214,10,.6)", art: "./assets/cat-legendary.png" },
};

const rarityOrder = ["common", "uncommon", "rare", "epic", "legendary"];
const rarityRewards = { common: 0, uncommon: 0, rare: 1, epic: 2, legendary: 3 };
const scenes = [
  { name: "Convenience store orange loaf", place: "Shibuya back alley", art: "common", bg1: "#243348", bg2: "#11141d" },
  { name: "Rooftop midnight shadow", place: "Hongdae rooftop", art: "epic", bg1: "#2b3148", bg2: "#0d1018" },
  { name: "Park bench cloud cat", place: "Da'an park", art: "rare", bg1: "#21443a", bg2: "#101915" },
  { name: "Green-eyed vending guardian", place: "Myeongdong corner", art: "uncommon", bg1: "#30313e", bg2: "#11131a" },
];
const weeklyLimitedCat = { name: "Golden Midnight Patrol", rarity: "legendary", label: "Weekly limited / waiting to be found" };
const leaderboardRivals = [
  { name: "Seoul Night Cat", legendary: 7, rarePlus: 29 },
  { name: "Shibuya Roll King", legendary: 5, rarePlus: 24 },
  { name: "Da'an Gold Flash", legendary: 3, rarePlus: 18 },
  { name: "Myeongdong Scout", legendary: 2, rarePlus: 15 },
];
const names = ["Mochi", "Tofu", "Milkcap", "Dango", "Sumi", "Yuzu", "Tiger", "Nori"];
const titles = ["Store Guardian", "Rooftop Boss", "Night Runner", "Gold Hunter", "Legend Candidate", "Corner Mirage"];
const STORAGE_KEY = "pawdex-html-v7";
const shareRewardLimit = 3;
const pageMeta = {
  catch: { label: "PAWDEX FIELD", title: "Tonight's Cat Hunt" },
  dex: { label: "CAT DEX", title: "Cat Card Dex" },
  rank: { label: "WEEKLY BOARD", title: "Legend Board" },
  share: { label: "STORY SHARE", title: "Story Card" },
  debug: { label: "LATEST CATCH", title: "Catch Notes" },
};

const state = {
  food: 10,
  maxFood: 10,
  mode: "standard",
  tab: "catch",
  phase: "ready",
  scene: scenes[0],
  legendaryHour: false,
  legendaryHourEndsAt: null,
  cards: [],
  lastOutcome: null,
  nextNo: 1,
  lastResetDate: currentDateKey(),
  firstLegendaryDate: null,
  shareRewardDate: currentDateKey(),
  shareRewardCount: 0,
  limitedCatCaught: false,
  revengeCat: null,
  revengeActive: false,
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const els = {
  phone: $(".phone"),
  appPageLabel: $("#appPageLabel"),
  appPageTitle: $("#appPageTitle"),
  canvas: $("#catCanvas"),
  fieldCatArt: $("#fieldCatArt"),
  foodText: $("#foodText"),
  fieldFoodText: $("#fieldFoodText"),
  eventStrip: $("#eventStrip"),
  eventTitle: $("#eventTitle"),
  eventCopy: $("#eventCopy"),
  fieldEvent: $("#fieldEvent"),
  fieldEventTitle: $("#fieldEventTitle"),
  fieldEventCopy: $("#fieldEventCopy"),
  rollOverlay: $("#rollOverlay"),
  rollTitle: $("#rollTitle"),
  rollCopy: $("#rollCopy"),
  captureFlash: $("#captureFlash"),
  revengeBanner: $("#revengeBanner"),
  revengeTitle: $("#revengeTitle"),
  revengeCopy: $("#revengeCopy"),
  toggleEventButton: $("#toggleEventButton"),
  modeList: $("#modeList"),
  riskHint: $("#riskHint"),
  catchButton: $("#catchButton"),
  catchLabel: $("#catchLabel"),
  catchMeta: $("#catchMeta"),
  scanButton: $("#scanButton"),
  catIntelName: $("#catIntelName"),
  catIntelPlace: $("#catIntelPlace"),
  dexTitle: $("#dexTitle"),
  dexGrid: $("#dexGrid"),
  clearDexButton: $("#clearDexButton"),
  storyPreview: $("#storyPreview"),
  storyRarityBadge: $("#storyRarityBadge"),
  storyCardArt: $("#storyCardArt"),
  storyCardName: $("#storyCardName"),
  storyCardNo: $("#storyCardNo"),
  storyCardScene: $("#storyCardScene"),
  storyCardDate: $("#storyCardDate"),
  storyHeadline: $("#storyHeadline"),
  storySub: $("#storySub"),
  copyShareButton: $("#copyShareButton"),
  lastOutcomeTitle: $("#lastOutcomeTitle"),
  lastOutcomeCopy: $("#lastOutcomeCopy"),
  leaderboardRank: $("#leaderboardRank"),
  leaderboardList: $("#leaderboardList"),
  simulateButton: $("#simulateButton"),
  simList: $("#simList"),
  resultModal: $("#resultModal"),
  modalCard: $("#modalCard"),
  enterCatchButton: $("#enterCatchButton"),
  enterShareButton: $("#enterShareButton"),
  appPanel: $("#app"),
};

const ctx = els.canvas.getContext("2d");
let settleTimer = null;

function currentDateKey(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function persistState() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      food: state.food,
      cards: state.cards,
      nextNo: state.nextNo,
      lastOutcome: state.lastOutcome,
      lastResetDate: state.lastResetDate,
      firstLegendaryDate: state.firstLegendaryDate,
      shareRewardDate: state.shareRewardDate,
      shareRewardCount: state.shareRewardCount,
      limitedCatCaught: state.limitedCatCaught,
      legendaryHourEndsAt: state.legendaryHourEndsAt,
      revengeCat: state.revengeCat,
      revengeActive: state.revengeActive,
    }),
  );
}

function hydrateState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (!saved) return;
    state.food = Number.isFinite(saved.food) ? saved.food : state.food;
    state.cards = Array.isArray(saved.cards) ? saved.cards : state.cards;
    state.nextNo = Number.isFinite(saved.nextNo) ? saved.nextNo : state.nextNo;
    state.lastOutcome = saved.lastOutcome || null;
    state.lastResetDate = saved.lastResetDate || state.lastResetDate;
    state.firstLegendaryDate = saved.firstLegendaryDate || null;
    state.shareRewardDate = saved.shareRewardDate || state.shareRewardDate;
    state.shareRewardCount = Number.isFinite(saved.shareRewardCount) ? saved.shareRewardCount : 0;
    state.limitedCatCaught = Boolean(saved.limitedCatCaught);
    state.legendaryHourEndsAt = saved.legendaryHourEndsAt || null;
    state.revengeCat = saved.revengeCat || null;
    state.revengeActive = Boolean(saved.revengeActive);
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function applyDailyReset() {
  const today = currentDateKey();
  if (state.lastResetDate !== today) {
    state.food = state.maxFood;
    state.lastResetDate = today;
    state.shareRewardDate = today;
    state.shareRewardCount = 0;
    persistState();
  }
  if (state.shareRewardDate !== today) {
    state.shareRewardDate = today;
    state.shareRewardCount = 0;
    persistState();
  }
}

function syncLegendaryHour() {
  if (!state.legendaryHourEndsAt) {
    state.legendaryHour = false;
    return;
  }
  const endsAt = new Date(state.legendaryHourEndsAt).getTime();
  if (!Number.isFinite(endsAt) || Date.now() >= endsAt) {
    state.legendaryHour = false;
    state.legendaryHourEndsAt = null;
    persistState();
    return;
  }
  state.legendaryHour = true;
}

function startLegendaryHour() {
  state.legendaryHour = true;
  state.legendaryHourEndsAt = new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString();
  persistState();
}

function stopLegendaryHour() {
  state.legendaryHour = false;
  state.legendaryHourEndsAt = null;
  persistState();
}

function legendaryCountdownText() {
  if (!state.legendaryHour || !state.legendaryHourEndsAt) return "Legend odds are resting.";
  const remaining = Math.max(0, new Date(state.legendaryHourEndsAt).getTime() - Date.now());
  const minutes = Math.floor(remaining / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);
  const hours = Math.floor(minutes / 60);
  return `Legend odds x20 for ${hours}:${String(minutes % 60).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function activeRevengeCat() {
  if (!state.revengeCat?.expiresAt) return null;
  const expiresAt = new Date(state.revengeCat.expiresAt).getTime();
  if (!Number.isFinite(expiresAt) || Date.now() >= expiresAt) {
    state.revengeCat = null;
    state.revengeActive = false;
    persistState();
    return null;
  }
  return state.revengeCat;
}

function compactCountdown(isoDate) {
  const remaining = Math.max(0, new Date(isoDate).getTime() - Date.now());
  const hours = Math.floor(remaining / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

function createRevengeCat(outcome) {
  state.revengeCat = {
    name: `${outcome.scene.name} Returns`,
    place: outcome.scene.place,
    scene: { ...outcome.scene },
    rarity: "legendary",
    expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
  };
  state.revengeActive = false;
}

function activateRevengeCat() {
  const revenge = activeRevengeCat();
  if (!revenge || state.phase !== "ready") return;
  state.scene = { ...revenge.scene };
  state.mode = "allin";
  state.revengeActive = true;
  state.tab = "catch";
  drawCamera();
  persistState();
  render();
}

function catAsset(rarity) {
  return rarities[rarity]?.art || rarities.common.art;
}

function drawCamera() {
  const w = els.canvas.width;
  const h = els.canvas.height;
  const art = state.scene.art || "common";
  els.fieldCatArt.src = catAsset(art);
  els.fieldCatArt.alt = state.scene.name;
  const g = ctx.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, state.scene.bg1);
  g.addColorStop(1, state.scene.bg2);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = "rgba(255,255,255,.06)";
  for (let i = 0; i < 10; i += 1) {
    ctx.fillRect((i * 103) % w, 150 + ((i * 127) % 500), 150, 3);
  }
  const glow = ctx.createRadialGradient(w * 0.5, h * 0.46, 40, w * 0.5, h * 0.46, 390);
  glow.addColorStop(0, "rgba(255,255,255,.14)");
  glow.addColorStop(0.56, "rgba(255,255,255,.04)");
  glow.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, w, h);
}

function rollRarity(modeKey) {
  const mode = modes[modeKey];
  let legendary = Math.min(0.01 * mode.multiplier, 0.5);
  const epic = Math.min(0.04 * mode.multiplier, 0.2);
  const rare = Math.min(0.1 * mode.multiplier, 0.35);
  if (state.legendaryHour) legendary = Math.min(legendary * 20, 0.5);
  const r = Math.random();
  if (r < legendary) return "legendary";
  if (r < legendary + epic) return "epic";
  if (r < legendary + epic + rare) return "rare";
  if (r < legendary + epic + rare + 0.4) return "uncommon";
  return "common";
}

function escapeRate(rarity, modeKey) {
  const byRarity = { common: 0, uncommon: 0.03, rare: 0.1, epic: 0.1, legendary: 0.18 };
  return Math.min(byRarity[rarity] + modes[modeKey].escapeBase, 0.75);
}

function upgradeRarity(rarity) {
  const index = rarityOrder.indexOf(rarity);
  return rarityOrder[Math.min(index + 1, rarityOrder.length - 1)];
}

function makeName(rarity) {
  const first = names[Math.floor(Math.random() * names.length)];
  if (rarity === "common") return first;
  const title = titles[Math.floor(Math.random() * titles.length)];
  return `${first} / ${title}`;
}

function rewardForCapture(rarity) {
  const baseRefund = rarityRewards[rarity] || 0;
  const today = currentDateKey();
  const firstLegendaryBonus = rarity === "legendary" && state.firstLegendaryDate !== today ? 5 : 0;
  return { baseRefund, firstLegendaryBonus, total: baseRefund + firstLegendaryBonus };
}

function scanNextCat() {
  if (state.phase !== "ready" || (state.revengeActive && activeRevengeCat())) return;
  state.scene = scenes[Math.floor(Math.random() * scenes.length)];
  drawCamera();
  render();
}

function rarityStyle(rarity) {
  const cfg = rarities[rarity];
  return `--rarity-a:${cfg.a};--rarity-b:${cfg.b};--rarity-glow:${cfg.glow}`;
}

function dateLabel(isoDate) {
  const date = isoDate ? new Date(isoDate) : new Date();
  return `${date.getMonth() + 1}.${date.getDate()}`;
}

function renderCatCard(card, options = {}) {
  const cfg = rarities[card.rarity];
  const no = card.no ? `#${String(card.no).padStart(3, "0")}` : "LIMITED";
  const meta = options.meta || `${cfg.label} / ${no} / ${dateLabel(card.capturedAt)}`;
  const name = card.name || weeklyLimitedCat.name;
  return `
    <article class="cat-card" data-rarity="${card.rarity}" style="${rarityStyle(card.rarity)}">
      <div class="cat-card-inner">
        <div class="card-topline">
          <span class="rarity-badge">${cfg.label}</span>
          <span class="card-no">${no}</span>
        </div>
        <div class="card-art">
          <img class="cat-art-img" src="${catAsset(card.rarity)}" alt="" />
        </div>
        <div class="card-info">
          <strong class="card-name">${name}</strong>
          <span class="card-meta">${meta}</span>
        </div>
      </div>
    </article>
  `;
}

function openModal() {
  els.resultModal.classList.add("show");
  els.resultModal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  els.resultModal.classList.remove("show");
  els.resultModal.setAttribute("aria-hidden", "true");
}

function showEscapeLikeResult(title, copy) {
  els.modalCard.className = "modal-card reveal-card failed";
  els.modalCard.innerHTML = `
    <div class="escape-visual">!</div>
    <h2>${title}</h2>
    <p>${copy}</p>
    <div class="modal-actions">
      <button class="plain" data-action="close">Close</button>
    </div>
  `;
  openModal();
}

function showCardResult(card) {
  const cfg = rarities[card.rarity];
  const headline = card.revengeAttempt ? "Revenge catch cleared" : "Catch secured";
  const rewardCopy = card.reward?.total ? `Reward +${card.reward.total} treats.` : "No treat refund this time.";
  const upgradeCopy = card.upgraded ? `Glow-up: ${rarities[card.baseRarity].label} to ${cfg.label}.` : "";
  els.modalCard.className = "modal-card reveal-card success";
  els.modalCard.innerHTML = `
    ${renderCatCard(card)}
    <h2>${headline}</h2>
    <p>${card.scene.name} just turned into a ${cfg.label} card. ${upgradeCopy} ${rewardCopy}</p>
    <div class="modal-actions">
      <button class="main" data-action="share">Open share story</button>
      <button class="plain" data-action="close">Keep hunting</button>
    </div>
  `;
  openModal();
}

function showEscapeResult(outcome) {
  const cfg = rarities[outcome.rarity];
  const extra = outcome.rarity === "legendary" ? "A revenge window is now glowing for the next 24 hours." : "";
  els.modalCard.className = "modal-card reveal-card failed";
  els.modalCard.innerHTML = `
    <div class="escape-visual">MISS</div>
    <h2>The cat slipped away</h2>
    <p>You spent ${outcome.cost} treats. It was rolling ${cfg.label} with a ${(outcome.rate * 100).toFixed(0)}% escape chance. ${extra}</p>
    <div class="modal-actions">
      <button class="main" data-action="share">Open share story</button>
      <button class="plain" data-action="close">Try another cat</button>
    </div>
  `;
  openModal();
}

function startCaptureAnimation(mode, rarity) {
  els.rollTitle.textContent = `${mode.label} catch in progress`;
  els.rollCopy.textContent = rarity === "legendary" ? "This one could be huge." : "Checking rarity and escape chance";
  els.captureFlash.classList.remove("burst");
  void els.captureFlash.offsetWidth;
  els.captureFlash.classList.add("burst");
}

function settleCatch({ escaped, baseRarity, rate, mode, modeKey, scene, revengeAttempt }) {
  if (escaped) {
    state.lastOutcome = { type: "escape", mode: modeKey, rarity: baseRarity, cost: mode.cost, rate, scene, revengeAttempt };
    if (baseRarity === "legendary") createRevengeCat(state.lastOutcome);
    state.phase = "nearMiss";
    render();
    window.setTimeout(() => {
      showEscapeResult(state.lastOutcome);
      state.phase = "ready";
      scanNextCat();
      persistState();
      render();
    }, 640);
    return;
  }

  const finalRarity = modeKey === "allin" ? upgradeRarity(baseRarity) : baseRarity;
  const reward = rewardForCapture(finalRarity);
  const card = {
    id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
    no: state.nextNo,
    name: makeName(finalRarity),
    rarity: finalRarity,
    baseRarity,
    upgraded: finalRarity !== baseRarity,
    scene,
    mode: modeKey,
    reward,
    revengeAttempt,
    capturedAt: new Date().toISOString(),
  };
  state.nextNo += 1;
  state.cards.unshift(card);
  state.food = Math.min(state.food + reward.total, state.maxFood + 10);
  if (finalRarity === "legendary" && reward.firstLegendaryBonus > 0) state.firstLegendaryDate = currentDateKey();
  if (finalRarity === "legendary") state.limitedCatCaught = true;
  if (revengeAttempt && finalRarity === "legendary") {
    state.revengeCat = null;
    state.revengeActive = false;
  }
  state.lastOutcome = { type: "card", card };
  showCardResult(card);
  state.phase = "ready";
  scanNextCat();
  persistState();
  render();
}

function catchCat() {
  if (state.phase !== "ready") return;
  applyDailyReset();
  const revengeAttempt = Boolean(state.revengeActive && activeRevengeCat());
  const modeKey = revengeAttempt ? "allin" : state.mode;
  const mode = modes[modeKey];
  if (state.food < mode.cost) {
    showEscapeLikeResult("Not enough treats", `You need ${mode.cost} treats for this capture mode.`);
    return;
  }
  state.food -= mode.cost;
  const baseRarity = revengeAttempt ? "legendary" : rollRarity(modeKey);
  const rate = escapeRate(baseRarity, modeKey);
  const escaped = Math.random() < rate;
  const scene = state.scene;
  state.revengeActive = false;
  state.phase = "rolling";
  startCaptureAnimation(mode, baseRarity);
  render();
  window.clearTimeout(settleTimer);
  settleTimer = window.setTimeout(() => {
    settleCatch({ escaped, baseRarity, rate, mode, modeKey, scene, revengeAttempt });
  }, 950);
}

function shareDateLabel(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}.${m}.${d}`;
}

function escapeShareCard(outcome) {
  return { name: `Almost had a ${rarities[outcome.rarity].label} cat`, rarity: outcome.rarity, scene: outcome.scene, no: null };
}

function setStoryTheme(rarity, isFail) {
  const cfg = rarities[rarity] || rarities.common;
  els.storyPreview.classList.toggle("is-fail", isFail);
  els.storyPreview.style.setProperty("--glow", cfg.glow);
  els.storyPreview.style.setProperty("--a", cfg.a);
  els.storyPreview.style.setProperty("--b", cfg.b);
}

function renderStory() {
  const outcome = state.lastOutcome;
  if (!outcome) {
    setStoryTheme("common", false);
    els.storyRarityBadge.textContent = "READY";
    els.storyCardArt.src = catAsset("common");
    els.storyCardName.textContent = "Tonight's Cat Hunt";
    els.storyCardNo.textContent = "#000";
    els.storyCardScene.textContent = "Shibuya back alley";
    els.storyCardDate.textContent = shareDateLabel();
    els.storyHeadline.textContent = "Catch a cat to generate a share story.";
    els.storySub.textContent = "Real cat sighting, glossy card, instant little flex.";
    return;
  }
  if (outcome.type === "escape") {
    const card = escapeShareCard(outcome);
    const cfg = rarities[card.rarity];
    setStoryTheme(card.rarity, true);
    els.storyRarityBadge.textContent = "ESCAPED";
    els.storyCardArt.src = catAsset(card.rarity);
    els.storyCardName.textContent = card.name;
    els.storyCardNo.textContent = "MISS";
    els.storyCardScene.textContent = card.scene?.place || "Shibuya back alley";
    els.storyCardDate.textContent = shareDateLabel();
    els.storyHeadline.textContent = `${modes[outcome.mode].label} mode missed`;
    els.storySub.textContent = `It was rolling ${cfg.label} with a ${(outcome.rate * 100).toFixed(0)}% escape chance. Still a very postable miss.`;
    return;
  }
  const card = outcome.card;
  const cfg = rarities[card.rarity];
  const rewardText = card.reward?.total ? `Refunded ${card.reward.total} treats.` : "No refund this time.";
  setStoryTheme(card.rarity, false);
  els.storyRarityBadge.textContent = `${cfg.label} ${card.rarity.toUpperCase()}`;
  els.storyCardArt.src = catAsset(card.rarity);
  els.storyCardName.textContent = card.name;
  els.storyCardNo.textContent = `#${String(card.no).padStart(3, "0")}`;
  els.storyCardScene.textContent = card.scene?.place || "Shibuya back alley";
  els.storyCardDate.textContent = shareDateLabel(new Date(card.capturedAt));
  els.storyHeadline.textContent = `Caught a ${cfg.label} cat in ${card.scene.place}`;
  els.storySub.textContent = card.rarity === "legendary" ? `${rewardText} Certified story-worthy luck.` : `${rewardText} Another sweet little card for the collection.`;
}

function renderDex() {
  els.dexTitle.textContent = `Collected ${state.cards.length} cards`;
  const limitedSlot = state.limitedCatCaught
    ? renderCatCard({ name: weeklyLimitedCat.name, rarity: weeklyLimitedCat.rarity, no: null, capturedAt: currentDateKey() }, { meta: "Weekly limited / unlocked" })
    : `<article class="limited-slot"><div class="limited-lock">?</div><strong>${weeklyLimitedCat.name}</strong><span>${weeklyLimitedCat.label}</span></article>`;
  if (state.cards.length === 0) {
    els.dexGrid.innerHTML = `${limitedSlot}<div class="empty-dex">No cards yet. Head back to the catch tab and spot your first neighborhood cat.</div>`;
    return;
  }
  els.dexGrid.innerHTML = `${limitedSlot}${state.cards.map((card) => renderCatCard(card)).join("")}`;
}

function renderOutcomeSide() {
  const outcome = state.lastOutcome;
  if (!outcome) {
    els.lastOutcomeTitle.textContent = "No catch yet";
    els.lastOutcomeCopy.textContent = "Take one shot and this panel will summarize the latest catch moment.";
    return;
  }
  if (outcome.type === "escape") {
    els.lastOutcomeTitle.textContent = "Escape result";
    els.lastOutcomeCopy.textContent = `${modes[outcome.mode].label} mode missed and spent ${outcome.cost} treats. Painful, but still great story-card drama.`;
    return;
  }
  els.lastOutcomeTitle.textContent = "Catch result";
  els.lastOutcomeCopy.textContent = `${outcome.card.name} landed as ${rarities[outcome.card.rarity].label} and refunded ${outcome.card.reward?.total || 0} treats. Clean catch, cute payoff.`;
}

function isRecentWeek(card) {
  const capturedAt = new Date(card.capturedAt || Date.now()).getTime();
  return Date.now() - capturedAt < 7 * 24 * 60 * 60 * 1000;
}

function playerLeaderboardStats() {
  return state.cards.filter(isRecentWeek).reduce(
    (stats, card) => {
      if (["rare", "epic", "legendary"].includes(card.rarity)) stats.rarePlus += 1;
      if (card.rarity === "legendary") stats.legendary += 1;
      return stats;
    },
    { name: "You", legendary: 0, rarePlus: 0, isPlayer: true },
  );
}

function renderLeaderboard() {
  const rows = [...leaderboardRivals.map((row) => ({ ...row, isPlayer: false })), playerLeaderboardStats()]
    .sort((a, b) => b.legendary - a.legendary || b.rarePlus - a.rarePlus || a.name.localeCompare(b.name));
  const rank = rows.findIndex((row) => row.isPlayer) + 1;
  els.leaderboardRank.textContent = `#${rank}`;
  els.leaderboardList.innerHTML = rows
    .map(
      (row, index) => `
        <div class="leader-row ${row.isPlayer ? "me" : ""}">
          <span>${index + 1}</span>
          <strong>${row.name}</strong>
          <em>${row.legendary} legendary</em>
          <small>${row.rarePlus} rare+</small>
        </div>
      `,
    )
    .join("");
}

async function saveStoryImage() {
  if (!state.lastOutcome) {
    showEscapeLikeResult("No share story yet", "Catch a cat first, then save the story card.");
    return;
  }
  if (typeof window.html2canvas !== "function") {
    showEscapeLikeResult("Share export missing", "The image export library did not finish loading yet.");
    return;
  }
  const previousText = els.copyShareButton.textContent;
  els.copyShareButton.disabled = true;
  els.copyShareButton.textContent = "Rendering story...";
  try {
    const canvas = await window.html2canvas(els.storyPreview, { scale: 3, backgroundColor: null, useCORS: true });
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
    if (!blob) throw new Error("export failed");
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `pawdex-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    if (state.shareRewardCount < shareRewardLimit) {
      state.shareRewardCount += 1;
      state.food = Math.min(state.food + 2, state.maxFood + 10);
      persistState();
      render();
    }
  } catch {
    showEscapeLikeResult("Story export failed", "The browser could not generate the image this time.");
  } finally {
    els.copyShareButton.disabled = false;
    els.copyShareButton.textContent = previousText;
  }
}

function renderRevengeBanner(revenge, isRevengeActive) {
  const visible = Boolean(revenge && state.tab === "catch" && state.phase === "ready");
  els.revengeBanner.hidden = !visible;
  els.revengeBanner.classList.toggle("armed", Boolean(isRevengeActive));
  if (!revenge) return;
  els.revengeTitle.textContent = isRevengeActive ? "Revenge hunt locked" : "It came back";
  els.revengeCopy.textContent = isRevengeActive ? "Next all-in roll is locked on legendary." : `${revenge.place} / ${compactCountdown(revenge.expiresAt)} left to chase it again`;
}

function updateCatchCopy(mode, isRolling, isRevengeActive) {
  if (isRolling) {
    els.catchLabel.textContent = "Resolving catch";
    els.catchMeta.textContent = "Locking the card pull";
    return;
  }
  if (state.phase === "nearMiss") {
    els.catchLabel.textContent = "Escape sequence";
    els.catchMeta.textContent = "The cat is slipping away";
    return;
  }
  if (state.food < mode.cost) {
    els.catchLabel.textContent = "Not enough treats";
    els.catchMeta.textContent = `Need ${mode.cost} treats`;
    return;
  }
  els.catchLabel.textContent = isRevengeActive ? "Track and snap" : "Snap and catch";
  els.catchMeta.textContent = `Spend ${mode.cost} treat${mode.cost > 1 ? "s" : ""}`;
}

function switchTab(tab) {
  state.tab = tab;
  render();
}

function jumpToApp(tab = "catch") {
  switchTab(tab);
  els.appPanel?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function simulate() {
  els.simList.innerHTML = Object.keys(modes)
    .map((modeKey) => {
      const mode = modes[modeKey];
      let foodSpent = 0;
      let escaped = 0;
      let rarePlus = 0;
      let legendary = 0;
      for (let i = 0; i < 100000; i += 1) {
        foodSpent += mode.cost;
        const baseRarity = rollRarity(modeKey);
        if (Math.random() < escapeRate(baseRarity, modeKey)) {
          escaped += 1;
        } else {
          const finalRarity = modeKey === "allin" ? upgradeRarity(baseRarity) : baseRarity;
          if (["rare", "epic", "legendary"].includes(finalRarity)) rarePlus += 1;
          if (finalRarity === "legendary") legendary += 1;
        }
      }
      const rarePerFood = rarePlus / foodSpent;
      const legPerFood = legendary / foodSpent;
      return `
        <div class="sim-row">
          <strong>${mode.label}</strong>
          <span>Rare+ per treat ${rarePerFood.toFixed(3)} / Legendary per treat ${legPerFood.toFixed(3)} / Escape ${(escaped / 1000).toFixed(1)}%</span>
          <div class="bar"><i style="width:${Math.min(rarePerFood * 220, 100)}%"></i></div>
        </div>
      `;
    })
    .join("");
}

function render() {
  applyDailyReset();
  syncLegendaryHour();
  const revenge = activeRevengeCat();
  const isRevengeActive = Boolean(state.revengeActive && revenge);
  const mode = modes[isRevengeActive ? "allin" : state.mode];
  const isRolling = state.phase === "rolling";
  const isBusy = state.phase !== "ready";
  const meta = pageMeta[state.tab] || pageMeta.catch;
  els.appPageLabel.textContent = meta.label;
  els.appPageTitle.textContent = meta.title;
  els.foodText.textContent = `${state.food}/${state.maxFood}`;
  els.fieldFoodText.textContent = `${state.food}/${state.maxFood}`;
  els.catIntelName.textContent = state.scene.name;
  els.catIntelPlace.textContent = state.scene.place;
  els.riskHint.textContent = isRevengeActive ? "Revenge hunt locked to all-in mode" : mode.hint;
  updateCatchCopy(mode, isRolling, isRevengeActive);
  els.catchButton.disabled = isBusy || state.food < mode.cost;
  els.scanButton.disabled = isBusy || isRevengeActive;
  const shareLeft = Math.max(shareRewardLimit - state.shareRewardCount, 0);
  els.copyShareButton.textContent = !state.lastOutcome ? "Catch one first" : shareLeft > 0 ? `Save story / +2 treats (${shareLeft} left)` : "Save story / today's bonus used";
  els.copyShareButton.disabled = !state.lastOutcome;
  els.rollOverlay.classList.toggle("show", isRolling);
  els.rollOverlay.setAttribute("aria-hidden", isRolling ? "false" : "true");
  els.eventStrip.classList.toggle("active", state.legendaryHour);
  els.eventTitle.textContent = state.legendaryHour ? "Legend window active" : "Legend window offline";
  els.eventCopy.textContent = state.legendaryHour ? legendaryCountdownText() : "Normal rates right now. Nice time to fill out your dex.";
  els.fieldEvent.classList.toggle("active", state.legendaryHour);
  els.fieldEventTitle.textContent = state.legendaryHour ? "Legend window active" : "Calm window";
  els.fieldEventCopy.textContent = legendaryCountdownText();
  els.toggleEventButton.textContent = state.legendaryHour ? "Stop" : "Start";
  els.phone.classList.toggle("catch-mode", state.tab === "catch");
  els.phone.dataset.phase = state.phase;
  $$(".mode").forEach((item) => {
    item.classList.toggle("active", item.dataset.mode === state.mode);
    item.disabled = isBusy || isRevengeActive;
  });
  $$(".screen").forEach((item) => {
    const active = item.dataset.screen === state.tab;
    item.classList.toggle("active", active);
    item.hidden = !active;
  });
  $$(".nav").forEach((item) => item.classList.toggle("active", item.dataset.tab === state.tab));
  renderDex();
  renderStory();
  renderOutcomeSide();
  renderLeaderboard();
  renderRevengeBanner(revenge, isRevengeActive);
}

els.modeList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-mode]");
  if (!button || state.phase !== "ready" || (state.revengeActive && activeRevengeCat())) return;
  state.mode = button.dataset.mode;
  render();
});

$$("[data-tab]").forEach((button) => {
  button.addEventListener("click", () => switchTab(button.dataset.tab));
});

els.scanButton.addEventListener("click", scanNextCat);
els.catchButton.addEventListener("click", catchCat);
els.revengeBanner.addEventListener("click", activateRevengeCat);
els.toggleEventButton.addEventListener("click", () => {
  if (state.phase !== "ready") return;
  if (state.legendaryHour) stopLegendaryHour();
  else startLegendaryHour();
  render();
});
els.clearDexButton.addEventListener("click", () => {
  state.cards = [];
  state.nextNo = 1;
  state.lastOutcome = null;
  state.limitedCatCaught = false;
  persistState();
  render();
});
els.simulateButton.addEventListener("click", simulate);
els.copyShareButton.addEventListener("click", saveStoryImage);
els.enterCatchButton?.addEventListener("click", () => jumpToApp("catch"));
els.enterShareButton?.addEventListener("click", () => jumpToApp("share"));
els.resultModal.addEventListener("click", (event) => {
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (!action && event.target === els.resultModal) {
    closeModal();
    return;
  }
  if (action === "close") closeModal();
  if (action === "share") {
    closeModal();
    switchTab("share");
  }
});

hydrateState();
applyDailyReset();
drawCamera();
simulate();
render();
