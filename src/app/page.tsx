"use client";

import { Phone } from "@/components/stageshow/phone";
import { asset, APP_STORE_LIVE, APP_STORE_URL } from "@/lib/site.mjs";
import { Download } from "./Download";
import "./journal.css";

function BenefitIcon({ kind }: { kind: "save" | "setlist" | "story" }) {
  return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {kind === "save" ? <><rect x="4" y="8" width="24" height="16" rx="3"/><path d="M12 8v16M4 14h4M4 18h4"/></> : kind === "setlist" ? <><path d="M10 7h16M10 13h16M10 19h16M10 25h10"/><circle cx="5" cy="7" r="1"/><circle cx="5" cy="13" r="1"/><circle cx="5" cy="19" r="1"/><circle cx="5" cy="25" r="1"/></> : <><path d="M5 27V15M12 27V9M19 27v-8M26 27V5"/></>}
  </svg>;
}

export default function Home() {
  return <div className="field-journal">
    <a href="#journal-main" className="journal-skip">Skip to content</a>
    <header className="journal-nav section-wrap">
      <a className="journal-brand" href={asset("/")} aria-label="Encore home"><img src={asset("/app-icon.png")} width="40" height="40" alt=""/><span>Encore</span></a>
      <nav aria-label="Main navigation"><a href="#the-journal">Features</a><a href={asset("/support/")}>Support</a>{APP_STORE_LIVE && <a className="nav-download" href={APP_STORE_URL}>Get the app <span aria-hidden="true">↗</span></a>}</nav>
    </header>
    <main id="journal-main">
      <section className="journal-hero section-wrap" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Encore for iPhone</p>
          <h1 id="hero-title">Every concert<br/><span>you’ve seen.</span></h1>
          <p className="hero-description">Save the photos, videos, setlist and memories from each show. Watch your artists, venues and cities add up over the years.</p>
          <Download/>
          <p className="hero-disclosure">Free to download. Encore Pro is required to add concerts.</p>
        </div>
        <figure className="phone-composition" aria-label="Encore concert journal and a saved concert on two iPhones">
          <div className="phone-stage ss-stage" data-theme="dark" data-fidelity="realistic">
            <Phone width={270} frame="photo" status={false} island={false} className="phone-spots" capture={<img className="native-screen" src={asset("/product/home.jpg")} width="1206" height="2622" alt="Encore's Concerts screen with an upcoming Mitski show" fetchPriority="high"/>}/>
            <Phone width={288} frame="photo" status={false} island={false} className="phone-journal" capture={<img className="native-screen" src={asset("/product/detail.jpg")} width="1206" height="2622" alt="A saved Zach Bryan concert with a milestone pin and concert photos" fetchPriority="high"/>}/>
          </div>
          <figcaption>Shown with sample concerts.</figcaption>
        </figure>
      </section>
      <section id="the-journal" className="journal-benefits section-wrap" aria-labelledby="benefits-title">
        <div className="benefits-heading"><p className="eyebrow">Your live music history</p><h2 id="benefits-title">Keep the night, not just the ticket.</h2><p>Your camera roll has the photos. Encore keeps them with the show they came from.</p></div>
        <div className="benefit-grid">
          <article><BenefitIcon kind="save"/><h3>Log a show in seconds</h3><p>Find a past or upcoming concert by artist, city or venue, or enter it yourself. Add the photos and videos from that night and who you went with.</p></article>
          <article><BenefitIcon kind="setlist"/><h3>Keep the setlist</h3><p>Bring in available setlists from setlist.fm or add songs yourself. Play the songs back with Apple Music or find them on Spotify.</p></article>
          <article><BenefitIcon kind="story"/><h3>See your concert stats</h3><p>Your most-seen artists, favorite venues, cities, years and milestone pins, all built from the shows you’ve saved.</p></article>
        </div>
      </section>
      <section className="journal-keeping section-wrap" aria-labelledby="keeping-title">
        <h2 id="keeping-title">Your journal stays yours.</h2>
        <div><h3>No account</h3><p>Use Encore without signing up for anything.</p></div>
        <div><h3>iCloud sync</h3><p>Keep your concerts on your iPhone and iPad.</p></div>
        <div><h3>Backup export</h3><p>Export your journal whenever you want.</p></div>
      </section>
      <section className="journal-close section-wrap" aria-label="Get Encore"><img src={asset("/app-icon.png")} width="72" height="72" alt=""/><h2>Start with the last show you saw.</h2><Download/><p>Free to download. Encore Pro (monthly or annual) is required to add concerts.<br/>Current prices and any eligible trial are shown in the app.</p></section>
    </main>
    <footer className="journal-footer section-wrap"><a className="footer-wordmark" href={asset("/")}>Encore</a><nav aria-label="Footer navigation"><a href={asset("/support/")}>Support</a><a href={asset("/privacy/")}>Privacy</a><a href={asset("/terms/")}>Terms</a></nav><small>© {new Date().getFullYear()} Coard Miller</small></footer>
  </div>;
}
