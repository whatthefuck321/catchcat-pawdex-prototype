const LANG = window.PAWDEX_LANG || "zh";
const I18N = {
  zh: {
    mode_gentle: "轻轻靠近",
    mode_gentle_sub: "1 猫粮",
    mode_gentle_hint: "轻轻靠近最稳妥",
    mode_bold: "大胆一点",
    mode_bold_sub: "2 猫粮 · 稀有率 ×2.5",
    mode_bold_hint: "稀有率 ×2.5，稀有+ 会回粮",
    mode_heart: "全心全意",
    mode_heart_sub: "3 猫粮 · 稀有率 ×6",
    mode_heart_hint: "稀有率 ×6，成功升一档",
    treat: "猫粮",
    local_guest: "本地游客",
    supabase_not_configured: "Supabase 未配置",
    auth_title: "登录 PAWDEX",
    auth_intro: "提审版入口已预留。填入 Supabase URL 和 anon key 后，可用邮箱 Magic Link、Apple、Google 登录。",
    auth_email_placeholder: "邮箱",
    auth_magic: "发送 Magic Link",
    auth_apple: "Apple 登录",
    auth_google: "Google 登录",
    auth_local: "继续本地游客模式",
    auth_missing: "当前缺少 Supabase 配置，先用本地游客模式测试玩法。",
    auth_email_sent: "Magic Link 已发送，去邮箱完成登录。",
    auth_email_needed: "先输入邮箱。",
    auth_failed: "登录请求失败，请检查 Supabase 配置。",
    camera_open: "打开相机",
    camera_on: "相机已开",
    camera_blocked_title: "相机没打开",
    camera_blocked_copy: "浏览器拒绝了相机权限，当前会用猫插画作为卡面。线上 HTTPS 页面可正常请求相机。",
    camera_ready: "真实相机已启用",
    camera_fallback: "未开相机，使用插画卡面",
    catching: "结算中",
    catching_meta: "正在锁定这次捕捉",
    startled: "被惊扰",
    startled_meta: "猫正在离开镜头",
    no_treats: "猫粮不足",
    need_treats: "需要 {cost} 猫粮",
    capture: "拍摄捕捉",
    chase_capture: "追猎拍摄",
    spend_treats: "消耗 {cost} 猫粮",
    spend_chase: "消耗 {cost} 猫粮追猎传说",
    no_treats_copy: "需要 {cost} 猫粮，先分享一张卡回粮。",
    roll_title: "{mode}捕捉中",
    roll_legendary: "这次可能是传说，别眨眼",
    roll_normal: "正在结算稀有度和逃跑",
    caught_title: "抓到了",
    chase_success: "追猎成功",
    reward_none: "没有返粮奖励。",
    reward_food: "奖励 +{total} 猫粮{bonus}。",
    first_legendary_bonus: "，含每日首只传说 +5",
    heart_upgrade: "全心全意升档：{from} → {to}。",
    revenge_success: "回归传说被你追到了。",
    card_result: "{mode}成功，{scene}变成了{rarity}猫卡。{revenge}{upgrade}{reward}",
    share_card: "生成分享图",
    keep_catching: "继续抓猫",
    fail_title: "它被吓到跑掉了，下次温柔点",
    fail_copy: "{mode}失败，消耗 {cost} 猫粮。本来遇到{rarity}，离开概率 {rate}%。{revenge}",
    fail_revenge: "这只传说已经进入 24 小时回归池，捕捉页会出现追猎提示。",
    share_fail: "分享这次差一点",
    try_again: "再试一次",
    modal_ok: "知道了",
    story_empty_headline: "抓到猫后生成分享图",
    story_empty_sub: "真实猫拍摄 · 套稀有卡框",
    story_empty_name: "今晚抓猫",
    story_fail_badge: "猫跑了 ESCAPED",
    story_fail_name: "差一点的{rarity}",
    story_fail_headline: "{mode}失败，猫跑了",
    story_fail_sub: "本来遇到{rarity}，离开概率 {rate}%。我不甘心。",
    story_reward_none: "没有回粮奖励。",
    story_reward_food: "回了 {total} 猫粮。",
    story_legendary_headline: "我在{place}抓到传说猫",
    story_rarity_headline: "我在{place}抓到{rarity}猫",
    story_legendary_sub: "{reward}你能抓到传说吗？",
    story_rarity_sub: "{reward}来 PAWDEX 一起抓猫。",
    dex_empty: "还没有猫卡。先去捕捉页拍一只。",
    outcome_empty_title: "还没捕捉",
    outcome_empty_copy: "先点一次拍摄，看成功晒卡和失败差一点哪一个更有传播感。",
    outcome_fail_title: "失败也能传播",
    outcome_fail_copy: "用户{mode}失败，消耗 {cost} 猫粮。这种差一点截图更像 meme。",
    outcome_success_title: "成功晒卡",
    outcome_success_copy: "{name} 是{rarity}，本次回了 {total} 猫粮，适合生成竖版 story 图。",
    save_no_story_title: "还没有分享图",
    save_no_story_copy: "先抓一只猫，再来保存竖版晒卡图。",
    save_missing_title: "保存组件未加载",
    save_missing_copy: "分享图组件还没加载完成，稍等几秒再点一次。",
    save_working: "正在生成分享图...",
    save_failed_title: "保存失败",
    save_failed_copy: "浏览器没有成功生成图片，可以刷新后再试一次。",
    save_first: "先抓一只再保存",
    save_with_refund: "保存分享图 +2 猫粮（今日剩 {left} 次）",
    save_no_refund: "保存分享图（今日回粮已用完）",
    share_opened_title: "分享已打开",
    share_opened_copy: "已打开分享窗口，今日分享回粮会按上限结算。",
    share_native_unavailable: "系统分享不可用，已改为下载图片。",
    revenge_ready: "它回来了",
    revenge_armed: "追猎已锁定",
    revenge_armed_copy: "下一次全心全意必遇到传说，失败会重新记仇。",
    revenge_ready_copy: "{place} · {time} 内可追猎",
    event_on: "传说时段开启",
    event_off: "传说时段未开启",
    event_normal: "普通捕捉概率，适合先存图鉴。",
    event_field_normal: "普通时段",
    event_bonus: "传说率 ×20，还剩 {time}",
    event_no_bonus: "传说概率未加成",
    event_open: "开启",
    event_close: "关闭",
    location_idle_title: "附近猫点未定位",
    location_idle_copy: "点击定位，刷新附近出没区域",
    location_searching_title: "正在搜索猫点",
    location_searching_copy: "读取当前位置，只保存在本机",
    location_ready_copy: "{habitat} · {claim}",
    location_denied_title: "使用演示猫点",
    location_denied_copy: "浏览器没有给定位权限，已切到涩谷演示猫点",
    location_button_m: "{distance}m",
    poi_claim_ready: "点击领取 +2 猫粮补给",
    poi_claim_done: "补给冷却中，先继续拍猫",
    poi_claim_toast: "+2 猫粮补给",
    poi_claim_locked: "这个猫点补给还在冷却",
    cutin_lock: "LOCK ON",
    cutin_rare: "稀有反应上升",
    cutin_miss: "猫影消失",
    cutin_success: "捕捉完成",
    limited_caught: "本周限定 · 已捕获",
    rank_limited: "传说数优先，Rare+ 数作为同分排序。",
    sim_result: "每粮 Rare+ {rare} · 每粮传说 {legendary} · 跑 {escape}%",
    nav_catch: "抓猫",
    nav_dex: "图鉴",
    nav_rank: "榜单",
    nav_share: "分享",
    share_text: "我在 PAWDEX 抓到一只稀有猫！你也来试试",
  },
  en: {
    mode_gentle: "Gentle",
    mode_gentle_sub: "1 treat",
    mode_gentle_hint: "Gentle is the safest approach",
    mode_bold: "Bold",
    mode_bold_sub: "2 treats · ×2.5 rare",
    mode_bold_hint: "×2.5 rare rate, rare+ refunds treats",
    mode_heart: "All Heart",
    mode_heart_sub: "3 treats · ×6 rare",
    mode_heart_hint: "×6 rare rate, success bumps one tier",
    treat: "treats",
    local_guest: "Guest",
    supabase_not_configured: "Supabase is not configured",
    auth_title: "Log in to PAWDEX",
    auth_intro: "P0 auth is wired. Add the Supabase URL and anon key to enable Magic Link, Apple, and Google login.",
    auth_email_placeholder: "Email",
    auth_magic: "Send Magic Link",
    auth_apple: "Sign in with Apple",
    auth_google: "Sign in with Google",
    auth_local: "Continue as guest",
    auth_missing: "Supabase config is missing, so this build stays in local guest mode.",
    auth_email_sent: "Magic Link sent. Check your inbox to finish login.",
    auth_email_needed: "Enter an email first.",
    auth_failed: "Login request failed. Check your Supabase config.",
    camera_open: "Open camera",
    camera_on: "Camera on",
    camera_blocked_title: "Camera is not available",
    camera_blocked_copy: "The browser blocked camera access. This session will use illustration art for cards.",
    camera_ready: "Real camera enabled",
    camera_fallback: "Camera off, using illustration art",
    catching: "Resolving",
    catching_meta: "Locking this capture",
    startled: "Startled",
    startled_meta: "The cat is leaving the frame",
    no_treats: "Not enough treats",
    need_treats: "Needs {cost} treats",
    capture: "Capture",
    chase_capture: "Chase capture",
    spend_treats: "Spend {cost} treats",
    spend_chase: "Spend {cost} treats to chase a legendary",
    no_treats_copy: "Needs {cost} treats. Share a card first to recover treats.",
    roll_title: "{mode} capture",
    roll_legendary: "This could be legendary. Do not blink.",
    roll_normal: "Resolving rarity and escape chance",
    caught_title: "Caught",
    chase_success: "Chase complete",
    reward_none: "No treat refund.",
    reward_food: "Reward +{total} treats{bonus}.",
    first_legendary_bonus: ", including first legendary of the day +5",
    heart_upgrade: "All Heart upgrade: {from} -> {to}.",
    revenge_success: "You caught the returning legendary.",
    card_result: "{mode} succeeded. {scene} became a {rarity} cat card. {revenge}{upgrade}{reward}",
    share_card: "Create share card",
    keep_catching: "Keep catching",
    fail_title: "It got spooked and ran off",
    fail_copy: "{mode} failed, spending {cost} treats. You met a {rarity}, escape chance {rate}%. {revenge}",
    fail_revenge: "This legendary entered the 24h return pool. A chase prompt will appear on the capture page.",
    share_fail: "Share this close call",
    try_again: "Try again",
    modal_ok: "Got it",
    story_empty_headline: "Catch a cat to create a share card",
    story_empty_sub: "Real cat photo · rarity card frame",
    story_empty_name: "Tonight's catch",
    story_fail_badge: "ESCAPED",
    story_fail_name: "Almost {rarity}",
    story_fail_headline: "{mode} failed, the cat ran off",
    story_fail_sub: "You met a {rarity}, escape chance {rate}%. I am not giving up.",
    story_reward_none: "No treat refund.",
    story_reward_food: "Refunded {total} treats.",
    story_legendary_headline: "I caught a legendary cat in {place}",
    story_rarity_headline: "I caught a {rarity} cat in {place}",
    story_legendary_sub: "{reward}Can you catch a legendary?",
    story_rarity_sub: "{reward}Come catch cats on PAWDEX.",
    dex_empty: "No cat cards yet. Capture one first.",
    outcome_empty_title: "No capture yet",
    outcome_empty_copy: "Try one capture and compare the success card with the close-call share.",
    outcome_fail_title: "Close calls can spread too",
    outcome_fail_copy: "{mode} failed, spending {cost} treats. This close-call screenshot can work as a meme.",
    outcome_success_title: "Shareable card",
    outcome_success_copy: "{name} is {rarity}. This capture refunded {total} treats and is ready for a vertical story card.",
    save_no_story_title: "No share card yet",
    save_no_story_copy: "Catch a cat first, then save the vertical share card.",
    save_missing_title: "Exporter is still loading",
    save_missing_copy: "The share-card exporter has not loaded yet. Wait a few seconds and tap again.",
    save_working: "Generating share card...",
    save_failed_title: "Export failed",
    save_failed_copy: "The browser could not generate the image. Refresh and try again.",
    save_first: "Catch one first",
    save_with_refund: "Save share card +2 treats ({left} left today)",
    save_no_refund: "Save share card (today's refund cap reached)",
    share_opened_title: "Share opened",
    share_opened_copy: "The share window is open. Treat refunds follow the daily cap.",
    share_native_unavailable: "Native share is unavailable, so the image was downloaded instead.",
    revenge_ready: "It came back",
    revenge_armed: "Chase locked",
    revenge_armed_copy: "The next All Heart attempt will meet a legendary. A miss will mark it again.",
    revenge_ready_copy: "{place} · chase available for {time}",
    event_on: "Legendary hour is live",
    event_off: "Legendary hour is off",
    event_normal: "Normal capture odds. Good time to build the dex.",
    event_field_normal: "Normal hour",
    event_bonus: "Legendary rate ×20, {time} left",
    event_no_bonus: "No legendary bonus",
    event_open: "Open",
    event_close: "Close",
    location_idle_title: "Nearby spot not located",
    location_idle_copy: "Tap to locate nearby cat activity",
    location_searching_title: "Searching nearby spot",
    location_searching_copy: "Reading location locally on this device",
    location_ready_copy: "{habitat} · {claim}",
    location_denied_title: "Demo spot active",
    location_denied_copy: "Location was blocked, using Shibuya demo area",
    location_button_m: "{distance}m",
    poi_claim_ready: "Tap to claim +2 treats",
    poi_claim_done: "Supply cooldown active. Keep catching.",
    poi_claim_toast: "+2 spot supply",
    poi_claim_locked: "This spot supply is cooling down",
    cutin_lock: "LOCK ON",
    cutin_rare: "Rare signal rising",
    cutin_miss: "Signal lost",
    cutin_success: "Capture complete",
    limited_caught: "Weekly limited · caught",
    rank_limited: "Legendary count first, Rare+ count breaks ties.",
    sim_result: "Rare+ per treat {rare} · Legendary per treat {legendary} · Escape {escape}%",
    nav_catch: "Catch",
    nav_dex: "Dex",
    nav_rank: "Rank",
    nav_share: "Share",
    share_text: "I just caught a rare cat on PAWDEX! Come try",
  },
};

