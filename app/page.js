export default function HomePage() {
  return (
    <main className="page">
      <section className="card">
        <p className="eyebrow">Raid Guild x Pinata</p>
        <h1>Next.js starter for hosted agents.</h1>
        <p className="lede">
          This template keeps the infra basic: one public app route, PM2 supervision,
          and a minimal App Router setup you can replace quickly.
        </p>
        <div className="grid">
          <div>
            <h2>Routes</h2>
            <p>
              Public app: <code>/app</code>
            </p>
            <p>
              Health check: <code>/app/health</code>
            </p>
          </div>
          <div>
            <h2>Runtime</h2>
            <p>
              Build: <code>npm run build</code>
            </p>
            <p>
              Start: <code>npm start</code>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
