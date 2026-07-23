---
name: Omid Rahimi Engineering Portfolio
description: A restrained field-engineering dossier for verified telecommunications experience.
colors:
  signal: "#1f6a46"
  signal-strong: "#174f36"
  mineral-canvas: "#f3f4ef"
  paper-surface: "#ffffff"
  soft-surface: "#e9ece7"
  technical-ink: "#14211b"
  muted-ink: "#59665f"
  rule: "#c9d0ca"
  dark-canvas: "#0d1511"
  dark-surface: "#131e18"
  dark-soft-surface: "#1b2821"
  dark-ink: "#f1f4ef"
  dark-muted-ink: "#aeb8b1"
  dark-rule: "#33433a"
  dark-signal: "#8ad8a9"
  dark-signal-strong: "#b6efc9"
  focus: "#d87927"
typography:
  display:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "clamp(3.4rem, 6.2vw, 5.8rem)"
    fontWeight: 600
    lineHeight: 0.94
    letterSpacing: "-0.038em"
  headline:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "clamp(2.3rem, 5vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "DM Mono, ui-monospace, monospace"
    fontSize: "0.72rem"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "0.08em"
rounded:
  square: "0"
spacing:
  1: "4px"
  2: "8px"
  3: "12px"
  4: "16px"
  5: "24px"
  6: "32px"
  7: "48px"
  8: "64px"
  9: "96px"
  10: "128px"
components:
  button-primary:
    backgroundColor: "{colors.signal-strong}"
    textColor: "{colors.paper-surface}"
    rounded: "{rounded.square}"
    padding: "0.8rem 1.15rem"
    height: "3.25rem"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.technical-ink}"
    rounded: "{rounded.square}"
    padding: "0.8rem 1.15rem"
    height: "3.25rem"
---

# Design System: Omid Rahimi Engineering Portfolio

## Overview

**Creative North Star: "Field Engineering Dossier"**

The portfolio behaves like a concise acceptance report: factual, ordered, and easy to verify. Mineral surfaces, technical ink, one controlled forest-green signal, and ruled divisions create a mature engineering world without imitating a dashboard or corporate brochure.

The atmosphere is precise and human. The portrait provides identity; operating scale, projects, and experience provide authority. Density is editorial rather than card-based, with generous section rhythm and compact evidence inside each section.

**Key Characteristics:**

- Evidence-first hierarchy
- Flat ruled composition
- Restrained forest-green signal
- Editorial typography with technical metadata
- Bilingual, recruiter-first scanning

## Colors

The palette combines mineral paper and dark technical ink with a single forest-green signal, then mirrors those roles in a low-light theme.

### Primary

- **Field Signal** (`#1f6a46`): labels, links, active navigation, icons, and limited emphasis.
- **Deep Field Signal** (`#174f36`): primary actions and the verified-scale band in light mode.

### Neutral

- **Mineral Canvas** (`#f3f4ef`): default page background.
- **Paper Surface** (`#ffffff`): portrait ledger, form, and contained information surfaces.
- **Soft Surface** (`#e9ece7`): secondary tonal separation.
- **Technical Ink** (`#14211b`): headings, body emphasis, and dark footer.
- **Muted Ink** (`#59665f`): supporting copy and metadata.
- **Rule** (`#c9d0ca`): structural borders and dividers.
- **Night Canvas / Surface** (`#0d1511` / `#131e18`): dark-mode foundations.
- **Night Ink / Muted Ink** (`#f1f4ef` / `#aeb8b1`): dark-mode text.

**The One Signal Rule.** Green marks action, active state, or verified evidence; it is never scattered as decoration.

## Typography

**Display Font:** Manrope (system UI fallback)

**Body Font:** Manrope (system UI fallback)

**Label/Mono Font:** DM Mono (monospace fallback)

**Character:** Manrope provides direct, contemporary engineering clarity. DM Mono makes dates, indices, and evidence labels feel recorded rather than advertised.

### Hierarchy

