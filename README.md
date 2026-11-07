# Pour Your Own Epoxy: Black Friday 2026 landing page

Staged landing page for the Black Friday gift card and class offer. The staging preview is static HTML served by GitHub Pages. The `shopify/` folder holds the same page as a Shopify section so it can go into the live theme with no rebuild.

## Staging preview

The preview is set to `noindex` so it stays out of Google.

The countdown follows the real dates, so before 20 Nov it shows "Black Friday deals open in". To see the other states, add a query string:

* `?preview=live` shows the page as it looks during the sale
* `?preview=ended` shows the post-sale message

Images on the staging page load from the PYOE content drive. In Shopify they are picked from the store's own image library.

## Offer (confirmed by Colin, 7 Nov 2026)

| Gift card value | Black Friday price | Saving | Rise variant |
| --- | --- | --- | --- |
| $100 | $85 | $15 | 50922491674880 |
| $150 | $125 | $25 (highlighted) | 50922491707648 |
| $250 | $200 | $50 | 50922491740416 |

* Gift cards sold through the Rise app on `/products/egift-card`
* Class code: BLACKFRIDAY25, 25% off the 19 listed classes, not combinable with VIP15
* Sale window: Fri 13 Nov 00:00 ET to Mon 30 Nov 23:59 ET
* The class list is a block per class in the Shopify section, so classes can be added or removed in the theme editor

## Installing in Shopify (Online Store 2.0 themes)

1. Online Store > Themes > duplicate the live theme first, then Edit code on the duplicate.
2. Assets > Add a new asset: upload `shopify/assets/pyoe-bf.css` and `shopify/assets/pyoe-bf.js`.
3. Sections > Add a new section named `pyoe-black-friday`, paste in `shopify/sections/pyoe-black-friday.liquid`.
4. Templates > Add a new template, type page, name `black-friday`, paste in `shopify/templates/page.black-friday.json`.
5. Online Store > Pages > Add page, title "Black Friday", choose template `page.black-friday`. Save as hidden until launch.
6. Customize the page: add the hero and gallery images, set each gift card tier's buy link (product or variant URL), check dates and the class calendar link.
7. Preview, then publish the duplicate theme or copy the files into the live theme.

Everything (prices, dates, code, copy, FAQs) is editable in the theme editor, so no code changes are needed when the offer is confirmed.

## Still to confirm

* BLACKFRIDAY25 created in Shopify and limited to the listed class products
* Baltimore dates: Colin listed 5 and 6 Dec, the store has 4 and 5 Dec
