"use strict";

// Edit names, units, prices, descriptions, and image keys here. No backend is used.
const IMAGE_BANK = {
  grains: "images/brown_rice_unpolished.jpg",
  sweet: "images/honey.jpg",
  wellness: "images/Amruthadhara.jpg",
  eco: "images/3h_cloth_bag.jpg",
  books: "images/Samaskaravidya_Book.jpg",
  farming: "images/Ghana_Jeevamrutham.jpg",
  leaves: "images/munaga_powder.webp",
  ayurveda: "images/Ashava_gandha_ayurvedic_powder.webp"
};

const CATEGORIES = [
  { id: "grains", name: "Organic Grains & Pulses", description: "Everyday staples for a thoughtful pantry.", image: "images/Organic_Grains_Pulses.jpg" },
  { id: "sweet", name: "Natural Sweeteners & Dairy", description: "Familiar favorites from the Manavata collection.", image: "images/Natural_Sweeteners_Dairy.png" },
  { id: "leaves", name: "Herbal & Leaf Powders", description: "A collection of traditional plant powders.", image: "images/Herbal_Leaf_Powders.jpg" },
  { id: "ayurveda", name: "Ayurvedic Herbal Powders", description: "Explore the herbal powder collection.", image: "images/Ayurvedic_Herbal_Powders.jpg" },
  { id: "wellness", name: "Immunity & Wellness Products", description: "Wellness products and everyday accessories.", image: "images/Immunity_Wellness_Products.jpg", filters: ["wellness", "ayurveda"] },
  { id: "farming", name: "Natural Farming Products", description: "Products for natural farming practices.", image: "images/Natural_Farming_Products.jpg" },
  { id: "wellness", name: "Yoga & Wellness Accessories", description: "Accessories for yoga and wellbeing practices.", image: "images/Yoga_Wellness_Accessories.jpg" },
  { id: "books", name: "Books & Educational Materials", description: "Resources for learning and reflection.", image: "images/Books_Educational_Materials.jpg" },
  { id: "eco", name: "Eco-Friendly Merchandise", description: "Simple items for everyday use.", image: "images/Eco-Friendly_Merchandise.jpg" }
];

const CATEGORY_NAMES = {
  grains: "Organic Grains & Pulses",
  sweet: "Natural Sweeteners & Dairy",
  wellness: "Wellness & Yoga Accessories",
  eco: "Eco-Friendly Merchandise",
  books: "Books & Educational Materials",
  farming: "Natural Farming Products",
  leaves: "Leaves Powders",
  ayurveda: "Immunity Items — Ayurvedic Herbal Tea Powders"
};

