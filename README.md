# Simple Hosted Agent Template

This repo is a minimal template for the Pinata Agents hosting platform, adapted from the Pinata `agent-template` example and reduced to the smallest useful setup.

It gives you:

- a valid `manifest.json` with one public hosted route
- a very small Next.js app mounted at `/app`
- a PM2-managed runtime so the hosted app can restart without turning the agent into its own watchdog
- a `workspace/` folder with the basic identity and behavior docs you can customize

## What to customize

- `manifest.json`: change the name, description, slug, tags, secrets, and routes
- `workspace/IDENTITY.md`: define what the agent is called and how it presents itself
- `workspace/SOUL.md`: define tone, principles, and operating style
- `app/`: replace the placeholder Next.js starter UI and routes

## Project structure

- `manifest.json` defines the Pinata agent metadata, lifecycle scripts, and `/app` route
- `app/` contains the App Router starter UI
- `server.js` runs a tiny custom Next server and exposes a health endpoint
- `ecosystem.config.cjs` tells PM2 how to run the app
- `workspace/` holds the editable agent instructions modeled after the Pinata example

## Local usage

```bash
npm install
npm run build
npm start
```

Open `http://localhost:3000/app`.

If you need a different local port:

```bash
PORT=3011 npm run build && PORT=3011 npm start
```

For local daemon mode:

```bash
PORT=3011 npm run start:daemon
```

## Pinata hosting notes

The manifest is configured so Pinata can:

- install dependencies and run `next build`
- run `npm start` on agent boot through `pm2-runtime`
- expose port `3000` at `/app`

If you swap in another web framework, keep the server bound to `0.0.0.0` and make sure it can serve behind the `/app` path prefix.
