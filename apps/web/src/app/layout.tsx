import "./globals.css";
import type { ReactNode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "PitBoss OS",
  description: "Unified League Operating System for racing leagues"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