function t(key, params = {}) {
  const source = I18N[LANG]?.[key] || I18N.zh[key] || key;
  return source.replace(/\{(\w+)\}/g, (_, name) => params[name] ?? "");
}

const modes = {
  standard: {
    label: t("mode_gentle"),
    sub: t("mode_gentle_sub"),
    cost: 1,
    multiplier: 1,
    escapeBase: 0,
    floor: false,
    hint: t("mode_gentle_hint"),
  },
  risky: {
    label: t("mode_bold"),
    sub: t("mode_bold_sub"),
    cost: 2,
    multiplier: 2.5,
    escapeBase: 0.12,
    floor: false,
    hint: t("mode_bold_hint"),
  },
  allin: {
    label: t("mode_heart"),
    sub: t("mode_heart_sub"),
    cost: 3,
    multiplier: 6,
    escapeBase: 0.24,
    floor: true,
    hint: t("mode_heart_hint"),
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
  {
    name: "巷口橘猫",
    poiTitle: "便利店补给点",
    place: "涩谷后巷猫点",
    habitat: "夜间补给点",
    benefit: "橘猫高频 · 点击猫点领取补给",
    art: "common",
    bg1: "#243348",
    bg2: "#11141d",
  },
  {
    name: "屋顶黑猫",
    poiTitle: "屋顶稀有点",
    place: "首尔弘大猫点",
    habitat: "高处风口",
    benefit: "黑猫高频 · 史诗反应较强",
    art: "epic",
    bg1: "#2b3148",
    bg2: "#0d1018",
  },
  {
    name: "长椅白猫",
    poiTitle: "公园栖息点",
    place: "台北大安猫点",
    habitat: "绿地长椅",
    benefit: "白猫高频 · 稀有反应稳定",
    art: "rare",
    bg1: "#21443a",
    bg2: "#101915",
  },
  {
    name: "绿瞳猫",
    poiTitle: "自动贩卖机刷新点",
    place: "大阪巷口猫点",
    habitat: "夜间灯源",
    benefit: "绿瞳猫高频 · 优秀卡更常见",
    art: "uncommon",
    bg1: "#30313e",
    bg2: "#11131a",
  },
];
const locationSpots = [
  {
    title: "电车口刷新点",
    habitat: "通勤街角",
    benefit: "银白猫高频 · 稀有反应较强",
    name: "银白猫",
    place: "附近车站猫点",
    art: "rare",
    bg1: "#24375b",
    bg2: "#0d1222",
  },
  {
    title: "便利店补给点",
    habitat: "夜间补给点",
    benefit: "橘猫高频 · 点击猫点领取猫粮",
    name: "霓虹橘猫",
    place: "附近便利店猫点",
    art: "common",
    bg1: "#3a2d42",
    bg2: "#121019",
  },
  {
    title: "公园栖息点",
    habitat: "绿地长椅",
    benefit: "白猫高频 · 适合稳定补图鉴",
    name: "树影白猫",
    place: "附近公园猫点",
    art: "uncommon",
    bg1: "#1d4b3d",
    bg2: "#0d1713",
  },
  {
    title: "屋顶稀有点",
    habitat: "高处风口",
    benefit: "黑猫高频 · 史诗反应较强",
    name: "天台黑猫",
    place: "附近屋顶猫点",
    art: "epic",
    bg1: "#372b58",
    bg2: "#0d0d18",
  },
];
const weeklyLimitedCat = {
  name: "本周限定·金瞳夜巡",
  rarity: "legendary",
  label: "限定·已结束",
};
const leaderboardRivals = [
  { name: "首尔夜猫", legendary: 7, rarePlus: 29 },
  { name: "涩谷金手", legendary: 5, rarePlus: 24 },
  { name: "大安金瞳", legendary: 3, rarePlus: 18 },
  { name: "大阪巷口", legendary: 2, rarePlus: 15 },
];

const names = ["麻薯", "豆腐", "奶盖", "团子", "玄米", "乌冬", "小虎", "年糕"];
const titles = ["便利店守护者", "屋顶明星", "夜行冠军", "金瞳猎手", "传说候选猫", "巷口幻影"];
const STORAGE_KEY = "pawdex-html-v7";
const shareRewardLimit = 3;
const SPOT_REWARD_COOLDOWN_MS = 5 * 60 * 1000;
const SHARE_URL =
  window.PAWDEX_SHARE_URL || "https://whatthefuck321.github.io/catchcat-pawdex-prototype/";
const SUPABASE_CONFIG = window.PAWDEX_SUPABASE || { url: "", anonKey: "" };
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
  cameraEnabled: false,
  authUser: null,
  locationStatus: "idle",
  locationSpot: null,
  locationDistance: null,
  spotRewardAt: null,
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const els = {
  phone: $(".phone"),
  appPageLabel: $("#appPageLabel"),
  appPageTitle: $("#appPageTitle"),
  authButton: $("#authButton"),
  fieldAuthButton: $("#fieldAuthButton"),
  canvas: $("#catCanvas"),
  cameraVideo: $("#cameraVideo"),
  cameraToggleButton: $("#cameraToggleButton"),
  fieldCatArt: $("#fieldCatArt"),
  foodLabel: $("#foodLabel"),
  fieldFoodLabel: $("#fieldFoodLabel"),
  foodText: $("#foodText"),
  fieldFoodText: $("#fieldFoodText"),
  foodMeter: $("#foodMeter"),
  fieldFoodMeter: $("#fieldFoodMeter"),
  economyToast: $("#economyToast"),
  eventStrip: $("#eventStrip"),
  eventTitle: $("#eventTitle"),
  eventCopy: $("#eventCopy"),
  fieldEvent: $("#fieldEvent"),
  fieldEventTitle: $("#fieldEventTitle"),
  fieldEventCopy: $("#fieldEventCopy"),
  locationButton: $("#locationButton"),
  locationTitle: $("#locationTitle"),
  locationCopy: $("#locationCopy"),
  locationDistance: $("#locationDistance"),
  rollOverlay: $("#rollOverlay"),
  rollTitle: $("#rollTitle"),
  rollCopy: $("#rollCopy"),
  rarityReel: $("#rarityReel"),
  captureFlash: $("#captureFlash"),
  particleField: $("#particleField"),
  animeCutIn: $("#animeCutIn"),
  cutInTitle: $("#cutInTitle"),
  cutInCopy: $("#cutInCopy"),
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
  catIntelBenefit: $("#catIntelBenefit"),
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
};

const ctx = els.canvas.getContext("2d");
let settleTimer = null;
let cameraStream = null;
let supabaseClient = null;

function supabaseConfigured() {
  return Boolean(SUPABASE_CONFIG.url && SUPABASE_CONFIG.anonKey);
}

function initSupabaseClient() {
  if (!supabaseConfigured() || !window.supabase?.createClient) return;
  supabaseClient = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
  supabaseClient.auth.getUser().then(({ data }) => {
    state.authUser = data?.user ? { email: data.user.email || data.user.id } : null;
    render();
  });
  supabaseClient.auth.onAuthStateChange((_event, session) => {
    state.authUser = session?.user ? { email: session.user.email || session.user.id } : null;
    render();
  });
}

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
    state.spotRewardAt = Number.isFinite(saved.spotRewardAt) ? saved.spotRewardAt : null;
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function applyDailyReset() {
  const today = currentDateKey();
  let changed = false;
  if (state.lastResetDate !== today) {
    state.food = Math.max(state.food, state.maxFood);
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
    spotRewardAt: state.spotRewardAt,
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
  if (!state.legendaryHour || !state.legendaryHourEndsAt) return t("event_no_bonus");
  const remaining = Math.max(0, new Date(state.legendaryHourEndsAt).getTime() - Date.now());
  const minutes = Math.floor(remaining / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);
  const hours = Math.floor(minutes / 60);
  const mm = String(minutes % 60).padStart(2, "0");
  const ss = String(seconds).padStart(2, "0");
  return t("event_bonus", { time: `${hours}:${mm}:${ss}` });
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

function sceneFromSpot(spot) {
  return {
    name: spot.name,
    poiTitle: spot.title,
    place: spot.place,
    habitat: spot.habitat,
    benefit: spot.benefit,
    art: spot.art,
    bg1: spot.bg1,
    bg2: spot.bg2,
  };
}

function pickLocationSpot(lat = 35.659, lng = 139.7) {
  const seed = Math.abs(Math.round(lat * 1000) + Math.round(lng * 1000));
  const spot = locationSpots[seed % locationSpots.length];
  return {
    ...spot,
    distance: 80 + (seed % 420),
    lat,
    lng,
  };
}

function applyLocationSpot(spot, status = "ready") {
  state.locationStatus = status;
  state.locationSpot = spot;
  state.locationDistance = spot.distance;
  state.scene = sceneFromSpot(spot);
  drawCamera();
  render();
}

function canClaimSpotReward() {
  return !state.spotRewardAt || Date.now() - state.spotRewardAt >= SPOT_REWARD_COOLDOWN_MS;
}

function claimSpotReward() {
  if (state.phase !== "ready") return;
  if (!state.locationSpot) {
    requestLocationSpot();
    return;
  }
  if (!canClaimSpotReward()) {
    showEconomyToast(t("poi_claim_locked"), "spend");
    render();
    return;
  }
  state.food = Math.min(state.food + 2, state.maxFood + 10);
  state.spotRewardAt = Date.now();
  showEconomyToast(t("poi_claim_toast"), "gain");
  persistState();
  render();
}

async function requestLocationSpot() {
  if (state.phase !== "ready") return;
  state.locationStatus = "searching";
  render();
  if (!navigator.geolocation?.getCurrentPosition) {
    applyLocationSpot(pickLocationSpot(), "fallback");
    return;
  }
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      applyLocationSpot(pickLocationSpot(latitude, longitude), "ready");
    },
    () => {
      applyLocationSpot(pickLocationSpot(), "fallback");
    },
    { enableHighAccuracy: false, timeout: 4200, maximumAge: 15 * 60 * 1000 },
  );
}

function locationScenePool() {
  if (!state.locationSpot) return scenes;
  return [sceneFromSpot(state.locationSpot), ...scenes];
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

async function startCamera() {
  if (cameraStream) return true;
  if (!navigator.mediaDevices?.getUserMedia) {
    showEscapeLikeResult(t("camera_blocked_title"), t("camera_blocked_copy"));
    return false;
  }
  try {
    cameraStream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: { ideal: "environment" },
        width: { ideal: 1280 },
        height: { ideal: 1706 },
      },
      audio: false,
    });
    els.cameraVideo.srcObject = cameraStream;
    await els.cameraVideo.play();
    state.cameraEnabled = true;
    render();
    return true;
  } catch {
    cameraStream = null;
    state.cameraEnabled = false;
    render();
    showEscapeLikeResult(t("camera_blocked_title"), t("camera_blocked_copy"));
    return false;
  }
}

