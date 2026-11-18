import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Shows Privacy Policy", alternates: { canonical: "privacy/" } };

export default function Page() {
  return <LegalPage kind="privacy" updated="November 18, 2026"/>;
}
