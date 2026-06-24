# Implementation Plan - Website Animations & Transitions

This plan details the addition of premium Framer Motion animations, viewport scroll transitions, and route transitions across the website, enhancing the premium vintage editorial aesthetic of the church ministry platform.

## User Review Required

> [!NOTE]
> All animations will be built using `framer-motion` (which is already installed in the repository). They are designed to feel soft, elegant, and editorial—avoiding overly fast or hyper-modern flashy actions. The easing curve `[0.16, 1, 0.3, 1]` (custom cubic bezier) is used to give a premium, fluid feel.

## Proposed Changes

We will introduce a global page-level template and enhance individual section components on the home page and interior pages.

---

### Global Layout & Navigation

#### [NEW] [template.tsx](file:///d:/freelance/src/app/template.tsx)
- Create a Next.js App Router Template component wrapping all pages.
- Implement page-to-page route transitions: a subtle fade-in and slight slide-up (`y: 15` to `0`) when navigating.

#### [MODIFY] [Navbar.tsx](file:///d:/freelance/src/components/Navbar.tsx)
- Animate the mobile menu dropdown using `AnimatePresence` so it slides/fades down smoothly when clicked.
- Animate the **Donate Modal** using `AnimatePresence` and `motion` for:
  - Background overlay: fade-in/out.
  - Card container: scale-up and slide-up with a springy exit.

---

### Home Page & Section Components

#### [MODIFY] [About.tsx](file:///d:/freelance/src/components/sections/About.tsx)
- Add viewport entrance scroll reveal:
  - Header: Fades and slides down.
  - Founder's Portrait (Left column): Fades and slides in from the left (`x: -30` to `0`).
  - Biography details (Right column): Fades and slides in from the right (`x: 30` to `0`).

#### [MODIFY] [Ministries.tsx](file:///d:/freelance/src/components/sections/Ministries.tsx)
- Animate the grid layout and card entrance using Framer Motion staggering variants.
- Cards will enter from bottom with `y: 25` and stagger by `0.08` seconds when they come into view.

#### [MODIFY] [BooksBanner.tsx](file:///d:/freelance/src/components/sections/BooksBanner.tsx)
- Add viewport reveal animation:
  - Title, subtitle, and CTA button animate sequentially as they enter the screen.
  - Background image: Scale from `1.03` to `1.0` on load for a parallax/depth effect.

#### [MODIFY] [Statistics.tsx](file:///d:/freelance/src/components/sections/Statistics.tsx)
- Staggered entry for each statistic card (from `y: 15` to `0` with fade) when scrolling into view.

#### [MODIFY] [DailyBiblePromise.tsx](file:///d:/freelance/src/components/sections/DailyBiblePromise.tsx)
- Animate the main `PaperCard` container so it fades/reveals on scroll.
- Verse text can fade in when loaded.

#### [MODIFY] [LatestSermons.tsx](file:///d:/freelance/src/components/sections/LatestSermons.tsx)
- Add staggered fade-in animations for the three sermon cards in the grid.
- **Critical Fix:** Replace the static/missing `.animate-fadeIn` on the Collapsible Transcript Box with Framer Motion `AnimatePresence` and `motion.div` so the transcript panel slides up smoothly over the card when opened.

#### [MODIFY] [PrayerRequestSection.tsx](file:///d:/freelance/src/components/sections/PrayerRequestSection.tsx)
- Add a smooth scroll reveal with a subtle scale-up effect (`scale: 0.97` to `1`) on the CTA container card.

---

## Verification Plan

### Automated Tests
- Run `npm run build` locally to verify there are no TypeScript or compilation errors.

### Manual Verification
- Start the local development server:
  ```powershell
  npm run dev
  ```
- Browse the home page, verify all sections scroll into view with elegant animations.
- Test routing (e.g., clicking *About Us*, *Books*, *Sermons* in the navbar) to confirm route transitions run correctly.
- Open/close the Donate modal and mobile menus to ensure transition triggers behave correctly.
- Open/close the sermon transcript panel to verify the slide-up animation works perfectly.
