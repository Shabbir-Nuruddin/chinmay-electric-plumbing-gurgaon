import { pickAreas, type Feature, type Hours, type Scene, type SectionKey } from "./lib";

export const BRAND = "Chinmay";
/** Sunday first. Fri closes 8:30pm, Sun 8pm, other days 9pm; opens 6am. */
export const HOURS: Hours = [[6, 20], [6, 21], [6, 21], [6, 21], [6, 21], [6, 20.5], [6, 21]];
export const FLAP_IDLE = "";
export const SCENE: Scene = "spark";
export const VISIT_IMG = "/img/p7.jpg";
export const VISIT_ALT = "Electrical panel wired by Chinmay";
export const FALLBACK_IMG = "/img/p1.jpg";
export const ORDER: SectionKey[] = ["work", "feature", "reviews", "map", "visit"];

export const PHONE = "+917532046533";
export const PHONE_DISPLAY = "75320 46533";
export const WA = "917532046533";
export const SHOP = { lat: 28.4337984, lon: 77.0841226 };
export const MAPS_URL = `https://www.google.com/maps/dir/?api=1&destination=${SHOP.lat},${SHOP.lon}`;

export const waLink = (text: string) => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;

export const AREAS = pickAreas(["s52", "s54", "s43", "dlf5", "sl1", "s57", "s56", "s62", "s65", "s45"]);
export const DEFAULT_AREA = "s54";

/** Verbatim from Google reviews of the listing. */
export const REVIEWS = [
  "The plumber arrived in 1 call under 10 mins",
  "Great service called them for inverter. Totally professional.",
  "Chinmay was too good in his work",
  "Bohot ache se professionally kaam kerke gaye",
  "He takes full care of cleanliness, safety, and quality in his work.",
  "Better than any UC mechanic as well… 6 STARS..",
];

export const RATINGS = [
  { stars: 5, count: 308 },
  { stars: 4, count: 1 },
  { stars: 3, count: 0 },
  { stars: 2, count: 0 },
  { stars: 1, count: 3 },
];

export const STATUSES = ["MCB TRIPPED", "ONE CALL", "ON SITE 10 MIN", "POWER BACK ON"];

export const FEATURE: Feature = {
  kind: "compare",
  title: { en: "Before you open the app, call the man next door.", hi: "ऐप खोलने से पहले, पास वाले को कॉल करें।" },
  body: {
    en: "Several of Chinmay's reviewers say they tried an app booking first. Here is what they wrote after.",
    hi: "Chinmay के कई ग्राहक लिखते हैं कि पहले उन्होंने ऐप से बुक किया था। बाद में उन्होंने यह लिखा।",
  },
  left: { en: "App booking", hi: "ऐप बुकिंग" },
  right: { en: "Chinmay, Wazirabad", hi: "Chinmay, वज़ीराबाद" },
  rows: [
    {
      label: { en: "The geyser job", hi: "गीज़र का काम" },
      left: { en: "One reviewer says the app technician “made a mess” of it.", hi: "एक ग्राहक के अनुसार ऐप वाले ने काम बिगाड़ दिया।" },
      right: { en: "Solved “in a few hours”, the same reviewer says.", hi: "उसी ग्राहक के अनुसार कुछ घंटों में ठीक।" },
    },
    {
      label: { en: "The bill", hi: "बिल" },
      left: { en: "The app's quote.", hi: "ऐप का कोटेशन।" },
      right: { en: "“Half of the cost that UC quoted.”", hi: "ऐप के कोटेशन का आधा, ग्राहक के शब्दों में।" },
    },
    {
      label: { en: "Getting someone", hi: "किसी को बुलाना" },
      left: { en: "Slot booking and a wait.", hi: "स्लॉट बुकिंग और इंतज़ार।" },
      right: { en: "“Arrived in 1 call under 10 mins.”", hi: "एक कॉल पर, 10 मिनट के अंदर, ग्राहक के शब्दों में।" },
    },
    {
      label: { en: "Who you get", hi: "कौन आता है" },
      left: { en: "Whoever is assigned.", hi: "जो भी भेजा जाए।" },
      right: { en: "A local team reviewers know by name, for wiring, plumbing, AC and inverters.", hi: "लोकल टीम जिसे ग्राहक नाम से जानते हैं, वायरिंग, प्लंबिंग, AC और इन्वर्टर के लिए।" },
    },
  ],
  quote: "Called him after UC made a mess of my Geyser repair and he solved it in a few hours for half of the cost that UC quoted",
};

