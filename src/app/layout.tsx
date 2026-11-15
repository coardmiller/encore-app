import "./globals.css";
import type { Metadata, Viewport } from "next";
import { APP_ID, SITE_URL } from "@/lib/site.mjs";

const title = "Shows: Concert Tracker & Gig Diary for iPhone";
const description = "Keep every concert you've been to: photos, videos, setlists, notes and stats in a private concert journal for iPhone.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL + "/"),
  title,
  description,
  keywords: ["concert tracker", "concert diary", "concert journal", "gig tracker", "gig diary", "setlist", "concert log", "live music journal", "concert history"],
  openGraph: { title, description, url: SITE_URL + "/", siteName: "Shows", images: [{ url: "app-icon.png", width: 1024, height: 1024, alt: "Shows app icon" }], type: "website" },
  twitter: { card: "summary", title, description, images: ["app-icon.png"] },
  other: { "apple-itunes-app": `app-id=${APP_ID}` },
};

export const viewport: Viewport = { themeColor: "#0a0807" };

export default function Layout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>{children}</body></html>;
}
