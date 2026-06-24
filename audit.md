# Site Audit Report
**Date:** June 22, 2026
**Project:** Salvation Missionary Ministry Website
**Detected stack:** Next.js 16.2.9 (Turbopack), React 19.2.4, Tailwind CSS v4, TypeScript 5, Lucide React 1.21.0, Framer Motion 12.40.0
**Detected audience/goal:** Tamil and English speaking Christians, local believers in Tamil Nadu, and supporters/visitors seeking prayer and Christian literature. The business goal is to distribute publications for free, facilitate prayer requests, and raise donations.
**Design system maturity:** Partially tokenized — custom colors and font styles are declared in the Tailwind v4 `@theme` block in `globals.css` but hardcoded hex values remain in individual components for visual styling.

---

## Anti-Pattern Verdict
Does this look AI-generated? **Partially** — While the overall single-page scrolling layout, centered hero, CTA, and card grids follow predictable structures common in AI-generated templates, the curated parchment/cream visual aesthetic, specific editorial font choices (Cinzel, EB Garamond, Great Vibes), custom physical bookcase shelf rendering, and the bespoke 3D book reader page flip implementation indicate significant human design direction and customization. It does not feel like generic AI template slop.

**Score: 3/4** (Some structural layout predictability is present, but the branding, color palettes, and interactive book elements are highly distinctive and intentional).

---

## Audit Health Score

| # | Dimension | Score | Key finding |
|---|-----------|-------|-------------|
| 1 | Accessibility | 1/4 | Gold text on cream background has contrast ratio of 2.73:1 (fails WCAG AA) |
| 2 | Performance | 2/4 | Over 30 gallery screenshots load eagerly without lazy loading (`loading="lazy"`) |
| 3 | Security | 4/4 | No high-risk DOM writes, secrets, or CSRF vulnerabilities on the active codebase |
| 4 | Theming & design system | 3/4 | Excellent color and font tokens, with minor hardcoded hex leaks in book cover styles |
| 5 | Responsive design | 2/4 | Responsive layouts scale well, but mobile buttons (e.g. copy/share) have touch targets under 44×44px |
| 6 | Anti-patterns | 3/4 | Predictable marketing template structure, but highly customized theme elements |
| | **Total** | **15/24** | **Acceptable** |

**Legal & compliance flags:** Privacy Policy [missing] · Terms [missing] · Cookie consent [missing] · GDPR signals [missing] · COPPA [n-a]

---

## Executive Summary
The Salvation Missionary Ministry website has an exceptional, premium visual identity that delivers a classic, library-like editorial experience. However, the site suffers from major WCAG AA accessibility violations (unassociated form labels, low color contrast, and untrapped modal focus) and a complete lack of required legal compliance documents. Performance is generally solid due to standard Next.js static builds, but the photo gallery lacks lazy loading, causing unnecessary mobile bandwidth utilization. Resolving these accessibility and compliance gaps is critical prior to publication.

Total findings by severity: P0 [0] · P1 [4] · P2 [3] · P3 [2]

---