function capturePhotoFrame() {
  const video = els.cameraVideo;
  if (!state.cameraEnabled || !video.videoWidth || !video.videoHeight) return null;

  const targetWidth = 900;
  const targetHeight = 1200;
  const targetRatio = targetWidth / targetHeight;
  const sourceRatio = video.videoWidth / video.videoHeight;
  let sx = 0;
  let sy = 0;
  let sw = video.videoWidth;
  let sh = video.videoHeight;

  if (sourceRatio > targetRatio) {
    sw = video.videoHeight * targetRatio;
    sx = (video.videoWidth - sw) / 2;
  } else {
    sh = video.videoWidth / targetRatio;
    sy = (video.videoHeight - sh) / 2;
  }

  const photoCanvas = document.createElement("canvas");
  photoCanvas.width = targetWidth;
  photoCanvas.height = targetHeight;
  const photoCtx = photoCanvas.getContext("2d");
  photoCtx.drawImage(video, sx, sy, sw, sh, 0, 0, targetWidth, targetHeight);
  return photoCanvas.toDataURL("image/jpeg", 0.82);
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

function updateCatchCopy(mode, isRolling, isRevengeActive) {
  if (isRolling) {
    els.catchLabel.textContent = t("catching");
    els.catchMeta.textContent = t("catching_meta");
    return;
  }
  if (state.phase === "nearMiss") {
    els.catchLabel.textContent = t("startled");
    els.catchMeta.textContent = t("startled_meta");
    return;
  }
  if (state.food < mode.cost) {
    els.catchLabel.textContent = t("no_treats");
    els.catchMeta.textContent = t("need_treats", { cost: mode.cost });
    return;
  }
  els.catchLabel.textContent = isRevengeActive ? t("chase_capture") : t("capture");
  els.catchMeta.textContent = isRevengeActive
    ? t("spend_chase", { cost: mode.cost })
    : t("spend_treats", { cost: mode.cost });
}

function scanNextCat() {
  if (state.phase !== "ready") return;
  if (state.revengeActive && activeRevengeCat()) return;
  const pool = locationScenePool();
  state.scene = pool[Math.floor(Math.random() * pool.length)];
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
    showEscapeLikeResult(t("no_treats"), t("no_treats_copy", { cost: mode.cost }));
    return;
  }

  state.food -= mode.cost;
  showEconomyToast(`-${mode.cost} ${t("treat")}`, "spend");
  const photo = capturePhotoFrame();
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
    settleCatch({ escaped, baseRarity, rate, mode, modeKey, scene, revengeAttempt, photo });
  }, 950);
}

