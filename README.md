# Vaaraahi — vaaraahikitchen.com

A dependency-free static website. No build step, no framework — upload the folder to any host (Netlify, Vercel, GoDaddy, Hostinger, GitHub Pages) and point vaaraahikitchen.com at it.

## Pages
- `index.html` — Home (storefront hero, entrance section, signature dishes)
- `menu.html` — Full menu: live search, category pills, Veg/Non-Veg filter, Cards/List toggle, **199 dishes**
- `about.html` — Story + tagline
- `catering.html` — Three packages + how it works
- `contact.html` — Location / phone / hours (placeholders)

## The menu is 1:1 with your spreadsheet
`js/data.js` is generated directly from `Menu_With_Rates.xlsx`. Every row of every tab appears exactly once:

| Tab | Items | | Tab | Items |
|---|---|---|---|---|
| Veg Appetizer | 31 | | Veg Biryani Pulao | 10 |
| Non Veg Appetizer | 33 | | Chicken Biryani Pulao | 10 |
| Veg Curries | 23 | | Goat Biryani Pulao | 7 |
| Chicken Curries | 17 | | Sea Food Biryani | 3 |
| Goat Curries | 10 | | Fried Rice + Noodles | 8 + 8 |
| Sea Food Curries | 3 | | Kothu Parotta | 5 |
| Breads | 11 | | Dessert | 7 |
| Tandoori Grill | 8 | | Drinks | 5 |

**Total: 199.** Only misspellings were corrected (Vujayawada → Vijayawada, Panner → Paneer, Schzwan → Schezwan, Chesnut → Chestnut, Bendi → Bhindi, Dhabha → Dhaba, Jamoon → Jamun, Rabidi → Rabdi, Andhara → Andhra). No dish was renamed, merged, or dropped. Veg Cutlet had no price in the sheet and is set to $6.99 — change it in `js/data.js` if you'd like.

## Dish images — read this before launch
**54 dishes show real photographs; the other 145 show a styled plate drawn in the brand palette.**

Every photo comes from Unsplash (free for commercial use, no attribution required), each is used for exactly **one** dish, and each was only assigned where I could confirm from the source what it shows. The strongest sections are Breads (10 of 11), Chicken Curries (11 of 17), Goat Curries (7 of 10), and Biryani (14 of 30). Desserts and Drinks have none yet.

**Why not all 199?** Free stock libraries simply don't carry verified photos of most Andhra dishes — Gongura, Ulavacharu, Avakai, Nallakaram, Mirchi Bajji, Karivepaku, Gutti Vankai. I will not put a generic curry photo on Gongura Chicken: gongura is visibly red-and-green from the sorrel, and a plain brown curry there is a mislabel. Those dishes keep their drawn plate, which at least shows the right ingredients. The two honest ways to close the gap:

1. **Your own photography** — the real answer, and the only source for the Andhra dishes.
2. **Paid stock** (Adobe Stock, Getty, Shutterstock) — they do carry specific Indian dishes. I can't purchase or download on your behalf, but if you buy them I'll wire every file in.

To add any photo: save it as `assets/dishes/<slug>.jpg` (all 199 filenames are in `SHOT-LIST.md`) and add the slug to the `PHOTOS` array at the top of `js/images.js`. Local photos always override the stock ones. If any stock URL ever stops loading, that card falls back to its drawn plate automatically — the grid never breaks.

The full map is `PHOTO_URLS` at the top of `js/images.js`, one line per dish with a note of what the source showed, so you can audit every assignment yourself.


## Brand photography
Your signage mockups are cropped into `assets/`: `exterior.jpg` (monument sign + building at dusk, the home hero), `storefront.jpg`, `entrance.jpg` (the frosted glass doors) and `team.jpg` (the polo). Replace any of these with real photos of the same shape and nothing else needs changing.

## Before launch — checklist
1. **Opening hours** — the only contact detail still missing. Search for "to be added" / "Coming soon"; they appear in the Hours card on `contact.html` and in every page footer.
2. **Online ordering** — the header button currently dials +1 (469) 850-4763 ("Call to Order"). When your ordering platform is live, swap the `href="tel:..."` for the ordering URL and change the label back to "Order Online".
3. **Dish photos** — see above.
4. **Map** — done: `contact.html` embeds Google Maps for 2550 Preston Rd, Frisco, TX 75034.

## Editing the menu later
`js/data.js`, one line per dish:
```js
{ c:"chk-biryani", n:"Chicken Dum Biryani", p:14.99, fam:29.99, veg:false, img:"chicken-dum-biryani" },
```
`p` = price · `fam` = family-pack price · `veg` = green/red mark · `img` = the photo slug. Add or re-price dishes here and the menu page rebuilds itself.
