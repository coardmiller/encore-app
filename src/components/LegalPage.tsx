import legal from "@/lib/legal.json";
import { asset } from "@/lib/site.mjs";

type Block = { h?: string; p?: string };
const LINK = /(https?:\/\/[^\s)]+[^\s.,)]|[\w.+-]+@[\w-]+\.[\w.]+)/g;

function Rich({ text }: { text: string }) {
  return <>{text.split(LINK).map((part, i) => i % 2 === 1
    ? <a key={i} href={part.includes("@") && !part.startsWith("http") ? `mailto:${part}` : part} style={{ color: "var(--encore-red)", fontWeight: 600 }}>{part}</a>
    : part)}</>;
}

export function LegalPage({ kind, updated }: { kind: "privacy" | "support" | "terms"; updated?: string }) {
  const [title, blocks] = (legal as unknown as Record<string, [string, Block[]]>)[kind];
  return <main style={{ minHeight: "100vh", background: "radial-gradient(900px 500px at 85% -10%, #3a0b07 0%, var(--encore-bg) 60%)" }}>
    <nav className="max-w-[760px] mx-auto px-6 pt-6 pb-2 flex items-center justify-between">
      <a href={asset("/")} className="flex items-center gap-2.5"><img src={asset("/app-icon.png")} alt="" className="w-8 h-8 rounded-[9px]"/><span className="font-semibold text-[15px]">Encore</span></a>
      <div className="flex gap-5 text-[13px]" style={{ color: "var(--encore-muted)" }}><a href={asset("/support/")}>Support</a><a href={asset("/privacy/")}>Privacy</a><a href={asset("/terms/")}>Terms</a></div>
    </nav>
    <article className="max-w-[760px] mx-auto px-6 py-12">
      <h1 className="text-[clamp(2.2rem,5vw,3.4rem)] font-bold leading-[1.05] mb-2" style={{ letterSpacing: "-.03em" }}>{title.replace(/^Encore /, "")}</h1>
      {updated && <p className="text-[13px] mb-8" style={{ color: "var(--encore-muted)" }}>Effective {updated}</p>}
      <div className="space-y-5 text-[16px] leading-[1.75]">
        {blocks.map((b, i) => b.h
          ? <h2 key={i} className="text-[19px] font-semibold pt-5" style={{ color: "var(--encore-text)" }}>{b.h}</h2>
          : <p key={i} style={{ color: "var(--encore-muted)" }}><Rich text={b.p ?? ""}/></p>)}
      </div>
    </article>
  </main>;
}
