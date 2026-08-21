/* ============================================================
   VAARAAHI — Dish Visuals
   ------------------------------------------------------------
   PHOTOS FIRST. Every dish looks for a photo before anything
   else. Until a photo exists, it falls back to a styled plate
   drawn in the brand palette — dark stoneware, copper handi,
   banana leaf — so the grid never shows a hole or a mismatch.

   TO ADD A PHOTO (do this before launch):
     1. Save it as  assets/dishes/<slug>.jpg
        The slug is the dish's `img` value in js/data.js —
        e.g. Gongura Chicken  ->  assets/dishes/gongura-chicken.jpg
     2. Add the slug to PHOTOS below:
            "gongura-chicken",
   That's it. Add slugs as photos arrive; the rest keep their
   drawn plate. SHOT-LIST.md lists every filename to shoot.
   ============================================================ */

/* Real photos — sourced from Unsplash (free for commercial use, no
   attribution required). Each URL is used for exactly ONE dish, and
   only where the source page verified the subject. If a photo ever
   fails to load, the drawn plate takes over automatically. */
const PHOTO_URLS = {
  "chicken-dum-biryani": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?fm=jpg&q=70&w=640&fit=crop", // biryani platter, Unsplash 'biryani' search
  "vijayawada-chicken-biryani": "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?fm=jpg&q=70&w=640&fit=crop", // bowl of biryani rice+chicken, tagged biryani, Bengaluru
  "rayalaseema-kodi-roast-chicken-biryani-pulao": "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?fm=jpg&q=70&w=640&fit=crop", // biryani platter on red cloth
  "bezawada-chickenn-fry-piece-biryani": "https://images.unsplash.com/photo-1633945274309-2c16c9682a8c?fm=jpg&q=70&w=640&fit=crop", // plate of biryani rice+meat
  "ulavacharu-chicken-biryani-pulao": "https://images.unsplash.com/photo-1719239885399-f87d992e0f18?fm=jpg&q=70&w=640&fit=crop", // plate of biryani rice+meat
  "goat-dum-biryani": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?fm=jpg&q=70&w=640&fit=crop", // two biryani plates on black table
  "goat-roast-pulao-biryani": "https://images.unsplash.com/photo-1710091691777-3115088962c4?fm=jpg&q=70&w=640&fit=crop", // plate of biryani rice+meat
  "nalli-gosht-biryani": "https://images.unsplash.com/photo-1705174299330-939dd03cc864?fm=jpg&q=70&w=640&fit=crop", // biryani served from handi with spoon
  "veg-dum-biryani": "https://images.unsplash.com/photo-1697155406055-2db32d47ca07?fm=jpg&q=70&w=640&fit=crop", // pan of rice with vegetables
  "vijayawada-veg": "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?fm=jpg&q=70&w=640&fit=crop", // plate of rice with green herbs
  "veg-roast-pulao": "https://images.unsplash.com/photo-1630851840633-f96999247032?fm=jpg&q=70&w=640&fit=crop", // bowl of rice with mint leaf
  "butter-chicken": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?fm=jpg&q=70&w=640&fit=crop", // butter chicken in wooden bowl
  "chicken-tikka-masala": "https://images.unsplash.com/photo-1614398751058-eb2e0bf63e53?fm=jpg&q=70&w=640&fit=crop", // creamy chicken curry with naan on black tray
  "kadai-chicken": "https://images.unsplash.com/photo-1603496987351-f84a3ba5ec85?fm=jpg&q=70&w=640&fit=crop", // chicken karahi with naan on tray
  "chicken-korma": "https://images.unsplash.com/photo-1708782344490-9026aaa5eec7?fm=jpg&q=70&w=640&fit=crop", // bowl of chicken curry next to rice
  "andhra-chicken-curry": "https://images.unsplash.com/photo-1742599361539-f096753d1100?fm=jpg&q=70&w=640&fit=crop", // indian chicken curry and rice
  "chicken-chettinad": "https://images.unsplash.com/photo-1708782341807-ed35fc16b4ea?fm=jpg&q=70&w=640&fit=crop", // bowl of chicken curry, side of greens
  "hyderabadi-murg-masala": "https://images.unsplash.com/photo-1736239092568-21614c4b783f?fm=jpg&q=70&w=640&fit=crop", // curry plate with flatbread
  "chicken-salna": "https://images.unsplash.com/photo-1708782344137-21c48d98dfcc?fm=jpg&q=70&w=640&fit=crop", // bowl of thin stew
  "mutton-masala": "https://images.unsplash.com/photo-1596797038530-2c107229654b?fm=jpg&q=70&w=640&fit=crop", // mutton curry in black pot
  "andhra-special-goat-curry": "https://images.unsplash.com/photo-1606843046080-45bf7a23c39f?fm=jpg&q=70&w=640&fit=crop", // mutton curry plate
  "goat-vindaloo": "https://images.unsplash.com/photo-1559203244-78de52adba0e?fm=jpg&q=70&w=640&fit=crop", // meat curry in tomato-red sauce
  "kadai-goat": "https://images.unsplash.com/photo-1652545296892-3787063f8b4d?fm=jpg&q=70&w=640&fit=crop", // bowl of meat curry close-up
  "goat-korma": "https://images.unsplash.com/photo-1652545297020-f5e8ad779eb4?fm=jpg&q=70&w=640&fit=crop", // bowl of meat curry with vegetables
  "goat-tikka-masala": "https://images.unsplash.com/photo-1652545296893-ff9227b3512e?fm=jpg&q=70&w=640&fit=crop", // bowl of creamy meat curry
  "palak-paneer": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?fm=jpg&q=70&w=640&fit=crop", // green spinach curry on plate
  "paneer-butter-masala": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?fm=jpg&q=70&w=640&fit=crop", // paneer butter masala kadai with rice
  "chilli-chicken": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?fm=jpg&q=70&w=640&fit=crop", // fried chicken pieces with greens
  "goat-sukka": "https://images.unsplash.com/photo-1534939561126-855b8675edd7?fm=jpg&q=70&w=640&fit=crop", // dry-fried meat in bowl
  "punjabi-samosa": "https://images.unsplash.com/photo-1601050690597-df0568f70950?fm=jpg&q=70&w=640&fit=crop", // three golden samosas with green chili
  "tandoori-chicken": "https://images.unsplash.com/photo-1617692855027-33b14f061079?fm=jpg&q=70&w=640&fit=crop", // tandoori chicken plate
  "naan": "https://images.unsplash.com/photo-1697155406014-04dc649b0953?fm=jpg&q=70&w=640&fit=crop", // naan in a serving basket
  "garlic-naan": "https://images.unsplash.com/photo-1611107415406-1c12f8cda424?fm=jpg&q=70&w=640&fit=crop", // charred naan on black surface
  "butter-naan": "https://images.unsplash.com/photo-1678527051201-db85050003d9?fm=jpg&q=70&w=640&fit=crop", // flatbread plate with dip
  "roti": "https://images.unsplash.com/photo-1640625314547-aee9a7696589?fm=jpg&q=70&w=640&fit=crop", // stack of flatbreads on wooden board
  "butter-roti": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?fm=jpg&q=70&w=640&fit=crop", // roti with curry on plate
  "chapathi": "https://images.unsplash.com/photo-1678969406353-ead12b1f258a?fm=jpg&q=70&w=640&fit=crop", // curry bowl with flatbread basket
  "malabar-paratha-veg-salna": "https://images.unsplash.com/photo-1586524068358-77d2196875e7?fm=jpg&q=70&w=640&fit=crop", // flatbread on a tawa pan
  "street-style-egg-fried-rice": "https://unsplash.com/photos/I51a7Yy7mQA/download?w=800", // egg with rice on black pan
  "street-style-veg-fried-rice": "https://unsplash.com/photos/n294Cpqt3gs/download?w=800", // bowl of rice and vegetables
  "street-style-chicken-noodles": "https://unsplash.com/photos/6IZNi8_XEas/download?w=800", // noodle bowl with meat
  "chicken-vindaloo": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?fm=jpg&q=70&w=640&fit=crop", // Indian curry in a steel bowl
  "malabar-chicken": "https://images.unsplash.com/photo-1517244683847-7456b63c5969?fm=jpg&q=70&w=640&fit=crop", // Indian curry with gold saucer
  "kodi-vepudu": "https://images.unsplash.com/photo-1606471191009-63994c53433b?fm=jpg&q=70&w=640&fit=crop", // brown semi-dry dish on round plate
  "goat-chettinad": "https://images.unsplash.com/photo-1545247181-516773cae754?fm=jpg&q=70&w=640&fit=crop", // mutton curry in steel bowl
  "malabar-fish-shrimp-curry": "https://images.unsplash.com/photo-1574484284002-952d92456975?fm=jpg&q=70&w=640&fit=crop", // fish fillets in creamy orange sauce
  "onion-kulcha": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?fm=jpg&q=70&w=640&fit=crop", // Indian flatbread, sliced
  "bullet-naan": "https://images.unsplash.com/photo-1683533761804-5fc12be0f684?fm=jpg&q=70&w=640&fit=crop", // naan plated on black surface
  "sesame-naan": "https://images.unsplash.com/photo-1655979284091-eea0e93405ee?fm=jpg&q=70&w=640&fit=crop", // naan plate, Unsplash naan search
  "cheese-kulcha": "https://images.unsplash.com/photo-1678527033550-33b09e4ef268?fm=jpg&q=70&w=640&fit=crop", // flatbread plated with dip
  "lasooni-chicken-kebab": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?fm=jpg&q=70&w=640&fit=crop", // grilled meat and vegetables
  "shrimp-biryani": "https://images.unsplash.com/photo-1691171047462-66025ecd5efc?fm=jpg&q=70&w=640&fit=crop", // biryani plate, Unsplash biryani search
  "goat-keema-biryani-pulao": "https://images.unsplash.com/photo-1728745118618-941ec839208f?fm=jpg&q=70&w=640&fit=crop", // biryani plate, Unsplash biryani search
  "vijayawada-shrimp-biryani": "https://images.unsplash.com/photo-1716550781939-beb7d7247aae?fm=jpg&q=70&w=640&fit=crop", // biryani plate, Unsplash biryani search
};

const PHOTO_DIR = "assets/dishes/";
const PHOTO_EXT = ".jpg";

/* Slugs you have real photos for. Empty = all drawn. */
const PHOTOS = [
  // "gongura-chicken",
  // "chicken-dum-biryani",
];

/* ---------- palette ---------- */
const A = {
  gold: "#C8A15A", goldHi: "#E4C77F", goldDim: "#7d6438",
  burgundy: "#A51C30",
  leaf: "#4f7f3a", leafDeep: "#2f5624", leafLight: "#7aa85c",
  chili: "#a8331d", cream: "#f0e2c8"
};

function seeded(key) {
  let h = 2166136261;
  for (let i = 0; i < key.length; i++) { h ^= key.charCodeAt(i); h = Math.imul(h, 16777619); }
  return function () { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; return ((h >>> 0) % 10000) / 10000; };
}
const n1 = function (v) { return Math.round(v * 10) / 10; };

