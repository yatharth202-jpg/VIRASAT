---
name: Aetheris
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#c9c6be'
  on-secondary: '#31312b'
  secondary-container: '#4a4943'
  on-secondary-container: '#bab8b0'
  tertiary: '#d0cdcd'
  on-tertiary: '#313030'
  tertiary-container: '#b4b2b2'
  on-tertiary-container: '#454544'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#e5e2da'
  secondary-fixed-dim: '#c9c6be'
  on-secondary-fixed: '#1c1c17'
  on-secondary-fixed-variant: '#474741'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  margin-mobile: 20px
  gutter: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  stack-xl: 64px
---

## Brand & Style
The design system is built for a mobile experience centered on the concept of 'Antigravity'—merging cutting-edge scientific theory with the weight of historical discovery. The brand personality is **mysterious, intellectual, and premium**. It evokes the feeling of a secret Victorian laboratory or a modern archive of forbidden physics.

The visual style is a blend of **Minimalism** and **Tactile Depth**. It uses heavy, meaningful whitespace (or "darkspace") to allow high-contrast elements to breathe. While the layout is clean, the details—hairline borders, subtle paper textures on cards, and glowing accents—provide a physical sense of "weightlessness" against a dense, dark background.

## Colors
The palette is rooted in a **sophisticated dark theme**. 
- **Primary:** Metallic Gold (#D4AF37) is used sparingly for interactive states, key iconography, and highlights, representing energy and the "spark" of discovery.
- **Secondary (Parchment):** Cream (#F5F2E9) serves as the primary text color and surface color for high-importance content cards, providing a historical, tactile contrast.
- **Neutral/Background:** A deep, near-black Charcoal (#0D0D0D) acts as the foundation, with Lighter Charcoal (#1A1A1A) used for subtle layering.

Avoid using pure white; use the parchment tone to maintain the "historical document" aesthetic even in a digital, scientific context.

## Typography
The typography strategy employs a "History meets Future" approach. 
- **Headlines:** Use **Libre Caslon Text** for an authoritative, literary feel. It should be used for titles and section headers to evoke the sense of a published scientific journal.
- **Body:** **Manrope** provides a clean, modern, and highly legible counterpoint for long-form reading and technical data.
- **Data & Labels:** **Space Grotesk** is used for technical readouts, metadata, and labels. Its geometric nature reinforces the scientific, "Antigravity" theme.

## Layout & Spacing
This design system utilizes a **fluid grid** for mobile, centered on a 4-column structure. 
- **Margins:** A generous 20px side margin ensures content does not feel cramped against the dark edges of the device.
- **Rhythm:** Spacing follows an 8px incremental scale. Large gaps (32px+) are encouraged between different sections to create an "airy" feel, simulating the lack of gravity.
- **Safe Areas:** Ensure all critical interactions are kept within the thumb-zone, utilizing bottom-heavy navigation for ease of use in a mobile environment.

## Elevation & Depth
In this design system, depth is conveyed through **Tonal Layering** and **Subtle Glows**. 
- **Surfaces:** Instead of traditional shadows, use slight shifts in background value. Level 0 is the deep background (#0D0D0D). Level 1 surfaces (cards) use a slightly lighter grey (#1A1A1A) or the Parchment (#F5F2E9) for maximum prominence.
- **Outlines:** Use 1px "Ghost Borders" in muted gold or low-opacity cream to define edges without adding visual weight.
- **Inner Glow:** For primary interactive elements, a very soft, localized gold outer glow can be used to suggest electromagnetic or "anti-gravitic" energy.

## Shapes
The shape language is **Soft yet Structured**. We avoid overly rounded "bubbly" shapes to maintain a professional and scientific tone. 
- **Standard Radius:** 4px (Soft) for buttons and inputs to feel precise.
- **Container Radius:** 8px for cards and larger modules.
- **Specific Accents:** Occasional use of sharp 90-degree corners for "divider ornaments" or "technical frames" to reinforce the archival/journal aesthetic.

## Components
- **Buttons:** Primary buttons use a solid Gold fill with Black text. Secondary buttons are "Ghost" style with a thin Gold or Parchment border and serif labels.
- **Cards:** Content cards should either be "Deep" (slightly lighter charcoal than the background) or "Highlight" (Parchment background with Dark text). Cards should use thin, elegant dividers.
- **Input Fields:** Bottom-aligned borders only (minimalist style) to mimic the lines of a notebook, using Space Grotesk for input text.
- **Chips/Tags:** Small, pill-shaped elements with 1px borders and uppercase labels, used for scientific categories or data tags.
- **Ornaments:** Use thin horizontal rules with a centered diamond or "star" glyph (in Gold) to separate major content sections, echoing the "Virasat" reference.
- **Navigation:** A bottom tab bar with thin, gold-stroked icons. Active states should feature a subtle glow rather than a heavy fill.