- **Display** (600, `clamp(3.4rem, 6.2vw, 5.8rem)`, 0.94): the professional role only.
- **Headline** (600, `clamp(2.3rem, 5vw, 4.5rem)`, 1): major section arguments.
- **Title** (600, fluid 1.45–2.55rem, 1.15–1.2): projects and roles.
- **Body** (400, 1rem, 1.65): descriptive copy with a maximum reading measure of 45rem.
- **Label** (400, 0.72rem, 0.08em, uppercase): dates, section labels, evidence terms, and project indices.

**The Recorded Metadata Rule.** Monospace is reserved for information that behaves like a field, date, code, or label—never for paragraphs.

## Layout

The content shell is 80rem with fluid side gutters. Desktop uses asymmetric two-column compositions for the hero, section headings, experience rows, and contact area. Projects are full-width dossier rows with one index column and one evidence column; capability and education groups use shared ruled matrices rather than independent cards.

Spacing follows 4, 8, 12, 16, 24, 32, 48, 64, 96, and 128px steps. Sections use 128px vertical rhythm on large screens, 96px near tablet widths, and 76px on small screens. Breakpoints are 70rem for navigation compression, 52rem for tablet/single-column composition, and 36rem for compact mobile treatment. The implementation is explicitly verified at 375px, 768px, and 1440px without horizontal scrolling.

## Elevation & Depth

The system is flat by default and uses no content shadows. Depth comes from tonal surfaces, borders, and controlled overlap in the fixed header. The header alone uses a translucent background and subtle backdrop blur so navigation remains readable while scrolling.

**The Flat Evidence Rule.** Information earns prominence through order, scale, and contrast—not floating cards or drop shadows.

## Shapes

Surfaces and controls are square. One-pixel rules create the recurring silhouette, while the portrait is clipped to a rectilinear frame. Circular badges, pill chips, and rounded card stacks do not belong to this system. Focus rings may sit outside the square form because accessibility state takes priority over visual restraint.

## Components

### Buttons

- **Shape:** square, minimum height 52px.
- **Primary:** deep field signal with white text in light mode; pale signal with dark text in dark mode.
- **Hover / Focus:** shifts to technical ink and uses a 3px amber focus outline.
- **Secondary:** transparent with a one-pixel technical-ink border; inverts on hover.

### Cards / Containers

- **Corner Style:** square.
- **Background:** canvas by default; paper only for the profile ledger and form.
- **Shadow Strategy:** none.
- **Border:** shared one-pixel rules instead of isolated card outlines.
- **Internal Padding:** 24–48px depending on viewport.

### Inputs / Fields

- **Style:** transparent field with a bottom rule, no rounded input shell.
- **Focus:** bottom rule becomes a two-pixel field signal; global focus outline remains visible.
- **Required State:** visible asterisk plus screen-reader text and native required semantics.

### Navigation

The fixed header uses compact uppercase labels, a ruled language switch, theme control, and direct CV action. Active sections receive a two-pixel green underline. At 52rem and below, a full-width ruled panel replaces desktop navigation; it exposes expanded state, closes on selection or Escape, and keeps all controls at least 44px.

### Proof Ledger

The proof ledger is the signature component: five verified figures on one deep-green band, divided by rules and labeled in DM Mono. At tablet and mobile widths it becomes a three- then two-column ledger without changing reading order.

### Project Dossier

Each project is a full-width ruled entry with an index, summary, and problem/method/output definition list. The first entry receives a faint tonal wash but no shadow or nested card.

## Do's and Don'ts

### Do:

- **Do** lead with role, production scope, and opportunity intent.
- **Do** use rules and alignment to structure technical information.
- **Do** keep body text near a 45rem reading measure.
- **Do** preserve one clear primary action and visible keyboard focus.
- **Do** test German wrapping at every responsive width.

### Don't:

- **Don't** introduce purple gradients, neon glows, or animated backgrounds.
- **Don't** turn competencies into percentages, badges, or dashboard widgets.
- **Don't** place cards inside cards or add shadows for routine grouping.
- **Don't** fabricate project outcomes, customer proof, or metrics.
- **Don't** use typewriter effects, stock imagery, or meaningless technical graphics.
