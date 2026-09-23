# Quincy Labs editorial redesign

This folder contains the source for the approved editorial review site:
https://quincy-labs-design-study.dezcalimese.chatgpt.site/

Imported from review source commit `5a2379eae63c977374593fea38f2f26cba3498cd`.

## Run the review app

Use Node.js 22.13 or later. From this folder, run `npm ci`, then `npm run dev`.
Use `npm run build` to build and `npx tsc --noEmit` to check types.

## Integration status

This folder remains the standalone Vinext/Sites reference app. Its editorial
design is now integrated into the production Next.js app in `src/` on this
branch. The root TypeScript project excludes this reference folder so the two
apps use their own dependencies and path aliases.

The review includes the editorial page layouts, Quincy colours, Reishi effect,
footer logo, and native browser links. Article content is an imported snapshot;
the contact form prepares an email draft. The review site is not indexed.

The Next.js integration retains live Sanity and Substack content and the existing
routes. Known Substack articles retain the approved categories through
`src/lib/article-categories.json`; newly discovered articles appear under Substack
until categorized. The contact form prepares an email draft; it does not deliver
mail on the server. Production keeps its existing indexing behavior and article
metadata. The Sites manifest here belongs only to the reference app.

The imported source passed its TypeScript and production build checks. Header
links and an article click were also checked on the published review site.
