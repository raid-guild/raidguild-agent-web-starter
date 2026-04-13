# Simple Hosted Agent Template

This repo is a minimal template for the Pinata Agents hosting platform, adapted from the Pinata `agent-template` example and reduced to the smallest useful setup.

It gives you:

- a valid `manifest.json` with one public hosted route
- a tiny Express server bound to `0.0.0.0`
- a PM2-managed runtime so the hosted app can restart without turning the agent into its own watchdog
- a `workspace/` folder with the basic identity and behavior docs you can customize

## What to customize

- `manifest.json`: change the name, description, slug, tags, secrets, and routes
- `workspace/IDENTITY.md`: define what the agent is called and how it presents itself
- `workspace/SOUL.md`: define tone, principles, and operating style
- `server.js`: replace the placeholder app with your own frontend or API

## Project structure

- `manifest.json` defines the Pinata agent metadata, lifecycle scripts, and `/app` route
- `server.js` serves the placeholder hosted app and `/app/health`
- `ecosystem.config.cjs` tells PM2 how to run the app
- `workspace/` holds the editable agent instructions modeled after the Pinata example

## Local usage

```bash
npm install
npm start
```

Open `http://localhost:3000/app`.

If you need a different local port:

```bash
PORT=3011 npm start
```

For local daemon mode:

```bash
PORT=3011 npm run start:daemon
```

## Pinata hosting notes

The manifest is configured so Pinata can:

- run `npm install` on build
- run `npm start` on agent boot through `pm2-runtime`
- expose port `3000` at `/app`

If you swap in another web framework, keep the server bound to `0.0.0.0` and make sure it can serve behind the `/app` path prefix.
