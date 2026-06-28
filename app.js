const modes = {
  standard: {
    label: "稳抓",
    cost: 1,
    multiplier: 1,
    escapeBase: 0,
    hint: "稳抓最安全",
  },
  risky: {
    label: "冒险",
    cost: 2,
    multiplier: 2.5,
    escapeBase: 0.12,
    hint: "传说率 ×2.5，rare+ 回粮",
  },
  allin: {
    label: "梭哈",
    cost: 3,
    multiplier: 6,
    escapeBase: 0.24,
    hint: "传说率 ×6，成功升一档",
  },
};

const rarities = {
  common: {
    label: "普通",
    a: "#9AA0A6",
    b: "#4D5158",
    glow: "rgba(154,160,166,.22)",
    art: "./assets/cat-common.png",
  },
  uncommon: {
    label: "优秀",
    a: "#34C759",
    b: "#0B6A32",
    glow: "rgba(52,199,89,.34)",
    art: "./assets/cat-uncommon.png",
  },
  rare: {
    label: "稀有",
    a: "#0A84FF",
    b: "#5AC8FA",
    glow: "rgba(10,132,255,.42)",
    art: "./assets/cat-rare.png",
  },
  epic: {
    label: "史诗",
    a: "#AF52DE",
    b: "#FF2D55",
    glow: "rgba(175,82,222,.48)",
    art: "./assets/cat-epic.png",
  },
  legendary: {
    label: "传说",
    a: "#FFD60A",
    b: "#FF9500",
    glow: "rgba(255,214,10,.6)",
    art: "./assets/cat-legendary.png",
  },
};

const rarityOrder = ["common", "uncommon", "rare", "epic", "legendary"];
const rarityRewards = {
  common: 0,
  uncommon: 0,
  rare: 1,
  epic: 2,
  legendary: 3,
};

const scenes = [
  { name: "便利店门口的橘猫", place: "涩谷后巷", art: "common", bg1: "#243348", bg2: "#11141d" },
  { name: "屋顶边缘的黑猫", place: "首尔弘大", art: "epic", bg1: "#2b3148", bg2: "#0d1018" },
  { name: "公园长椅的白猫", place: "台北大安", art: "rare", bg1: "#21443a", bg2: "#101915" },
  { name: "自动贩卖机旁的绿瞳猫", place: "大阪巷口", art: "uncommon", bg1: "#30313e", bg2: "#11131a" },
];
const weeklyLimitedCat = {
  name: "本周限定·金瞳夜巡",
  rarity: "legendary",
  label: "限定·已结束",
};
const leaderboardRivals = [
  { name: "首尔夜猫", legendary: 7, rarePlus: 29 },
  { name: "涩谷赌王", legendary: 5, rarePlus: 24 },
  { name: "大安金瞳", legendary: 3, rarePlus: 18 },
  { name: "大阪巷口", legendary: 2, rarePlus: 15 },
];

const names = ["麻薯", "豆腐", "奶盖", "团子", "玄米", "乌冬", "小虎", "年糕"];
const titles = ["便利店守护者", "屋顶赌王", "夜行冠军", "金瞳猎手", "传说候选猫", "巷口幻影"];
const STORAGE_KEY = "pawdex-html-v7";
const shareRewardLimit = 3;
const pageMeta = {
  catch: { label: "PAWDEX FIELD", title: "今晚抓猫" },
  dex: { label: "CAT DEX", title: "猫卡图鉴" },
  rank: { label: "WEEKLY RANK", title: "本周榜单" },
  share: { label: "STORY SHARE", title: "晒卡分享" },
  debug: { label: "DEV PANEL", title: "调试面板" },
};

