import express from "express";

const app = express();
const port = Number(process.env.PORT || 3000);
const basePath = "/app";

app.get("/", (_req, res) => {
  res.redirect(basePath);
});

app.get(basePath, (_req, res) => {
  res.type("html").send(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Simple Hosted Agent Template</title>
    <style>
      :root {
        color-scheme: light;
        --bg: #f3efe6;
        --card: #fffdf8;
        --ink: #1d1b18;
        --muted: #6a6258;
        --line: #d8cdbd;
        --accent: #c4632f;
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        font-family: Georgia, serif;
        background:
          radial-gradient(circle at top left, rgba(196, 99, 47, 0.14), transparent 28rem),
          linear-gradient(180deg, #f8f3ea 0%, var(--bg) 100%);
        color: var(--ink);
      }

      main {
        max-width: 52rem;
        margin: 0 auto;
        min-height: 100vh;
        padding: 4rem 1.5rem;
        display: grid;
        place-items: center;
      }

      section {
        width: 100%;
        background: color-mix(in srgb, var(--card) 92%, white);
        border: 1px solid var(--line);
        border-radius: 1.5rem;
        padding: 2rem;
        box-shadow: 0 1.25rem 3rem rgba(29, 27, 24, 0.08);
      }

      h1 {
        margin: 0 0 0.75rem;
        font-size: clamp(2rem, 5vw, 3.75rem);
        line-height: 0.95;
      }

      p {
        margin: 0 0 1rem;
        font-size: 1.05rem;
        line-height: 1.6;
        color: var(--muted);
      }

      ul {
        margin: 1.5rem 0 0;
        padding-left: 1.2rem;
        color: var(--ink);
      }

      li + li {
        margin-top: 0.6rem;
      }

      code {
        font-family: "SFMono-Regular", Consolas, monospace;
        color: var(--accent);
      }
    </style>
  </head>
  <body>
    <main>
      <section>
        <h1>Pinata agent template, stripped down.</h1>
        <p>
          This starter exposes one public route at <code>/app</code> and gives you the minimum
          files you need to customize an agent for Pinata Agents hosting.
        </p>
        <p>
          Replace the manifest metadata, update the workspace notes, and swap this page for your
          own frontend or API surface.
        </p>
        <ul>
          <li>Hosted app: <code>/app</code></li>
          <li>Health check: <code>/app/health</code></li>
          <li>Runtime: <code>node server.js</code></li>
        </ul>
      </section>
    </main>
  </body>
</html>`);
});

app.get(`${basePath}/health`, (_req, res) => {
  res.json({ ok: true, route: basePath });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`simple-hosted-agent-template listening on ${port}`);
});
