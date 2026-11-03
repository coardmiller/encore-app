# Paired native iPhones — November 2, 2026

Story: see sample catch insights beside saved catch locations. Static composition, not an interactive app replica or animation.

The user's latest sketch controls framing: desktop copy and App Store button on the left, two upright overlapping phones on the right, front-left lower. Mobile stacks copy above the pair. The device-pair gold was captured before implementation; this uses two phones instead of its browser/phone composition. Preserve the accepted body.

## Sources

- `public/product/insights.webp`: whole native 1320 × 2868 screenshot captured from the existing locally installed FishLogger app on iPhone1, light appearance, default large text. Sample data, not evidence of signed build 98. No UI compositing or pixel edits.
- `public/product/spots.webp`: whole earlier native Tahoe water-map screenshot from `release-source/Marketing/stageshow-header/assets/fresh/map-water.png`. Catch-photo pins over water.
- `public/product/iphone-18-pro-black.webp`: lossless conversion of Apple's Black Portrait PNG from its official `Bezel-iPhone-18.dmg` design resource. The Stageshow photographic frame supplies geometry; native captures supply their own status bars and islands.
- Stageshow Phone and look support retain the accompanying MIT license. The only Phone adaptation adds a capture slot; frame CSS geometry is unchanged.

## Final local checks

- Webpack production build; 4 unit tests; 17 route/asset/disclosure tests passed.
- 78 browser assertions against the production server: widths 320, 390, 600, 768, 850, 1024, and 1440; no overflow; exactly two upright overlapping phones; front-left lower; images decoded; sans typography; links and required disclosure; keyboard skip; reduced motion; dark environment.
- 200% CSS magnification fixture fits. This is not native browser-menu zoom.
- Desktop, mobile, and magnified screenshots inspected. Independent read-only visual review found no blockers; fine native text is intentionally small on mobile.
- Stageshow film captured the final still. Its generic gate reported six kit-override warnings and four pair-framing warnings. The reported CSS rules match the kit's own unchanged phone.css, not host overrides. Its individual-window equal-gutter/centering heuristic conflicts with the explicitly requested staggered pair. These are recorded exceptions, not a claimed gate pass. No actual bezel clipping or page overflow was found in the final browser checks or visual review.

Evidence: `website-release-evidence-2026-11-02/stageshow-phones/` in the parent working directory, including `local/browser.json`, screenshots, build and test logs. Production receipt is recorded there after exact-SHA deployment verification.

No native source, signed release candidate, purchases, or app-release state changed. Owned capture device was restored and returned. No physical-device web or full assistive-technology audit claimed.
