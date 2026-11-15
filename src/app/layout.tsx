import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matt Jacob Band",
  description: "Official website of the Matt Jacob Band.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
