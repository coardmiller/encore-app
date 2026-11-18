"use client";

import { Phone } from "@/components/stageshow/phone";
import { asset, APP_STORE_LIVE, APP_STORE_URL } from "@/lib/site.mjs";
import { Download } from "./Download";
import "./journal.css";

function BenefitIcon({ kind }: { kind: "save" | "photos" | "setlist" | "story" | "share" | "remind" }) {
  return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {kind === "save" ? <><rect x="4" y="8" width="24" height="16" rx="3"/><path d="M12 8v16M4 14h4M4 18h4"/></>
      : kind === "photos" ? <><rect x="4" y="7" width="24" height="18" rx="3"/><circle cx="11" cy="13" r="2"/><path d="M4 22l7-6 5 4 4-3 8 6"/></>
      : kind === "setlist" ? <><path d="M10 7h16M10 13h16M10 19h16M10 25h10"/><circle cx="5" cy="7" r="1"/><circle cx="5" cy="13" r="1"/><circle cx="5" cy="19" r="1"/><circle cx="5" cy="25" r="1"/></>
      : kind === "story" ? <><path d="M5 27V15M12 27V9M19 27v-8M26 27V5"/></>
      : kind === "share" ? <><path d="M16 19V4M10 9l6-5 6 5"/><path d="M8 14H6v13h20V14h-2"/></>
      : <><path d="M8 22V14a8 8 0 0 1 16 0v8l2 3H6l2-3Z"/><path d="M13 28h6"/></>}
  </svg>;
}

const GALLERY = [
  ["02-home", "Your concerts, as photos: the Concerts list with Zach Bryan and The Lumineers"],
  ["03-pins", "Earn a pin for every milestone: the pin collection, 7 of 14 earned"],
  ["04-add", "Add a concert in one sentence: Noah Kahan at Fenway Park with its setlist found"],
  ["05-keep", "Keep the photos and the setlist: a Zach Bryan concert with a 23-song setlist"],
  ["06-stats", "See who you’ve seen most: Stats with the top artist, 12 concerts and 9 cities"],
  ["07-share", "Share a concert as a card: three share cards made from concert photos"],
];

export default function Home() {
  return <div className="field-journal">
    <a href="#journal-main" className="journal-skip">Skip to content</a>
    <header className="journal-nav section-wrap">
      <a className="journal-brand" href={asset("/")} aria-label="Shows home"><img src={asset("/app-icon.png")} width="44" height="44" alt=""/><span>Shows</span></a>
      <nav aria-label="Main navigation"><a href="#the-journal">Features</a><a href={asset("/support/")}>Support</a>{APP_STORE_LIVE && <a className="nav-download" href={APP_STORE_URL}>Get the app <span aria-hidden="true">↗</span></a>}</nav>
    </header>
    <main id="journal-main">
      <section className="journal-hero section-wrap" aria-labelledby="hero-title">
        <div className="hero-copy">
          <img className="hero-icon" src={asset("/app-icon.png")} width="124" height="124" alt="Shows app icon"/>
          <p className="eyebrow">Shows for iPhone</p>
          <h1 id="hero-title">Every concert<br/><span>you’ve been to.</span></h1>
          <p className="hero-description">Save the photos, videos, setlist and memories from each concert. See who you’ve seen most, and earn a pin for every milestone.</p>
          <Download/>
          <p className="hero-disclosure">Free to download. Shows Pro is needed to keep adding concerts.</p>
        </div>
        <figure className="phone-composition" aria-label="Concert stats and a saved concert on two iPhones">
          <div className="phone-stage ss-stage" data-theme="dark" data-fidelity="realistic">
            <Phone width={270} frame="photo" status={false} island={false} className="phone-spots" capture={<img className="native-screen" src={asset("/product/stats.jpg")} width="1206" height="2622" alt="The Stats screen: 12 concerts in 9 cities, top artist and a map" fetchPriority="high"/>}/>
            <Phone width={288} frame="photo" status={false} island={false} className="phone-journal" capture={<img className="native-screen" src={asset("/product/detail.jpg")} width="1206" height="2622" alt="A saved Zach Bryan concert with two pins and photos" fetchPriority="high"/>}/>
          </div>
          <figcaption>Shown with sample concerts.</figcaption>
        </figure>
      </section>
      <section id="the-journal" className="journal-benefits section-wrap" aria-labelledby="benefits-title">
        <div className="benefits-heading"><p className="eyebrow">Your live music history</p><h2 id="benefits-title">Keep the concert, not just the ticket.</h2><p>Your camera roll has the photos. Shows keeps them with the concert they came from.</p></div>
        <div className="benefit-grid">
          <article><BenefitIcon kind="save"/><h3>Add a concert in one sentence</h3><p>Type who you saw, where and when, and Shows finds the concert. Or enter the details yourself.</p></article>
          <article><BenefitIcon kind="photos"/><h3>Photos and videos from the concert</h3><p>Pick from what you shot that day, and write down what you want to remember.</p></article>
          <article><BenefitIcon kind="setlist"/><h3>Keep the setlist</h3><p>Bring in available setlists from setlist.fm or add songs yourself. Play the songs back with Apple Music or find them on Spotify.</p></article>
          <article><BenefitIcon kind="story"/><h3>See who you’ve seen most</h3><p>Your most-seen artists, venues, cities and years, and a map of where you’ve been. Earn a pin for every milestone.</p></article>
          <article><BenefitIcon kind="share"/><h3>Share the concert</h3><p>Turn a saved concert into a card with your photo, the date and the venue, and send it anywhere.</p></article>
          <article><BenefitIcon kind="remind"/><h3>Look back</h3><p>See the concerts you went to on this day in past years. Turn on a reminder for anniversaries or for the morning after a concert.</p></article>
        </div>
      </section>
      <section className="journal-gallery" aria-labelledby="gallery-title">
        <div className="section-wrap"><p className="eyebrow">Inside Shows</p><h2 id="gallery-title">From the first concert to the fiftieth.</h2></div>
        <ul className="gallery-row" tabIndex={0} aria-label="Screens from Shows">
          {GALLERY.map(([file, alt]) => <li key={file}><img src={asset(`/gallery/${file}.jpg`)} width="720" height="1564" alt={alt} loading="lazy"/></li>)}
        </ul>
      </section>
      <section className="journal-keeping section-wrap" aria-labelledby="keeping-title">
        <h2 id="keeping-title">Your journal stays yours.</h2>
        <div><h3>No account</h3><p>Use Shows without signing up for anything.</p></div>
        <div><h3>iCloud sync</h3><p>Your concerts sync through your own iCloud.</p></div>
        <div><h3>Backup export</h3><p>Export your journal whenever you want.</p></div>
      </section>
      <section className="journal-close section-wrap" aria-label="Get Shows"><img src={asset("/app-icon.png")} width="112" height="112" alt=""/><h2>Start with the last concert you saw.</h2><Download/><p>Free to download. Shows Pro (monthly, annual or lifetime) is needed to keep adding concerts.{" "}<br/>Current prices and any eligible trial are shown in the app.</p></section>
    </main>
    <footer className="journal-footer section-wrap"><a className="footer-wordmark" href={asset("/")}>Shows</a><nav aria-label="Footer navigation"><a href={asset("/support/")}>Support</a><a href={asset("/privacy/")}>Privacy</a><a href={asset("/terms/")}>Terms</a></nav><small>© {new Date().getFullYear()} Coard Miller</small></footer>
  </div>;
}
