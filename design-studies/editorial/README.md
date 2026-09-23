# Quincy Labs editorial redesign

This folder contains the source for the approved editorial review site:
https://quincy-labs-design-study.dezcalimese.chatgpt.site/

Imported from review source commit `5a2379eae63c977374593fea38f2f26cba3498cd`.

## Run the review app

Use Node.js 22.13 or later. From this folder, run `npm ci`, then `npm run dev`.
Use `npm run build` to build and `npx tsc --noEmit` to check types.

## Integration status

This is a standalone Vinext/Sites app. The repository's production Next.js app
in `src/` has not been replaced. The root TypeScript project excludes this
folder so the two apps use their own dependencies and path aliases.

The review includes the editorial page layouts, Quincy colours, Reishi effect,
footer logo, and native browser links. Article content is an imported snapshot;
the contact form prepares an email draft. The review site is not indexed.

Before merging the design into production, port the layouts into `src/`, retain
the existing Sanity and Substack data integrations and existing routes, confirm
contact delivery, and review production metadata. Do not replace the production
deployment configuration with the Sites manifest in this folder.

The imported source passed its TypeScript and production build checks. Header
links and an article click were also checked on the published review site.
