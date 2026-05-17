import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discord Channel Archiver – Export Conversations to Searchable PDFs",
  description: "Convert Discord channel history into organized, searchable PDF archives with proper formatting and media. Perfect for community managers, educators, and startup teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="865e5d09-b320-43b5-983a-a882cee3b4cc"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
