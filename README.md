# 🌿 MANAVATA – Organic & Eco Store

### Choose Natural. Live Healthy. Grow Sustainably.

<p align="center"><strong>A modern, nature-inspired e-commerce frontend for Manavata</strong></p>

<p align="center">Bringing natural products, traditional wellness, sustainable living and educational resources closer to everyone.</p>

---

## 🌱 About the Project

**Manavata Organic & Eco Store** is an online shopping platform designed for [Manavata](https://manavata.org/), an international voluntary, not-for-profit organisation working towards creating a **Healthy, Happy & Harmonious (3H) World**.

The platform provides a convenient way for customers to explore and order Manavata's natural organic products, herbal powders, wellness accessories, educational books, yoga materials and eco-friendly merchandise.

The store offers a simple shopping experience with a direct **WhatsApp ordering system**, allowing customers to add products to their cart, review their orders and connect directly with the Manavata team.

**No backend or database is required.** The entire shopping experience is handled on the frontend.

---

## ✨ Key Features

### 🛍️ E-Commerce Experience

- Attractive homepage and product showcase.
- Dynamic product catalogue.
- Organised product categories.
- Product details and descriptions.
- Featured and popular products.
- Product search functionality.
- Category-based filtering.
- Price sorting and product discovery.

### 🛒 Shopping Cart

- Add products to cart.
- Increase or decrease product quantities.
- Remove products from cart.
- Automatic price calculation.
- Real-time cart count.
- Persistent cart using browser Local Storage.
- Mini-cart and cart summary.
- 250g, 500g, 750g, and 1 Kg options for products sold by the kilogram.
- Pack prices prorated from the listed 1 Kg price.

### 💬 WhatsApp Ordering Integration

- Direct WhatsApp checkout.
- Automatically generated order messages.
- Selected product names, pack sizes and quantities.
- Automatic total amount calculation.
- Direct communication with the Manavata team.
- Supports WhatsApp mobile application and WhatsApp Web.

**WhatsApp Ordering Number:** +91 9391451139

### 🎨 UI/UX & Animations

- Premium nature-inspired design.
- Modern typography.
- Responsive product cards.
- Smooth scrolling.
- Scroll-triggered animations.
- Hover transformations.
- Image zoom effects.
- Animated buttons and interactions.
- Elegant transitions and micro-animations.
- Mobile-friendly navigation.

### 📱 Responsive Design

Optimised for:

- Desktop computers.
- Laptops.
- Tablets.
- Android smartphones.
- iPhones.

---

## 🌾 Product Categories

The store showcases Manavata's collection across the following categories:

| Category                      | Products                                                   |
| ----------------------------- | ---------------------------------------------------------- |
| Organic Grains & Pulses       | Brown Rice, Red Rice, Minapapapu, Pesarapapu, Pesallu      |
| Natural Sweeteners & Dairy    | Honey, Cow Ghee, Jaggery, Dates                            |
| Wellness & Yoga Accessories   | Amruthadhara, Jalanethi Pot, Sutra Nethi, Eye Cleaning Cup |
| Eco-Friendly Merchandise      | 3H Cloth Bags, T-Shirts                                    |
| Books & Educational Materials | Yoga Chart, Samaskaravidya Book, Manavata Notebook         |
| Natural Farming Products      | Ghana Jeevamrutham, Jeevamrutham, Nema Astharam            |
| Leaves Powders                | Munnaga, Tulasi, Neem, Amla and other leaf powders         |
| Ayurvedic Herbal Powders      | Sathavari, Ashava Gandha, Thripala, Brahmi and others      |

The initial catalogue contains 41 product listings with their respective units and prices.
Products listed at 1 Kg can be ordered in 250g, 500g, 750g, or 1 Kg packs. Smaller-pack prices are calculated proportionally from the supplied 1 Kg price.

---

## 💬 How WhatsApp Ordering Works

The store follows a simple customer journey:

**1. Explore Products**

Browse the available organic and wellness products.

**2. Add to Cart**

Select products, pack sizes where available, and quantities.

**3. Review Cart**

Check selected products, pack sizes, quantities and total price.

**4. Checkout via WhatsApp**

Click the WhatsApp checkout button.

**5. Connect with Manavata**

A pre-filled order message opens in WhatsApp, allowing customers to communicate with the Manavata team and complete their order.

### Sample WhatsApp Order

```text
Hello Manavata Team!

I would like to place an order
from the Manavata Organic Store.

My Order:

1. Unpolished Brown Rice (500g) – 2 × ₹55 = ₹110

2. Honey (1 Kg) – 1 × ₹350 = ₹350

Total Quantity: 3
Total Amount: ₹460

Please contact me to confirm availability, delivery charges and payment details.

Thank you!
Manavata – Healthy, Happy & Harmonious Living.
```

---

## 🛠️ Technology & Implementation

The project uses a frontend-only architecture.

| Component              | Implementation                         |
| ---------------------- | -------------------------------------- |
| HTML                   | Storefront structure in `index.html`   |
| CSS                    | Responsive design in `styles.css`      |
| JavaScript             | Catalogue and interactions in `app.js` |
| Local Storage          | Persistent cart and pack selections    |
| WhatsApp Click-to-Chat | Order communication; no payment API    |

---

## 🚀 Getting Started

Open `index.html` in a modern browser. This is a static frontend and does not require Node.js, npm, a development server, or installation steps. Decorative photography and web fonts may load from external hosts and require an internet connection.

---

## 📂 Project Structure

The project uses this structure:

```text
manavata-eco-store/
├── images/       # Uploaded product and category photography
├── index.html
├── styles.css
├── app.js        # Product data, cart, pack sizing and WhatsApp checkout
└── README.md
```

---

## 🌍 About Manavata

Manavata is an international voluntary, not-for-profit organisation dedicated to creating a **Healthy, Happy & Harmonious World**.

Its initiatives focus on:

- Holistic Health.
- Value Education.
- Yoga & Spirituality.
- Environment & Sustainability.

Through this online store, Manavata aims to make natural products, traditional knowledge and sustainable lifestyle choices more accessible.

🌐 Official Website: [https://manavata.org/](https://manavata.org/)

📚 Course links:

- Samskara Vidya: [info.manavata.org/value-education](https://info.manavata.org/value-education)
- Yoga: [events.manavata.org/events/yoga-teacher-training-ytt-1-month-course](https://events.manavata.org/events/yoga-teacher-training-ytt-1-month-course/)
- Holistic living: [manavata.org/education-2](https://manavata.org/education-2/)
- Personal development: [manavata.org/health](https://manavata.org/health/)
- Natural farming: [manavata.org/environment-2](https://manavata.org/environment-2/)

---

## 🔮 Future Enhancements

Potential future improvements include:

- Online payment gateway integration.
- Customer accounts and authentication.
- Backend order management.
- Inventory management.
- Order tracking.
- Product reviews and ratings.
- Admin dashboard.
- Delivery and shipping management.
- Multilingual shopping experience.

---

## 🤝 Contribution

Suggestions and improvements are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push the branch.
5. Submit a Pull Request.

---

## 📞 Contact & Orders

**MANAVATA ORGANIC & ECO STORE**

- Website: [https://manavata.org/](https://manavata.org/)
- WhatsApp Orders: +91 9391451139
- GitHub: [https://github.com/mounika281005](https://github.com/mounika281005)

For product enquiries and orders, connect with the Manavata team through WhatsApp.

---

## 💚 Our Philosophy

> "Healthy Living. Natural Products. Sustainable Future."

Every small choice towards natural living contributes to a healthier individual, a happier community and a more harmonious world.

**MANAVATA – For the Well-being of All Humanity.**

---

<p align="center">🌿 <strong>MANAVATA ORGANIC &amp; ECO STORE</strong> 🌿<br /><em>Choose Natural. Live Healthy. Grow Sustainably.</em><br /><br />© 2026 Manavata. All Rights Reserved.</p>