/* ---------- frame: warm dark table, soft key light ---------- */
function frame(inner, defs) {
  return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240" width="320" height="240">' +
    '<defs>' +
    '<radialGradient id="tbl" cx="42%" cy="28%" r="86%">' +
      '<stop offset="0%" stop-color="#2d2419"/><stop offset="55%" stop-color="#1a140e"/><stop offset="100%" stop-color="#0b0907"/></radialGradient>' +
    '<radialGradient id="key" cx="34%" cy="18%" r="52%">' +
      '<stop offset="0%" stop-color="#ffd7a0" stop-opacity=".22"/><stop offset="100%" stop-color="#ffd7a0" stop-opacity="0"/></radialGradient>' +
    '<radialGradient id="stone" cx="36%" cy="26%" r="78%">' +
      '<stop offset="0%" stop-color="#3a2f22"/><stop offset="62%" stop-color="#1e180f"/><stop offset="100%" stop-color="#120e09"/></radialGradient>' +
    '<linearGradient id="cop" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0%" stop-color="#d08f4c"/><stop offset="45%" stop-color="#96602f"/><stop offset="100%" stop-color="#5d3a1b"/></linearGradient>' +
    '<linearGradient id="slate" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0%" stop-color="#2b241b"/><stop offset="100%" stop-color="#15110c"/></linearGradient>' +
    (defs || '') + '</defs>' +
    '<rect width="320" height="240" fill="url(#tbl)"/><rect width="320" height="240" fill="url(#key)"/>' +
    inner + '</svg>';
}

/* ---------- vessels ---------- */
function stoneware(cx, cy, r) {
  return '<ellipse cx="' + (cx + 4) + '" cy="' + (cy + 14) + '" rx="' + (r + 10) + '" ry="' + (r * 0.62) + '" fill="#000" opacity=".5"/>' +
    '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="url(#stone)"/>' +
    '<path d="M' + (cx - r) + ' ' + cy + ' a' + r + ' ' + r + ' 0 0 1 ' + (r * 1.2) + ' -' + (r * 0.78) +
      '" fill="none" stroke="#efd9ae" stroke-width="2.2" opacity=".22" stroke-linecap="round"/>' +
    '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="#000" stroke-width="2" opacity=".45"/>';
}
function slate() {
  return '<rect x="14" y="34" width="292" height="176" rx="16" fill="url(#slate)"/>' +
    '<rect x="14" y="34" width="292" height="176" rx="16" fill="none" stroke="#3d3225" stroke-width="1.4"/>' +
    '<path d="M30 46 q120 -8 240 6" stroke="#efd9ae" stroke-width="2" opacity=".10" fill="none"/>';
}
function bananaLeaf() {
  return slate() +
    '<path d="M38 132 q52 -62 122 -62 q70 0 122 62 q-52 62 -122 62 q-70 0 -122 -62z" fill="' + A.leafDeep + '"/>' +
    '<path d="M38 132 q52 -62 122 -62 q70 0 122 62" fill="' + A.leaf + '" opacity=".55"/>' +
    '<path d="M42 132 h236" stroke="' + A.leafLight + '" stroke-width="2" opacity=".55"/>' +
    '<g stroke="' + A.leafLight + '" stroke-width="1" opacity=".3" fill="none">' +
      '<path d="M160 132 l-40 -34 M160 132 l-4 -40 M160 132 l36 -36 M160 132 l-40 34 M160 132 l-4 40 M160 132 l36 36"/></g>';
}
function glisten(cx, cy) {
  return '<ellipse cx="' + (cx - 20) + '" cy="' + (cy - 22) + '" rx="18" ry="9" fill="#fff" opacity=".10" transform="rotate(-24 ' + (cx - 20) + ' ' + (cy - 22) + ')"/>' +
    '<ellipse cx="' + (cx + 22) + '" cy="' + (cy + 16) + '" rx="11" ry="6" fill="#fff" opacity=".07"/>';
}
function leafSprig(x, y, rot, s) {
  s = s || 1;
  return '<g transform="translate(' + x + ' ' + y + ') rotate(' + rot + ') scale(' + s + ')">' +
    '<path d="M0 0 q10 -8 20 0 q-10 8 -20 0z" fill="' + A.leaf + '"/>' +
    '<path d="M0 0 h20" stroke="' + A.leafDeep + '" stroke-width=".9"/></g>';
}
function chiliSprig(x, y, rot) {
  return '<path d="M' + x + ' ' + y + ' q13 -7 26 -1" stroke="' + A.chili + '" stroke-width="4.4" fill="none" stroke-linecap="round" transform="rotate(' + rot + ' ' + x + ' ' + y + ')"/>';
}
function steam(cx, y) {
  return '<g opacity=".26" stroke="#ffe6bd" stroke-width="2.6" fill="none" stroke-linecap="round">' +
    '<path d="M' + (cx - 26) + ' ' + y + ' q-8 -14 2 -26 q8 -10 2 -20"/>' +
    '<path d="M' + cx + ' ' + (y - 6) + ' q-8 -16 2 -28 q8 -10 2 -18"/>' +
    '<path d="M' + (cx + 26) + ' ' + y + ' q-8 -14 2 -26 q8 -10 2 -20"/></g>';
}

/* ============================================================
   FAMILY: curry — gravy in dark stoneware
   ============================================================ */
function curry(key, v) {
  const rnd = seeded(key); let i;
  const R = 74, cx = 160, cy = 122;
  let inner = stoneware(cx, cy, R + 12);
  inner += '<circle cx="' + cx + '" cy="' + cy + '" r="' + R + '" fill="' + v.g1 + '"/>';
  inner += '<path d="M' + (cx - R) + ' ' + (cy - 12) + ' q36 -26 74 -10 q40 18 68 -4 q-6 72 -70 72 q-64 0 -72 -58z" fill="' + v.g2 + '" opacity=".6"/>';

  for (i = 0; i < (v.n || 7); i++) {
    const a = rnd() * 6.283, r = 12 + rnd() * 42;
    const x = n1(cx + Math.cos(a) * r), y = n1(cy + Math.sin(a) * r * 0.92);
    const rot = n1(rnd() * 70 - 35);
    const g = '<g transform="translate(' + x + ' ' + y + ') rotate(' + rot + ')">';
    if (v.chunk === "paneer") inner += g + '<rect x="-10" y="-10" width="20" height="20" rx="3" fill="' + (v.chunkFill || "#f7f0dd") + '"/><rect x="-10" y="-10" width="20" height="6" rx="3" fill="#fff" opacity=".3"/></g>';
    else if (v.chunk === "meat") inner += g + '<path d="M-13 -3 q2 -12 13 -10 q13 -2 13 10 q1 12 -13 12 q-14 1 -13 -12z" fill="' + (v.chunkFill || "#a2521f") + '"/><path d="M-8 -5 q9 -5 17 0" stroke="#fff" stroke-width="1.3" opacity=".22" fill="none"/></g>';
    else if (v.chunk === "bone") inner += g + '<path d="M-14 -2 q2 -13 14 -11 q14 -2 14 11 q1 13 -14 13 q-15 1 -14 -13z" fill="' + (v.chunkFill || "#77361a") + '"/><circle cx="4" cy="1" r="5" fill="#f0e4d0" opacity=".9"/><circle cx="4" cy="1" r="2.2" fill="#c4ab84"/></g>';
    else if (v.chunk === "egg") inner += g + '<ellipse rx="13" ry="10" fill="#f8f2e4"/><ellipse rx="6.5" ry="5" fill="#e9b53f"/></g>';
    else if (v.chunk === "kofta") inner += g + '<circle r="11" fill="' + (v.chunkFill || "#c8843c") + '"/><circle cx="-4" cy="-4" r="3.4" fill="#fff" opacity=".22"/></g>';
    else if (v.chunk === "brinjal") inner += g + '<ellipse rx="12" ry="14" fill="#4a2f52"/><path d="M0 -14 q6 -7 10 -3" stroke="' + A.leaf + '" stroke-width="2.6" fill="none"/></g>';
    else if (v.chunk === "okra") inner += g + '<path d="M-14 0 q14 -7 28 0 q-14 7 -28 0z" fill="#5a8a3c"/><path d="M-10 0 h20" stroke="#2f4d24" stroke-width="1" opacity=".7"/></g>';
    else if (v.chunk === "fish") inner += g + '<path d="M-16 0 q9 -11 18 -8 q11 3 14 8 q-3 5 -14 8 q-9 3 -18 -8z" fill="' + (v.chunkFill || "#d99a4f") + '"/><path d="M-16 0 l-8 -7 v14z" fill="#c98a3f"/></g>';
    else if (v.chunk === "prawn") inner += g + '<path d="M-10 7 a12 12 0 1 1 13 -14 q-8 -1 -10 5 q-2 8 6 10 q-6 4 -9 -1z" fill="#e08b5c"/></g>';
    else if (v.chunk === "veg") {
      const cols = ["#5a8a3c", "#d4802b", "#c0392b", "#e8c95e"];
      inner += '<circle cx="' + x + '" cy="' + y + '" r="7" fill="' + cols[i % 4] + '"/>';
    }
    else if (v.chunk === "lentil") inner += '<circle cx="' + x + '" cy="' + y + '" r="5.4" fill="' + (v.chunkFill || "#e8c95e") + '"/>';
    else if (v.chunk === "chana") inner += g + '<circle r="7" fill="#d8b57c"/><circle cx="-2" cy="-2" r="2.4" fill="#fff" opacity=".22"/></g>';
  }

  if (v.cream) inner += '<path d="M' + (cx - 28) + ' ' + (cy - 6) + ' q14 -13 28 0 q14 13 28 0" fill="none" stroke="' + A.cream + '" stroke-width="3.6" stroke-linecap="round" opacity=".9"/>';
  if (v.gongura) for (i = 0; i < 7; i++) {
    const a = rnd() * 6.283, r = rnd() * 52;
    inner += '<path d="M0 0 q11 -9 22 0 q-11 9 -22 0z" fill="#6f9a3e" transform="translate(' + n1(cx + Math.cos(a) * r - 11) + ' ' + n1(cy + Math.sin(a) * r * .9) + ') rotate(' + n1(rnd() * 360) + ')" opacity=".92"/>';
  }
  if (v.mango) for (i = 0; i < 4; i++) inner += '<rect x="' + n1(cx - 40 + rnd() * 80) + '" y="' + n1(cy - 34 + rnd() * 62) + '" width="15" height="11" rx="2" fill="#e0b12c" transform="rotate(' + n1(rnd() * 60 - 30) + ' ' + cx + ' ' + cy + ')"/>';
  if (v.pepper) for (i = 0; i < 12; i++) inner += '<circle cx="' + n1(cx - 52 + rnd() * 104) + '" cy="' + n1(cy - 46 + rnd() * 92) + '" r="2.6" fill="#1d1410" opacity=".85"/>';
  if (v.coconut) for (i = 0; i < 10; i++) inner += '<rect x="' + n1(cx - 48 + rnd() * 96) + '" y="' + n1(cy - 42 + rnd() * 84) + '" width="9" height="3.2" rx="1.6" fill="#f6f1e2" opacity=".9" transform="rotate(' + n1(rnd() * 180) + ' ' + cx + ' ' + cy + ')"/>';

  inner += glisten(cx, cy);
  const lv = v.leaves === undefined ? 2 : v.leaves;
  for (i = 0; i < lv; i++) inner += leafSprig(cx - 42 + i * 30, cy - 44 + (i % 2) * 88, -20 + i * 26, .95);
  if (v.dryChili) inner += chiliSprig(cx - 58, cy + 48, -12);
  inner += '<circle cx="' + cx + '" cy="' + cy + '" r="' + R + '" fill="none" stroke="#000" stroke-width="1.6" opacity=".35"/>';
  if (v.steam) inner += steam(cx, 46);
  return frame(inner);
}