function settleCatch(result) {
  const { escaped, baseRarity, rate, mode, modeKey, scene, revengeAttempt, photo } = result;
  if (escaped) {
    state.lastOutcome = {
      type: "escape",
      mode: modeKey,
      rarity: baseRarity,
      cost: mode.cost,
      rate,
      scene,
      photo,
      revengeAttempt,
    };
    if (baseRarity === "legendary") {
      createRevengeCat(state.lastOutcome);
    }
    showCutIn(t("cutin_miss"), t("story_fail_name", { rarity: rarities[baseRarity].label }), "miss");
    emitFieldParticles(baseRarity, "fail");
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
    const finalRarity = modes[modeKey].floor ? upgradeRarity(baseRarity) : baseRarity;
    const reward = rewardForCapture(finalRarity);
    const card = {
      id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
      no: state.nextNo,
      name: makeName(finalRarity),
      rarity: finalRarity,
      baseRarity,
      upgraded: finalRarity !== baseRarity,
      scene,
      photo,
      mode: modeKey,
      reward,
      revengeAttempt,
      capturedAt: new Date().toISOString(),
    };
    state.nextNo += 1;
    state.cards.unshift(card);
    state.food = Math.min(state.food + reward.total, state.maxFood + 10);
    if (reward.total > 0) {
      showEconomyToast(`+${reward.total} ${t("treat")}`, "gain");
    }
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
    showCutIn(t("cutin_success"), `${rarities[finalRarity].label} CARD`, "success");
    emitFieldParticles(finalRarity, "success");
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
  setRarityVars(els.rollOverlay, rarity);
  renderRarityReel(rarity);
  showCutIn(t("cutin_lock"), rarity === "legendary" ? t("roll_legendary") : t("cutin_rare"), "lock");
  els.rollTitle.textContent = t("roll_title", { mode: mode.label });
  els.rollCopy.textContent =
    rarity === "legendary" ? t("roll_legendary") : t("roll_normal");
  els.captureFlash.classList.remove("burst");
  void els.captureFlash.offsetWidth;
  els.captureFlash.classList.add("burst");
}

function showCardResult(card) {
  const cfg = rarities[card.rarity];
  const headline = card.revengeAttempt ? t("chase_success") : t("caught_title");
  const rewardCopy = card.reward?.total
    ? t("reward_food", {
        total: card.reward.total,
        bonus: card.reward.firstLegendaryBonus ? t("first_legendary_bonus") : "",
      })
    : t("reward_none");
  const upgradeCopy = card.upgraded
    ? t("heart_upgrade", { from: rarities[card.baseRarity].label, to: cfg.label })
    : "";
  const revengeCopy = card.revengeAttempt ? t("revenge_success") : "";
  els.modalCard.className = `modal-card reveal-card success rarity-${card.rarity}`;
  setRarityVars(els.modalCard, card.rarity);
  els.modalCard.innerHTML = `
    ${resultBurstMarkup(card.rarity, "success")}
    <div class="result-rarity-label">${cfg.label} CARD</div>
    ${renderCatCard(card)}
    <h2>${headline}</h2>
    <p>${t("card_result", {
      mode: modes[card.mode].label,
      scene: card.scene.name,
      rarity: cfg.label,
      revenge: revengeCopy,
      upgrade: upgradeCopy,
      reward: rewardCopy,
    })}</p>
    <div class="modal-actions">
      <button class="main" data-action="share">${t("share_card")}</button>
      <button class="plain" data-action="close">${t("keep_catching")}</button>
    </div>
  `;
  openModal();
}

function showEscapeResult(outcome) {
  const cfg = rarities[outcome.rarity];
  const revengeCopy =
    outcome.rarity === "legendary"
      ? t("fail_revenge")
      : "";
  els.modalCard.className = `modal-card reveal-card failed rarity-${outcome.rarity}`;
  setRarityVars(els.modalCard, outcome.rarity);
  const escapedCard = escapeShareCard(outcome);
  els.modalCard.innerHTML = `
    ${resultBurstMarkup(outcome.rarity, "fail")}
    <div class="result-rarity-label miss">${cfg.label} CLOSE CALL</div>
    <div class="escape-visual ${outcome.photo ? "has-photo" : ""}">
      <img src="${cardArtSource(escapedCard)}" alt="" />
      <span>MISS</span>
    </div>
    <h2>${t("fail_title")}</h2>
    <p>${t("fail_copy", {
      mode: modes[outcome.mode].label,
      cost: outcome.cost,
      rarity: cfg.label,
      rate: (outcome.rate * 100).toFixed(0),
      revenge: revengeCopy,
    })}</p>
    <div class="modal-actions">
      <button class="main" data-action="share">${t("share_fail")}</button>
      <button class="plain" data-action="close">${t("try_again")}</button>
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
      <button class="plain" data-action="close">${t("modal_ok")}</button>
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

function openAuthPanel() {
  const disabledAttr = supabaseClient ? "" : "disabled";
  els.modalCard.className = "modal-card auth-card";
  els.modalCard.innerHTML = `
    <h2>${t("auth_title")}</h2>
    <p>${supabaseClient ? t("auth_intro") : t("auth_missing")}</p>
    <label class="auth-field">
      <span>${t("auth_email_placeholder")}</span>
      <input id="authEmailInput" type="email" inputmode="email" autocomplete="email" placeholder="cat@example.com" ${disabledAttr} />
    </label>
    <div class="modal-actions">
      <button class="main" data-auth="email" ${disabledAttr}>${t("auth_magic")}</button>
      <button class="plain" data-auth="apple" ${disabledAttr}>${t("auth_apple")}</button>
      <button class="plain" data-auth="google" ${disabledAttr}>${t("auth_google")}</button>
      <button class="plain" data-auth="local">${t("auth_local")}</button>
    </div>
  `;
  openModal();
}

async function handleAuthAction(action) {
  if (action === "local") {
    closeModal();
    return;
  }
  if (!supabaseClient) {
    showEscapeLikeResult(t("supabase_not_configured"), t("auth_missing"));
    return;
  }
  try {
    if (action === "email") {
      const email = $("#authEmailInput")?.value.trim();
      if (!email) {
        showEscapeLikeResult(t("auth_title"), t("auth_email_needed"));
        return;
      }
      const { error } = await supabaseClient.auth.signInWithOtp({ email });
      if (error) throw error;
      showEscapeLikeResult(t("auth_title"), t("auth_email_sent"));
      return;
    }
    if (action === "apple" || action === "google") {
      const { error } = await supabaseClient.auth.signInWithOAuth({ provider: action });
      if (error) throw error;
    }
  } catch {
    showEscapeLikeResult(t("auth_title"), t("auth_failed"));
  }
}

function catAsset(rarity) {
  return rarities[rarity]?.art || rarities.common.art;
}

function cardArtSource(card) {
  return card?.photo || catAsset(card?.rarity || "common");
}

function rarityStyle(rarity) {
  const cfg = rarities[rarity];
  return `--rarity-a:${cfg.a};--rarity-b:${cfg.b};--rarity-glow:${cfg.glow}`;
}

function setRarityVars(element, rarity) {
  const cfg = rarities[rarity] || rarities.common;
  element.style.setProperty("--rarity-a", cfg.a);
  element.style.setProperty("--rarity-b", cfg.b);
  element.style.setProperty("--rarity-glow", cfg.glow);
}

function foodRatio() {
  return `${Math.max(0, Math.min(state.food / state.maxFood, 1)) * 100}%`;
}

function showEconomyToast(message, tone = "gain") {
  if (!els.economyToast) return;
  els.economyToast.textContent = message;
  els.economyToast.className = `economy-toast show ${tone}`;
  window.clearTimeout(showEconomyToast.timer);
  showEconomyToast.timer = window.setTimeout(() => {
    els.economyToast.className = "economy-toast";
  }, 1280);
}

function renderRarityReel(finalRarity) {
  const sequence = [
    "common",
    "uncommon",
    "rare",
    "epic",
    "legendary",
    "uncommon",
    "rare",
    finalRarity,
  ];
  els.rarityReel.innerHTML = sequence
    .map((rarity) => {
      const cfg = rarities[rarity];
      return `<b style="--a:${cfg.a};--b:${cfg.b};--glow:${cfg.glow}">${cfg.label}</b>`;
    })
    .join("");
}

function emitFieldParticles(rarity, tone = "success") {
  const cfg = rarities[rarity] || rarities.common;
  const count = tone === "fail" ? 12 : rarity === "legendary" ? 34 : 20;
  els.particleField.innerHTML = "";
  els.particleField.style.setProperty("--particle-a", cfg.a);
  els.particleField.style.setProperty("--particle-b", cfg.b);
  for (let i = 0; i < count; i += 1) {
    const dot = document.createElement("i");
    dot.style.setProperty("--x", `${Math.round((Math.random() - 0.5) * 280)}px`);
    dot.style.setProperty("--y", `${Math.round(-80 - Math.random() * 240)}px`);
    dot.style.setProperty("--d", `${Math.random() * 0.28}s`);
    dot.style.setProperty("--s", `${0.72 + Math.random() * 1.1}`);
    dot.className = tone;
    els.particleField.appendChild(dot);
  }
  window.clearTimeout(emitFieldParticles.timer);
  emitFieldParticles.timer = window.setTimeout(() => {
    els.particleField.innerHTML = "";
  }, 1500);
}

function showCutIn(title, copy, tone = "lock") {
  els.cutInTitle.textContent = title;
  els.cutInCopy.textContent = copy;
  els.animeCutIn.className = `anime-cut-in show ${tone}`;
  window.clearTimeout(showCutIn.timer);
  showCutIn.timer = window.setTimeout(() => {
    els.animeCutIn.className = "anime-cut-in";
  }, 980);
}

function resultBurstMarkup(rarity, tone = "success") {
  const count = tone === "fail" ? 10 : rarity === "legendary" ? 28 : 16;
  return `
    <div class="result-burst ${tone}" aria-hidden="true">
      ${Array.from({ length: count }, (_, index) => `<i style="--i:${index}"></i>`).join("")}
    </div>
  `;
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
    <article class="cat-card ${card.photo ? "has-photo" : ""}" data-rarity="${card.rarity}" style="${rarityStyle(card.rarity)}">
      <div class="cat-card-inner">
        <div class="card-topline">
          <span class="rarity-badge">${cfg.label}</span>
          <span class="card-no">${no}</span>
        </div>
        <div class="card-art">
          <img class="cat-art-img" src="${cardArtSource(card)}" alt="" />
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
    name: t("story_fail_name", { rarity: rarities[outcome.rarity].label }),
    rarity: outcome.rarity,
    no: null,
    scene: outcome.scene,
    photo: outcome.photo,
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
    els.storyCardArt.classList.remove("is-photo");
    els.storyCardName.textContent = t("story_empty_name");
    els.storyCardNo.textContent = "#000";
    els.storyCardScene.textContent = "涩谷后巷";
    els.storyCardDate.textContent = shareDateLabel();
    els.storyHeadline.textContent = t("story_empty_headline");
    els.storySub.textContent = t("story_empty_sub");
    return;
  }

  if (outcome.type === "escape") {
    const card = escapeShareCard(outcome);
    const cfg = rarities[card.rarity];
    setStoryTheme(card.rarity, true);
    els.storyRarityBadge.textContent = t("story_fail_badge");
    els.storyCardArt.src = cardArtSource(card);
    els.storyCardArt.classList.toggle("is-photo", Boolean(card.photo));
    els.storyCardName.textContent = card.name;
    els.storyCardNo.textContent = "MISS";
    els.storyCardScene.textContent = card.scene?.place || "涩谷后巷";
    els.storyCardDate.textContent = shareDateLabel();
    els.storyHeadline.textContent = t("story_fail_headline", { mode: modes[outcome.mode].label });
    els.storySub.textContent = t("story_fail_sub", {
      rarity: cfg.label,
      rate: (outcome.rate * 100).toFixed(0),
    });
    return;
  }

  const card = outcome.card;
  const cfg = rarities[card.rarity];
  const rewardText = card.reward?.total
    ? t("story_reward_food", { total: card.reward.total })
    : t("story_reward_none");
  setStoryTheme(card.rarity, false);
  els.storyRarityBadge.textContent = `${cfg.label} ${card.rarity.toUpperCase()}`;
  els.storyCardArt.src = cardArtSource(card);
  els.storyCardArt.classList.toggle("is-photo", Boolean(card.photo));
  els.storyCardName.textContent = card.name;
  els.storyCardNo.textContent = `#${String(card.no).padStart(3, "0")}`;
  els.storyCardScene.textContent = card.scene?.place || "涩谷后巷";
  els.storyCardDate.textContent = shareDateLabel(card.capturedAt ? new Date(card.capturedAt) : new Date());
  els.storyHeadline.textContent =
    card.rarity === "legendary"
      ? t("story_legendary_headline", { place: card.scene.place })
      : t("story_rarity_headline", { place: card.scene.place, rarity: cfg.label });
  els.storySub.textContent =
    card.rarity === "legendary"
      ? t("story_legendary_sub", { reward: rewardText })
      : t("story_rarity_sub", { reward: rewardText });
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
        { meta: t("limited_caught") },
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
    els.dexGrid.innerHTML = `${limitedSlot}<div class="empty-dex">${t("dex_empty")}</div>`;
    return;
  }
  els.dexGrid.innerHTML = `${limitedSlot}${state.cards.map(renderCard).join("")}`;
}

