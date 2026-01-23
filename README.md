# Bio Balance - Integrative and Hormone Health

Website for Bio Balance Integrative and Hormone Health, built with Astro and TinaCMS.

## Tech Stack

- **Framework**: [Astro](https://astro.build)
- **CMS**: [TinaCMS](https://tina.io)
- **Hosting**: [Vercel](https://vercel.com)

## Project Structure

```
bioBalance/
├── tina/
│   └── config.ts           # TinaCMS schema & config
├── public/
│   ├── images/             # Logo files
│   └── scripts/
│       └── main.js         # Client-side JavaScript
├── src/
│   ├── content/
│   │   ├── services/       # Service markdown files
│   │   ├── testimonials/   # Testimonial files
│   │   └── team/           # Team member files
│   ├── data/
│   │   └── settings.json   # Site settings (contact, hours, etc.)
│   ├── components/         # Astro components
│   ├── layouts/            # Page layouts
│   ├── pages/              # Route pages
│   └── styles/
│       └── global.css      # Site styles
├── astro.config.mjs
├── package.json
└── vercel.json             # Vercel redirects
```

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start local dev server at `localhost:4321`  |
| `npm run build`   | Build production site to `./dist/`          |
| `npm run preview` | Preview build locally                       |
| `npm run tina`    | Start dev server with TinaCMS admin panel   |

## Local Development

1. Install dependencies:
   ```sh
   npm install
   ```

2. Start the development server:
   ```sh
   npm run dev
   ```

3. Or start with TinaCMS (after Tina Cloud setup):
   ```sh
   npm run tina
   ```

## TinaCMS Setup

To enable CMS functionality:

1. Create an account at [tina.io](https://tina.io)
2. Create a new project and connect this repository
3. Get your Client ID and Token from Tina Cloud
4. Add environment variables to Vercel:
   - `NEXT_PUBLIC_TINA_CLIENT_ID`
   - `TINA_TOKEN`

## Content Editing

After TinaCMS is configured, access the CMS at `/admin` to edit:
- **Services**: Service page content
- **Testimonials**: Customer testimonials
- **Team**: Team member profiles
- **Settings**: Site-wide settings (contact info, hours, etc.)

## Deployment

The site is configured to deploy to Vercel:

1. Connect the repository to Vercel
2. Add TinaCMS environment variables
3. Deploy

Vercel will automatically rebuild when changes are pushed to the repository.

## URL Redirects

Old `.html` URLs automatically redirect to new clean URLs via `vercel.json`.
