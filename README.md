# Pour Your Own Epoxy: Black Friday 2026 landing page

Staged landing page for the Black Friday gift card and class offer. The staging preview is static HTML served by GitHub Pages. The `shopify/` folder holds the same page as a Shopify section so it can go into the live theme with no rebuild.

## Staging preview

The preview is set to `noindex` so it stays out of Google.

The countdown follows the real dates, so before 20 Nov it shows "Black Friday deals open in". To see the other states, add a query string:

* `?preview=live` shows the page as it looks during the sale
* `?preview=ended` shows the post-sale message

Images on the staging page load from the PYOE content drive. In Shopify they are picked from the store's own image library.

## Offer as built (placeholders until Colin confirms)

| Gift card value | Black Friday price | Saving |
| --- | --- | --- |
| $100 | $85 | $15 |
| $150 | $125 | $25 (highlighted) |
| $250 | $200 | $50 |

* Class code: BLACKFRIDAY15, 15% off selected classes
* Sale window: Fri 20 Nov 00:00 ET to Mon 30 Nov 23:59 ET
* Buy buttons point to `/products/pour-your-own-epoxy-gift-card` and class links to `/pages/class-calendar`

## Installing in Shopify (Online Store 2.0 themes)

1. Online Store > Themes > duplicate the live theme first, then Edit code on the duplicate.
2. Assets > Add a new asset: upload `shopify/assets/pyoe-bf.css` and `shopify/assets/pyoe-bf.js`.
3. Sections > Add a new section named `pyoe-black-friday`, paste in `shopify/sections/pyoe-black-friday.liquid`.
4. Templates > Add a new template, type page, name `black-friday`, paste in `shopify/templates/page.black-friday.json`.
5. Online Store > Pages > Add page, title "Black Friday", choose template `page.black-friday`. Save as hidden until launch.
6. Customize the page: add the hero and gallery images, set each gift card tier's buy link (product or variant URL), check dates and the class calendar link.
7. Preview, then publish the duplicate theme or copy the files into the live theme.

Everything (prices, dates, code, copy, FAQs) is editable in the theme editor, so no code changes are needed when the offer is confirmed.

## To confirm with Colin before launch

* Gift card tiers and prices
* How the discounted cards are fulfilled. Shopify gift cards normally carry the value of the price paid, so selling a $150 card for $125 needs an app or a "pay $125, get a $25 bonus card" setup. This decides where each buy button links.
* Which classes or markets BLACKFRIDAY15 applies to, and that it is restricted to those products in Shopify
* Whether BLACKFRIDAY15 stacks with VIP15 (page copy currently says it cannot be combined)
* Sale dates
* Tier notes, especially "Made for a date night for two" on the $250 card
* Gift card expiry terms, if he wants them in the FAQ

## Note on the existing gift card product

The store's current gift card (`/products/pour-your-own-epoxy-gift-card`) is sold in $144, $169, $184 and $199 amounts, which match class seat prices. The Black Friday tiers ($100, $150, $250) don't exist as variants yet, so the buy buttons land on the product page rather than a specific amount until the Black Friday variants are set up.