const PRODUCT_DATA = [
  { id: "brown-rice", name: "Unpolished Brown Rice", unit: "1 Kg", price: 110, category: "grains", image: "grains", featured: true, description: "An everyday rice variety from the Manavata grain collection." },
  { id: "red-rice", name: "Red Rice", unit: "1 Kg", price: 150, category: "grains", image: "grains", description: "A familiar grain offered in the Manavata collection." },
  { id: "minapapapu", name: "Minapapapu", unit: "1 Kg", price: 160, category: "grains", image: "grains", description: "A pulse for everyday cooking, presented in the Manavata collection." },
  { id: "pesarapapu", name: "Pesarapapu", unit: "1 Kg", price: 160, category: "grains", image: "grains", description: "A pulse for everyday cooking, presented in the Manavata collection." },
  { id: "pesallu", name: "Pesallu", unit: "1 Kg", price: 160, category: "grains", image: "grains", description: "A pantry staple from the Manavata grain and pulse collection." },
  { id: "honey", name: "Honey", unit: "1 Kg", price: 350, category: "sweet", image: "sweet", featured: true, description: "A natural sweetener offered through the Manavata store." },
  { id: "cow-ghee", name: "Cow Ghee", unit: "1 Kg", price: 1600, category: "sweet", image: "sweet", featured: true, description: "A traditional dairy product in the Manavata collection." },
  { id: "jaggery", name: "Jaggery", unit: "1 Kg", price: 150, category: "sweet", image: "sweet", description: "A traditional sweetener for everyday use." },
  { id: "dates-kajjuram", name: "Dates (Kajjuram)", unit: "1 Kg", price: 150, category: "sweet", image: "sweet", description: "A naturally sweet pantry item from the Manavata collection." },
  { id: "amruthadhara", name: "Amruthadhara 5ml Panchagavya Inhale Drops", unit: "1 No", price: 100, category: "wellness", image: "wellness", description: "An item in the Manavata traditional wellness collection. Please contact the team with product questions." },
  { id: "jalanethi-pot", name: "Jalanethi Pot", unit: "1 No", price: 50, category: "wellness", image: "wellness", description: "A traditional wellness accessory offered through the store." },
  { id: "sutra-nethi", name: "Sutra Nethi", unit: "1 No", price: 50, category: "wellness", image: "wellness", description: "A traditional wellness accessory offered through the store." },
  { id: "eye-cleaning-cup", name: "Eye Cleaning Cup", unit: "1 No", price: 40, category: "wellness", image: "wellness", description: "A wellness accessory offered through the Manavata store." },
  { id: "cloth-bags", name: "3 H Cloth Bags", unit: "1 No", price: 100, category: "eco", image: "eco", description: "A reusable cloth bag from the Manavata merchandise collection." },
  { id: "t-shirt", name: "T Shirt", unit: "1 No", price: 300, category: "eco", image: "eco", description: "A T Shirt from the Manavata merchandise collection." },
  { id: "yoga-chart", name: "Yoga Chart", unit: "1 No", price: 50, category: "books", image: "books", featured: true, description: "An educational chart in the Manavata learning collection." },
  { id: "samaskaravidya-book", name: "Samaskaravidya Book", unit: "1 No", price: 108, category: "books", image: "books", featured: true, description: "A book from the Manavata educational materials collection." },
  { id: "manavata-note-book", name: "Manavata Note Book", unit: "1 No", price: 25, category: "books", image: "books", description: "A notebook from the Manavata educational materials collection." },
  { id: "ghana-jeevamrutham", name: "Ghana Jeevamrutham", unit: "1 Kg", price: 50, category: "farming", image: "farming", description: "A product in the Manavata natural farming collection." },
  { id: "jeevamrutham", name: "Jeevamrutham", unit: "1 Ltr", price: 50, category: "farming", image: "farming", description: "A product in the Manavata natural farming collection." },
  { id: "nema-astharam", name: "Nema Astharam", unit: "1 Kg", price: 50, category: "farming", image: "farming", description: "A product in the Manavata natural farming collection." },
  { id: "munnaga-powder", name: "Munnaga Powder", unit: "100g", price: 100, category: "leaves", image: "leaves", description: "A leaf powder from the Manavata collection." },
  { id: "avisa-akku-powder", name: "Avisa akku powder", unit: "100g", price: 100, category: "leaves", image: "leaves", description: "A leaf powder from the Manavata collection." },
  { id: "nurgundhi-powder", name: "Nurgundhi Powder", unit: "100g", price: 100, category: "leaves", image: "leaves", description: "A leaf powder from the Manavata collection." },
  { id: "tulasi-powder", name: "Tulasi powder", unit: "100g", price: 130, category: "leaves", image: "leaves", featured: true, description: "A leaf powder from the Manavata collection." },
  { id: "dry-ginger-powder", name: "Dry Ginger powder", unit: "100g", price: 100, category: "leaves", image: "leaves", description: "A powder from the Manavata collection." },
  { id: "thippatega-powder", name: "Thippatega powder", unit: "100g", price: 100, category: "leaves", image: "leaves", description: "A powder from the Manavata collection." },
  { id: "pasuku-powder", name: "Pasuku powder", unit: "100g", price: 150, category: "leaves", image: "leaves", description: "A powder from the Manavata collection." },
  { id: "dry-amla-powder", name: "Dry amla powder", unit: "100g", price: 100, category: "leaves", image: "leaves", description: "A powder from the Manavata collection." },
  { id: "leman-grass-powder", name: "Leman Grass powder", unit: "100g", price: 100, category: "leaves", image: "leaves", description: "A leaf powder from the Manavata collection." },
  { id: "neem-powder", name: "Neem Powder", unit: "100g", price: 80, category: "leaves", image: "leaves", description: "A leaf powder from the Manavata collection." },
  { id: "diabaties-powder", name: "Diabaties Powder (Neredu, Jamma And Sitapalam)", unit: "100g", price: 120, category: "leaves", image: "leaves", description: "A product name and description preserved as supplied. Please contact the Manavata team with product questions." },
  { id: "sita-palam-leaves-powder", name: "Sita palam Leaves Powder", unit: "100g", price: 100, category: "leaves", image: "leaves", description: "A leaf powder from the Manavata collection." },
  { id: "guvas-leaves-powder", name: "Guvas Leaves Powder", unit: "100g", price: 120, category: "leaves", image: "leaves", description: "A leaf powder from the Manavata collection." },
  { id: "neredu-leaves-powder", name: "Neredu Leaves Powder", unit: "100g", price: 100, category: "leaves", image: "leaves", description: "A leaf powder from the Manavata collection." },
  { id: "sathavari-ayurvedic-powder", name: "Sathavari ayurvedic powder", unit: "100g", price: 120, category: "ayurveda", image: "ayurveda", description: "An item from the store's Ayurvedic herbal tea powder collection." },
  { id: "ashava-gandha-ayurvedic-powder", name: "Ashava gandha ayurvedic powder", unit: "100g", price: 150, category: "ayurveda", image: "ayurveda", description: "An item from the store's Ayurvedic herbal tea powder collection." },
  { id: "thripala", name: "Thripala", unit: "100g", price: 100, category: "ayurveda", image: "ayurveda", description: "An item from the store's Ayurvedic herbal tea powder collection." },
  { id: "yesti-madhu", name: "Yesti madhu", unit: "100g", price: 100, category: "ayurveda", image: "ayurveda", description: "An item from the store's Ayurvedic herbal tea powder collection." },
  { id: "brahmi", name: "Brahmi", unit: "100g", price: 150, category: "ayurveda", image: "ayurveda", description: "An item from the store's Ayurvedic herbal tea powder collection." },
  { id: "punnava", name: "punnava", unit: "100g", price: 150, category: "ayurveda", image: "ayurveda", description: "An item from the store's Ayurvedic herbal tea powder collection." }
];

