# Page Creation Engine

A fully static, frontend-only page rendering engine. Define pages as JSON, get beautifully themed, animated web pages instantly — no backend, no database.

Built with Vite + React, it is designed for live demos, CMS integrations, and rapid landing page generation.

---

## Features

- **JSON-driven pages** — drop a `.json` file in `src/data/pages/` and it becomes a live route
- **3 built-in design systems** — Default Startup, Enterprise Sharp, Creative Soft — switchable at runtime via CSS custom properties
- **7 block types** — Hero, Feature Cards, Stats Row, Testimonials, FAQ Accordion, Data Grid, CTA Banner
- **Strict validation** — every page JSON is validated with Zod before rendering
- **Framer Motion animations** — staggered fade-up on every block
- **`/demo` live editor** — split-screen JSON editor with instant preview, theme switcher, and presentation mode
- **`/preview` URL route** — render any page from a Base64-encoded JSON query parameter (useful for CMS preview integrations)
- **Zero backend** — purely static, deployable to any CDN (Vercel, Netlify, GitHub Pages)

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install & Run

```bash
git clone https://github.com/roshan-kumar123/page-creation-engine.git
cd page-creation-engine
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) — redirects to `/home` by default.

---

## Routes

| Route                    | Description                                       |
| ------------------------ | ------------------------------------------------- |
| `/home`                  | Renders `src/data/pages/home.json`                |
| `/:slug`                 | Renders `src/data/pages/<slug>.json`              |
| `/demo`                  | Split-screen live JSON editor with theme switcher |
| `/preview?data=<base64>` | Renders a page from a URL-encoded JSON payload    |

---

## Adding a New Page

1. Create `src/data/pages/my-page.json` following the schema below
2. Visit `/my-page` — the engine loads and validates it automatically

---

## Page JSON Schema

```json
{
  "page_metadata": {
    "title": "Page Title",
    "slug": "my-page",
    "pageType": "landing"
  },
  "blocks": [
    {
      "type": "hero",
      "props": {
        "headline": "Your headline here",
        "primaryCTA": { "label": "Get Started", "href": "/demo" }
      }
    }
  ]
}
```

**`pageType`** options: `landing` | `blog` | `service` | `resource`

---

## Block Types

| Type             | Required props                                     |
| ---------------- | -------------------------------------------------- |
| `hero`           | `headline`, `primaryCTA: { label, href }`          |
| `feature_card`   | `heading`, `features: [{ title, description }]`    |
| `stats_row`      | `stats: [{ value, label }]`                        |
| `testimonial`    | `testimonials: [{ quote, author }]`                |
| `cta_banner`     | `heading`, `buttonLabel`, `buttonHref`             |
| `faq_accordion`  | `heading`, `faqs: [{ question, answer }]`          |
| `rich_data_grid` | `heading`, `columns: [string]`, `rows: [[string]]` |

---

## Using the `/preview` Route

Encode any valid page JSON as Base64 and pass it as the `?data=` parameter:

```js
// Run in browser console to generate the URL parameter
btoa(
  unescape(
    encodeURIComponent(
      JSON.stringify({
        page_metadata: {
          title: "My Page",
          slug: "my-page",
          pageType: "landing",
        },
        blocks: [
          {
            type: "hero",
            props: {
              headline: "Hello World",
              primaryCTA: { label: "Learn More", href: "/" },
            },
          },
        ],
      }),
    ),
  ),
);
```

Then navigate to:

```
/preview?data=<paste-output-here>
```

This is useful for CMS preview integrations — send the encoded payload from any external system and get a live preview without a backend.

---

## Project Structure

```
src/
├── data/pages/          # JSON page definitions (one file = one route)
├── components/
│   ├── blocks/          # One component per block type
│   ├── registry.js      # Maps block type strings to React components
│   └── PageRenderer.jsx # Framer Motion stagger wrapper
├── schemas/
│   └── pageSchema.js    # Zod validation for all block types
├── themes/
│   └── themes.js        # 3 design system definitions (CSS custom properties)
├── context/
│   └── ThemeContext.jsx # Runtime theme switcher
└── pages/
    ├── DynamicPage.jsx  # Loads JSON via import.meta.glob
    ├── DemoPage.jsx     # Live editor + theme switcher
    └── PreviewPage.jsx  # URL parameter renderer
```

---

## Adding a New Block Type

1. Create `src/components/blocks/MyBlock.jsx`
2. Add its Zod schema to the `discriminatedUnion` in `src/schemas/pageSchema.js`
3. Add one entry to `src/components/registry.js`
4. Use `"type": "my_block"` in any page JSON

## Adding a New Theme

Add one entry to `src/themes/themes.js` — it appears in the `/demo` Brand Switcher immediately.

---

## Build & Deploy

```bash
npm run build   # outputs to dist/
```

Deploy the `dist/` folder to any static host. A `vercel.json` is included for Vercel (handles client-side routing):

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

For Netlify, add a `public/_redirects` file:

```
/* /index.html 200
```

---

## Tech Stack

| Package         | Purpose                                    |
| --------------- | ------------------------------------------ |
| Vite + React    | Build tooling and UI                       |
| React Router v6 | Client-side routing                        |
| Zod             | Runtime JSON schema validation             |
| Framer Motion   | Stagger animations + accordion transitions |
| Tailwind CSS v3 | Utility-first styling                      |
