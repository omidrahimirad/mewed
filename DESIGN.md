---
name: Omid Rahimi Engineering Portfolio
description: A spectrum-blue technical editorial system for verified telecommunications experience.
colors:
  spectral-blue: "#075985"
  spectral-blue-deep: "#06466b"
  field-amber: "#d08a2e"
  mineral-canvas: "#f2f6f7"
  paper-surface: "#ffffff"
  ice-surface: "#e5eef1"
  alternate-surface: "#eaf2f4"
  technical-ink: "#102a3a"
  muted-ink: "#536875"
  rule: "#b9cbd2"
  night-canvas: "#07141d"
  night-surface: "#0c1e2a"
  night-ink: "#edf7fa"
  night-muted-ink: "#a8bdc7"
  night-rule: "#274555"
  night-signal: "#55b9e8"
  night-amber: "#e3a94d"
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
    backgroundColor: "{colors.spectral-blue-deep}"
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

**Creative North Star: "Spectrum Blueprint"**

The portfolio combines the clarity of a field-engineering acceptance report with the visual language of RF spectrum analysis. A signal trace, frequency grids, network nodes, protocol paths, and validation gates create an unmistakable telecommunications identity while every visual remains tied to real project subject matter.

The system is editorial rather than dashboard-like. Strong spectral blue establishes authority, restrained amber identifies outcomes and inspection points, and a lighter spectral blue preserves the signal identity in dark mode. Alternating mineral, ice, and deep-navy bands vary the scroll rhythm without turning information into floating cards.

**Key Characteristics:**

- Spectrum-led RF identity
- Evidence-first editorial hierarchy
- Deep blue with restrained amber instrumentation
- Project-specific technical schematics
- Signal-path timelines and connected matrices
- Purpose-designed light and dark modes

## Colors

The palette is derived from spectrum displays, infrastructure blueprints, and field-inspection markings.

### Primary

- **Spectral Blue** (`#075985`): active navigation, identifiers, signal traces, section rails, and technical links.
- **Deep Spectral Blue** (`#06466b`): primary actions and verified-scale surfaces.

### Secondary

- **Field Amber** (`#d08a2e`): outcomes, inspection points, focus rings, selected rules, and diagram secondary paths.

### Neutral

- **Mineral Canvas** (`#f2f6f7`): default light background.
- **Paper Surface** (`#ffffff`): profile, matrix, form, and evidence surfaces.
- **Ice Surface** (`#e5eef1`): secondary separation.
- **Alternate Surface** (`#eaf2f4`): experience and project rhythm.
- **Technical Ink** (`#102a3a`): primary light-mode text.
- **Muted Ink** (`#536875`): supporting copy.
- **Rule** (`#b9cbd2`): structural divisions.
- **Night Canvas / Surface** (`#07141d` / `#0c1e2a`): authored dark-mode foundations.
- **Night Ink / Muted Ink** (`#edf7fa` / `#a8bdc7`): dark-mode text.

**The Instrument Color Rule.** Blue carries system structure; amber marks inspection, result, or focus. Neither color is used as filler decoration.

## Typography

**Display Font:** Manrope (system UI fallback)

**Body Font:** Manrope (system UI fallback)

**Label/Mono Font:** DM Mono (monospace fallback)

**Character:** Manrope remains readable and mature at recruiter speed. DM Mono behaves like measurement notation for dates, project codes, signal labels, and technical annotations.

### Hierarchy

- **Display** (600, `clamp(3.4rem, 6.2vw, 5.8rem)`, 0.94): professional role only.
- **Headline** (600, `clamp(2.3rem, 5vw, 4.5rem)`, 1): section arguments.
- **Title** (600, fluid 1.45–2.55rem, 1.15–1.2): projects and roles.
- **Body** (400, 1rem, 1.65): technical narrative with a 45rem maximum measure.
- **Label** (400, 0.72rem, 0.08em, uppercase): dates, identifiers, evidence terms, and annotations.