// Replace these paths as new product photos are uploaded. Existing user uploads are kept as-is.
const PRODUCT_IMAGE_PATHS = {
  "brown-rice": "images/brown_rice_unpolished.jpg",
  "red-rice": "images/red_rice.jpg",
  "minapapapu": "images/minapappu.jpg",
  "pesarapapu": "images/pesarapappu.jpg",
  "pesallu": "images/pesallu.jpg",
  "honey": "images/honey.jpg",
  "cow-ghee": "images/cow_ghee.jpg",
  "jaggery": "images/jaggery.jpg",
  "dates-kajjuram": "images/dates.jpg",
  "amruthadhara": "images/Amruthadhara.jpg",
  "jalanethi-pot": "images/jalaneti_pot.jpg",
  "sutra-nethi": "images/sutra_neti.jpg",
  "eye-cleaning-cup": "images/eye_cleaning_cup.jpg",
  "cloth-bags": "images/3h_cloth_bag.jpg",
  "t-shirt": "images/tshirt.jpg",
  "yoga-chart": "images/yoga_chart.jpg",
  "samaskaravidya-book": "images/Samaskaravidya_Book.jpg",
  "manavata-note-book": "images/manavata_notebook.jpg",
  "ghana-jeevamrutham": "images/Ghana_Jeevamrutham.jpg",
  "jeevamrutham": "images/Jeevamrutham.jpg",
  "nema-astharam": "images/Nema_Astharam_powder.jpg",
  "munnaga-powder": "images/munaga_powder.webp",
  "avisa-akku-powder": "images/avisa_aaku_powder.jpg",
  "nurgundhi-powder": "images/Nurgundhi_Powder.jpg",
  "tulasi-powder": "images/Tulasi_powder.jpg",
  "dry-ginger-powder": "images/Dry_Ginger_powder.jpg",
  "thippatega-powder": "images/Thippatega_powder.jpg",
  "pasuku-powder": "images/Pasuku_powder.jpg",
  "dry-amla-powder": "images/Dry_amla_powder.jpg",
  "leman-grass-powder": "images/Leman_Grass_powder.jpg",
  "neem-powder": "images/Neem_Powder.jpg",
  "diabaties-powder": "images/diabetes_powder.jpg",
  "sita-palam-leaves-powder": "images/Sita_palam_Leaves_Powder.jpg",
  "guvas-leaves-powder": "images/Guvas_Leaves_Powder.jpg",
  "neredu-leaves-powder": "images/Neredu_Leaves_Powder.jpg",
  "sathavari-ayurvedic-powder": "images/Sathavari_ayurvedic_powder.jpg",
  "ashava-gandha-ayurvedic-powder": "images/Ashava_gandha_ayurvedic_powder.webp",
  "thripala": "images/Thripala_powder.jpg",
  "yesti-madhu": "images/Yestimadhu_powder.jpg",
  "brahmi": "images/Brahmi_powder.jpg",
  "punnava": "images/punnava_powder.jpg"
};

const CART_KEY = "manavata-store-cart-v2";
const LEGACY_CART_KEY = "manavata-store-cart-v1";
const WEIGHT_OPTIONS = [250, 500, 750, 1000];
const byId = (id) => document.getElementById(id);
const scrollBehavior = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
const formatPrice = (amount) => {
  const rounded = Math.round((amount + Number.EPSILON) * 100) / 100;
  const fractionDigits = Number.isInteger(rounded) ? 0 : 2;
  return `₹${new Intl.NumberFormat("en-IN", { minimumFractionDigits: fractionDigits, maximumFractionDigits: 2 }).format(rounded)}`;
};
const findProduct = (id) => PRODUCT_DATA.find((product) => product.id === id);
const productImage = (product) => PRODUCT_IMAGE_PATHS[product.id] || IMAGE_BANK[product.image];
const isKilogramProduct = (product) => product?.unit === "1 Kg";

function normalizeWeight(product, grams) {
  if (!isKilogramProduct(product)) return null;
  const requested = Number.parseInt(grams, 10);
  return WEIGHT_OPTIONS.includes(requested) ? requested : 1000;
}

function weightLabel(grams) {
  return grams === 1000 ? "1 Kg" : `${grams}g`;
}

