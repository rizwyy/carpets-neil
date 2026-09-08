# Woltiz / Floors — Carpet Discovery Prototype

A Nuxt 3 application exploring a guided carpet-shopping experience: browse carpet categories, explore styles and yarn options, enter enquiry details, and view a product catalog.

The project demonstrates Vue component development, nested routing, mobile-focused interface design, Pinia state, and a small Nuxt server integration. **Current scope: a browsing and enquiry-interface prototype, with experimental catalog scraping. Authentication, enquiry delivery, checkout, and payments are not implemented.**

## Project at a glance

| Area | Implementation |
| --- | --- |
| Frontend | Nuxt 3, Vue 3, JavaScript |
| Styling | Tailwind CSS, scoped CSS, Nuxt Fonts |
| State | Pinia product and shopping-state scaffolding |
| Routing | Nuxt file-based routes with dynamic model and yarn segments |
| Data integration | Nuxt server endpoint fetching external catalog HTML |
| Parsing | Browser DOMParser in the catalog page; Cheerio in the details page and scraping composable |

The repository also declares GSAP, Axios, and Puppeteer dependencies; their presence alone does not establish a completed feature.

## User journey

1. Open the mobile landing page with Woltiz / Floors branding.
2. Browse wall-to-wall carpets, carpet tiles, area rugs, or runners.
3. Explore style options such as solid and textured carpets, plus displayed color swatches.
4. View yarn choices.
5. Open the enquiry interface, which switches between quantity and a site address for a measurement request.
6. Continue to the catalog, whose implementation attempts to load external product names, colors, prices, and links.

The selection screens illustrate the intended journey. Some links are placeholders, selections do not filter the external catalog, and the enquiry form does not save or send the entered information.

## Engineering highlights and code tour

| Code | What to review |
| --- | --- |
| [pages/index.vue](pages/index.vue) | Composition of the landing page from navigation and hero components |
| [pages/carpets/index.vue](pages/carpets/index.vue) | Image-led category browsing |
| [pages/carpets/[model]/index.vue](pages/carpets/%5Bmodel%5D/index.vue) | Dynamic category route and style-selection interface |
| [pages/carpets/[model]/[yarn]/details.vue](pages/carpets/%5Bmodel%5D/%5Byarn%5D/details.vue) | Conditional enquiry fields and a separate scraping implementation |
| [pages/carpets/[model]/[yarn]/catalog.vue](pages/carpets/%5Bmodel%5D/%5Byarn%5D/catalog.vue) | HTML parsing, price normalization, deduplication, loading UI, and retries |
| [components/CatalogItemMOB.vue](components/CatalogItemMOB.vue), [components/CatalogItemPC.vue](components/CatalogItemPC.vue) | Product-card presentation for mobile and desktop |
| [stores/user.js](stores/user.js) | Shared product state and sample inventory |
| [server/api/proxy.js](server/api/proxy.js) | Server-side fetch of a fixed external catalog URL |

## Architecture and request flow

```text
Nuxt pages and components
        |
        | fetch('/api/proxy')
        v
Nuxt server endpoint
        |
        | fetch fixed Rols Carpets catalog URL
        v
External HTML
        |
        v
Page-level parsing and normalization
        |
        v
Pinia products state → catalog cards
```

The proxy returns HTML rather than structured product JSON. The catalog page parses that HTML in the browser, normalizes prices, removes duplicate records, and limits the result to 30 products. The details page contains a separate Cheerio-based parser. These paths depend on the external site's availability and markup; they are not a stable product API or inventory database.

## Authentication, credentials, and cookies

There is **no authentication system** in this repository: no login handler, password verification, JWT issuance, token refresh, authenticated session, or route authorization.

- The store named `user` contains product and shopping state, not an authenticated user identity.
- Links to `/auth` are placeholders; no corresponding authentication page exists.
- `myCookieName` is used for a route path on the yarn page and for scraped product data on the details page.
- `productsCookieData` appears in experimental catalog caching code and is cleared during setup.
- These are application-data cookies, not authentication tokens. The calls do not explicitly configure `httpOnly`, `secure`, or `sameSite`.
- The proxy uses a fixed public URL without an API key or authorization header. No application credentials are required by this code.

## Run locally

Install Node.js and npm. This repository does not pin a Node version.

```bash
git clone https://github.com/rizwyy/carpets-neil.git
cd carpets-neil
npm ci
npm run dev
```

Open `http://localhost:3000`. Start with a viewport narrower than 990px: the current homepage is wrapped in the mobile-only layout.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start development server with host binding |
| `npm run build` | Build the Nuxt application |
| `npm run preview` | Preview the production build |
| `npm run generate` | Generate static output |

The catalog needs the `/api/proxy` server endpoint at runtime; static output alone does not provide that endpoint. Network access is required for external catalog data.

## Current limitations

This source snapshot is unfinished and should be evaluated as a prototype:

- The catalog page has an incorrect relative store import: `../../../stores/user` does not reach the root `stores` directory.
- Catalog cards reference `/carpets/<color>.jpg`, but the corresponding asset directory is absent.
- The homepage and enquiry interface have incomplete desktop coverage.
- Some navigation and product-detail controls are placeholders.
- Enquiry inputs are not connected to submission or persistence.
- Cart and wishlist fields are scaffolding; there is no completed order flow.
- Scraping and cookie handling are duplicated and experimental; error recovery and data-state handling need cleanup.
- No automated test or lint scripts are defined. This README update was checked against source code; it does not certify a passing build or browser flow.

## Next improvements

1. Repair imports, routes, and image mappings so the browsing path is reliable.
2. Consolidate catalog parsing behind one server response and add clear failure states.
3. Complete desktop layouts and accessible form interactions.
4. Connect the enquiry form to a validated submission endpoint if enquiry capture is required.
5. Add focused tests for navigation, parsing, and enquiry submission.

Authentication and payments would be separate additions based on product requirements.

