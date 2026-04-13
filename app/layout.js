import "./globals.css";

export const metadata = {
  title: "Raid Guild Agent Web Starter",
  description: "Minimal Next.js starter for a Pinata-hosted agent."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