function linePrice(product, grams) {
  return isKilogramProduct(product) ? product.price * (normalizeWeight(product, grams) / 1000) : product.price;
}

function makeCartKey(product, grams = null) {
  return isKilogramProduct(product) ? `${product.id}::${normalizeWeight(product, grams)}` : product.id;
}

function parseCartKey(key) {
  const splitAt = key.lastIndexOf("::");
  const id = splitAt < 0 ? key : key.slice(0, splitAt);
  const product = findProduct(id);
  if (!product) return null;
  if (!isKilogramProduct(product)) return splitAt < 0 ? { id, grams: null } : null;
  const grams = splitAt < 0 ? 1000 : Number.parseInt(key.slice(splitAt + 2), 10);
  return WEIGHT_OPTIONS.includes(grams) ? { id, grams } : null;
}

function packSelectMarkup(product, context, selectedGrams = 1000) {
  if (!isKilogramProduct(product)) return "";
  const controlId = `pack-${context}-${product.id}`;
  return `<label class="pack-select-label" for="${escapeHTML(controlId)}"><span>Pack size</span><select id="${escapeHTML(controlId)}" data-pack-select="${escapeHTML(context)}" data-id="${escapeHTML(product.id)}" aria-label="Pack size for ${escapeHTML(product.name)}">${WEIGHT_OPTIONS.map((grams) => `<option value="${grams}"${grams === selectedGrams ? " selected" : ""}>${weightLabel(grams)}</option>`).join("")}</select></label>`;
}

function singleProductCart(product, grams = null, quantity = 1) {
  return { [makeCartKey(product, grams)]: quantity };
}

let selectedCategories = new Set();
let cart = loadCart();
let toastTimer;
let testimonialIndex = 0;

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(CART_KEY) || localStorage.getItem(LEGACY_CART_KEY) || "{}");
    if (!saved || typeof saved !== "object" || Array.isArray(saved)) return {};
    const restored = {};
    for (const [key, qty] of Object.entries(saved)) {
      const line = parseCartKey(key);
      if (!line || !Number.isFinite(qty) || qty <= 0) continue;
      const product = findProduct(line.id);
      restored[makeCartKey(product, line.grams)] = Math.min(99, Math.floor(qty));
    }
    return restored;
  } catch {
    return {};
  }
}

function saveCart() {
  try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch { showToast("Your cart will be available for this visit only."); }
}

function totalQuantity(items = cart) {
  return Object.values(items).reduce((sum, qty) => sum + qty, 0);
}

function totalAmount(items = cart) {
  return Object.entries(items).reduce((sum, [key, qty]) => {
    const line = parseCartKey(key);
    const product = line && findProduct(line.id);
    return sum + (product ? linePrice(product, line.grams) * qty : 0);
  }, 0);
}

function imageMarkup(src, alt, className) {
  return `<img class="${className}" src="${escapeHTML(src)}" alt="${escapeHTML(alt)}" loading="lazy" decoding="async" />`;
}

function renderCategories() {
  byId("category-grid").innerHTML = CATEGORIES.map((category, index) => `
    <a class="category-card reveal" href="#shop" data-category-card="${index}" style="--delay:${(index % 4) * 65}ms">
      <span class="category-card__image" style="background-image:url('${escapeHTML(category.image)}')"></span>
      <div class="category-card__body"><span class="category-card__number">0${index + 1} / MANAVATA COLLECTION</span><h3>${escapeHTML(category.name)}</h3><p>${escapeHTML(category.description)}</p><span class="category-card__link">Explore category <span>↗</span></span></div>
    </a>`).join("");

  const filterCategories = Object.entries(CATEGORY_NAMES);
  byId("category-filters").innerHTML = filterCategories.map(([id, name]) => `
    <label class="category-filter"><input type="checkbox" value="${escapeHTML(id)}" /><span class="custom-check"></span><span>${escapeHTML(name)}</span></label>`).join("");
  observeReveals(byId("category-grid"));
}

function productCard(product) {
  return `<article class="product-card" data-product-card="${escapeHTML(product.id)}">
    <div class="product-card__media">
      <button class="product-image-open" type="button" data-action="details" data-id="${escapeHTML(product.id)}" aria-label="View ${escapeHTML(product.name)} details">${imageMarkup(productImage(product), product.name, "product-card__image")}</button>
      ${product.featured ? '<span class="product-tag">Manavata pick</span>' : ""}
      <button class="quick-view" type="button" data-action="details" data-id="${escapeHTML(product.id)}">Quick view</button>
    </div>
    <div class="product-card__body"><span class="product-card__category">${escapeHTML(CATEGORY_NAMES[product.category])}</span>
      <h3><button type="button" data-action="details" data-id="${escapeHTML(product.id)}">${escapeHTML(product.name)}</button></h3>
      <p class="product-card__unit">${escapeHTML(product.unit)}</p>
      ${packSelectMarkup(product, "card")}
      <div class="product-card__bottom"><strong class="product-price" data-card-price="${escapeHTML(product.id)}">${formatPrice(product.price)}</strong><div class="product-card__controls"><label class="sr-only" for="qty-${escapeHTML(product.id)}">Quantity of ${escapeHTML(product.name)}</label><input class="qty-input" id="qty-${escapeHTML(product.id)}" type="number" min="1" max="99" step="1" value="1" inputmode="numeric" data-card-qty="${escapeHTML(product.id)}" /><button class="add-button" type="button" data-action="add" data-id="${escapeHTML(product.id)}"><span>+</span> Add</button></div></div>
    </div></article>`;
}

