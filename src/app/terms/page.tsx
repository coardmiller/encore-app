import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Shows Terms of Use", alternates: { canonical: "terms/" } };

export default function Page() {
  return <LegalPage kind="terms" updated="November 15, 2026"/>;
}