**The Recorded Metadata Rule.** Monospace is restricted to information that behaves like a field, measurement, date, code, or protocol annotation.

## Layout

The shell remains 80rem with fluid gutters. The hero uses an asymmetric text-and-profile composition over a spectrum field, with a clipped ice-blue signal zone behind the profile. Sections alternate between mineral, ice, white, and deep-navy surfaces.

Projects retain their factual reading order but pair each index rail with a content-specific schematic. Experience follows a vertical signal path with numbered nodes. Capabilities use a three-stage connected matrix. The contact section becomes a full-width deep technical band with an elevated paper form.

Spacing follows 4, 8, 12, 16, 24, 32, 48, 64, 96, and 128px steps. Section padding is fluid from 72–96px, while ruled cells keep at least 24px of text inset. Breakpoints remain 70rem for navigation, 52rem for single-column composition, and 36rem for compact mobile treatment.

## Elevation & Depth

Most structure remains flat and ruled. Depth is reserved for two decision surfaces: the professional profile and the contact form, which use soft downward shadows and an amber top edge. All other separation comes from surface contrast, signal rails, and shared rules.

**The Selective Elevation Rule.** Only identity and action surfaces lift; evidence and technical structure stay grounded.

## Shapes

The system stays rectilinear. Signal nodes use small circles only when they represent an actual point on a path. Project identifiers are square technical plates; controls and surfaces remain square. The profile’s clipped background plane provides directional geometry without introducing abstract blobs.

## Components

### Buttons

- **Shape:** square, minimum height 52px.
- **Primary:** deep spectral blue in light mode and light spectrum blue in dark mode.
- **Hover / Focus:** blue shift with a two-pixel lift; amber three-pixel focus outline.
- **Secondary:** transparent, one-pixel border, and ice-blue hover surface.

### Cards / Containers

- **Corner Style:** square.
- **Background:** surface role determined by section rhythm.
- **Shadow Strategy:** profile and contact form only.
- **Border:** technical rules; no nested card outlines.
- **Internal Padding:** 24–48px.

### Inputs / Fields

- **Style:** transparent field with a ruled baseline.
- **Focus:** spectral-blue baseline plus visible amber outline.
- **Required State:** amber marker, native required semantics, and screen-reader text.

### Navigation

The header carries a blue-to-amber calibration rail. Active links use spectral-blue text with an amber underline. The mobile panel preserves the same hierarchy, keyboard behavior, and minimum target sizing.

### Hero Spectrum

A lightweight SVG frequency grid and one-time spectrum trace sit behind the hero. The professional profile is tagged “RF / RAN / SYSTEMS” and elevated over an ice-blue clipped plane. Motion runs once and is disabled by reduced-motion preferences.

### Project Dossier

Each project keeps its problem, method, and output structure. The index rail adds a unique schematic derived from the project: coverage path, 5G topology, incident timeline, validation gates, or protocol ladder. Output labels use amber; system paths use blue.

### Experience Signal Path

Numbered blue nodes and a vertical rail connect engineering roles. Amber inspection points mark the transition into each responsibility block without suggesting fabricated status.

### Capability Matrix

Three connected nodes represent wireless systems, integration/validation, and software/platforms. The matrix becomes vertical on narrow screens while preserving the same reading order.

## Do's and Don'ts

### Do:

- **Do** tie every diagram to the technical content beside it.
- **Do** use blue for system structure and amber for outcomes or inspection.
- **Do** alternate surfaces to create deliberate scroll rhythm.
- **Do** keep body text near a 45rem reading measure.
- **Do** preserve visible focus and reduced-motion behavior.

### Don't:

- **Don't** add decorative charts, fake telemetry, or invented values.
- **Don't** introduce purple gradients, glassmorphism, or glowing dashboard effects.
- **Don't** turn the spectrum motif into a constant animation.
- **Don't** place cards inside cards or distribute shadows across routine content.
- **Don't** use monospace for narrative text.