function updatePackPrice(select) {
  const product = findProduct(select.dataset.id);
  if (!product || !isKilogramProduct(product)) return;
  const grams = normalizeWeight(product, select.value);
  const price = linePrice(product, grams);
  if (select.dataset.packSelect === "card") {
    const priceElement = document.querySelector(`[data-card-price="${CSS.escape(product.id)}"]`);
    if (priceElement) priceElement.textContent = formatPrice(price);
  } else if (select.dataset.packSelect === "featured") {
    const priceElement = document.querySelector(`[data-featured-price="${CSS.escape(product.id)}"]`);
    if (priceElement) priceElement.innerHTML = `${formatPrice(price)} <small>/ ${weightLabel(grams)}</small>`;
  } else if (select.dataset.packSelect === "modal") {
    const priceElement = byId("modal-product-price");
    if (priceElement) priceElement.textContent = formatPrice(price);
    const buyLink = byId("product-modal-content").querySelector("[data-modal-buy]");
    if (buyLink) buyLink.href = whatsappUrl(singleProductCart(product, grams, getQuantity(byId("modal-qty"))));
  }
}

function getFilteredProducts() {
  const term = byId("product-search").value.trim().toLocaleLowerCase();
  const featuredOnly = byId("featured-only").checked;
  const sort = byId("sort-products").value;
  let products = PRODUCT_DATA.filter((product) => {
    const matchesSearch = !term || `${product.name} ${CATEGORY_NAMES[product.category]} ${product.unit}`.toLocaleLowerCase().includes(term);
    const matchesCategory = selectedCategories.size === 0 || selectedCategories.has(product.category);
    const matchesFeatured = !featuredOnly || product.featured;
    return matchesSearch && matchesCategory && matchesFeatured;
  });
  if (sort === "price-asc") products.sort((a, b) => a.price - b.price || a.name.localeCompare(b.name));
  if (sort === "price-desc") products.sort((a, b) => b.price - a.price || a.name.localeCompare(b.name));
  if (sort === "name-asc") products.sort((a, b) => a.name.localeCompare(b.name));
  return products;
}

function renderProducts() {
  const products = getFilteredProducts();
  byId("product-grid").innerHTML = products.map(productCard).join("");
  byId("product-count").textContent = products.length === PRODUCT_DATA.length && !selectedCategories.size && !byId("product-search").value && !byId("featured-only").checked
    ? `Showing all ${products.length} products`
    : `Showing ${products.length} of ${PRODUCT_DATA.length} products`;
  byId("no-results").hidden = products.length > 0;
}

function renderFeatured() {
  const featured = PRODUCT_DATA.filter((product) => product.featured);
  byId("featured-track").innerHTML = featured.map((product) => `
    <article class="featured-card">
      <div class="featured-card__media">${imageMarkup(productImage(product), product.name, "featured-card__image")}</div>
      <div class="featured-card__body"><span>${escapeHTML(CATEGORY_NAMES[product.category])}</span><h3>${escapeHTML(product.name)}</h3>${packSelectMarkup(product, "featured")}<div class="featured-card__bottom"><strong data-featured-price="${escapeHTML(product.id)}">${formatPrice(product.price)} <small>/ ${escapeHTML(product.unit)}</small></strong><button type="button" data-action="add" data-id="${escapeHTML(product.id)}" aria-label="Add ${escapeHTML(product.name)} to cart">+</button></div></div>
    </article>`).join("");
}

function buildWhatsAppMessage(items) {
  const productEntries = Object.entries(items).filter(([key, qty]) => parseCartKey(key) && qty > 0);
  const lines = productEntries.map(([key, qty], index) => {
    const line = parseCartKey(key);
    const product = findProduct(line.id);
    const selectedPack = line.grams ? ` (${weightLabel(line.grams)})` : "";
    const price = linePrice(product, line.grams);
    return `${index + 1}. ${product.name}${selectedPack} – ${qty} × ${formatPrice(price)} = ${formatPrice(price * qty)}`;
  });
  return [
    "Hello Manavata Team!",
    "",
    "I would like to place an order from the Manavata Organic Store.",
    "",
    "My Order:",
    "",
    ...lines,
    "",
    `Total Quantity: ${totalQuantity(items)}`,
    "",
    `Total Amount: ${formatPrice(totalAmount(items))}`,
    "",
    "Please contact me to confirm availability, delivery charges and payment details.",
    "",
    "Thank you!",
    "Manavata – Healthy, Happy & Harmonious Living."
  ].join("\n");
}