/* ============================================================
   FAMILY: fry — dry appetizers on a banana leaf
   ============================================================ */
function fry(key, v) {
  const rnd = seeded(key); let i;
  const cx = 160, cy = 130;
  let inner = bananaLeaf();
  const pts = [];
  const n = v.n || 14;
  for (i = 0; i < n; i++) {
    const a = rnd() * 6.283, r = Math.sqrt(rnd()) * 62;
    pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r * 0.58, rnd() * 360, rnd() > 0.5 ? v.c1 : v.c2]);
  }
  pts.sort(function (p, q) { return p[1] - q[1]; });
  const sc = v.size || 1.25;
  pts.forEach(function (p) {
    const x = n1(p[0]), y = n1(p[1]), rot = n1(p[2]), f = p[3];
    const g = '<g transform="translate(' + x + ' ' + y + ') rotate(' + rot + ') scale(' + sc + ')">';
    switch (v.piece) {
      case "floret":
        inner += g + '<circle r="11" fill="' + f + '"/><circle cx="-5" cy="-4" r="5.4" fill="' + f + '"/><circle cx="6" cy="-3" r="4.8" fill="' + f + '"/><circle cx="0" cy="6" r="4.8" fill="' + f + '"/><circle cx="-4" cy="-6" r="2.4" fill="#fff" opacity=".18"/><rect x="-2.6" y="6" width="5.2" height="9" rx="2" fill="#e7d6ae"/></g>'; break;
      case "cube":
        inner += g + '<rect x="-10" y="-10" width="20" height="20" rx="3" fill="' + f + '"/><rect x="-10" y="-10" width="20" height="6.5" rx="3" fill="#fff" opacity=".18"/></g>'; break;
      case "ball":
        inner += g + '<circle r="11" fill="' + f + '"/><circle cx="-4" cy="-4" r="3.6" fill="#fff" opacity=".2"/></g>'; break;
      case "strip":
        inner += g + '<rect x="-15" y="-5" width="30" height="10" rx="5" fill="' + f + '"/><rect x="-13" y="-5" width="26" height="3.4" rx="1.7" fill="#fff" opacity=".16"/></g>'; break;
      case "ring":
        inner += g + '<rect x="-14" y="-5.5" width="28" height="11" rx="5.5" fill="' + f + '"/><circle cx="-6" cy="0" r="2.4" fill="#241a11" opacity=".6"/><circle cx="6" cy="0" r="2.4" fill="#241a11" opacity=".6"/></g>'; break;
      case "mushroom":
        inner += g + '<path d="M-12 0 a12 10 0 0 1 24 0z" fill="' + f + '"/><rect x="-3.6" y="0" width="7.2" height="9" rx="2.6" fill="#e7d6ae"/></g>'; break;
      case "prawn":
        inner += g + '<path d="M-10 7 a12 12 0 1 1 13 -14 q-8 -1 -10 5 q-2 8 6 10 q-6 4 -9 -1z" fill="' + f + '"/></g>'; break;
      case "wedge":
        inner += g + '<path d="M-13 7 l8 -15 l11 0 l8 15z" fill="' + f + '"/></g>'; break;
      case "chunkbone":
        inner += g + '<path d="M-13 -3 q2 -12 13 -10 q13 -2 13 10 q1 12 -13 12 q-14 1 -13 -12z" fill="' + f + '"/><circle cx="4" cy="2" r="4.4" fill="#f0e4d0" opacity=".85"/></g>'; break;
    }
  });
  if (v.onion) for (i = 0; i < 7; i++) {
    const a = rnd() * 6.283, r = 22 + rnd() * 40;
    inner += '<path d="M' + n1(cx + Math.cos(a) * r) + ' ' + n1(cy + Math.sin(a) * r * .55) + ' q10 -7 20 1" stroke="#e3d4b1" stroke-width="2.8" fill="none" opacity=".85" stroke-linecap="round"/>';
  }
  if (v.sesame) for (i = 0; i < 16; i++) inner += '<ellipse cx="' + n1(cx - 62 + rnd() * 124) + '" cy="' + n1(cy - 32 + rnd() * 64) + '" rx="3" ry="1.8" fill="#fff3d6" opacity=".9"/>';
  if (v.pepper) for (i = 0; i < 14; i++) inner += '<circle cx="' + n1(cx - 64 + rnd() * 128) + '" cy="' + n1(cy - 34 + rnd() * 68) + '" r="2.6" fill="#1d1410" opacity=".9"/>';
  const lv = v.leaves === undefined ? 3 : v.leaves;
  for (i = 0; i < lv; i++) inner += leafSprig(76 + i * 46, 78 + (i % 2) * 104, -22 + i * 24, 1.05);
  if (v.dryChili !== false) inner += chiliSprig(66, 186, -8);
  return frame(inner);
}

/* ============================================================
   FAMILY: biryani — sealed copper handi
   ============================================================ */
function biryani(key, v) {
  const rnd = seeded(key); let i;
  let inner =
    '<ellipse cx="160" cy="208" rx="90" ry="15" fill="#000" opacity=".5"/>' +
    '<path d="M72 116 q0 88 88 88 q88 0 88 -88z" fill="url(#cop)"/>' +
    '<path d="M92 130 q-4 54 24 62" stroke="#f0c489" stroke-width="4" fill="none" opacity=".28"/>' +
    '<ellipse cx="160" cy="116" rx="88" ry="27" fill="#c8894a"/>' +
    '<ellipse cx="160" cy="116" rx="88" ry="27" fill="none" stroke="#f0c489" stroke-width="1.6" opacity=".5"/>' +
    '<ellipse cx="160" cy="117" rx="76" ry="21" fill="#1b1409"/>' +
    '<ellipse cx="160" cy="117" rx="72" ry="19" fill="' + (v.rice || "#f0e5ce") + '"/>';
  for (i = 0; i < 42; i++) {
    const a = rnd() * 6.283, r = Math.sqrt(rnd()) * 68;
    const x = n1(160 + Math.cos(a) * r), y = n1(117 + Math.sin(a) * r * 0.26);
    const t = rnd();
    const col = t > 0.78 ? "#e2a13c" : (t > 0.7 && v.tint ? v.tint : "#fffaf0");
    inner += '<ellipse cx="' + x + '" cy="' + y + '" rx="4.8" ry="2" transform="rotate(' + n1(rnd() * 180) + ' ' + x + ' ' + y + ')" fill="' + col + '" opacity=".96"/>';
  }
  if (v.top === "meat" || v.top === "goat") for (i = 0; i < 4; i++) {
    const mx = 126 + i * 23, my = 112 + (i % 2) * 8;
    inner += '<path d="M' + (mx - 13) + ' ' + my + ' q2 -12 13 -10 q13 -2 13 10 q1 11 -13 11 q-14 1 -13 -11z" fill="' + (v.topFill || "#a2521f") + '"/>';
  }
  if (v.top === "bone") for (i = 0; i < 3; i++) {
    const mx = 130 + i * 30;
    inner += '<path d="M' + (mx - 15) + ' 112 q2 -14 15 -12 q15 -2 15 12 q1 13 -15 13 q-16 1 -15 -13z" fill="#77361a"/>' +
      '<circle cx="' + (mx + 3) + '" cy="113" r="6" fill="#f0e4d0" opacity=".9"/><circle cx="' + (mx + 3) + '" cy="113" r="2.6" fill="#c4ab84"/>';
  }
  if (v.top === "paneer") for (i = 0; i < 4; i++) inner += '<rect x="' + (118 + i * 23) + '" y="' + (105 + (i % 2) * 8) + '" width="19" height="15" rx="3" fill="#f7f0dd"/>';
  if (v.top === "egg") for (i = 0; i < 3; i++) inner += '<g transform="translate(' + (130 + i * 30) + ' 114)"><ellipse rx="14" ry="10.5" fill="#f9f3e5"/><ellipse rx="6.8" ry="5.2" fill="#e9b53f"/></g>';
  if (v.top === "prawn") for (i = 0; i < 4; i++) inner += '<g transform="translate(' + (128 + i * 22) + ' 113) rotate(' + (-22 + i * 15) + ')"><path d="M-9 6 a11 11 0 1 1 12 -13 q-7 -1 -9 5 q-2 7 5 9 q-5 4 -8 -1z" fill="#e08b5c"/></g>';
  if (v.top === "keema") for (i = 0; i < 24; i++) inner += '<circle cx="' + n1(112 + rnd() * 96) + '" cy="' + n1(108 + rnd() * 18) + '" r="3.4" fill="#8c4a20"/>';
  if (v.top === "veg") {
    const cols = ["#5a8a3c", "#d4802b", "#c0392b", "#e8c95e"];
    for (i = 0; i < 11; i++) inner += '<circle cx="' + n1(114 + rnd() * 92) + '" cy="' + n1(108 + rnd() * 17) + '" r="5.6" fill="' + cols[i % 4] + '"/>';
  }
  if (v.gongura) for (i = 0; i < 5; i++) inner += '<path d="M0 0 q11 -9 22 0 q-11 9 -22 0z" fill="#6f9a3e" transform="translate(' + n1(112 + rnd() * 92) + ' ' + n1(108 + rnd() * 16) + ') rotate(' + n1(rnd() * 360) + ')"/>';
  if (v.mango) for (i = 0; i < 3; i++) inner += '<rect x="' + n1(120 + rnd() * 84) + '" y="' + n1(108 + rnd() * 12) + '" width="16" height="11" rx="2" fill="#e0b12c"/>';
  if (v.drizzle) inner += '<path d="M104 122 q56 -20 112 -2" stroke="' + v.drizzle + '" stroke-width="7" fill="none" opacity=".55" stroke-linecap="round"/>';
  inner += leafSprig(112, 106, -20, 1) + leafSprig(190, 122, 14, 1);
  for (i = 0; i < 6; i++) inner += '<path d="M' + (118 + i * 18) + ' ' + (124 - (i % 2) * 9) + ' q9 -7 18 1" stroke="#cf9548" stroke-width="2.6" fill="none" opacity=".92" stroke-linecap="round"/>';
  inner += '<path d="M72 116 q88 -32 176 0" fill="none" stroke="#ecd8ad" stroke-width="5" opacity=".45" stroke-linecap="round"/>';
  inner += steam(160, 84);
  return frame(inner);
}

/* ============================================================
   FAMILY: rice / noodles on stoneware
   ============================================================ */