function renderOutcomeSide() {
  const outcome = state.lastOutcome;
  if (!outcome) {
    els.lastOutcomeTitle.textContent = t("outcome_empty_title");
    els.lastOutcomeCopy.textContent = t("outcome_empty_copy");
    return;
  }
  if (outcome.type === "escape") {
    els.lastOutcomeTitle.textContent = t("outcome_fail_title");
    els.lastOutcomeCopy.textContent = t("outcome_fail_copy", {
      mode: modes[outcome.mode].label,
      cost: outcome.cost,
    });
    return;
  }
  els.lastOutcomeTitle.textContent = t("outcome_success_title");
  els.lastOutcomeCopy.textContent = t("outcome_success_copy", {
    name: outcome.card.name,
    rarity: rarities[outcome.card.rarity].label,
    total: outcome.card.reward?.total || 0,
  });
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

async function renderStoryBlob() {
  if (typeof window.html2canvas !== "function") {
    throw new Error("html2canvas missing");
  }
  const canvas = await window.html2canvas(els.storyPreview, {
    scale: 3,
    backgroundColor: null,
    useCORS: true,
  });
  const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
  if (!blob) throw new Error("canvas export failed");
  return blob;
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function grantShareRefund() {
  applyDailyReset();
  if (state.shareRewardCount >= shareRewardLimit) return false;
  state.food = Math.min(state.food + 2, state.maxFood + 10);
  state.shareRewardCount += 1;
  persistState();
  showEconomyToast(`+2 ${t("treat")}`, "gain");
  return true;
}

async function saveStoryImage() {
  if (!state.lastOutcome) {
    showEscapeLikeResult(t("save_no_story_title"), t("save_no_story_copy"));
    return false;
  }
  if (typeof window.html2canvas !== "function") {
    showEscapeLikeResult(t("save_missing_title"), t("save_missing_copy"));
    return false;
  }

  const previousText = els.copyShareButton.textContent;
  els.copyShareButton.disabled = true;
  els.copyShareButton.textContent = t("save_working");
  try {
    const blob = await renderStoryBlob();
    downloadBlob(blob, `pawdex-${Date.now()}.png`);
    return true;
  } catch {
    showEscapeLikeResult(t("save_failed_title"), t("save_failed_copy"));
    return false;
  } finally {
    els.copyShareButton.disabled = false;
    els.copyShareButton.textContent = previousText;
  }
}

async function nativeShare() {
  const blob = await renderStoryBlob();
  const file = new File([blob], "pawdex.png", { type: "image/png" });
  if (navigator.canShare?.({ files: [file] }) && navigator.share) {
    await navigator.share({ files: [file], text: t("share_text"), url: SHARE_URL });
  } else {
    downloadBlob(blob, `pawdex-${Date.now()}.png`);
    showEscapeLikeResult(t("share_opened_title"), t("share_native_unavailable"));
  }
}

async function shareToPlatform(platform) {
  if (!state.lastOutcome) {
    showEscapeLikeResult(t("save_no_story_title"), t("save_no_story_copy"));
    return;
  }
  const encodedUrl = encodeURIComponent(SHARE_URL);
  const encodedText = encodeURIComponent(t("share_text"));
  let link = "";
  if (platform === "x") {
    link = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
  } else if (platform === "fb") {
    link = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  } else if (platform === "threads") {
    link = `https://www.threads.net/intent/post?text=${encodedText}%20${encodedUrl}`;
  }

  try {
    if (link) {
      window.open(link, "_blank", "noopener");
    } else {
      await nativeShare();
    }
    grantShareRefund();
    render();
  } catch {
    showEscapeLikeResult(t("save_failed_title"), t("save_failed_copy"));
  }
}

function renderRevengeBanner(revenge, isRevengeActive) {
  const visible = Boolean(revenge && state.tab === "catch" && state.phase === "ready");
  els.revengeBanner.hidden = !visible;
  els.revengeBanner.classList.toggle("armed", Boolean(isRevengeActive));
  if (!revenge) return;
  els.revengeTitle.textContent = isRevengeActive ? t("revenge_armed") : t("revenge_ready");
  els.revengeCopy.textContent = isRevengeActive
    ? t("revenge_armed_copy")
    : t("revenge_ready_copy", { place: revenge.place, time: compactCountdown(revenge.expiresAt) });
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
  const authText = state.authUser?.email || t("local_guest");
  els.authButton.textContent = authText;
  els.fieldAuthButton.textContent = authText;
  els.foodLabel.textContent = t("treat");
  els.fieldFoodLabel.textContent = t("treat");
  els.foodText.textContent = `${state.food}/${state.maxFood}`;
  els.fieldFoodText.textContent = `${state.food}/${state.maxFood}`;
  els.foodMeter.style.width = foodRatio();
  els.fieldFoodMeter.style.width = foodRatio();
  els.phone.classList.toggle("low-food", state.food <= 3);
  els.catIntelName.textContent = state.scene.poiTitle || state.scene.name;
  els.catIntelPlace.textContent = state.scene.place;
  if (els.catIntelBenefit) {
    els.catIntelBenefit.textContent = state.scene.benefit || `${state.scene.name}出没`;
  }
  els.riskHint.textContent = isRevengeActive ? "回归传说锁定：全心全意追猎" : mode.hint;
  els.cameraToggleButton.textContent = state.cameraEnabled ? t("camera_on") : t("camera_open");
  updateCatchCopy(mode, isRolling, isRevengeActive);
  els.catchButton.disabled = isBusy || state.food < mode.cost;
  els.scanButton.disabled = isBusy || isRevengeActive;
  const shareLeft = Math.max(shareRewardLimit - state.shareRewardCount, 0);
  els.copyShareButton.textContent = !state.lastOutcome
    ? t("save_first")
    : shareLeft > 0
      ? t("save_with_refund", { left: shareLeft })
      : t("save_no_refund");
  els.copyShareButton.disabled = !state.lastOutcome;
  els.rollOverlay.classList.toggle("show", isRolling);
  els.rollOverlay.setAttribute("aria-hidden", isRolling ? "false" : "true");

  els.eventStrip.classList.toggle("active", state.legendaryHour);
  els.eventTitle.textContent = state.legendaryHour ? t("event_on") : t("event_off");
  els.eventCopy.textContent = state.legendaryHour
    ? legendaryCountdownText()
    : t("event_normal");
  els.fieldEvent.classList.toggle("active", state.legendaryHour);
  els.fieldEventTitle.textContent = state.legendaryHour ? t("event_on") : t("event_field_normal");
  els.fieldEventCopy.textContent = legendaryCountdownText();
  els.toggleEventButton.textContent = state.legendaryHour ? t("event_close") : t("event_open");
  els.locationButton.classList.toggle("active", Boolean(state.locationSpot));
  els.locationButton.classList.toggle("searching", state.locationStatus === "searching");
  els.locationButton.classList.toggle(
    "claimable",
    Boolean(state.locationSpot) && canClaimSpotReward(),
  );
  if (state.locationStatus === "searching") {
    els.locationTitle.textContent = t("location_searching_title");
    els.locationCopy.textContent = t("location_searching_copy");
    els.locationDistance.textContent = "...";
  } else if (state.locationSpot) {
    const claimText = canClaimSpotReward() ? t("poi_claim_ready") : t("poi_claim_done");
    els.locationTitle.textContent =
      state.locationStatus === "fallback" ? t("location_denied_title") : state.locationSpot.title;
    els.locationCopy.textContent =
      state.locationStatus === "fallback"
        ? `${state.locationSpot.title} · ${claimText}`
        : t("location_ready_copy", { habitat: state.locationSpot.habitat, claim: claimText });
    els.locationDistance.textContent = t("location_button_m", { distance: state.locationDistance });
  } else {
    els.locationTitle.textContent = t("location_idle_title");
    els.locationCopy.textContent = t("location_idle_copy");
    els.locationDistance.textContent = "--m";
  }

  els.phone.classList.toggle("catch-mode", state.tab === "catch");
  els.phone.classList.toggle("camera-on", state.cameraEnabled);
  els.phone.dataset.phase = state.phase;
  $$(".mode").forEach((item) => {
    const modeConfig = modes[item.dataset.mode];
    item.classList.toggle("active", item.dataset.mode === state.mode);
    item.querySelector(".mode-name").textContent = modeConfig.label;
    item.querySelector(".mode-meta").textContent = modeConfig.sub;
  });
  $$(".mode").forEach((item) => {
    item.disabled = isBusy || isRevengeActive;
  });
  $$(".screen").forEach((item) => {
    const active = item.dataset.screen === state.tab;
    item.classList.toggle("active", active);
    item.hidden = !active;
  });
  $$(".tab,.nav").forEach((item) => {
    item.classList.toggle("active", item.dataset.tab === state.tab);
    const label = item.querySelector("span");
    if (label && item.dataset.tab) label.textContent = t(`nav_${item.dataset.tab}`);
  });

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
          const finalRarity = modes[modeKey].floor ? upgradeRarity(baseRarity) : baseRarity;
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
          <span>${t("sim_result", {
            rare: rarePerFood.toFixed(3),
            legendary: legPerFood.toFixed(3),
            escape: (escape * 100).toFixed(1),
          })}</span>
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
els.cameraToggleButton.addEventListener("click", startCamera);
els.locationButton.addEventListener("click", claimSpotReward);
els.authButton.addEventListener("click", openAuthPanel);
els.fieldAuthButton.addEventListener("click", openAuthPanel);
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
  grantShareRefund();
  render();
});
$$("[data-share]").forEach((button) => {
  button.addEventListener("click", () => shareToPlatform(button.dataset.share));
});
els.simulateButton.addEventListener("click", simulate);
els.resultModal.addEventListener("click", (event) => {
  if (event.target === els.resultModal) closeModal();
  const action = event.target?.dataset?.action;
  const authAction = event.target?.dataset?.auth;
  if (action === "close") closeModal();
  if (action === "share") {
    closeModal();
    switchTab("share");
  }
  if (authAction) handleAuthAction(authAction);
});

initSupabaseClient();
hydrateState();
applyDailyReset();
drawCamera();
simulate();
render();
window.setInterval(() => {
  if (state.legendaryHour) render();
}, 1000);
