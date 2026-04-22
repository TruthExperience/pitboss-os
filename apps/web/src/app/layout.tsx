import "./globals.css";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "PitBoss OS",
  description: "Unified League Operating System for racing leagues"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