const en = {
  banner: "Concept preview made for Chinmay by LocalLift. Not live yet.",
  brandSub: "Electrician, plumber and AC, Gurugram",
  live: "Chinmay, wiring, plumbing and AC",
  shopLabel: "Chinmay, Mata Chowk",
  call: "Call Chinmay",
  callShort: "Call Chinmay",
  whatsapp: "WhatsApp",
  waHello: "Hi Chinmay, I need an electrician / plumber.",
  heroTitle: ["Power trip? Pipe burst?", "One call. Chinmay."],
  heroProof: "5.0 stars from 312 Google reviews. Wazirabad, Mata Chowk. From 6am every day.",
  drag: "Drag to turn the pipe",
  beats: [
    { title: "One number for the whole house.", body: "Wiring, MCBs, pumps, geysers, inverters and AC servicing.", quote: REVIEWS[1] },
    { title: "He is ten minutes away.", body: "From Mata Chowk, Wazirabad, across Sector 52 and Golf Course Road.", quote: REVIEWS[0] },
    { title: "Done clean, done safe.", body: "Reviewers keep noticing how the site looks after he leaves.", quote: REVIEWS[4] },
  ],
  googleReview: "Google review",
  distTitle: "How far is Chinmay?",
  distBody: "Pick your area. Straight-line distance from Mata Chowk, Wazirabad.",
  distUnit: "km from Mata Chowk",
  distAsk: "Ask if he can come",
  distWa: (area: string) => `Hi Chinmay, I'm in ${area}. Can you come today?`,
  workTitle: "Wires, pipes and AC. All his own photos.",
  workBody: "Every photo here was posted on Chinmay's Google listing.",
  services: [
    { img: "/img/p1.jpg", title: "MCB and house wiring", body: "Tripping breakers, rewiring and new circuits." },
    { img: "/img/p2.jpg", title: "AC servicing", body: "Indoor unit cleaning and outdoor unit checks." },
    { img: "/img/p5.jpg", title: "Lights and fittings", body: "Profile lights, under-cabinet LEDs, fixtures." },
    { img: "/img/p6.jpg", title: "Pumps and motors", body: "Water pumps repaired, rewound or replaced." },
    { img: "/img/p9.jpg", title: "Switchboards", body: "Boards replaced and sockets made safe." },
    { img: "/img/p11.jpg", title: "Inverters and electronics", body: "Inverter faults, boards and capacitors traced." },
  ],
  revTitle: "312 ratings. 308 gave five stars.",
  revTags: "What customers mention most on Google",
  tags: [
    { label: "Promptness", n: 6 },
    { label: "Reasonable charges", n: 5 },
    { label: "Polite nature", n: 4 },
    { label: "Problem solved", n: 3 },
  ],
  stars: "stars",
  visitTitle: "Find him at Mata Chowk.",
  address: "Wazirabad, Mata Chowk, Gurugram 122003",
  hours: "6am to 9pm. Fri till 8:30pm, Sun till 8pm",
  pay: "",
  directions: "Directions",
  footer: "Concept by LocalLift for Chinmay, electrician and plumber, Gurugram. Photos and reviews from the Google listing.",
  langLabel: "Language",
};