function riceDish(key, v) {
  const rnd = seeded(key); let i;
  let inner = stoneware(160, 128, 92);
  inner += '<path d="M92 132 q12 -50 68 -50 q56 0 68 50 q-28 24 -68 24 q-40 0 -68 -24z" fill="' + (v.grain || "#f2e7d2") + '"/>';
  for (i = 0; i < 54; i++) {
    const x = n1(98 + rnd() * 124), y = n1(92 + rnd() * 56);
    inner += '<ellipse cx="' + x + '" cy="' + y + '" rx="5.2" ry="2.1" transform="rotate(' + n1(rnd() * 180) + ' ' + x + ' ' + y + ')" fill="' + (rnd() > 0.72 ? (v.accent || "#d99a3c") : "#fffaf0") + '" opacity=".94"/>';
  }
  const bc = v.bits || ["#5a8a3c", "#d4802b", "#c0392b"];
  for (i = 0; i < 16; i++) inner += '<circle cx="' + n1(102 + rnd() * 116) + '" cy="' + n1(94 + rnd() * 48) + '" r="' + n1(3.6 + rnd() * 2.6) + '" fill="' + bc[i % bc.length] + '"/>';
  if (v.egg) inner += '<g transform="translate(196 122)"><ellipse rx="15" ry="11" fill="#f9f3e5"/><ellipse rx="7" ry="5.4" fill="#e9b53f"/></g>';
  if (v.dryChili) inner += chiliSprig(104, 168, -10);
  inner += leafSprig(212, 104, 18, 1) + glisten(160, 120);
  return frame(inner);
}

function noodleDish(key, v) {
  const rnd = seeded(key); let i;
  let inner = stoneware(160, 128, 92);
  for (i = 0; i < 18; i++) {
    const w = 40 + rnd() * 20, y = n1(94 + i * 3.1);
    inner += '<path d="M' + n1(160 - w) + ' ' + y + ' q' + n1(w / 2) + ' ' + n1(-14 - rnd() * 9) + ' ' + n1(w) + ' 0 q' + n1(w / 2) + ' ' + n1(13 + rnd() * 8) + ' ' + n1(w) + ' 0" fill="none" stroke="' + v.tint + '" stroke-width="3.6" stroke-linecap="round" opacity=".96"/>';
  }
  if (v.sauce) inner += '<path d="M106 124 q54 -28 108 -4" fill="none" stroke="' + v.sauce + '" stroke-width="8" opacity=".45" stroke-linecap="round"/>';
  const bc = ["#5a8a3c", "#d4802b", "#c0392b"];
  for (i = 0; i < 12; i++) {
    const bx = n1(108 + rnd() * 104), by = n1(96 + rnd() * 48);
    inner += '<rect x="' + bx + '" y="' + by + '" width="10" height="4.6" rx="2.3" transform="rotate(' + n1(rnd() * 180) + ' ' + bx + ' ' + by + ')" fill="' + bc[i % 3] + '"/>';
  }
  if (v.egg) inner += '<g transform="translate(200 124)"><ellipse rx="14" ry="10" fill="#f9f3e5"/><ellipse rx="6.6" ry="5" fill="#e9b53f"/></g>';
  if (v.prawn) for (i = 0; i < 3; i++) inner += '<g transform="translate(' + (118 + i * 40) + ' 150) rotate(' + (-20 + i * 20) + ')"><path d="M-9 6 a11 11 0 1 1 12 -13 q-7 -1 -9 5 q-2 7 5 9 q-5 4 -8 -1z" fill="#e08b5c"/></g>';
  inner += leafSprig(210, 106, 16, 1);
  return frame(inner);
}

/* ============================================================
   FAMILY: breads on a dark board
   ============================================================ */
function bread(key, v) {
  const rnd = seeded(key); let i;
  let inner = slate();
  function speck(cx, cy, rx, ry, col, n) {
    let s = "";
    for (let j = 0; j < n; j++) {
      const a = rnd() * 6.283, r = rnd();
      s += '<circle cx="' + n1(cx + Math.cos(a) * rx * r * .8) + '" cy="' + n1(cy + Math.sin(a) * ry * r * .8) + '" r="' + n1(1.7 + rnd() * 2) + '" fill="' + col + '" opacity=".85"/>';
    }
    return s;
  }
  if (v.kind === "naan") {
    inner += '<path d="M160 48 q66 8 62 58 q-4 54 -62 74 q-58 -20 -62 -74 q-4 -50 62 -58z" fill="#ecd3a0"/>' +
      '<path d="M160 48 q66 8 62 58 q-4 54 -62 74 q-20 -7 -33 -22 q42 -48 33 -110z" fill="#dcbe85" opacity=".45"/>';
    inner += speck(160, 126, 48, 56, "#8a5a2b", 24);
    if (v.garlic) inner += speck(160, 126, 40, 46, "#4f7f3a", 14);
    if (v.sesame) inner += speck(160, 126, 40, 48, "#fff3d6", 20);
    if (v.butter) inner += '<path d="M132 84 q28 -15 50 5" stroke="#fff3d6" stroke-width="5" fill="none" opacity=".4" stroke-linecap="round"/>';
    if (v.chili) inner += speck(160, 126, 38, 44, "#a8331d", 10);
  } else if (v.kind === "roti") {
    inner += '<circle cx="160" cy="124" r="66" fill="#e6d1a6"/>' + speck(160, 124, 60, 60, "#9a6b32", 26) +
      '<circle cx="160" cy="124" r="66" fill="none" stroke="#c2a271" stroke-width="2"/>' +
      '<path d="M104 104 q56 -20 112 8" stroke="#c9a86f" stroke-width="2" fill="none" opacity=".6"/>';
    if (v.butter) inner += '<circle cx="152" cy="106" r="10" fill="#fff0c8" opacity=".55"/>';
  } else if (v.kind === "kulcha") {
    inner += '<circle cx="160" cy="124" r="64" fill="#ecd7a6"/>' + speck(160, 124, 56, 56, "#8a5a2b", 14) +
      '<circle cx="160" cy="124" r="36" fill="#e3c489" opacity=".85"/>' +
      speck(160, 124, 32, 32, v.cheese ? "#f4d780" : "#4f7f3a", 16) +
      '<circle cx="160" cy="124" r="64" fill="none" stroke="#c2a271" stroke-width="2"/>';
  } else if (v.kind === "puri") {
    [[122, 116, 42], [200, 126, 38], [162, 158, 32]].forEach(function (p) {
      inner += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="' + p[2] + '" fill="#e9c887"/>' +
        '<circle cx="' + (p[0] - p[2] / 3) + '" cy="' + (p[1] - p[2] / 3) + '" r="' + (p[2] / 3) + '" fill="#f6e0ae" opacity=".85"/>' +
        '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="' + p[2] + '" fill="none" stroke="#c08e42" stroke-width="1.8"/>';
    });
  } else if (v.kind === "parotta") {
    for (i = 0; i < 6; i++) inner += '<ellipse cx="' + (160 + (i % 2 ? 6 : -6)) + '" cy="' + (156 - i * 13) + '" rx="' + (60 - i * 2) + '" ry="' + (18 - i * 0.7) + '" fill="' + (i % 2 ? "#eed6a4" : "#e0c48c") + '" stroke="#bb9455" stroke-width="1.2"/>';
    if (v.salna) inner += stoneware(258, 178, 40) + '<circle cx="258" cy="178" r="32" fill="' + (v.salna) + '"/>';
  }
  return frame(inner);
}

/* ============================================================
   FAMILY: tandoor — skewers / drumsticks on slate
   ============================================================ */
function skewer(key, v) {
  const rnd = seeded(key);
  let inner = slate(), i, row;
  const tilt = (rnd() * 6 - 3);
  inner += '<g transform="rotate(' + n1(tilt) + ' 160 120)">' +
    '<path d="M34 100 h252 M34 138 h252" stroke="#a8adb3" stroke-width="3.2" stroke-linecap="round" opacity=".9"/>';
  const pieces = v.pieces || 4;
  for (row = 0; row < 2; row++) for (i = 0; i < pieces; i++) {
    const wide = pieces === 2;
    const x = wide ? 100 + i * 118 : 92 + i * 48, y = 100 + row * 38;
    inner += '<g transform="translate(' + x + ' ' + y + ')">' +
      '<rect x="' + (wide ? -46 : -21) + '" y="-17" width="' + (wide ? 92 : 42) + '" height="34" rx="' + (wide ? 16 : 10) + '" fill="' + v.meat + '"/>' +
      '<rect x="' + (wide ? -46 : -21) + '" y="-17" width="' + (wide ? 92 : 42) + '" height="11" rx="6" fill="#fff" opacity=".14"/>' +
      '<path d="M' + (wide ? -30 : -13) + ' 9 q' + (wide ? 30 : 13) + ' 7 ' + (wide ? 60 : 26) + ' 0" stroke="#000" stroke-width="1.7" opacity=".2" fill="none"/></g>';
    if (v.char) inner += '<path d="M' + (x - 15) + ' ' + n1(y - 7 + rnd() * 4 - 2) + ' q15 -7 30 2" stroke="' + v.char + '" stroke-width="3.2" fill="none" opacity=".9" stroke-linecap="round"/>';
  }
  inner += '</g>';
  inner += '<path d="M78 186 q30 -14 60 -2" stroke="#e3d4b1" stroke-width="3.2" fill="none" stroke-linecap="round" opacity=".9"/>' +
    chiliSprig(178, 190, -6) + leafSprig(238, 182, 14, 1.05);
  return frame(inner);
}

function drumstick(key, v) {
  const rnd = seeded(key);
  let inner = slate();
  const j = function () { return n1(rnd() * 12 - 6); };
  const pos = v.n === 2 ? [[118 + j(), 116 + j(), -18 + j()], [204 + j(), 128 + j(), 20 + j()]]
                        : [[104 + j(), 118 + j(), -24 + j()], [162 + j(), 104 + j(), 4 + j()], [216 + j(), 124 + j(), 26 + j()]];
  pos.forEach(function (p) {
    inner += '<g transform="translate(' + p[0] + ' ' + p[1] + ') rotate(' + p[2] + ')">' +
      '<path d="M-22 -6 q3 -33 23 -31 q24 -2 24 29 q0 29 -24 29 q-26 1 -23 -27z" fill="' + v.meat + '"/>' +
      '<path d="M-13 -8 q12 -10 24 -3" stroke="#fff" stroke-width="1.8" opacity=".2" fill="none"/>' +
      (v.char ? '<path d="M-14 8 q14 7 28 -2" stroke="' + v.char + '" stroke-width="3" fill="none" opacity=".8"/>' : '') +
      '<rect x="-3.5" y="16" width="10" height="18" rx="4.6" fill="#eadcb8"/>' +
      '<circle cx="1.5" cy="35" r="7.5" fill="#f5ecd6"/></g>';
  });
  inner += '<path d="M74 188 q30 -14 60 -2" stroke="#e3d4b1" stroke-width="3.2" fill="none" stroke-linecap="round" opacity=".9"/>' +
    leafSprig(232, 180, 16, 1.05) + chiliSprig(168, 194, -6);
  return frame(inner);
}

/* ============================================================
   FAMILY: snacks on banana leaf
   ============================================================ */
