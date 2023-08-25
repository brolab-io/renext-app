import GlobalStyles from "@/components/styles/GlobalStyles";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Renext App",
  description: "Renext App - Create Launchpad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta charSet="utf-8" />
        <meta name="description" content="" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/favicon-32x32.png"
        />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      </head>
      <body>
        <GlobalStyles />
        <main>{children}</main>
      </body>
    </html>
  );
}