const hi: typeof en = {
  banner: "यह LocalLift द्वारा Chinmay के लिए बनाया गया डेमो है। अभी लाइव नहीं है।",
  brandSub: "इलेक्ट्रीशियन, प्लंबर और AC, गुरुग्राम",
  live: "Chinmay, वायरिंग, प्लंबिंग और AC",
  shopLabel: "Chinmay, माता चौक",
  call: "Chinmay को कॉल करें",
  callShort: "कॉल करें",
  whatsapp: "व्हाट्सऐप",
  waHello: "नमस्ते Chinmay जी, मुझे इलेक्ट्रीशियन / प्लंबर चाहिए।",
  heroTitle: ["बिजली गई? पाइप फटा?", "एक कॉल। Chinmay।"],
  heroProof: "312 गूगल रिव्यू में 5.0 स्टार। वज़ीराबाद, माता चौक। रोज़ सुबह 6 बजे से।",
  drag: "पाइप घुमाने के लिए खींचें",
  beats: [
    { title: "पूरे घर के लिए एक नंबर।", body: "वायरिंग, MCB, पंप, गीज़र, इन्वर्टर और AC सर्विस।", quote: REVIEWS[1] },
    { title: "वो दस मिनट दूर हैं।", body: "माता चौक, वज़ीराबाद से सेक्टर 52 और गोल्फ़ कोर्स रोड तक।", quote: REVIEWS[0] },
    { title: "साफ़ और सुरक्षित काम।", body: "ग्राहक लिखते हैं कि काम के बाद जगह कैसी छोड़ी।", quote: REVIEWS[4] },
  ],
  googleReview: "गूगल रिव्यू",
  distTitle: "Chinmay कितनी दूर हैं?",
  distBody: "अपना इलाका चुनें। माता चौक, वज़ीराबाद से सीधी दूरी।",
  distUnit: "किमी माता चौक से",
  distAsk: "पूछें, क्या आ सकते हैं",
  distWa: (area: string) => `नमस्ते Chinmay जी, मैं ${area} में हूँ। क्या आज आ सकते हैं?`,
  workTitle: "तार, पाइप और AC। सब उनकी अपनी फ़ोटो।",
  workBody: "यहाँ की हर फ़ोटो Chinmay की गूगल लिस्टिंग पर डाली गई है।",
  services: [
    { img: "/img/p1.jpg", title: "MCB और घर की वायरिंग", body: "ट्रिप होते ब्रेकर, नई वायरिंग और नए सर्किट।" },
    { img: "/img/p2.jpg", title: "AC सर्विस", body: "इनडोर यूनिट की सफ़ाई और आउटडोर की जाँच।" },
    { img: "/img/p5.jpg", title: "लाइट और फ़िटिंग", body: "प्रोफ़ाइल लाइट, कैबिनेट LED, फ़िक्सचर।" },
    { img: "/img/p6.jpg", title: "पंप और मोटर", body: "पानी के पंप की मरम्मत, वाइंडिंग या बदली।" },
    { img: "/img/p9.jpg", title: "स्विचबोर्ड", body: "बोर्ड बदले और सॉकेट सुरक्षित किए।" },
    { img: "/img/p11.jpg", title: "इन्वर्टर और इलेक्ट्रॉनिक्स", body: "इन्वर्टर की ख़राबी, बोर्ड और कैपेसिटर की जाँच।" },
  ],
  revTitle: "312 रेटिंग। 308 पाँच स्टार।",
  revTags: "गूगल पर ग्राहक सबसे ज़्यादा क्या लिखते हैं",
  tags: [
    { label: "फुर्ती", n: 6 },
    { label: "सही दाम", n: 5 },
    { label: "विनम्र स्वभाव", n: 4 },
    { label: "समस्या हल", n: 3 },
  ],
  stars: "स्टार",
  visitTitle: "माता चौक पर मिलें।",
  address: "वज़ीराबाद, माता चौक, गुरुग्राम 122003",
  hours: "सुबह 6 से रात 9। शुक्र 8:30 तक, रवि 8 तक",
  pay: "",
  directions: "रास्ता देखें",
  footer: "LocalLift द्वारा Chinmay, इलेक्ट्रीशियन और प्लंबर, गुरुग्राम के लिए कॉन्सेप्ट। फ़ोटो और रिव्यू गूगल लिस्टिंग से।",
  langLabel: "भाषा",
};

export const COPY = { en, hi };
