import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Encore Support", alternates: { canonical: "support/" } };

export default function Page() {
  return <LegalPage kind="support"/>;
}