function snack(key, v) {
  const rnd = seeded(key); let i;
  let inner = bananaLeaf();
  if (v.kind === "samosa") {
    const set = v.count === 4
      ? [[110, 116, -14], [206, 110, 12], [128, 168, 6], [200, 166, -6]]
      : [[116, 120, -12], [204, 114, 14], [160, 168, 4]];
    set.forEach(function (p) {
      inner += '<g transform="translate(' + p[0] + ' ' + p[1] + ') rotate(' + p[2] + ') scale(' + (v.small ? .78 : 1) + ')">' +
        '<path d="M0 -32 l34 46 h-68z" fill="#e2a54f"/><path d="M0 -32 l34 46 h-17z" fill="#c8873a"/>' +
        '<path d="M0 -30 v42" stroke="#b1762f" stroke-width="1.7"/></g>';
    });
  } else if (v.kind === "bajji") {
    [[104, 122, -28], [162, 100, 6], [214, 132, 22], [156, 166, -8]].forEach(function (p) {
      inner += '<g transform="translate(' + p[0] + ' ' + p[1] + ') rotate(' + p[2] + ')">' +
        '<path d="M-32 0 q11 -18 32 -15 q23 2 32 15 q-9 16 -32 16 q-21 1 -32 -16z" fill="#dfa24c"/>' +
        '<path d="M-32 0 q11 -18 32 -15" stroke="#c1832f" stroke-width="2" fill="none"/>' +
        '<path d="M30 -9 q11 -9 13 -18" stroke="' + A.leaf + '" stroke-width="3.6" fill="none" stroke-linecap="round"/></g>';
    });
  } else if (v.kind === "pakoda") {
    for (i = 0; i < 20; i++) {
      const a = rnd() * 6.283, r = Math.sqrt(rnd()) * 62;
      inner += '<g transform="translate(' + n1(160 + Math.cos(a) * r) + ' ' + n1(132 + Math.sin(a) * r * 0.56) + ') rotate(' + n1(rnd() * 360) + ')">' +
        '<path d="M-12 0 q3 -10 12 -9 q10 -1 11 9 q1 10 -11 10 q-13 1 -12 -10z" fill="' + (rnd() > 0.5 ? (v.c1 || "#d99a44") : (v.c2 || "#c07f31")) + '"/>' +
        '<path d="M-8 -2 q8 -5 14 1" stroke="#a96b26" stroke-width="1.5" fill="none"/></g>';
    }
    if (v.cashew) for (i = 0; i < 5; i++) inner += '<path d="M-9 6 a11 11 0 1 1 12 -13 q-7 -1 -9 5 q-2 7 5 9 q-5 4 -8 -1z" fill="#f2e2bd" transform="translate(' + n1(112 + rnd() * 96) + ' ' + n1(108 + rnd() * 48) + ')"/>';
  } else if (v.kind === "patty") {
    [[112, 128, 0], [206, 120, 0], [160, 170, 0]].forEach(function (p) {
      inner += '<g transform="translate(' + n1(p[0] + rnd() * 14 - 7) + ' ' + n1(p[1] + rnd() * 12 - 6) + ') rotate(' + n1(rnd() * 20 - 10) + ')"><ellipse rx="32" ry="22" fill="#d59b45"/>' +
        '<ellipse rx="32" ry="22" fill="none" stroke="#b07a2c" stroke-width="2"/>' +
        '<ellipse cx="-9" cy="-7" rx="11" ry="7" fill="#eabb6a" opacity=".7"/></g>';
    });
  } else if (v.kind === "momo") {
    [[112, 126, -10], [208, 118, 12], [160, 172, 0]].forEach(function (p) {
      inner += '<g transform="translate(' + p[0] + ' ' + p[1] + ') rotate(' + p[2] + ')">' +
        '<path d="M-28 11 q0 -30 28 -30 q28 0 28 30 q-28 9 -56 0z" fill="#f4ecdc"/>' +
        '<g stroke="#d6c7ab" stroke-width="1.7" fill="none"><path d="M-19 4 q6 -13 4 -21"/><path d="M-7 0 q3 -15 2 -23"/><path d="M7 0 q-3 -15 -2 -23"/><path d="M19 4 q-6 -13 -4 -21"/></g>' +
        '<ellipse cy="11" rx="28" ry="6" fill="#e4d8bf"/></g>';
    });
  } else if (v.kind === "kothu") {
    const pc = ["#e6cd9a", "#d3ae69", "#c99b52"];
    for (i = 0; i < 34; i++) {
      const a = rnd() * 6.283, r = Math.sqrt(rnd()) * 66;
      const kx = n1(160 + Math.cos(a) * r), ky = n1(134 + Math.sin(a) * r * 0.56);
      inner += '<rect x="' + kx + '" y="' + ky + '" width="' + n1(16 + rnd() * 12) + '" height="9" rx="4" transform="rotate(' + n1(rnd() * 180) + ' ' + kx + ' ' + ky + ')" fill="' + pc[i % 3] + '"/>';
    }
    const mix = v.mix || ["#5a8a3c", "#c0392b", "#f6d97a"];
    for (i = 0; i < 12; i++) inner += '<circle cx="' + n1(106 + rnd() * 108) + '" cy="' + n1(104 + rnd() * 56) + '" r="4.6" fill="' + mix[i % mix.length] + '"/>';
  }
  return frame(inner);
}

/* ============================================================
   FAMILY: seafood
   ============================================================ */
function seafood(key, v) {
  const rnd = seeded(key); let i;
  let inner = bananaLeaf();
  if (v.kind === "fish") {
    inner += '<g transform="translate(160 126) rotate(' + n1(rnd() * 10 - 5) + ')">' +
      '<path d="M-70 0 q28 -38 66 -29 q38 9 50 29 q-12 20 -50 29 q-38 9 -66 -29z" fill="' + (v.c1 || "#c8752e") + '"/>' +
      '<path d="M-70 0 l-26 -24 v48z" fill="' + (v.c2 || "#b4661f") + '"/>' +
      '<circle cx="36" cy="-9" r="4.4" fill="#241610"/>' +
      '<path d="M-32 -13 q24 -7 48 2 M-32 0 q24 -7 48 2 M-32 13 q24 -7 48 2" stroke="#a35a1c" stroke-width="2.2" fill="none" opacity=".65"/></g>';
    if (v.pepper) for (i = 0; i < 12; i++) inner += '<circle cx="' + n1(100 + rnd() * 120) + '" cy="' + n1(100 + rnd() * 56) + '" r="2.6" fill="#1d1410" opacity=".9"/>';
  } else {
    for (i = 0; i < 6; i++) {
      const x = 106 + (i % 3) * 54, y = 112 + Math.floor(i / 3) * 44;
      inner += '<g transform="translate(' + x + ' ' + y + ') rotate(' + (-30 + i * 20) + ')">' +
        '<path d="M-15 11 a19 19 0 1 1 21 -23 q-12 -2 -15 8 q-4 13 10 16 q-10 7 -16 -1z" fill="' + (v.c1 || "#e08b5c") + '"/>' +
        '<path d="M-9 4 a13 13 0 0 1 13 -14" stroke="#b85f38" stroke-width="2.2" fill="none"/></g>';
    }
  }
  inner += leafSprig(240, 178, 16, 1.05) + chiliSprig(70, 184, -8);
  return frame(inner);
}

/* ============================================================
   FAMILY: dessert & drinks
   ============================================================ */
function dessert(key, v) {
  const rnd = seeded(key); let i;
  let inner = stoneware(160, 126, 84);
  const k = v.kind;
  if (k === "rasmalai") {
    inner += '<circle cx="160" cy="126" r="70" fill="#f7edd8"/>';
    [[132, 116], [190, 116], [160, 156]].forEach(function (p) {
      inner += '<ellipse cx="' + p[0] + '" cy="' + p[1] + '" rx="28" ry="18" fill="#fffaf0" stroke="#e9dcbf" stroke-width="1.7"/>';
    });
    for (i = 0; i < 12; i++) inner += '<circle cx="' + n1(114 + rnd() * 92) + '" cy="' + n1(94 + rnd() * 62) + '" r="2.4" fill="#4f7f3a" opacity=".85"/>';
    for (i = 0; i < 7; i++) inner += '<path d="M' + (120 + i * 16) + ' ' + (100 + (i % 2) * 48) + ' q7 -4 12 1" stroke="#e0a13c" stroke-width="2.6" fill="none" stroke-linecap="round"/>';
  } else if (k === "gulab") {
    inner += '<circle cx="160" cy="126" r="70" fill="#7a3a12"/>';
    [[130, 116], [192, 120], [160, 160]].forEach(function (p) {
      inner += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="24" fill="#8b4513"/><circle cx="' + (p[0] - 8) + '" cy="' + (p[1] - 9) + '" r="8" fill="#c98351" opacity=".6"/>';
    });
    inner += '<circle cx="160" cy="126" r="70" fill="#c98328" opacity=".16"/>' + glisten(160, 126);
  } else if (k === "rabdi") {
    inner += '<circle cx="160" cy="126" r="70" fill="#f3e6c8"/>';
    [[134, 120], [190, 124]].forEach(function (p) {
      inner += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="23" fill="#8b4513"/><circle cx="' + (p[0] - 8) + '" cy="' + (p[1] - 8) + '" r="7" fill="#c98351" opacity=".55"/>';
    });
    inner += '<path d="M128 160 q16 -14 32 0 q16 14 32 0" fill="none" stroke="#fffaf0" stroke-width="4" stroke-linecap="round" opacity=".9"/>';
    for (i = 0; i < 10; i++) inner += '<circle cx="' + n1(118 + rnd() * 84) + '" cy="' + n1(96 + rnd() * 58) + '" r="2.6" fill="#a8331d" opacity=".75"/>';
  } else if (k === "meetha") {
    inner += '<circle cx="160" cy="126" r="70" fill="#e7cf9e"/>';
    [[132, 112], [190, 118], [160, 158]].forEach(function (p) {
      inner += '<rect x="' + (p[0] - 24) + '" y="' + (p[1] - 16) + '" width="48" height="32" rx="4" fill="#d8a54e" stroke="#b8802f" stroke-width="1.7"/>';
    });
    for (i = 0; i < 12; i++) inner += '<ellipse cx="' + n1(116 + rnd() * 88) + '" cy="' + n1(96 + rnd() * 58) + '" rx="4.4" ry="2.2" fill="#f8f3e6" opacity=".9"/>';
  } else if (k === "halwa") {
    inner += '<circle cx="160" cy="126" r="70" fill="#191309"/>' +
      '<path d="M98 142 q16 -54 62 -54 q46 0 62 54 q-28 22 -62 22 q-34 0 -62 -22z" fill="#c0431f"/>';
    for (i = 0; i < 30; i++) {
      const hx = n1(104 + rnd() * 112), hy = n1(96 + rnd() * 56);
      inner += '<rect x="' + hx + '" y="' + hy + '" width="8" height="3.6" rx="1.8" transform="rotate(' + n1(rnd() * 180) + ' ' + hx + ' ' + hy + ')" fill="' + (rnd() > 0.5 ? "#e0592b" : "#a8331d") + '"/>';
    }
    for (i = 0; i < 9; i++) inner += '<ellipse cx="' + n1(114 + rnd() * 88) + '" cy="' + n1(98 + rnd() * 48) + '" rx="5.4" ry="3.2" fill="#f4e6c6" opacity=".92"/>';
  } else if (k === "apricot") {
    inner += '<circle cx="160" cy="126" r="70" fill="#f5ead2"/>';
    [[134, 122], [190, 126], [160, 160]].forEach(function (p) {
      inner += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="21" fill="#e08a2b"/><path d="M' + p[0] + ' ' + (p[1] - 21) + ' v42" stroke="#c06f1c" stroke-width="1.7"/>';
    });
    inner += '<path d="M128 98 q16 -14 32 0 q16 14 32 0" fill="none" stroke="#fffaf0" stroke-width="4" stroke-linecap="round" opacity=".9"/>';
  } else if (k === "paan") {
    inner += '<circle cx="160" cy="126" r="70" fill="#141109"/>' +
      '<g transform="translate(160 128) scale(1.45)">' +
      '<path d="M0 -46 q42 26 0 78 q-42 -52 0 -78z" fill="#2f6b2a"/>' +
      '<path d="M0 -46 q42 26 0 78" fill="#4f8b3a" opacity=".7"/>' +
      '<path d="M0 -42 v72" stroke="#8fc07a" stroke-width="1.7"/>' +
      '<path d="M0 -20 q-16 8 -20 20 M0 -20 q16 8 20 20 M0 2 q-12 6 -15 14 M0 2 q12 6 15 14" stroke="#8fc07a" stroke-width="1.1" fill="none" opacity=".8"/></g>' +
      '<circle cx="160" cy="96" r="5.6" fill="#a8331d"/><circle cx="148" cy="108" r="3.6" fill="#eadcb4"/><circle cx="173" cy="110" r="3.6" fill="#eadcb4"/>';
  }
  return frame(inner);
}