const state = {
  food: 10,
  maxFood: 10,
  mode: "standard",
  tab: "catch",
  phase: "ready",
  scene: scenes[0],
  detected: true,
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
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function hydrateState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const saved = JSON.parse(raw);
    if (!saved || typeof saved !== "object") return;
    state.food = Number.isFinite(saved.food) ? saved.food : state.food;
    state.maxFood = Number.isFinite(saved.maxFood) ? saved.maxFood : state.maxFood;
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
  let changed = false;
  if (state.lastResetDate !== today) {
    state.food = state.maxFood;
    state.lastResetDate = today;
    state.shareRewardDate = today;
    state.shareRewardCount = 0;
    changed = true;
  }
  if (state.shareRewardDate !== today) {
    state.shareRewardDate = today;
    state.shareRewardCount = 0;
    changed = true;
  }
  if (changed) persistState();
}

function persistState() {
  const payload = {
    food: state.food,
    maxFood: state.maxFood,
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
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
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
  if (!state.legendaryHour || !state.legendaryHourEndsAt) return "传说概率未加成";
  const remaining = Math.max(0, new Date(state.legendaryHourEndsAt).getTime() - Date.now());
  const minutes = Math.floor(remaining / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);
  const hours = Math.floor(minutes / 60);
  const mm = String(minutes % 60).padStart(2, "0");
  const ss = String(seconds).padStart(2, "0");
  return `传说率 ×20，还剩 ${hours}:${mm}:${ss}`;
}

function activeRevengeCat() {
  if (!state.revengeCat?.expiresAt) {
    state.revengeActive = false;
    return null;
  }
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
  const hh = String(hours).padStart(2, "0");
  const mm = String(minutes).padStart(2, "0");
  return `${hh}:${mm}`;
}

function createRevengeCat(outcome) {
  state.revengeCat = {
    name: `${outcome.scene.name}·金瞳回归`,
    place: outcome.scene.place,
    scene: { ...outcome.scene },
    rarity: "legendary",
    expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
  };
  state.revengeActive = false;
}

function activateRevengeCat() {
  if (state.phase !== "ready") return;
  const revenge = activeRevengeCat();
  if (!revenge) {
    render();
    return;
  }
  state.scene = { ...revenge.scene };
  state.mode = "allin";
  state.revengeActive = true;
  state.tab = "catch";
  drawCamera();
  persistState();
  render();
}

function drawCamera() {
  const w = els.canvas.width;
  const h = els.canvas.height;
  const previewArt = state.scene.art || "common";
  els.fieldCatArt.src = catAsset(previewArt);
  els.fieldCatArt.alt = state.scene.name;
  const g = ctx.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, state.scene.bg1);
  g.addColorStop(1, state.scene.bg2);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);

  const glow = ctx.createRadialGradient(w * 0.5, h * 0.46, 40, w * 0.5, h * 0.46, 390);
  glow.addColorStop(0, "rgba(255,255,255,.14)");
  glow.addColorStop(0.56, "rgba(255,255,255,.04)");
  glow.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = "rgba(255,255,255,.065)";
  for (let i = 0; i < 10; i += 1) {
    ctx.fillRect((i * 103) % w, 150 + ((i * 127) % 500), 150, 3);
  }

  ctx.fillStyle = "rgba(0,0,0,.34)";
  ctx.fillRect(0, h * 0.74, w, h * 0.26);
  ctx.fillStyle = "rgba(255,214,10,.08)";
  ctx.beginPath();
  ctx.ellipse(w * 0.52, h * 0.75, 250, 42, 0, 0, Math.PI * 2);
  ctx.fill();
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
  if (r < legendary + epic + rare + 0.40) return "uncommon";
  return "common";
}

function escapeRate(rarity, modeKey) {
  const byRarity = {
    common: 0,
    uncommon: 0.03,
    rare: 0.1,
    epic: 0.1,
    legendary: 0.18,
  };
  return Math.min(byRarity[rarity] + modes[modeKey].escapeBase, 0.75);
}

function upgradeRarity(rarity) {
  const index = rarityOrder.indexOf(rarity);
  if (index < 0) return rarity;
  return rarityOrder[Math.min(index + 1, rarityOrder.length - 1)];
}

