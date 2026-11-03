import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Encore Privacy Policy", alternates: { canonical: "privacy/" } };

export default function Page() {
  return <LegalPage kind="privacy" updated="November 3, 2026"/>;
}
