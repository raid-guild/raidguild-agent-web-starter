import "./globals.css";

export const metadata = {
  title: "Full-Stack Agent Starter",
  description: "Next.js starter with a SQLite todo tutorial for a Pinata-hosted agent."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
