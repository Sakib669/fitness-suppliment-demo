# Design System: Zenith Performance Nutrition & Wellness Store

## 1. Visual Theme & Atmosphere
A high-energy, athletic, science-backed supplement experience fusing vibrant organic emerald green with clinical white surfaces and soft ice-blue card elevations. The atmosphere communicates elite human performance, natural bioavailability, and laboratory-verified purity. Sections alternate between organic ripped brush dividers, rich verdant banners, and high-readability e-commerce product grids.

- **Density:** Daily App Balanced (5/10) with high e-commerce information density
- **Variance:** Offset Asymmetric (6/10) with organic rip canvas borders
- **Motion:** Spring Physics (6/10) with GSAP scroll-reveals and tactile hover states

## 2. Color Palette & Roles
- **Emerald Forest** (#00843D) — Primary athletic canvas and high-contrast section backdrops
- **Vibrant Growth** (#009E49) — Secondary energetic green for badges, CTA highlights, and active pills
- **Deep Bio-Charcoal** (#111827) — Primary text, Zinc-900 clarity, high-contrast readability
- **Clean Surface** (#FFFFFF) — Primary background for white sections and clean product containers
- **Soft Ice-Slate** (#EEF3F8) — Product card background container for maximum bottle silhouette pop
- **Muted Steel** (#6B7280) — Secondary text, SKU numbers, ingredient subtext
- **Subtle Whisper Border** (rgba(0, 0, 0, 0.08)) — 1px crisp separation lines
- **Electric Cobalt Accent** (#0000F2) — High-tech precision focus rings and Hermes synergy
- **Sun Gold Accent** (#FFB800) — Five-star reviews and limited-edition badges

## 3. Typography Rules
- **Display / Headlines:** Outfit & Cabinet Grotesk — Bold, track-tight, commanding athletic presence. 2-line maximum for hero titles.
- **Body / Specifications:** Outfit — Neutral, relaxed leading, optimal readability on both dark and light zones.
- **Numbers / Metrics / Pricing:** Outfit Semi-bold with tabular lining figures.
- **Banned:** Inter, Comic Sans, generic serif fonts in UI surfaces.

## 4. Component Stylings
- **Buttons:** Tactile pill and rounded-md shapes. Dark forest fill with white bold text, active `-1px` scale-down feedback, zero neon glow.
- **Product Cards:** Rounded-2xl ice-slate containers with floating bottle render, top-corner sale/new badges, right-side wishlist heart, bold pricing with strikethrough original price, and crisp "Shop Now" / "Add to Cart" action buttons.
- **Organic Ripped Dividers:** SVG-rendered brush/torn-paper transitional edges between emerald forest zones and clinical white zones, capturing the raw athletic energy of the original design.
- **Cart Drawer & Modals:** LocalStorage-persisted interactive side panel with real-time subtotal, quantity adjustments, and empty/checkout states.
- **Feature Cluster:** Central hero tub with 6 orbiting science-backed biomechanical feature pills.

## 5. Layout Principles
- Mobile-first responsive collapse: 3-column and 2-column grids smoothly fold into responsive single/double stacks.
- Ultra-wide container bounds (max-w-7xl) with generous horizontal padding (px-4 sm:px-6 lg:px-8).
- High-impact section chaptering with distinct background transitions.

## 6. Motion & Interaction
- GSAP `@gsap/react` scroll-triggered reveals and micro-interactions.
- Hover physics with `scale-105` smooth transitions on product images.
- Fluid carousel tabs and instant localStorage reactivity for cart count and wishlist status.

## 7. Anti-Patterns (Banned)
- No emojis anywhere in code, labels, or UI.
- No cheap meta-labels ("SECTION 01", "ABOUT US 02").
- No pure black (#000000) text.
- No blurry low-res imagery.
- No overlapping unreadable text over photos.
- No copyright-infringing brand marks (clean original formulations & naming).
