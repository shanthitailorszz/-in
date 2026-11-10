# Shanti Nandakumar Tailors

A fast, mobile-first static site for a tailoring shop in Thanjavur. It is designed for GitHub Pages and deliberately uses only verified business information supplied by the owner.

## Run locally

No build step is required. From this folder, run `npx serve .`, then open the local address printed by the command. Any static web server will work.

## Update business information

Edit `config.js` to update the name, address, phone, WhatsApp, email, hours, Maps link, website URL, Instagram, or confirmed services. The page, contact links, form, and Schema.org data use that configuration.

Before adding day-specific opening hours to structured data, confirm the days the shop is open. Do not add ratings, reviews, prices, GPS coordinates, service claims, or photos that cannot be verified.

## Add genuine gallery images

1. Place owner-approved images in `assets/images/` with clear names, such as `shop-exterior-thanjavur.jpg` or `blouse-stitching-sample.jpg`.
2. Compress them before committing and use accurate alt text in `index.html`.
3. Only publish shop, work, or customer-approved images. Never use stock imagery as if it were the shop or its work.

## Publish with GitHub Pages

1. Push this repository to GitHub.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**, choose `main`, choose `/(root)`, then save.
4. GitHub will publish the site at `https://shanthitailorszz.github.io/-in/`. If you use a custom domain, update `siteUrl` in `config.js`, the canonical metadata in `Index.html`, `robots.txt`, and `sitemap.xml`.
5. In **Settings → Pages**, enter the custom domain. Add the DNS record that GitHub displays, then enable **Enforce HTTPS** after DNS is verified.

GitHub Pages provides HTTPS for its default `github.io` address. See the official [GitHub Pages documentation](https://docs.github.com/en/pages).

## Google Business Profile

Do not create a duplicate listing. First search Google Maps for “Shanti Nandakumar Tailors” and “Shanthi tailoring shop” at the supplied address. If it exists, claim it; otherwise use the official [Google Business Profile setup flow](https://www.google.com/business/).

Suggested profile details:

- **Business name:** Shanti Nandakumar Tailors
- **Primary category:** Tailor (confirm the exact category Google offers during setup)
- **Possible additional categories:** Clothing alteration service, Women's clothing store — add only if truly applicable and available in Google’s category list.
- **Address:** Shanthi tailoring shop 🎀, 605, Raja Nagar Rd, Lakshmi Nagar, New Housing Unit, Thanjavur, Tamil Nadu 613005, India
- **Phone:** +91 99525 63460
- **Website:** `https://shanthitailorszz.github.io/-in/` after Pages is live
- **Hours:** 8:00 AM–8:00 PM (confirm open days first)
- **Description:** “Shanti Nandakumar Tailors is a tailoring shop in Thanjavur. Contact the shop for blouse stitching, chudithar stitching, alterations and custom tailoring enquiries.”

Use genuine owner-approved photographs and complete Google’s official verification method. Do not bypass verification or add ratings/reviews that are not authentic. Official help: [verify your Business Profile](https://support.google.com/business/answer/7107242) and [improve local ranking](https://support.google.com/business/answer/7091).

## Google Search Console

After the site is public:

1. Open [Google Search Console](https://search.google.com/search-console/about) and add the full `https://shanthitailorszz.github.io/-in/` URL-prefix property.
2. Verify ownership using Google’s offered method. The HTML meta-tag method is convenient for GitHub Pages: place the provided tag in `index.html` before `</head>`, commit, and republish.
3. Submit `https://shanthitailorszz.github.io/-in/sitemap.xml` in **Sitemaps**.
4. Use **URL Inspection** to request indexing after the published page loads.
5. Monitor indexing and performance; do not say the site is indexed until Search Console confirms it.

## Contact-form note

The form validates user input, includes a hidden bot-trap field, and opens WhatsApp with the enquiry; it does not retain customer data. A server-side endpoint can be added later if needed, with rate limiting, anti-spam verification, secure storage, and a privacy notice.

## Missing information / next actions

- Confirm the days the shop is open.
- Supply owner-approved shop exterior/interior, sewing-machine, tailoring-work, finished-garment and blouse-design photos for a gallery.
- Confirm whether the listed four services are the complete public service list; add or remove services in `config.js`.
- Confirm whether a Facebook Page exists before linking it.
- Complete Google Business Profile ownership/verification and GitHub Pages activation. Neither is automatic from this source code.
