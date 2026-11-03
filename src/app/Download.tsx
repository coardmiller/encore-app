import { APP_STORE_LIVE, APP_STORE_URL } from "@/lib/site.mjs";

export function Download() {
  const inner = <>
    <svg width="22" height="25" viewBox="0 0 24 28" fill="currentColor" aria-hidden="true"><path d="M16.4 4.4c.9-1 1.5-2.4 1.4-3.8-1.3.1-2.9.9-3.8 1.9-.8.9-1.5 2.3-1.3 3.6 1.5.1 2.8-.7 3.7-1.7ZM20.9 15.2c0-3 2.5-4.5 2.6-4.6-1.4-2.1-3.5-2.4-4.3-2.5-1.8-.2-3.5 1.1-4.4 1.1-.9 0-2.3-1.1-3.8-1-2 .1-3.8 1.2-4.8 2.9-2 3.5-.5 8.8 1.5 11.7 1 1.4 2.1 2.9 3.7 2.8 1.5-.1 2.1-.9 3.9-.9 1.8 0 2.3.9 3.9.9 1.6 0 2.6-1.4 3.5-2.8 1.1-1.6 1.6-3.2 1.6-3.3-.1 0-3.4-1.3-3.4-4.3Z" transform="translate(-3 0)"/></svg>
    <span><small>{APP_STORE_LIVE ? "Download on the" : "Coming soon to the"}</small><strong>App Store</strong></span>
  </>;
  return APP_STORE_LIVE ? <a className="journal-download" href={APP_STORE_URL}>{inner}</a> : <span className="journal-download" aria-label="Coming soon to the App Store">{inner}</span>;
}
