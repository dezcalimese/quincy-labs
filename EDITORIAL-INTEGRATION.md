# Editorial design integration

The Next.js app in `src/` now uses the approved editorial design. Run it with
`bunx next dev`; the existing production build remains `bun run build`.

## Content and routes

- Sanity and the four configured Substack feeds remain the live article sources.
- Existing category, article, research, About, and project URLs are retained.
- Sandstorm keeps its existing content inside the new shared page layout.
- Dropkits retains its existing maintenance page.
- Article categories from the review are retained as metadata, not cached bodies.
  New feed articles remain visible under All insights and Substack.
- Contact prepares an email draft for the visitor to review and send.
- Bundled fonts avoid a Google Fonts request during build.
- Native page links retain the navigation fix from the review site.

## Validation

- `bun run build` checks types and builds the production app.
- `bun test tests/substack-html.test.ts` checks nested feed cleanup and normalized HTML.
- Header links, article filtering, and full article navigation were checked in a browser.

The standalone review app is retained under `design-studies/editorial`. Its
hosting configuration is not used by the production Next.js app. Merging and
launching the branch remains a separate step.