## Quick Wins
The highest-impact issues that are also straightforward to fix:
1. **Newsletter Send Button Label** (P1) — Add `aria-label="Subscribe to newsletter"` to the newsletter submit button in [Footer.tsx](file:///d:/freelance/src/components/Footer.tsx#L97-L102).
2. **Lazy Load Gallery Images** (P2) — Add `loading="lazy"` to the grid `<img>` tags in [Gallery.tsx](file:///d:/freelance/src/components/sections/Gallery.tsx#L369-L373) to optimize initial page loading.
3. **Form Input IDs** (P1) — Assign unique `id` attributes to inputs and bind them to `<label htmlFor="...">` tags in [Contact.tsx](file:///d:/freelance/src/components/sections/Contact.tsx) and [PrayerRequest.tsx](file:///d:/freelance/src/components/sections/PrayerRequest.tsx) to associate them programmatically for screen readers.

---

## Findings

### P0 — Blocking
*No issues found*

### P1 — Major

#### Unassociated Form Labels
- **Category:** Accessibility / WCAG AA 3.3.2
- **Location:** [Contact.tsx](file:///d:/freelance/src/components/sections/Contact.tsx#L75-L131) and [PrayerRequest.tsx](file:///d:/freelance/src/components/sections/PrayerRequest.tsx#L72-L144)
- **Issue:** Input fields (Full Name, Email, Phone, Message) are accompanied by visual `<label>` text elements, but they lack `htmlFor` attributes, and the corresponding `<input>`/`<textarea>` elements do not have matching `id` attributes.
- **User impact:** Users navigating via screen readers will hear generic input announcements (e.g. "blank text field") without reading the field's label text, causing confusion and preventing successful form completion.
- **Fix:** Add a unique `id` to each input (e.g., `id="contact-name"`) and link it to the label using `<label htmlFor="contact-name">`.

#### Low Color Contrast on Gold Text
- **Category:** Accessibility / WCAG AA 1.4.3
- **Location:** Brand theme token `var(--color-brand-gold)` (`#B08D57`) used on light backgrounds (e.g., `bg-brand-cream` `#F5F0E6` or `bg-brand-parchment` `#EFE7D5`). 
  - Visual instances include: section headers in [About.tsx:24](file:///d:/freelance/src/components/sections/About.tsx#L24), [BiblePromises.tsx:47](file:///d:/freelance/src/components/sections/BiblePromises.tsx#L47), and contact form labels in [Contact.tsx:76](file:///d:/freelance/src/components/sections/Contact.tsx#L76).
- **Issue:** The contrast ratio between the gold text and the cream background is **2.73:1**, which is far below the WCAG AA minimum of **4.5:1** for standard text.
- **User impact:** Visually impaired users, older readers, or users on screens in high brightness will struggle to read form labels, categories, and section markers.
- **Fix:** Increase the weight of the font or use a darker gold/brown shade (e.g., `#826233` or `#614B2C`) when rendering text directly on cream/parchment surfaces.

#### Untrapped Focus and Missing Semantics in Modals and Overlays
- **Category:** Accessibility / WCAG AA 2.4.3
- **Location:** Donate Details Modal in [Navbar.tsx:145](file:///d:/freelance/src/components/Navbar.tsx#L145) and Written Sermon Transcript Box in [LatestSermons.tsx:131](file:///d:/freelance/src/components/sections/LatestSermons.tsx#L131).
- **Issue:** These dynamic dialog overlays lack proper modal keyboard focus trapping, do not set focus to the dialog when opened, do not return focus when closed, and do not listen to the `Escape` key to close.
- **User impact:** Keyboard-only users will experience "focus leakage" where pressing `Tab` navigates through underlying links hidden beneath the modal overlay, rendering the website unusable and confusing.
- **Fix:** Bind the `Escape` key event to close the modal, programmatically focus the modal's primary close button upon opening, and constrain keyboard tabbing focus to elements inside the modal when active.

#### Missing Privacy Policy and Compliance for Data Collection
- **Category:** Legal & Compliance / GDPR / FTC
- **Location:** Contact Form [Contact.tsx:69](file:///d:/freelance/src/components/sections/Contact.tsx#L69) and Prayer Request Portal [PrayerRequest.tsx:62](file:///d:/freelance/src/components/sections/PrayerRequest.tsx#L62).
- **Issue:** The site collects user personal identifiable information (PII) including Name, Email, and Phone Number, but there is no Privacy Policy or Terms of Service link anywhere on the site, nor is there a user consent checkbox.
- **User impact:** This exposes the site operator to regulatory compliance risks and penalties under the FTC Act and GDPR.
- **Fix:** Draft a Privacy Policy detailing how contact details are processed, publish it to a `/privacy-policy` route, and add a linked disclosure line and consent checkbox beneath the form fields.

---

### P2 — Minor

#### Eager Loading on Archival Gallery Grid
- **Category:** Performance
- **Location:** [Gallery.tsx:353-397](file:///d:/freelance/src/components/sections/Gallery.tsx#L353-L397)
- **Issue:** The gallery loads 33 distinct local images using standard `<img>` tags without lazy loading (`loading="lazy"`).
- **User impact:** Visiting the gallery page forces the browser to download all 33 images simultaneously, creating severe bandwidth congestion, lagging load times, and wasting mobile data.
- **Fix:** Append the `loading="lazy"` attribute to all `<img>` tags in the masonry grid loop.

#### Mocked Playback for Audio Sermons
- **Category:** Usability / Heuristics (Match System and Real World)
- **Location:** [LatestSermons.tsx:104-110](file:///d:/freelance/src/components/sections/LatestSermons.tsx#L104-L110)
- **Issue:** The "Listen Audio" button triggers a standard browser `alert("Playing Audio Sermon...")` rather than playing an actual audio file.
- **User impact:** Users looking to listen to a sermon will receive a generic, breaking alert box and no actual playback, indicating a broken feature.
- **Fix:** Replace the `alert()` call with an HTML5 `<audio>` player container or link directly to an audio file.

#### Tiny Mobile Touch Targets
- **Category:** Responsive Design / WCAG AA 2.5.5
- **Location:** Copy & Share Buttons in [BiblePromises.tsx:140-159](file:///d:/freelance/src/components/sections/BiblePromises.tsx#L140-L159) and [DailyBiblePromise.tsx:85-110](file:///d:/freelance/src/components/sections/DailyBiblePromise.tsx#L85-L110).
- **Issue:** The copy and share button elements are styled with tight padding (`p-2` on `w-3.5` icons), resulting in a clickable area of roughly 30px × 30px, below the required mobile target minimum of 44px × 44px.
- **User impact:** Users on mobile touchscreens will struggle to tap the correct button, frequently tapping adjacent sharing triggers.
- **Fix:** Increase the padding of the button wrappers (e.g. `p-3.5`) to expand the touch area without altering the visual icon sizes.

---

### P3 — Polish

#### Mocked Contact Form Submissions
- **Category:** Usability / Heuristics (Visibility of System Status)
- **Location:** [Contact.tsx:25-30](file:///d:/freelance/src/components/sections/Contact.tsx#L25-L30) and [PrayerRequest.tsx:25-30](file:///d:/freelance/src/components/sections/PrayerRequest.tsx#L25-L30)
- **Issue:** Form submissions only trigger a local boolean `setFormSubmitted(true)` and do not dispatch the contact details to any mailer or database endpoint.
- **User impact:** Users are shown a "Submission Received" message, but their prayer requests and questions are actually lost/discarded silently.
- **Fix:** Connect the submit handlers to an email dispatch service (e.g., EmailJS, SendGrid) or a basic database API route.

#### Hardcoded Hex Value Colors in Components
- **Category:** Theming & Design System
- **Location:** [FeaturedPublications.tsx:75-106](file:///d:/freelance/src/components/sections/FeaturedPublications.tsx#L75-L106) and [BooksBanner.tsx:51](file:///d:/freelance/src/components/sections/BooksBanner.tsx#L51)
- **Issue:** Custom colors (e.g., `#5C1A1A`, `#3B1111`, `#8B3A2F`) are hardcoded inline inside Javascript styling blocks rather than mapped via Tailwind design tokens.
- **User impact:** If the ministry ever updates its brand colors, developers must scan and manually modify inline code files, increasing the risk of inconsistent styling.
- **Fix:** Move these book-specific visual colors to tailwind config variables or CSS theme declarations.

---

## Systemic Patterns
1. **Missing Label associations**: Form elements across the contact page, prayer request panel, and newsletter box systematically omit `id` and `htmlFor` pairings.
2. **Gold-on-Cream Contrast Deficit**: Brand-gold (`#B08D57`) is consistently layered over cream backgrounds, violating the WCAG AA minimum contrast of 4.5:1.
3. **Modal Overlay Gaps**: Interstitial modals (Donate modal, sermon transcript panels, etc.) consistently fail focus-trapping and lack keybind exits.

---

## Strengths
1. **Outstanding Visual Aesthetic**: The choice of typography, color tokens, separator SVGs, and noise overlay creates an immersive, premium, manuscript-style visual look.
2. **Performant Compositor Animations**: Animations in [globals.css](file:///d:/freelance/src/app/globals.css) and [FeaturedPublications.tsx](file:///d:/freelance/src/components/sections/FeaturedPublications.tsx) rely entirely on GPU-accelerated transition properties (`transform`, `opacity`), preventing layout thrashing.
3. **High-Quality Bilingual Support**: The state handling in [LanguageContext.tsx](file:///d:/freelance/src/components/LanguageContext.tsx) successfully shifts text content between Tamil and English on the fly across all sections.

---

## Recommended Priority Order

1. **Associate Form Labels with Inputs** (P1) — Assign unique IDs to the fields in the Contact and Prayer Request portals so that screen readers can link labels to inputs programmatically.
2. **Increase Gold-on-Cream Text Contrast** (P1) — Swap standard gold text to a darker hue on light surfaces to satisfy WCAG AA legibility standards.
3. **Trap Focus in Modals** (P1) — Implement keyboard constraints on the Donate modal and Written Sermon overlays to prevent keyboard focus leakage.
4. **Draft and Publish a Privacy Policy** (P1) — Add a basic Privacy Policy page and footer link to resolve compliance vulnerability.
5. **Implement Lazy Loading on Images** (P2) — Set `loading="lazy"` on all 33 gallery items to boost performance and reduce data usage.
6. **Expand Button Touch Targets** (P2) — Increase padding around mobile copy/share and nav triggers to 44px × 44px for touchscreen compatibility.
7. **Integrate Real Submissions/Playback** (P2/P3) — Connect forms to an email service and play real audio to replace alerts.