function whatsappUrl(items) {
  return `https://wa.me/919391451139?text=${encodeURIComponent(buildWhatsAppMessage(items))}`;
}

function renderCart() {
  const entries = Object.entries(cart).filter(([key, qty]) => parseCartKey(key) && qty > 0);
  const qty = totalQuantity();
  document.querySelectorAll(".cart-count").forEach((element) => { element.textContent = qty; });
  document.querySelectorAll(".drawer-count").forEach((element) => { element.textContent = `(${qty})`; });
  document.querySelectorAll(".cart-total-qty").forEach((element) => { element.textContent = qty; });
  document.querySelectorAll(".cart-total-price").forEach((element) => { element.textContent = formatPrice(totalAmount()); });
  byId("cart-items").innerHTML = entries.map(([key, quantity]) => {
    const line = parseCartKey(key);
    const product = findProduct(line.id);
    const price = linePrice(product, line.grams);
    const packDescription = line.grams ? `${weightLabel(line.grams)} pack` : product.unit;
    return `<article class="cart-line" data-cart-line="${escapeHTML(key)}">
      ${imageMarkup(productImage(product), product.name, "")}
      <div><h3>${escapeHTML(product.name)}</h3><small>${escapeHTML(packDescription)} · ${formatPrice(price)} each</small><div class="cart-quantity"><button type="button" data-action="decrease" data-key="${escapeHTML(key)}" aria-label="Decrease ${escapeHTML(product.name)} quantity">−</button><span>${quantity}</span><button type="button" data-action="increase" data-key="${escapeHTML(key)}" aria-label="Increase ${escapeHTML(product.name)} quantity">+</button></div><button class="remove-line" type="button" data-action="remove" data-key="${escapeHTML(key)}">Remove</button></div>
      <strong class="cart-line__price">${formatPrice(price * quantity)}</strong>
    </article>`;
  }).join("");
  byId("cart-empty").classList.toggle("is-visible", entries.length === 0);
  byId("cart-items").classList.toggle("is-hidden", entries.length === 0);
  byId("cart-summary").classList.toggle("is-hidden", entries.length === 0);
  byId("cart-summary").setAttribute("aria-hidden", entries.length === 0 ? "true" : "false");
  document.querySelector(".checkout-link").href = entries.length ? whatsappUrl(cart) : "https://wa.me/919391451139";
}

function openCart() {
  byId("cart-drawer").classList.add("is-open");
  byId("cart-drawer").setAttribute("aria-hidden", "false");
  byId("cart-drawer").removeAttribute("inert");
  byId("drawer-backdrop").classList.add("is-open");
  document.body.classList.add("drawer-open");
  setTimeout(() => byId("cart-drawer").querySelector(".close-drawer").focus(), 50);
}

function closeCart() {
  byId("cart-drawer").classList.remove("is-open");
  byId("cart-drawer").setAttribute("aria-hidden", "true");
  byId("cart-drawer").setAttribute("inert", "");
  byId("drawer-backdrop").classList.remove("is-open");
  document.body.classList.remove("drawer-open");
}

function getQuantity(input) {
  const value = Number.parseInt(input?.value || "1", 10);
  return Number.isFinite(value) ? Math.min(99, Math.max(1, value)) : 1;
}

function addToCart(id, quantity = 1, grams = null, shouldOpen = true) {
  const product = findProduct(id);
  if (!product) return;
  const key = makeCartKey(product, grams);
  cart[key] = Math.min(99, (cart[key] || 0) + Math.max(1, Math.min(99, Math.floor(quantity))));
  saveCart();
  renderCart();
  document.querySelectorAll(".cart-count").forEach((badge) => { badge.classList.remove("bump"); void badge.offsetWidth; badge.classList.add("bump"); });
  showToast(`${product.name}${isKilogramProduct(product) ? ` (${weightLabel(normalizeWeight(product, grams))})` : ""} added to your cart.`);
  if (shouldOpen) openCart();
}

function changeCart(key, delta) {
  if (!cart[key]) return;
  cart[key] = Math.min(99, cart[key] + delta);
  if (cart[key] <= 0) delete cart[key];
  saveCart();
  renderCart();
}

function removeFromCart(key) {
  delete cart[key];
  saveCart();
  renderCart();
  showToast("Item removed from your cart.");
}

