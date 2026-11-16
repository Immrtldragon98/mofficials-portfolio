# MOFFICIALS — Product & Engineering Portfolio

Next.js 16.2.12 / React 19 portfolio for software products, mobile companions, AI experiments and financial tools.

## Development

```sh
npm ci
npm run dev
npm run lint
npx tsc --noEmit
npm run build
npm run test:smoke
```

## Catalog and navigation

`src/data/projects.ts` is the source of truth for project cards, case studies, status counts and featured selection. `featured: true` selects homepage work. Keep a distinct slug for an earlier product and its current successor.

Current featured projects: Form & Strength, Market Memory Pro and Asset Tracking Intelligence. The catalog also includes HumanOS, MiniMe Lab, Hypeframe, India Lens and the earlier projects and research concepts.

- **Built:** a working milestone was delivered; this does not assert production acceptance.
- **Building:** active development or outstanding release work.
- **Planned:** research scope, not an implemented product.

`releaseNote` records known verification gaps. Source implementation, an installable build and a verified deployment are different milestones. Do not infer a working demo from a repository URL. Previous Market Memory and Workforce Hub demo links returned HTTP 404 on 16 November 2026 and were removed from the catalog.

`src/components/project/ProjectExplorer.tsx` implements search, category/status filters, result announcements and empty-state recovery. Homepage category links seed the explorer through `/projects?category=…`. `src/data/navigation.ts` drives desktop and mobile menus. Parent project routes remain active on case studies; mobile navigation dismisses on link selection, Escape, outside interaction and desktop resize. Return links have explicit destinations, so they cannot take visitors to an unrelated site.

Project content describes software architecture and public product scope. Do not include private operational or company records.

## Deployment

The existing public site is https://mofficials-portfolio.netlify.app/. Publishing depends on the Netlify project connected to this repository. Verify its deployed commit after pushing; repository updates alone do not prove a production deployment.

The smoke check starts the built server on a temporary local port and checks catalog routes, featured work, category defaults, contact actions and missing-page recovery. Browser and physical-device acceptance are separate checks.
