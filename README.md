# Manavata Natural & Organic Store

A responsive, frontend-only storefront. It has no build step, backend, database, authentication, or payment integration.

## Open the storefront

Open `index.html` in a modern browser. Product photos are local in `images/`; some decorative photography and web fonts load from external hosts. The storefront itself is plain HTML, CSS, and JavaScript.

## Maintain the catalogue

Edit `PRODUCT_DATA` in `app.js` to change product names, units, prices, descriptions, categories, or featured selection. Product photos are assigned by product ID in `PRODUCT_IMAGE_PATHS`. All catalogue items currently point to uploaded product photos in `images/`; the generated `placeholder_*.png` files remain in the folder but are no longer used by the catalogue. The nine “Shop by category” card photos are assigned in `CATEGORIES` and use uploaded files from `images/`.

Products listed at `1 Kg` have 250g, 500g, 750g, and 1 Kg pack options. Their smaller-pack prices are prorated from the product's listed 1 Kg price; edit that base price in `PRODUCT_DATA` if it changes.

The cart stores product IDs, selected pack sizes, and quantities in browser Local Storage. Prices are always read from `PRODUCT_DATA`. WhatsApp checkout creates a Click-to-Chat message for **+91 9391451139** with the current cart, pack sizes, and calculated total. Opening WhatsApp does not submit or confirm an order.

Course cards link to [manavata.org/courses](https://manavata.org/courses/). Contact, order, and organization links use the supplied Manavata WhatsApp number and website.