function showToast(message) {
  const toast = byId("toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2400);
}

function openProduct(id) {
  const product = findProduct(id);
  if (!product) return;
  const related = PRODUCT_DATA.filter((candidate) => candidate.category === product.category && candidate.id !== product.id).slice(0, 3);
  byId("product-modal-content").innerHTML = `
    <div class="modal-product">
      <div class="modal-product__media">${imageMarkup(productImage(product), product.name, "modal-product__image")}</div>
      <div class="modal-product__body"><p class="eyebrow">${escapeHTML(CATEGORY_NAMES[product.category])}</p><h2>${escapeHTML(product.name)}</h2><span class="modal-product__unit">${escapeHTML(product.unit)}</span>${packSelectMarkup(product, "modal")}<strong id="modal-product-price" class="modal-product__price">${formatPrice(product.price)}</strong><p class="modal-product__description">${escapeHTML(product.description)}</p><div class="modal-product__actions"><label class="sr-only" for="modal-qty">Quantity</label><input id="modal-qty" class="qty-input" type="number" min="1" max="99" value="1" inputmode="numeric" /><button class="button button--green" type="button" data-modal-add="${escapeHTML(product.id)}">Add to cart</button><a class="button button--gold" href="${escapeHTML(whatsappUrl(singleProductCart(product, isKilogramProduct(product) ? 1000 : null)))}" target="_blank" rel="noopener noreferrer" data-modal-buy="${escapeHTML(product.id)}">Buy via WhatsApp <span>↗</span></a></div>
      ${related.length ? `<div class="modal-related"><h3>Related products</h3><div class="related-links">${related.map((item) => `<button type="button" data-related="${escapeHTML(item.id)}">${escapeHTML(item.name)}</button>`).join("")}</div></div>` : ""}</div>
    </div>`;
  const dialog = byId("product-modal");
  if (!dialog.open) dialog.showModal();
}

function observeReveals(root = document) {
  const elements = root.querySelectorAll?.(".reveal:not(.is-visible)") || [];
  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }
  elements.forEach((element) => revealObserver.observe(element));
}

const revealObserver = "IntersectionObserver" in window ? new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: "0px 0px -28px 0px" }) : null;

function clearFilters() {
  selectedCategories.clear();
  byId("product-search").value = "";
  byId("featured-only").checked = false;
  byId("sort-products").value = "default";
  document.querySelectorAll(".category-filter input").forEach((input) => { input.checked = false; });
  renderProducts();
}

function setCategoryFilters(categoryIds) {
  selectedCategories = new Set(categoryIds);
  document.querySelectorAll(".category-filter input").forEach((input) => { input.checked = selectedCategories.has(input.value); });
  renderProducts();
  byId("shop").scrollIntoView({ behavior: scrollBehavior(), block: "start" });
}

function updateTestimonialPosition() {
  const track = byId("testimonial-track");
  const cards = track.querySelectorAll(".testimonial-card");
  const visible = window.matchMedia("(max-width: 560px)").matches ? 1 : 3;
  const maxIndex = Math.max(0, cards.length - visible);
  testimonialIndex = Math.min(testimonialIndex, maxIndex);
  const cardWidth = cards[0]?.getBoundingClientRect().width || 0;
  const gap = window.matchMedia("(max-width: 560px)").matches ? 10 : 16;
  track.style.transform = `translateX(-${testimonialIndex * (cardWidth + gap)}px)`;
}

