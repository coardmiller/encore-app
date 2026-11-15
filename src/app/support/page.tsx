import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Shows Support", alternates: { canonical: "support/" } };

export default function Page() {
  return <LegalPage kind="support"/>;
}
