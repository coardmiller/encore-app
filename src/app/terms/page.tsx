import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Encore Terms of Use", alternates: { canonical: "terms/" } };

export default function Page() {
  return <LegalPage kind="terms" updated="November 3, 2026"/>;
}