function init() {
  renderCategories();
  renderProducts();
  renderFeatured();
  renderCart();
  observeReveals();

  const header = document.querySelector(".site-header");
  const syncHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 18);
  window.addEventListener("scroll", syncHeader, { passive: true });
  syncHeader();

  document.addEventListener("click", (event) => {
    const target = event.target.closest("[data-action]");
    if (target) {
      const { action, id } = target.dataset;
      if (action === "add") {
        const card = target.closest(".product-card");
        const featured = target.closest(".featured-card");
        const product = findProduct(id);
        const packSelect = card?.querySelector('[data-pack-select="card"]') || featured?.querySelector('[data-pack-select="featured"]');
        const quantityInput = card?.querySelector(`[data-card-qty="${CSS.escape(id)}"]`);
        const grams = isKilogramProduct(product) ? normalizeWeight(product, packSelect?.value) : null;
        addToCart(id, getQuantity(quantityInput), grams);
      } else if (action === "details") openProduct(id);
      else if (action === "increase") changeCart(target.dataset.key, 1);
      else if (action === "decrease") changeCart(target.dataset.key, -1);
      else if (action === "remove") removeFromCart(target.dataset.key);
      return;
    }
    const categoryCard = event.target.closest("[data-category-card]");
    if (categoryCard) {
      const category = CATEGORIES[Number(categoryCard.dataset.categoryCard)];
      setCategoryFilters(category.filters || [category.id]);
      return;
    }
    const modalAdd = event.target.closest("[data-modal-add]");
    if (modalAdd) {
      const product = findProduct(modalAdd.dataset.modalAdd);
      const packSelect = byId(`pack-modal-${product.id}`);
      const grams = isKilogramProduct(product) ? normalizeWeight(product, packSelect?.value) : null;
      const quantity = getQuantity(byId("modal-qty"));
      byId("product-modal").close();
      addToCart(product.id, quantity, grams);
      return;
    }
    const related = event.target.closest("[data-related]");
    if (related) { openProduct(related.dataset.related); return; }
  });

  document.addEventListener("input", (event) => {
    if (event.target.id === "product-search") renderProducts();
    if (event.target.id === "modal-qty") {
      const id = byId("product-modal-content").querySelector("[data-modal-buy]")?.dataset.modalBuy;
      const link = byId("product-modal-content").querySelector("[data-modal-buy]");
      const product = id && findProduct(id);
      const packSelect = product && byId(`pack-modal-${id}`);
      const grams = isKilogramProduct(product) ? normalizeWeight(product, packSelect?.value) : null;
      if (link && product) link.href = whatsappUrl(singleProductCart(product, grams, getQuantity(event.target)));
    }
  });

  document.addEventListener("change", (event) => {
    if (event.target.matches("[data-pack-select]")) updatePackPrice(event.target);
  });

  byId("category-filters").addEventListener("change", (event) => {
    if (!event.target.matches("input[type=checkbox]")) return;
    if (event.target.checked) selectedCategories.add(event.target.value);
    else selectedCategories.delete(event.target.value);
    renderProducts();
  });
  byId("featured-only").addEventListener("change", renderProducts);
  byId("sort-products").addEventListener("change", renderProducts);
  document.addEventListener("click", (event) => {
    if (event.target.closest(".clear-filters")) clearFilters();
  });

  document.querySelectorAll(".search-trigger").forEach((button) => button.addEventListener("click", () => {
    byId("shop").scrollIntoView({ behavior: scrollBehavior(), block: "start" });
    window.setTimeout(() => byId("product-search").focus(), 450);
  }));
  document.querySelectorAll(".cart-trigger").forEach((button) => button.addEventListener("click", openCart));
  document.querySelectorAll(".close-drawer").forEach((button) => button.addEventListener("click", closeCart));
  byId("drawer-backdrop").addEventListener("click", closeCart);
  document.querySelector(".continue-shopping").addEventListener("click", () => { closeCart(); byId("shop").scrollIntoView({ behavior: scrollBehavior() }); });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape" && byId("cart-drawer").classList.contains("is-open")) closeCart(); });

  byId("product-modal").addEventListener("click", (event) => {
    if (event.target === byId("product-modal") || event.target.closest(".modal-close")) byId("product-modal").close();
  });
  byId("product-modal-content").addEventListener("click", (event) => {
    const link = event.target.closest("[data-modal-buy]");
    if (link) {
      const product = findProduct(link.dataset.modalBuy);
      const packSelect = product && byId(`pack-modal-${product.id}`);
      const grams = isKilogramProduct(product) ? normalizeWeight(product, packSelect?.value) : null;
      if (product) link.href = whatsappUrl(singleProductCart(product, grams, getQuantity(byId("modal-qty"))));
    }
  });

  byId("menu-toggle")?.addEventListener("click", (event) => {
    const button = event.currentTarget;
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    button.setAttribute("aria-label", expanded ? "Open navigation" : "Close navigation");
    byId("primary-nav").classList.toggle("is-open", !expanded);
  });
  byId("primary-nav").addEventListener("click", (event) => {
    if (!event.target.closest("a")) return;
    byId("primary-nav").classList.remove("is-open");
    byId("menu-toggle").setAttribute("aria-expanded", "false");
    byId("menu-toggle").setAttribute("aria-label", "Open navigation");
  });

  document.querySelectorAll("[data-carousel]").forEach((button) => button.addEventListener("click", () => {
    const direction = button.dataset.carousel === "back" ? -1 : 1;
    byId("featured-track").scrollBy({ left: direction * Math.max(220, byId("featured-track").clientWidth * .72), behavior: scrollBehavior() });
  }));
  document.querySelector(".testimonial-prev").addEventListener("click", () => { testimonialIndex = Math.max(0, testimonialIndex - 1); updateTestimonialPosition(); });
  document.querySelector(".testimonial-next").addEventListener("click", () => { testimonialIndex += 1; updateTestimonialPosition(); });
  window.addEventListener("resize", updateTestimonialPosition);
  byId("filter-toggle").addEventListener("click", (event) => {
    const panel = byId("filter-panel");
    const isOpen = panel.classList.toggle("is-open");
    event.currentTarget.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("error", (event) => {
    if (!(event.target instanceof HTMLImageElement) || event.target.dataset.fallback) return;
    event.target.dataset.fallback = "true";
    event.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 500'%3E%3Crect width='600' height='500' fill='%23e7ecdf'/%3E%3Cpath d='M300 340c-94-15-123-85-104-145 68 10 104 47 104 104 3-93 61-151 150-167-2 94-47 167-150 208Z' fill='none' stroke='%234f8a45' stroke-width='9' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M300 400V230' stroke='%23174d32' stroke-width='8' stroke-linecap='round'/%3E%3C/svg%3E";
  }, true);
}

document.addEventListener("DOMContentLoaded", init);