function drink(key, v) {
  let inner = "";
  const k = v.kind;
  if (k === "cup") {
    const brew = v.brew, hi = v.hi;
    inner += '<ellipse cx="150" cy="198" rx="78" ry="13" fill="#000" opacity=".45"/>' +
      '<path d="M96 108 h108 q-6 78 -54 78 q-48 0 -54 -78z" fill="#efe6d4"/>' +
      '<path d="M204 122 q32 5 28 27 q-4 23 -32 21" fill="none" stroke="#efe6d4" stroke-width="9"/>' +
      '<ellipse cx="150" cy="108" rx="54" ry="15" fill="#efe6d4"/>' +
      '<ellipse cx="150" cy="108" rx="46" ry="11.5" fill="' + brew + '"/>' +
      '<ellipse cx="150" cy="108" rx="26" ry="6" fill="' + hi + '" opacity=".75"/>' +
      '<ellipse cx="150" cy="192" rx="46" ry="10" fill="#e2d7c1"/>' + steam(150, 82);
  } else if (k === "glass") {
    inner += '<ellipse cx="160" cy="208" rx="58" ry="11" fill="#000" opacity=".45"/>' +
      '<path d="M118 42 h84 l-10 160 h-64z" fill="#ffffff" opacity=".10"/>' +
      '<path d="M122 60 h76 l-9 140 h-58z" fill="' + v.liquid + '"/>' +
      '<path d="M122 60 h76 l-2.4 38 h-71.2z" fill="#fff" opacity=".22"/>' +
      '<path d="M118 42 h84 l-10 160 h-64z" fill="none" stroke="' + A.goldHi + '" stroke-width="2" opacity=".6"/>' +
      '<ellipse cx="160" cy="44" rx="42" ry="9" fill="' + v.liquid + '" opacity=".9"/>' +
      (v.garnish === "mango"
        ? '<path d="M186 38 q15 -15 27 -11 q-6 17 -27 11z" fill="#e8a12c"/>'
        : '<g fill="#d9c39a"><ellipse cx="146" cy="40" rx="7.4" ry="4.6"/><ellipse cx="172" cy="42" rx="7.4" ry="4.6"/></g>');
  } else if (k === "beer") {
    inner += '<ellipse cx="158" cy="208" rx="60" ry="11" fill="#000" opacity=".45"/>' +
      '<path d="M116 58 h84 v144 h-84z" fill="#e0a02c" opacity=".93"/>' +
      '<path d="M116 58 h84 v18 h-84z" fill="#fbf3e2"/>' +
      '<path d="M116 52 q42 -18 84 0 v10 h-84z" fill="#fdf8ec"/>' +
      '<path d="M200 90 q35 6 31 35 q-4 29 -31 27" fill="none" stroke="#cbb896" stroke-width="9" opacity=".9"/>' +
      '<path d="M116 58 h84 v144 h-84z" fill="none" stroke="#cbb896" stroke-width="2.4"/>' +
      '<g fill="#fff" opacity=".28"><circle cx="136" cy="118" r="4"/><circle cx="152" cy="150" r="3"/><circle cx="176" cy="130" r="3.4"/><circle cx="164" cy="176" r="2.6"/></g>';
  }
  return frame(inner);
}

/* ---------- dispatcher ---------- */
const FAMILY = {
  curry: curry, fry: fry, biryani: biryani, rice: riceDish, noodle: noodleDish,
  bread: bread, skewer: skewer, drum: drumstick, snack: snack, sea: seafood,
  dessert: dessert, drink: drink
};

const DISH_FALLBACK = "data:image/svg+xml," + encodeURIComponent(frame(
  stoneware(160, 118, 78) +
  '<g transform="translate(160,104)">' +
  '<path d="M0,-34 C13,-20 13,-4 0,9 C-13,-4 -13,-20 0,-34Z" fill="' + A.burgundy + '"/>' +
  '<path d="M-14,-9 C2,-13 13,-4 14,11 C-2,15 -13,5 -14,-9Z" fill="' + A.burgundy + '" transform="rotate(-52)"/>' +
  '<path d="M14,-9 C-2,-13 -13,-4 -14,11 C2,15 13,5 14,-9Z" fill="' + A.burgundy + '" transform="rotate(52)"/></g>' +
  '<text x="160" y="176" text-anchor="middle" fill="' + A.gold + '" font-family="Georgia,serif" font-size="18" letter-spacing="7">VAARAAHI</text>'
));

const _cache = {};
function drawnImage(slug) {
  if (_cache[slug]) return _cache[slug];
  const spec = DISH_STYLE[slug];
  const uri = (spec && FAMILY[spec[0]])
    ? "data:image/svg+xml," + encodeURIComponent(FAMILY[spec[0]](slug, spec[1]))
    : DISH_FALLBACK;
  _cache[slug] = uri;
  return uri;
}
function dishImage(slug) {
  if (PHOTOS.indexOf(slug) !== -1) return PHOTO_DIR + slug + PHOTO_EXT;
  if (PHOTO_URLS[slug]) return PHOTO_URLS[slug];
  return drawnImage(slug);
}
function _unused_dishImage(slug) {
  if (_cache[slug]) return _cache[slug];
  const spec = DISH_STYLE[slug];
  const uri = (spec && FAMILY[spec[0]])
    ? "data:image/svg+xml," + encodeURIComponent(FAMILY[spec[0]](slug, spec[1]))
    : DISH_FALLBACK;
  _cache[slug] = uri;
  return uri;
}

