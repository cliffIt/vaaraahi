/* ============================================================
   VAARAAHI — site behavior
   ============================================================ */

/* Mobile nav */
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  if (document.getElementById("menu-root")) initMenuPage();
  if (document.getElementById("signature-grid")) renderSignatureDishes();
});

/* Shared: build an <img> with branded fallback */
function dishImg(item, alt) {
  const img = document.createElement("img");
  img.loading = "lazy";
  img.alt = alt || item.n;
  img.src = dishImage(item.img);
  img.onerror = () => { img.onerror = null; img.src = drawnImage(item.img); };
  return img;
}

const money = (v) => "$" + v.toFixed(2);

/* ============================================================
   MENU PAGE
   ============================================================ */
let state = { cat: "all", q: "", diet: "all", view: "list" }; // diet kept for filterItem(); no UI control

function initMenuPage() {
  const pillRow = document.getElementById("cat-pills");

  const mkPill = (id, label) => {
    const b = document.createElement("button");
    b.className = "cat-pill" + (id === "all" ? " active" : "");
    b.textContent = label;
    b.dataset.cat = id;
    b.addEventListener("click", () => {
      state.cat = id;
      pillRow.querySelectorAll(".cat-pill").forEach(p => p.classList.toggle("active", p.dataset.cat === id));
      renderMenu();
      if (id !== "all") {
        const sec = document.getElementById("sec-" + id);
        if (sec && sec.scrollIntoView) sec.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    });
    return b;
  };

  pillRow.appendChild(mkPill("all", "All"));
  MENU_CATEGORIES.forEach(c => pillRow.appendChild(mkPill(c.id, c.label)));

  const search = document.getElementById("menu-search");
  search.addEventListener("input", () => { state.q = search.value.trim().toLowerCase(); renderMenu(); });

  // Mouse wheel over the category strip scrolls it sideways when it overflows
  const strip = document.getElementById("cat-pills");
  if (strip) {
    strip.addEventListener("wheel", (e) => {
      const overflowing = strip.scrollWidth > strip.clientWidth + 1;
      if (!overflowing) return;
      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      const atStart = strip.scrollLeft <= 0;
      const atEnd = strip.scrollLeft >= strip.scrollWidth - strip.clientWidth - 1;
      if ((delta < 0 && atStart) || (delta > 0 && atEnd)) return; // let the page scroll
      e.preventDefault();
      strip.scrollLeft += delta;
    }, { passive: false });
    const markEnd = () => {
      const atEnd = strip.scrollLeft >= strip.scrollWidth - strip.clientWidth - 2;
      strip.classList.toggle("at-end", atEnd || strip.scrollWidth <= strip.clientWidth + 1);
    };
    strip.addEventListener("scroll", markEnd);
    window.addEventListener("resize", markEnd);
    setTimeout(markEnd, 0);
  }

  document.querySelectorAll("[data-view]").forEach(btn => {
    btn.addEventListener("click", () => {
      state.view = btn.dataset.view;
      document.querySelectorAll("[data-view]").forEach(b => {
        const on = b === btn;
        b.classList.toggle("active", on);
        b.setAttribute("aria-pressed", on ? "true" : "false");
      });
      renderMenu();
    });
  });


  renderMenu();
}

function itemMatches(it) {
  if (state.cat !== "all" && it.c !== state.cat) return false;
  if (state.diet === "veg" && !it.veg) return false;
  if (state.diet === "nonveg" && it.veg) return false;
  if (state.q && !it.n.toLowerCase().includes(state.q)) return false;
  return true;
}

function renderMenu() {
  const root = document.getElementById("menu-root");
  root.innerHTML = "";
  let shown = 0;

  MENU_CATEGORIES.forEach(cat => {
    const items = MENU_ITEMS.filter(it => it.c === cat.id && itemMatches(it));
    if (!items.length) return;
    shown += items.length;

    const sec = document.createElement("section");
    sec.className = "menu-section wrap";
    sec.id = "sec-" + cat.id;

    const h = document.createElement("h2");
    h.textContent = cat.label;
    const count = document.createElement("div");
    count.className = "count";
    count.textContent = items.length + (items.length === 1 ? " dish" : " dishes");

    let holder;
    if (state.view === "list") {
      holder = document.createElement("ul");
      holder.className = "menu-list";
      items.forEach(it => holder.appendChild(menuRow(it)));
    } else {
      holder = document.createElement("div");
      holder.className = "menu-grid";
      items.forEach(it => holder.appendChild(menuCard(it)));
    }

    sec.append(h, count, holder);
    root.appendChild(sec);
  });

  document.getElementById("no-results").style.display = shown ? "none" : "block";
}

function menuCard(it) {
  const card = document.createElement("article");
  card.className = "menu-card";

  const ph = document.createElement("div");
  ph.className = "ph";
  ph.appendChild(dishImg(it));

  const body = document.createElement("div");
  body.className = "body";

  const top = document.createElement("div");
  top.className = "toprow";
  const diet = document.createElement("span");
  diet.className = "diet " + (it.veg ? "veg" : "nonveg");
  diet.title = it.veg ? "Vegetarian" : "Non-vegetarian";
  diet.setAttribute("aria-label", diet.title);
  const h3 = document.createElement("h3");
  h3.textContent = it.n;
  top.append(diet, h3);

  const prices = document.createElement("div");
  prices.className = "prices";
  const price = document.createElement("span");
  price.className = "price";
  if (it.sizes) {
    price.textContent = it.sizes[0] + " " + money(it.p);
    const p2 = document.createElement("span");
    p2.className = "fam";
    p2.innerHTML = it.sizes[1] + " <b>" + money(it.p2) + "</b>";
    prices.append(price, p2);
  } else {
    price.textContent = money(it.p);
    prices.appendChild(price);
    if (it.fam) {
      const fam = document.createElement("span");
      fam.className = "fam";
      fam.innerHTML = "Family Pack <b>" + money(it.fam) + "</b>";
      prices.appendChild(fam);
    }
  }

  body.append(top, prices);
  card.append(ph, body);
  return card;
}

/* Compact printed-menu row for list view */
function menuRow(it) {
  const li = document.createElement("li");
  li.className = "menu-row";

  const diet = document.createElement("span");
  diet.className = "diet " + (it.veg ? "veg" : "nonveg");
  diet.title = it.veg ? "Vegetarian" : "Non-vegetarian";
  diet.setAttribute("aria-label", diet.title);

  const name = document.createElement("span");
  name.className = "row-name";
  name.textContent = it.n;

  const leader = document.createElement("span");
  leader.className = "leader";
  leader.setAttribute("aria-hidden", "true");

  const price = document.createElement("span");
  price.className = "row-price";
  if (it.sizes) {
    price.innerHTML = '<span class="sz">' + it.sizes[0] + '</span> ' + money(it.p) +
                      ' <span class="sz">' + it.sizes[1] + '</span> ' + money(it.p2);
  } else if (it.fam) {
    price.innerHTML = money(it.p) + ' <span class="sz">Family</span> ' + money(it.fam);
  } else {
    price.textContent = money(it.p);
  }

  li.append(diet, name, leader, price);
  return li;
}

/* ============================================================
   HOME — signature dishes
   ============================================================ */
const SIGNATURES = [
  { n: "Chicken Dum Biryani", find: "Chicken Dum Biryani",
    d: "Layered basmati and marinated chicken, sealed under dough and slow-cooked over gentle heat." },
  { n: "Goat Dum Biryani", find: "Goat Dum Biryani",
    d: "Tender goat and saffron rice in the classic Hyderabadi dum style — our house pride." },
  { n: "Butter Chicken", find: "Butter Chicken",
    d: "Silky tomato-butter gravy, tandoor-kissed chicken — the crowd favorite done right." },
  { n: "Paneer Butter Masala", find: "Paneer Butter Masala",
    d: "Silken tomato-cashew gravy finished with cream and kasuri methi." },
  { n: "Chicken Tikka Masala", find: "Chicken Tikka Masala",
    d: "Charred chicken folded into a smoky tomato-cream gravy — rich without being heavy." },
  { n: "Garlic Naan", find: "Garlic Naan",
    d: "Blistered on the tandoor wall, brushed with garlic and butter, served hot." }
];

function renderSignatureDishes() {
  const grid = document.getElementById("signature-grid");
  SIGNATURES.forEach(s => {
    const it = MENU_ITEMS.find(m => m.n.startsWith(s.find));
    if (!it) return;
    const card = document.createElement("article");
    card.className = "dish-card";

    const ph = document.createElement("div");
    ph.className = "ph";
    ph.appendChild(dishImg(it, s.n));

    const body = document.createElement("div");
    body.className = "body";
    const h3 = document.createElement("h3"); h3.textContent = s.n;
    const d = document.createElement("p"); d.className = "desc"; d.textContent = s.d;
    const pr = document.createElement("div"); pr.className = "price";
    pr.textContent = money(it.p) + (it.fam ? "  ·  Family " + money(it.fam) : "");
    body.append(h3, d, pr);

    card.append(ph, body);
    grid.appendChild(card);
  });
}