function makeName(rarity) {
  const first = names[Math.floor(Math.random() * names.length)];
  if (rarity === "common") return first;
  const title = titles[Math.floor(Math.random() * titles.length)];
  return `${first}·${title}`;
}

function switchTab(tab) {
  state.tab = tab;
  render();
}

function jumpToApp(tab = "catch") {
  switchTab(tab);
  els.appPanel?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function updateCatchCopy(mode, isRolling, isRevengeActive) {
  if (isRolling) {
    els.catchLabel.textContent = "结算中";
    els.catchMeta.textContent = "正在锁定这次捕捉";
    return;
  }
  if (state.phase === "nearMiss") {
    els.catchLabel.textContent = "挣脱中";
    els.catchMeta.textContent = "猫正在逃跑";
    return;
  }
  if (state.food < mode.cost) {
    els.catchLabel.textContent = "猫粮不足";
    els.catchMeta.textContent = `需要 ${mode.cost} 猫粮`;
    return;
  }
  els.catchLabel.textContent = isRevengeActive ? "追猎拍摄" : "拍摄捕捉";
  els.catchMeta.textContent = isRevengeActive
    ? `消耗 ${mode.cost} 猫粮追猎传说`
    : `消耗 ${mode.cost} 猫粮`;
}

function scanNextCat() {
  if (state.phase !== "ready") return;
  if (state.revengeActive && activeRevengeCat()) return;
  state.scene = scenes[Math.floor(Math.random() * scenes.length)];
  state.detected = true;
  drawCamera();
  render();
}

function catchCat() {
  if (state.phase !== "ready") return;
  applyDailyReset();
  const revengeAttempt = Boolean(state.revengeActive && activeRevengeCat());
  const modeKey = revengeAttempt ? "allin" : state.mode;
  const mode = modes[modeKey];
  if (state.food < mode.cost) {
    showEscapeLikeResult("猫粮不够", `需要 ${mode.cost} 猫粮，先分享一张卡回粮。`);
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

function settleCatch(result) {
  const { escaped, baseRarity, rate, mode, modeKey, scene, revengeAttempt } = result;
  if (escaped) {
    state.lastOutcome = {
      type: "escape",
      mode: modeKey,
      rarity: baseRarity,
      cost: mode.cost,
      rate,
      scene,
      revengeAttempt,
    };
    if (baseRarity === "legendary") {
      createRevengeCat(state.lastOutcome);
    }
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
  } else {
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
    if (finalRarity === "legendary" && reward.firstLegendaryBonus > 0) {
      state.firstLegendaryDate = currentDateKey();
    }
    if (finalRarity === "legendary") {
      state.limitedCatCaught = true;
    }
    if (revengeAttempt && finalRarity === "legendary") {
      state.revengeCat = null;
      state.revengeActive = false;
    }
    state.lastOutcome = { type: "card", card };
    showCardResult(card);
  }

  state.phase = "ready";
  scanNextCat();
  persistState();
  render();
}

function rewardForCapture(rarity) {
  const baseRefund = rarityRewards[rarity] || 0;
  const today = currentDateKey();
  const firstLegendaryBonus =
    rarity === "legendary" && state.firstLegendaryDate !== today ? 5 : 0;
  return {
    baseRefund,
    firstLegendaryBonus,
    total: baseRefund + firstLegendaryBonus,
  };
}

function startCaptureAnimation(mode, rarity) {
  els.rollTitle.textContent = `${mode.label}捕捉中`;
  els.rollCopy.textContent =
    rarity === "legendary" ? "这次可能是传说，别眨眼" : "正在结算稀有度和逃跑";
  els.captureFlash.classList.remove("burst");
  void els.captureFlash.offsetWidth;
  els.captureFlash.classList.add("burst");
}

function showCardResult(card) {
  const cfg = rarities[card.rarity];
  const headline = card.revengeAttempt ? "追猎成功" : "抓到了";
  const rewardCopy = card.reward?.total
    ? `奖励 +${card.reward.total} 猫粮${card.reward.firstLegendaryBonus ? "，含每日首只传说 +5" : ""}。`
    : "没有返粮奖励。";
  const upgradeCopy = card.upgraded
    ? `梭哈升档：${rarities[card.baseRarity].label} → ${cfg.label}。`
    : "";
  const revengeCopy = card.revengeAttempt ? "回归传说被你追到了。" : "";
  els.modalCard.className = "modal-card reveal-card success";
  els.modalCard.innerHTML = `
    ${renderCatCard(card)}
    <h2>${headline}</h2>
    <p>${modes[card.mode].label}成功，${card.scene.name}变成了${cfg.label}猫卡。${revengeCopy}${upgradeCopy}${rewardCopy}</p>
    <div class="modal-actions">
      <button class="main" data-action="share">生成分享图</button>
      <button class="plain" data-action="close">继续抓猫</button>
    </div>
  `;
  openModal();
}

function showEscapeResult(outcome) {
  const cfg = rarities[outcome.rarity];
  const revengeCopy =
    outcome.rarity === "legendary"
      ? "这只传说已经进入 24 小时回归池，捕捉页会出现追猎提示。"
      : "";
  els.modalCard.className = "modal-card reveal-card failed";
  els.modalCard.innerHTML = `
    <div class="escape-visual">跑</div>
    <h2>猫跑了</h2>
    <p>${modes[outcome.mode].label}失败，亏了 ${outcome.cost} 猫粮。本来 roll 到${cfg.label}，逃跑率 ${(outcome.rate * 100).toFixed(0)}%。${revengeCopy}</p>
    <div class="modal-actions">
      <button class="main" data-action="share">分享失败战绩</button>
      <button class="plain" data-action="close">再赌一只</button>
    </div>
  `;
  openModal();
}

function showEscapeLikeResult(title, copy) {
  els.modalCard.className = "modal-card reveal-card failed";
  els.modalCard.innerHTML = `
    <div class="escape-visual">!</div>
    <h2>${title}</h2>
    <p>${copy}</p>
    <div class="modal-actions">
      <button class="plain" data-action="close">知道了</button>
    </div>
  `;
  openModal();
}

function openModal() {
  els.resultModal.classList.add("show");
  els.resultModal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  els.resultModal.classList.remove("show");
  els.resultModal.setAttribute("aria-hidden", "true");
}

function catAsset(rarity) {
  return rarities[rarity]?.art || rarities.common.art;
}

function rarityStyle(rarity) {
  const cfg = rarities[rarity];
  return `--rarity-a:${cfg.a};--rarity-b:${cfg.b};--rarity-glow:${cfg.glow}`;
}

function dateLabel(isoDate) {
  if (!isoDate) return currentDateKey();
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return currentDateKey();
  return `${date.getMonth() + 1}.${date.getDate()}`;
}

function renderCatCard(card, options = {}) {
  const cfg = rarities[card.rarity];
  const no = card.no ? `#${String(card.no).padStart(3, "0")}` : "LIMITED";
  const meta = options.meta || `${cfg.label} · ${no} · ${dateLabel(card.capturedAt)}`;
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

function renderCard(card) {
  return renderCatCard(card);
}

function shareDateLabel(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
}

function escapeShareCard(outcome) {
  return {
    name: `差一点的${rarities[outcome.rarity].label}`,
    rarity: outcome.rarity,
    no: null,
    scene: outcome.scene,
    cost: outcome.cost,
    rate: outcome.rate,
    mode: outcome.mode,
  };
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
    els.storyCardName.textContent = "今晚抓猫";
    els.storyCardNo.textContent = "#000";
    els.storyCardScene.textContent = "涩谷后巷";
    els.storyCardDate.textContent = shareDateLabel();
    els.storyHeadline.textContent = "抓到猫后生成分享图";
    els.storySub.textContent = "真实猫抽卡 · 拍真猫出卡";
    return;
  }

  if (outcome.type === "escape") {
    const card = escapeShareCard(outcome);
    const cfg = rarities[card.rarity];
    setStoryTheme(card.rarity, true);
    els.storyRarityBadge.textContent = "猫跑了 ESCAPED";
    els.storyCardArt.src = catAsset(card.rarity);
    els.storyCardName.textContent = card.name;
    els.storyCardNo.textContent = "MISS";
    els.storyCardScene.textContent = card.scene?.place || "涩谷后巷";
    els.storyCardDate.textContent = shareDateLabel();
    els.storyHeadline.textContent = `${modes[outcome.mode].label}失败，猫跑了`;
    els.storySub.textContent = `本来 roll 到${cfg.label}，逃跑率 ${(outcome.rate * 100).toFixed(0)}%。我不甘心。`;
    return;
  }

  const card = outcome.card;
  const cfg = rarities[card.rarity];
  const rewardText = card.reward?.total ? `回了 ${card.reward.total} 猫粮。` : "没有回粮奖励。";
  setStoryTheme(card.rarity, false);
  els.storyRarityBadge.textContent = `${cfg.label} ${card.rarity.toUpperCase()}`;
  els.storyCardArt.src = catAsset(card.rarity);
  els.storyCardName.textContent = card.name;
  els.storyCardNo.textContent = `#${String(card.no).padStart(3, "0")}`;
  els.storyCardScene.textContent = card.scene?.place || "涩谷后巷";
  els.storyCardDate.textContent = shareDateLabel(card.capturedAt ? new Date(card.capturedAt) : new Date());
  els.storyHeadline.textContent =
    card.rarity === "legendary"
      ? `我在${card.scene.place}抓到传说猫`
      : `我在${card.scene.place}抓到${cfg.label}猫`;
  els.storySub.textContent =
    card.rarity === "legendary" ? `${rewardText}你能抓到传说吗？` : `${rewardText}来 PAWDEX 一起抓猫。`;
}

function renderDex() {
  els.dexTitle.textContent = `已收集 ${state.cards.length} 张`;
  const limitedSlot = state.limitedCatCaught
    ? `
      ${renderCatCard(
        {
          name: weeklyLimitedCat.name,
          rarity: weeklyLimitedCat.rarity,
          no: null,
          capturedAt: currentDateKey(),
        },
        { meta: "本周限定 · 已捕获" },
      )}
    `
    : `
      <article class="limited-slot">
        <div class="limited-lock">?</div>
        <strong>${weeklyLimitedCat.name}</strong>
        <span>${weeklyLimitedCat.label}</span>
      </article>
    `;
  if (state.cards.length === 0) {
    els.dexGrid.innerHTML = `${limitedSlot}<div class="empty-dex">还没有猫卡。先去捕捉页赌一只。</div>`;
    return;
  }
  els.dexGrid.innerHTML = `${limitedSlot}${state.cards.map(renderCard).join("")}`;
}

function renderOutcomeSide() {
  const outcome = state.lastOutcome;
  if (!outcome) {
    els.lastOutcomeTitle.textContent = "还没下注";
    els.lastOutcomeCopy.textContent = "先点一次捕捉，看成功晒卡和失败亏损哪一个更有传播感。";
    return;
  }
  if (outcome.type === "escape") {
    els.lastOutcomeTitle.textContent = "失败也能传播";
    els.lastOutcomeCopy.textContent = `用户${modes[outcome.mode].label}失败，亏 ${outcome.cost} 猫粮。这种亏损截图更像 meme。`;
    return;
  }
  els.lastOutcomeTitle.textContent = "成功晒卡";
  els.lastOutcomeCopy.textContent = `${outcome.card.name} 是${rarities[outcome.card.rarity].label}，本次回了 ${outcome.card.reward?.total || 0} 猫粮，适合生成竖版 story 图。`;
}

function isRecentWeek(card) {
  if (!card.capturedAt) return true;
  const capturedAt = new Date(card.capturedAt).getTime();
  if (!Number.isFinite(capturedAt)) return true;
  return Date.now() - capturedAt < 7 * 24 * 60 * 60 * 1000;
}

function playerLeaderboardStats() {
  const weeklyCards = state.cards.filter(isRecentWeek);
  return weeklyCards.reduce(
    (stats, card) => {
      if (["rare", "epic", "legendary"].includes(card.rarity)) stats.rarePlus += 1;
      if (card.rarity === "legendary") stats.legendary += 1;
      return stats;
    },
    { name: "你", legendary: 0, rarePlus: 0, isPlayer: true },
  );
}

function renderLeaderboard() {
  const player = playerLeaderboardStats();
  const rows = [...leaderboardRivals.map((item) => ({ ...item, isPlayer: false })), player]
    .sort((a, b) => b.legendary - a.legendary || b.rarePlus - a.rarePlus || a.name.localeCompare(b.name));
  const rank = rows.findIndex((row) => row.isPlayer) + 1;
  els.leaderboardRank.textContent = `#${rank}`;
  els.leaderboardList.innerHTML = rows
    .map(
      (row, index) => `
        <div class="leader-row ${row.isPlayer ? "me" : ""}">
          <span>${index + 1}</span>
          <strong>${row.name}</strong>
          <em>${row.legendary} 传说</em>
          <small>${row.rarePlus} rare+</small>
        </div>
      `,
    )
    .join("");
}

async function saveStoryImage() {
  if (!state.lastOutcome) {
    showEscapeLikeResult("还没有分享图", "先抓一只猫，再来保存竖版晒卡图。");
    return false;
  }
  if (typeof window.html2canvas !== "function") {
    showEscapeLikeResult("保存组件未加载", "分享图组件还没加载完成，稍等几秒再点一次。");
    return false;
  }

  const previousText = els.copyShareButton.textContent;
  els.copyShareButton.disabled = true;
  els.copyShareButton.textContent = "正在生成分享图...";
  try {
    const canvas = await window.html2canvas(els.storyPreview, {
      scale: 3,
      backgroundColor: null,
      useCORS: true,
    });
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
    if (!blob) throw new Error("canvas export failed");
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `pawdex-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    return true;
  } catch {
    showEscapeLikeResult("保存失败", "浏览器没有成功生成图片，可以刷新后再试一次。");
    return false;
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
  els.revengeTitle.textContent = isRevengeActive ? "追猎已锁定" : "它回来了";
  els.revengeCopy.textContent = isRevengeActive
    ? "下一次梭哈必 roll 传说，失败会重新记仇。"
    : `${revenge.place} · ${compactCountdown(revenge.expiresAt)} 内可追猎`;
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
  els.riskHint.textContent = isRevengeActive ? "回归传说锁定：梭哈追猎" : mode.hint;
  updateCatchCopy(mode, isRolling, isRevengeActive);
  els.catchButton.disabled = isBusy || state.food < mode.cost;
  els.scanButton.disabled = isBusy || isRevengeActive;
  const shareLeft = Math.max(shareRewardLimit - state.shareRewardCount, 0);
  els.copyShareButton.textContent = !state.lastOutcome
    ? "先抓一只再保存"
    : shareLeft > 0
      ? `保存分享图 +2 猫粮（今日剩 ${shareLeft} 次）`
      : "保存分享图（今日回粮已用完）";
  els.copyShareButton.disabled = !state.lastOutcome;
  els.rollOverlay.classList.toggle("show", isRolling);
  els.rollOverlay.setAttribute("aria-hidden", isRolling ? "false" : "true");

  els.eventStrip.classList.toggle("active", state.legendaryHour);
  els.eventTitle.textContent = state.legendaryHour ? "传说时段开启" : "传说时段未开启";
  els.eventCopy.textContent = state.legendaryHour
    ? legendaryCountdownText()
    : "普通捕捉概率，适合先存图鉴。";
  els.fieldEvent.classList.toggle("active", state.legendaryHour);
  els.fieldEventTitle.textContent = state.legendaryHour ? "传说时段开启" : "普通时段";
  els.fieldEventCopy.textContent = legendaryCountdownText();
  els.toggleEventButton.textContent = state.legendaryHour ? "关闭" : "开启";

  els.phone.classList.toggle("catch-mode", state.tab === "catch");
  els.phone.dataset.phase = state.phase;
  $$(".mode").forEach((item) => item.classList.toggle("active", item.dataset.mode === state.mode));
  $$(".mode").forEach((item) => {
    item.disabled = isBusy || isRevengeActive;
  });
  $$(".screen").forEach((item) => {
    const active = item.dataset.screen === state.tab;
    item.classList.toggle("active", active);
    item.hidden = !active;
  });
  $$(".tab,.nav").forEach((item) => item.classList.toggle("active", item.dataset.tab === state.tab));

  renderDex();
  renderStory();
  renderOutcomeSide();
  renderLeaderboard();
  renderRevengeBanner(revenge, isRevengeActive);
}

function simulate() {
  els.simList.innerHTML = Object.keys(modes)
    .map((modeKey) => {
      const mode = modes[modeKey];
      let foodSpent = 0;
      let caught = 0;
      let escaped = 0;
      let rarePlus = 0;
      let legendary = 0;
      for (let i = 0; i < 100000; i += 1) {
        foodSpent += mode.cost;
        const baseRarity = rollRarity(modeKey);
        const isEscaped = Math.random() < escapeRate(baseRarity, modeKey);
        if (isEscaped) {
          escaped += 1;
        } else {
          const finalRarity = modeKey === "allin" ? upgradeRarity(baseRarity) : baseRarity;
          caught += 1;
          if (["rare", "epic", "legendary"].includes(finalRarity)) rarePlus += 1;
          if (finalRarity === "legendary") legendary += 1;
        }
      }
      const rarePerFood = rarePlus / foodSpent;
      const legPerFood = legendary / foodSpent;
      const escape = escaped / 100000;
      return `
        <div class="sim-row">
          <strong>${modes[modeKey].label}</strong>
          <span>每粮 Rare+ ${rarePerFood.toFixed(3)} · 每粮传说 ${legPerFood.toFixed(3)} · 跑 ${(escape * 100).toFixed(1)}%</span>
          <div class="bar"><i style="width:${Math.min(rarePerFood * 220, 100)}%"></i></div>
        </div>
      `;
    })
    .join("");
}

els.modeList.addEventListener("click", (event) => {
  if (state.phase !== "ready") return;
  if (state.revengeActive && activeRevengeCat()) return;
  const button = event.target.closest("[data-mode]");
  if (!button) return;
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
  if (state.legendaryHour) {
    stopLegendaryHour();
  } else {
    startLegendaryHour();
  }
  simulate();
  render();
});
els.fieldEvent.addEventListener("click", () => {
  if (state.phase !== "ready") return;
  if (state.legendaryHour) {
    stopLegendaryHour();
  } else {
    startLegendaryHour();
  }
  simulate();
  render();
});
els.clearDexButton.addEventListener("click", () => {
  if (state.phase !== "ready") return;
  state.cards = [];
  state.nextNo = 1;
  state.lastOutcome = null;
  state.limitedCatCaught = false;
  state.revengeCat = null;
  state.revengeActive = false;
  persistState();
  render();
});
els.copyShareButton.addEventListener("click", async () => {
  const saved = await saveStoryImage();
  if (!saved) {
    render();
    return;
  }
  applyDailyReset();
  if (state.shareRewardCount >= shareRewardLimit) {
    render();
    return;
  }
  state.food = Math.min(state.food + 2, state.maxFood + 10);
  state.shareRewardCount += 1;
  persistState();
  render();
});
els.simulateButton.addEventListener("click", simulate);
els.enterCatchButton?.addEventListener("click", () => jumpToApp("catch"));
els.enterShareButton?.addEventListener("click", () => jumpToApp("share"));
els.resultModal.addEventListener("click", (event) => {
  if (event.target === els.resultModal) closeModal();
  const action = event.target?.dataset?.action;
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
window.setInterval(() => {
  if (state.legendaryHour) render();
}, 1000);