/* ---------- dish styles: one entry per dish, generated from the menu ---------- */
const DISH_STYLE = {
  "mirchi-bajji": ["snack", {"kind":"bajji"}],
  "onion-pakoda": ["snack", {"kind":"pakoda","cashew":false,"c1":"#d99a44","c2":"#c07f31"}],
  "onion-samosa": ["snack", {"kind":"samosa","count":4,"small":true}],
  "punjabi-samosa": ["snack", {"kind":"samosa","count":3,"small":false}],
  "crispy-masala-pepper-corn": ["fry", {"c1":"#7a4a26","c2":"#523016","pepper":true,"leaves":2,"piece":"ring"}],
  "veg-cutlet": ["snack", {"kind":"patty"}],
  "aloo-tikki": ["snack", {"kind":"patty"}],
  "karivepaku-paneer": ["fry", {"c1":"#6b3a1c","c2":"#4a2410","leaves":5,"piece":"cube"}],
  "karivepaku-gobi": ["fry", {"c1":"#6b3a1c","c2":"#4a2410","leaves":5,"piece":"floret"}],
  "karappodi-gobi": ["fry", {"c1":"#a35422","c2":"#7a3714","leaves":2,"piece":"floret"}],
  "gobi-65": ["fry", {"c1":"#c0392b","c2":"#96281b","leaves":4,"piece":"floret"}],
  "gobi-manchurian": ["fry", {"c1":"#7d3f1c","c2":"#5c2a12","onion":true,"leaves":1,"piece":"floret"}],
  "veg-manchurian": ["fry", {"c1":"#7d3f1c","c2":"#5c2a12","onion":true,"leaves":1,"piece":"ball"}],
  "babycorn-manchurian": ["fry", {"c1":"#7d3f1c","c2":"#5c2a12","onion":true,"leaves":1,"piece":"ring"}],
  "paneer-manchurian": ["fry", {"c1":"#7d3f1c","c2":"#5c2a12","onion":true,"leaves":1,"piece":"cube"}],
  "chilli-paneer": ["fry", {"c1":"#b8471f","c2":"#8c3113","onion":true,"leaves":1,"piece":"cube"}],
  "water-chestnut-pepper-fry": ["fry", {"c1":"#7a4a26","c2":"#523016","pepper":true,"leaves":2,"piece":"cube"}],
  "mushroom-manchurian": ["fry", {"c1":"#7d3f1c","c2":"#5c2a12","onion":true,"leaves":1,"piece":"mushroom"}],
  "mushroom-pepper-fry": ["fry", {"c1":"#7a4a26","c2":"#523016","pepper":true,"leaves":2,"piece":"mushroom"}],
  "chilli-mushroom": ["fry", {"c1":"#b8471f","c2":"#8c3113","onion":true,"leaves":1,"piece":"mushroom"}],
  "nallakaram-gobi": ["fry", {"c1":"#3e2415","c2":"#2a1710","leaves":3,"piece":"floret"}],
  "nilgiri-gobi-paneer": ["fry", {"c1":"#5c8a3f","c2":"#3f6b2c","leaves":3,"piece":"floret"}],
  "kaju-spinach-pakoda": ["snack", {"kind":"pakoda","cashew":true,"c1":"#8f9c3c","c2":"#6d7a2c"}],
  "paneer-65": ["fry", {"c1":"#c0392b","c2":"#96281b","leaves":4,"piece":"cube"}],
  "vegetable-momos": ["snack", {"kind":"momo"}],
  "wok-fried-chilli-potato": ["fry", {"c1":"#b8471f","c2":"#8c3113","onion":true,"leaves":1,"piece":"wedge"}],
  "paneer-tikka-kebab": ["skewer", {"meat":"#dc8c3a","char":"#8a3a12"}],
  "monagadu-gobi-babycorn": ["fry", {"c1":"#8c3113","c2":"#63200a","dryChili":true,"leaves":4,"piece":"floret"}],
  "pepper-fry-gobi-babycorn": ["fry", {"c1":"#7a4a26","c2":"#523016","pepper":true,"leaves":2,"piece":"floret"}],
  "fire-babycorn-paneer-gobi": ["fry", {"c1":"#c73a1a","c2":"#9e2610","dryChili":true,"leaves":1,"piece":"floret"}],
  "777": ["fry", {"c1":"#c0392b","c2":"#d9873c","leaves":2,"piece":"cube"}],
  "charminar-chicken": ["fry", {"c1":"#c73a1a","c2":"#9e2610","dryChili":true,"leaves":1,"piece":"cube"}],
  "chicken-777": ["fry", {"c1":"#c0392b","c2":"#d9873c","leaves":2,"piece":"cube"}],
  "chicken-65": ["fry", {"c1":"#c0392b","c2":"#96281b","leaves":4,"piece":"ball"}],
  "chicken-lollipop": ["drum", {"meat":"#c0392b","char":"#7d1f0c"}],
  "chicken-manchurian": ["fry", {"c1":"#7d3f1c","c2":"#5c2a12","onion":true,"leaves":1,"piece":"ball"}],
  "chilli-chicken": ["fry", {"c1":"#b8471f","c2":"#8c3113","onion":true,"leaves":1,"piece":"strip"}],
  "karivepaku-chicken": ["fry", {"c1":"#6b3a1c","c2":"#4a2410","leaves":5,"piece":"cube"}],
  "dhamaka-chicken": ["fry", {"c1":"#a8551f","c2":"#7d3a13","leaves":3,"piece":"cube"}],
  "dhaba-chicken": ["fry", {"c1":"#a8551f","c2":"#7d3a13","leaves":3,"piece":"cube"}],
  "karaikudi-chicken-roast": ["fry", {"c1":"#8c3113","c2":"#63200a","dryChili":true,"leaves":4,"piece":"chunkbone"}],
  "rayalaseema-kodi-roast": ["fry", {"c1":"#8c3113","c2":"#63200a","dryChili":true,"leaves":4,"piece":"chunkbone"}],
  "chicken-pepper-fry": ["fry", {"c1":"#7a4a26","c2":"#523016","pepper":true,"leaves":2,"piece":"strip"}],
  "silk-chicken": ["fry", {"c1":"#e0c79a","c2":"#c9ab74","leaves":1,"piece":"strip"}],
  "nallakaram-chicken": ["fry", {"c1":"#3e2415","c2":"#2a1710","leaves":3,"piece":"cube"}],
  "chicken-bone-fry": ["fry", {"c1":"#a8551f","c2":"#7d3a13","leaves":3,"piece":"chunkbone"}],
  "drums-of-heaven": ["drum", {"meat":"#c0392b","char":"#7d1f0c"}],
  "nilgiri-chicken": ["fry", {"c1":"#5c8a3f","c2":"#3f6b2c","leaves":3,"piece":"cube"}],
  "japan-chicken": ["fry", {"c1":"#d99a44","c2":"#b87a2c","sesame":true,"leaves":1,"piece":"cube"}],
  "fire-chicken": ["fry", {"c1":"#c73a1a","c2":"#9e2610","dryChili":true,"leaves":1,"piece":"cube"}],
  "chennai-chicken-65": ["fry", {"c1":"#c0392b","c2":"#96281b","leaves":4,"piece":"ball"}],
  "chilli-fish-shrimp": ["fry", {"c1":"#b8471f","c2":"#8c3113","onion":true,"leaves":1,"piece":"prawn"}],
  "fish-777-shrimp": ["fry", {"c1":"#c0392b","c2":"#d9873c","leaves":2,"piece":"cube"}],
  "crispy-andhra-fried-fish": ["sea", {"kind":"fish","pepper":false,"c1":"#c8752e"}],
  "fish-pollichathu": ["sea", {"kind":"fish","pepper":true,"c1":"#8c3113"}],
  "tawa-fish-shrimp": ["sea", {"kind":"fish","pepper":false,"c1":"#c8752e"}],
  "nallakaram-fish-shrimp": ["fry", {"c1":"#3e2415","c2":"#2a1710","leaves":3,"piece":"prawn"}],
  "shrimp-65": ["fry", {"c1":"#c0392b","c2":"#96281b","leaves":4,"piece":"prawn"}],
  "shrimp-pepper-fry": ["fry", {"c1":"#7a4a26","c2":"#523016","pepper":true,"leaves":2,"piece":"prawn"}],
  "shrimp-manchurian": ["fry", {"c1":"#7d3f1c","c2":"#5c2a12","onion":true,"leaves":1,"piece":"prawn"}],
  "rayalaseema-royya-vepudu": ["fry", {"c1":"#8c3113","c2":"#63200a","dryChili":true,"leaves":4,"piece":"chunkbone"}],
  "shrimp-dynamite": ["fry", {"c1":"#e4795c","c2":"#c4523a","onion":true,"leaves":1,"piece":"prawn"}],
  "goat-sukka": ["fry", {"c1":"#8c3113","c2":"#63200a","dryChili":true,"leaves":4,"piece":"chunkbone","n":10}],
  "goat-chops": ["drum", {"meat":"#7a3a18","char":"#4a1c08","n":2}],
  "tadka-daal": ["curry", {"g1":"#d9a72c","g2":"#c08d1c","leaves":3,"steam":true,"chunk":"lentil"}],
  "spinach-daal": ["curry", {"g1":"#8f9c2c","g2":"#6d7a1c","leaves":3,"steam":true,"chunk":"lentil"}],
  "mango-daal": ["curry", {"g1":"#e0b02c","g2":"#c4931c","leaves":2,"steam":true,"chunk":"lentil"}],
  "aloo-gobi-masala": ["fry", {"c1":"#d99a44","c2":"#b87a2c","leaves":2,"piece":"floret"}],
  "gutti-vankai-curry": ["curry", {"g1":"#b8481c","g2":"#8c3010","leaves":2,"chunk":"brinjal"}],
  "punjabi-chana-masala": ["curry", {"g1":"#7a4a22","g2":"#5d3415","leaves":2,"chunk":"chana"}],
  "vegetable-tikka-masala": ["curry", {"g1":"#c85526","g2":"#a03c14","cream":true,"leaves":2,"chunk":"veg"}],
  "kadai-paneer": ["curry", {"g1":"#b8481c","g2":"#8c3010","leaves":2,"chunk":"paneer"}],
  "paneer-butter-masala": ["curry", {"g1":"#dd7130","g2":"#c2521a","cream":true,"leaves":1,"chunk":"paneer"}],
  "paneer-tikka-masala": ["curry", {"g1":"#c85526","g2":"#a03c14","cream":true,"leaves":2,"chunk":"paneer"}],
  "mutter-paneer": ["curry", {"g1":"#b8481c","g2":"#8c3010","leaves":2,"chunk":"paneer"}],
  "palak-paneer": ["curry", {"g1":"#3f7a34","g2":"#2c5c24","cream":true,"leaves":0,"chunk":"paneer"}],
  "methi-chaman": ["curry", {"g1":"#7f6a24","g2":"#5d4c16","leaves":4,"chunk":"veg"}],
  "nilgiri-paneer-veg": ["curry", {"g1":"#4f7f3a","g2":"#38612a","coconut":true,"leaves":2,"chunk":"paneer"}],
  "navratan-korma": ["curry", {"g1":"#e6c68a","g2":"#d3ad66","cream":true,"leaves":1,"chunk":"veg"}],
  "malai-kofta": ["curry", {"g1":"#e6c68a","g2":"#d3ad66","cream":true,"leaves":1,"chunk":"kofta"}],
  "vegetable-chettinad": ["curry", {"g1":"#7c3a1c","g2":"#56230f","pepper":true,"leaves":3,"chunk":"veg"}],
  "paneer-chettinad": ["curry", {"g1":"#7c3a1c","g2":"#56230f","pepper":true,"leaves":3,"chunk":"paneer"}],
  "shahi-paneer": ["curry", {"g1":"#e8c9a2","g2":"#d4ac7e","cream":true,"leaves":1,"chunk":"paneer"}],
  "bhindi-masala": ["curry", {"g1":"#a83a17","g2":"#7d2609","dryChili":false,"leaves":3,"chunk":"okra"}],
  "malabar-veg-curry": ["curry", {"g1":"#d9c9a0","g2":"#c4b183","coconut":true,"leaves":3,"chunk":"veg"}],
  "vegetable-salna": ["curry", {"g1":"#a8562a","g2":"#7d3a18","leaves":2,"chunk":"veg"}],
  "andhra-veg-curry": ["curry", {"g1":"#a83a17","g2":"#7d2609","dryChili":true,"leaves":3,"chunk":"veg"}],
  "egg-masala": ["curry", {"g1":"#b8481c","g2":"#8c3010","leaves":2,"chunk":"egg"}],
  "egg-tikka-masala": ["curry", {"g1":"#c85526","g2":"#a03c14","cream":true,"leaves":2,"chunk":"egg"}],
  "butter-chicken": ["curry", {"g1":"#dd7130","g2":"#c2521a","cream":true,"leaves":1,"chunk":"meat"}],
  "chicken-tikka-masala": ["curry", {"g1":"#c85526","g2":"#a03c14","cream":true,"leaves":2,"chunk":"meat"}],
  "chicken-chettinad": ["curry", {"g1":"#7c3a1c","g2":"#56230f","pepper":true,"leaves":3,"chunk":"meat"}],
  "chicken-korma": ["curry", {"g1":"#e6c68a","g2":"#d3ad66","cream":true,"leaves":1,"chunk":"meat"}],
  "gongura-chicken": ["curry", {"g1":"#93381f","g2":"#6d2410","gongura":true,"leaves":1,"chunk":"meat"}],
  "chicken-vindaloo": ["curry", {"g1":"#8f2411","g2":"#66160a","dryChili":true,"leaves":1,"chunk":"lentil"}],
  "kadai-chicken": ["curry", {"g1":"#b8481c","g2":"#8c3010","leaves":2,"chunk":"meat"}],
  "methi-chicken": ["curry", {"g1":"#7f6a24","g2":"#5d4c16","leaves":4,"chunk":"meat"}],
  "kodi-vepudu": ["curry", {"g1":"#8c3f18","g2":"#63270c","dryChili":true,"leaves":4,"chunk":"meat"}],
  "malabar-chicken": ["curry", {"g1":"#d9c9a0","g2":"#c4b183","coconut":true,"leaves":3,"chunk":"meat"}],
  "chicken-saagwala": ["curry", {"g1":"#3f7a34","g2":"#2c5c24","cream":true,"leaves":0,"chunk":"meat"}],
  "nilgiri-chicken-curry": ["curry", {"g1":"#4f7f3a","g2":"#38612a","coconut":true,"leaves":2,"chunk":"meat"}],
  "hyderabadi-murg-masala": ["curry", {"g1":"#c04a1c","g2":"#95330f","cream":true,"leaves":2,"chunk":"meat"}],
  "chicken-salna": ["curry", {"g1":"#a8562a","g2":"#7d3a18","leaves":2,"chunk":"meat"}],
  "andhra-chicken-curry": ["curry", {"g1":"#a83a17","g2":"#7d2609","dryChili":true,"leaves":3,"chunk":"meat"}],
  "gongura-goat-curry": ["curry", {"g1":"#93381f","g2":"#6d2410","gongura":true,"leaves":1,"chunk":"bone"}],
  "andhra-special-goat-curry": ["curry", {"g1":"#a83a17","g2":"#7d2609","dryChili":true,"leaves":3,"chunk":"bone"}],
  "kadai-goat": ["curry", {"g1":"#b8481c","g2":"#8c3010","leaves":2,"chunk":"bone"}],
  "goat-chettinad": ["curry", {"g1":"#7c3a1c","g2":"#56230f","pepper":true,"leaves":3,"chunk":"bone"}],
  "goat-vindaloo": ["curry", {"g1":"#8f2411","g2":"#66160a","dryChili":true,"leaves":1,"chunk":"lentil"}],
  "nilgiri-goat": ["curry", {"g1":"#4f7f3a","g2":"#38612a","coconut":true,"leaves":2,"chunk":"bone"}],
  "goat-korma": ["curry", {"g1":"#e6c68a","g2":"#d3ad66","cream":true,"leaves":1,"chunk":"bone"}],
  "mutton-masala": ["curry", {"g1":"#a83a17","g2":"#7d2609","dryChili":true,"leaves":3,"chunk":"bone"}],
  "goat-saagwala": ["curry", {"g1":"#3f7a34","g2":"#2c5c24","cream":true,"leaves":0,"chunk":"bone"}],
  "goat-tikka-masala": ["curry", {"g1":"#c85526","g2":"#a03c14","cream":true,"leaves":2,"chunk":"bone"}],
  "malabar-fish-shrimp-curry": ["curry", {"g1":"#d9c9a0","g2":"#c4b183","coconut":true,"leaves":3,"chunk":"fish"}],
  "andhra-fish-shrimp-curry": ["curry", {"g1":"#a83a17","g2":"#7d2609","dryChili":true,"leaves":3,"chunk":"fish"}],
  "nellore-chepala-pulusu": ["curry", {"g1":"#a83a17","g2":"#7d2609","dryChili":true,"leaves":3,"chunk":"fish"}],
  "naan": ["bread", {"kind":"naan","garlic":false,"sesame":false,"butter":false,"chili":false}],
  "butter-naan": ["bread", {"kind":"naan","garlic":false,"sesame":false,"butter":true,"chili":false}],
  "garlic-naan": ["bread", {"kind":"naan","garlic":true,"sesame":false,"butter":false,"chili":false}],
  "onion-kulcha": ["bread", {"kind":"kulcha","cheese":false}],
  "cheese-kulcha": ["bread", {"kind":"kulcha","cheese":true}],
  "bullet-naan": ["bread", {"kind":"naan","garlic":false,"sesame":false,"butter":false,"chili":true}],
  "sesame-naan": ["bread", {"kind":"naan","garlic":false,"sesame":true,"butter":false,"chili":false}],
  "roti": ["bread", {"kind":"roti","butter":false}],
  "butter-roti": ["bread", {"kind":"roti","butter":true}],
  "chapathi": ["bread", {"kind":"roti","butter":false}],
  "puri": ["bread", {"kind":"puri"}],
  "tandoori-chicken": ["drum", {"meat":"#b8331b","char":"#6d1a08"}],
  "chicken-tikka-kebab": ["skewer", {"meat":"#c0392b","char":"#7d1f0c"}],
  "murg-malai-kebab": ["skewer", {"meat":"#e8d6a8","char":"#c9a44e"}],
  "lasooni-chicken-kebab": ["skewer", {"meat":"#d9873c","char":"#8a3a12"}],
  "chicken-sheek-kebab": ["skewer", {"meat":"#8c4020","char":"#5e230c","pieces":2}],
  "lamb-sheek-kebab": ["skewer", {"meat":"#8c4020","char":"#5e230c","pieces":2}],
  "hariyali-chicken-kebab": ["skewer", {"meat":"#4f7f3a","char":"#2f5a22"}],
  "tangdi-kebab": ["drum", {"meat":"#c0392b","char":"#7d1f0c"}],
  "veg-dum-biryani": ["biryani", {"rice":"#f0e5ce","top":"veg"}],
  "vijayawada-veg": ["biryani", {"rice":"#f0e5ce","top":"veg","tint":"#d4632a"}],
  "vijayawada-paneer": ["biryani", {"rice":"#f0e5ce","top":"paneer","tint":"#d4632a"}],
  "paneer-fry-biryani": ["biryani", {"rice":"#ecdcbe","top":"paneer"}],
  "veg-keema-biryani-pulao": ["biryani", {"rice":"#f0e5ce","top":"keema"}],
  "veg-roast-pulao": ["biryani", {"rice":"#ecdcbe","top":"veg"}],
  "gutti-vankai-biryani": ["biryani", {"rice":"#f0e5ce","top":"veg"}],
  "ulavacharu-veg-paneer": ["biryani", {"rice":"#f0e5ce","top":"paneer","drizzle":"#3a2410"}],
  "gongura-veg-paneer": ["biryani", {"rice":"#f0e5ce","top":"paneer","gongura":true,"tint":"#8fae55"}],
  "nilgiri-veg-biryani": ["biryani", {"rice":"#f0e5ce","top":"veg","tint":"#8fae55"}],
  "chicken-dum-biryani": ["biryani", {"rice":"#f0e5ce","top":"meat","topFill":"#a2521f"}],
  "vijayawada-chicken-biryani": ["biryani", {"rice":"#f0e5ce","top":"meat","topFill":"#a2521f","tint":"#d4632a"}],
  "rayalaseema-kodi-roast-chicken-biryani-pulao": ["biryani", {"rice":"#ecdcbe","top":"meat","topFill":"#8c3113","tint":"#c04a1c"}],
  "ulavacharu-chicken-biryani-pulao": ["biryani", {"rice":"#f0e5ce","top":"meat","topFill":"#a2521f","drizzle":"#3a2410"}],
  "gongura-chicken-biryani-pulao": ["biryani", {"rice":"#f0e5ce","top":"meat","topFill":"#a2521f","gongura":true,"tint":"#8fae55"}],
  "avakai-chicken-biryani": ["biryani", {"rice":"#f0e5ce","top":"meat","topFill":"#a2521f","mango":true,"tint":"#e0b12c"}],
  "nilgiri-chicken-biryani": ["biryani", {"rice":"#f0e5ce","top":"meat","topFill":"#a2521f","tint":"#8fae55"}],
  "egg-fry-pulao": ["biryani", {"rice":"#ecdcbe","top":"egg","topFill":"#a2521f"}],
  "vijayawada-egg-biryani": ["biryani", {"rice":"#f0e5ce","top":"egg","topFill":"#a2521f","tint":"#d4632a"}],
  "bezawada-chickenn-fry-piece-biryani": ["biryani", {"rice":"#ecdcbe","top":"meat","topFill":"#a2521f","tint":"#d4632a"}],
  "nalli-gosht-biryani": ["biryani", {"rice":"#f4ead6","top":"bone","topFill":"#77361a"}],
  "goat-dum-biryani": ["biryani", {"rice":"#f0e5ce","top":"bone","topFill":"#77361a"}],
  "goat-roast-pulao-biryani": ["biryani", {"rice":"#ecdcbe","top":"bone","topFill":"#77361a"}],
  "gongura-mutton-biryani": ["biryani", {"rice":"#f0e5ce","top":"bone","topFill":"#77361a","gongura":true,"tint":"#8fae55"}],
  "goat-keema-biryani-pulao": ["biryani", {"rice":"#f0e5ce","top":"keema","topFill":"#77361a"}],
  "nilgiri-goat-biryani-pulao": ["biryani", {"rice":"#f0e5ce","top":"bone","topFill":"#77361a","tint":"#8fae55"}],
  "gongura-goat-kheema-biryani": ["biryani", {"rice":"#f0e5ce","top":"keema","topFill":"#77361a","gongura":true,"tint":"#8fae55"}],
  "shrimp-biryani": ["biryani", {"rice":"#f0e5ce","top":"prawn"}],
  "shrimp-roast-pulao": ["biryani", {"rice":"#ecdcbe","top":"prawn"}],
  "vijayawada-shrimp-biryani": ["biryani", {"rice":"#f0e5ce","top":"prawn","tint":"#d4632a"}],
  "street-style-veg-fried-rice": ["rice", {"grain":"#f4ead6"}],
  "street-style-egg-fried-rice": ["rice", {"grain":"#f4ead6","egg":true,"bits":["#f6d97a","#5a8a3c","#d4802b"]}],
  "street-style-chicken-fried-rice": ["rice", {"grain":"#f4ead6","bits":["#a8551f","#5a8a3c","#d4802b"]}],
  "street-style-shrimp-fried-rice": ["rice", {"grain":"#f4ead6","bits":["#e08b5c","#5a8a3c","#c0392b"]}],
  "schezwan-veg-fried-rice": ["rice", {"grain":"#e8a97e","accent":"#c0392b","dryChili":true}],
  "schezwan-egg-fried-rice": ["rice", {"grain":"#e8a97e","accent":"#c0392b","dryChili":true,"egg":true,"bits":["#f6d97a","#5a8a3c","#d4802b"]}],
  "schezwan-chicken-fried-rice": ["rice", {"grain":"#e8a97e","accent":"#c0392b","dryChili":true,"bits":["#a8551f","#5a8a3c","#d4802b"]}],
  "schezwan-shrimp-fried-rice": ["rice", {"grain":"#e8a97e","accent":"#c0392b","dryChili":true,"bits":["#e08b5c","#5a8a3c","#c0392b"]}],
  "street-style-veg-noodles": ["noodle", {"tint":"#e8c877"}],
  "street-style-egg-noodles": ["noodle", {"tint":"#e8c877","egg":true}],
  "street-style-chicken-noodles": ["noodle", {"tint":"#e8c877"}],
  "street-style-shrimp-noodles": ["noodle", {"tint":"#e8c877","prawn":true}],
  "schezwan-veg-noodles": ["noodle", {"tint":"#d98d55","sauce":"#a8331d"}],
  "schezwan-egg-noodles": ["noodle", {"tint":"#d98d55","sauce":"#a8331d","egg":true}],
  "schezwan-chicken-noodles": ["noodle", {"tint":"#d98d55","sauce":"#a8331d"}],
  "schezwan-shrimp-noodles": ["noodle", {"tint":"#d98d55","sauce":"#a8331d","prawn":true}],
  "malabar-paratha-veg-salna": ["bread", {"kind":"parotta","salna":"#7f8f34"}],
  "malabar-paratha-chicken-salna": ["bread", {"kind":"parotta","salna":"#a8562a"}],
  "kothu-parotta-veg": ["snack", {"kind":"kothu","mix":["#5a8a3c","#c0392b","#f6d97a"]}],
  "kothu-parotta-egg": ["snack", {"kind":"kothu","mix":["#f6d97a","#f8f1e2","#5a8a3c"]}],
  "kothu-parotta-chicken": ["snack", {"kind":"kothu","mix":["#a8551f","#c0392b","#5a8a3c"]}],
  "rasmalai": ["dessert", {"kind":"rasmalai"}],
  "gulab-jamun-with-rabdi": ["dessert", {"kind":"rabdi"}],
  "gulab-jamun": ["dessert", {"kind":"gulab"}],
  "double-ka-meetha": ["dessert", {"kind":"meetha"}],
  "apricot-delight": ["dessert", {"kind":"apricot"}],
  "carrot-halwa": ["dessert", {"kind":"halwa"}],
  "paan": ["dessert", {"kind":"paan"}],
  "tea": ["drink", {"kind":"cup","brew":"#c98a52","hi":"#dcae7c"}],
  "coffee": ["drink", {"kind":"cup","brew":"#4a2c18","hi":"#7a5230"}],
  "mango-lassi": ["drink", {"kind":"glass","liquid":"#f2b544","garnish":"mango"}],
  "badam-milk": ["drink", {"kind":"glass","liquid":"#f3e7cf","garnish":"nuts"}],
  "beer": ["drink", {"kind":"beer"}],
};
