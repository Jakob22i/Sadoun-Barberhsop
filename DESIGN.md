---
name: Sadoun Barbershop
description: The phone number as the hero on printed paper: two inks (navy and pole red), one pressable key shape, one ink plate for prices and hours.
colors:
  paper-cream: "#f3ead7"
  paper-deep: "#e9dcc0"
  sign-ink: "#16213a"
  ink-soft: "#2a3556"
  pole-red: "#b3262d"
  pole-red-deep: "#8f1d23"
  pole-blue: "#1f3c88"
typography:
  number:
    fontFamily: "Fraunces, Iowan Old Style, Georgia, serif"
    fontSize: "min(19cqi, 92px)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Fraunces, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(30px, 5vw, 44px)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Fraunces, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(20px, 3.2vw, 24px)"
    fontWeight: 500
    lineHeight: 1.2
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.55
  button:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: 1.2
  label:
    fontFamily: "Oswald, Arial Narrow, sans-serif"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.08em"
rounded:
  r: "4px"
  inner: "2px"
  pole: "12px"
  arch: "120px 120px 4px 4px"
spacing:
  gutter: "16px"
  gutter-wide: "32px"
  section: "40px"
  section-wide: "56px"
  container: "1120px"
components:
  key-red:
    backgroundColor: "{colors.pole-red}"
    textColor: "{colors.paper-cream}"
    typography: "{typography.button}"
    rounded: "{rounded.r}"
    padding: "12px 22px"
    height: "52px"
  key-red-hover:
    backgroundColor: "{colors.pole-red-deep}"
  key-paper:
    backgroundColor: "{colors.paper-cream}"
    textColor: "{colors.sign-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.r}"
    padding: "12px 22px"
    height: "52px"
  plate:
    backgroundColor: "{colors.sign-ink}"
    textColor: "{colors.paper-cream}"
    rounded: "{rounded.r}"
    padding: "24px 20px"
---

# Design System: Sadoun Barbershop

## Overview

**Creative North Star: "The Number on the Door"**

A barbershop in Skien needs one thing from its website: a phone number you can read from across the street. Everything else supports that. The page is printed, not decorated: warm paper, navy ink, one red, set in a handful of fixed shapes. The retro comes from the printing (a hard offset, a stripe, a pole on a small sign), not from costume.

The voice is spoken and local. "Ring eller kom innom. Vi tar deg imot så fort vi kan." No brochure phrases, no claims the shop has not confirmed.

**Key Characteristics:**
- The phone number is the largest thing on the first screen and is a link.
- Two inks on paper: sign ink and pole red. Blue lives only inside the barber pole and as the keyboard focus ring on paper.
- One pressable shape (the key) with a hard lip that collapses when pressed.
- Prices and opening hours share one ink plate; contact is one flat red band.
- No italics, no brass, no pills.

## Colors

Printed paper, navy ink, one red.

### Primary
- **Pole Red** (#b3262d): The call key, the rule under the number, the map pin, the contact band, the plate's offset. Hover on a red key deepens to **Pole Red Deep** (#8f1d23).

### Secondary
- **Pole Blue** (#1f3c88): Only in barber-pole stripes, the hero-to-plate stripe, and the keyboard focus ring on paper surfaces. It never fills a surface.

### Neutral
- **Paper Cream** (#f3ead7): Page ground (with a faint grain as a background), text on ink and red.
- **Paper Deep** (#e9dcc0): Hover state of paper keys; the sign's small print and pole end-caps.
- **Sign Ink** (#16213a): Text on paper, the plate, the sign, the footer, and every key's border and lip.
- **Ink Soft** (#2a3556): Secondary text on paper.

### Named Rules
**The Two-Ink Rule.** Ink and red do the work. A third accent color (gold, brass, green) does not enter this system.

**The Stripe Is Trim Rule.** Red and blue appear together only inside the pole and as the thin stripe between hero and plate.

**The Paper Is Printed Rule.** The page ground is warm and slightly grainy, set as a background. Pure white is not part of this system, and the grain never overlays content.

## Typography

**Number & Headings:** Fraunces (with Iowan Old Style, Georgia)
**Body & Buttons:** Barlow (with system-ui)
**Labels:** Oswald (with Arial Narrow), only for the nav, day names and the sign.

**Character:** Fraunces gives the number and headings an old-shop warmth; Barlow keeps everything else plain and readable on a phone; Oswald is the shopfront lettering and appears in small doses.

### Hierarchy
- **Number** (Fraunces 600, min(19cqi, 92px), line-height 1): The phone number in the hero, with a 6px red rule under it. Sized from its column so it never overflows.
- **Headline** (600, clamp(30px, 5vw, 44px), 1.05): Plate title and the contact address (smaller, clamp 26-36px).
- **Title** (500, clamp(20px, 3.2vw, 24px)): Service names; the shop name in the hero is 600 at clamp(26px, 5.2vw, 40px).
- **Body** (Barlow 400-500, 18px, 1.55): The spoken line, facts, hours times. Measure about 34ch.
- **Button** (Barlow 600, 18px): Key and text link labels in sentence case.
- **Label** (Oswald 600, 15-18px, tracking 0.04-0.1em, uppercase): Nav, day names, the plate's hours title.

### Named Rules
**The Roman Rule.** There is no italic anywhere. Emphasis comes from weight and size.

**The Real Ø Rule.** Norwegian text must render æ, ø and å in the same face as its neighbours; check any label face with the word "LØRDAG".

**The Plain Speech Rule.** Copy is short and spoken. If a sentence could sit on any barbershop's site, it goes.

## Layout

A single column of bands inside a 1120px container with 16px gutters (32px from 760px). The hero is left-aligned: shop name, the number, one spoken line, one key plus a text link, then two facts (walk-in, address). From 900px a small arched sign with the pole sits on the right; below 900px it is hidden because it only pushes the number down. The plate follows, then a full-bleed red contact band, then the footer. Hero, plate and contact use different vertical padding on purpose (28/48, 40/48, 36/40 on mobile) so the page does not read as equal slabs.

The plate holds prices in two columns from 900px and the hours as a strip along its bottom. Below 900px a fixed key-shaped call bar appears while neither the hero call key nor the contact keys are in view. The mobile header is static with the nav on a second row; from 760px it is sticky, from 900px it carries a call key.

## Elevation & Depth

Printed, with hard offsets and no blur. Depth is a lip under a key and an offset behind a plate.

### Shadow Vocabulary
- **Key lip** (`box-shadow: 0 4px 0 #16213a`): Under every key; it collapses to `0 0 0` and the key moves down 4px on press.
- **Plate offset** (`box-shadow: 4px 4px 0 #b3262d`): Behind the ink plate and the sign.
- **Call bar lip** (`box-shadow: 0 4px 0 #16213a`): Same as a key.

### Named Rules
**The Hard Offset Rule.** Every shadow is offset 4px, solid, and never blurred. Key lips are ink; plates and the sign cast red.

## Shapes

One radius: 4px, for keys, the plate and the language toggle (2px for toggle buttons inside it). The only curves are depicted objects: the arched sign (120px top corners) and the rounded pole tube (12px). Borders are 2px in ink.

## Components

### Keys
- **Shape:** 4px radius, 2px ink border, minimum height 52px (44px small).
- **Red:** Pole red fill, paper text, ink border and lip. The only call action; hover (mouse only) deepens to pole red deep.
- **Paper:** Paper fill, ink text; used on the red contact band.
- **Press:** Moves down 4px and the lip collapses in 120ms with the strong ease-out. Release is the same speed.
- **Focus:** 3px pole-blue ring on paper surfaces, paper ring on ink and red surfaces; the fixed call bar uses a paper-and-ink double ring so it reads over any content.

### Text link
Barlow 600, underlined (2px, 5px offset), 44px tall hit area. Hover (mouse only) turns it red on paper. Used for "Se priser" and "Vis i kart".

### Plate
An ink block (2px border, 4px radius, 4px red offset) holding the title, an honest note ("Eksempelpriser – ring for å bekrefte."), service rows with dotted leaders and prices like "350,-", and a dashed-rule hours strip with an "eksempeltider" flag. Placeholders stay flagged until real values are supplied.

### Navigation
Oswald uppercase links with a red underline that scales in from the pointer's side on hover (mouse only); NO/EN toggle as a two-cell box; the sticky desktop header carries a small red key.

### The Sign (signature)
A small arched ink board with a paper inner rule and a red offset: "Siden 2024", the pole, "Torggata 15", "SKIEN". The pole's stripes move with a constant transform loop, pause when off screen, and stop under reduced motion.

## Do's and Don'ts

### Do:
- **Do** keep the phone number (46 15 91 57) the largest element on the first screen, and keep the address and walk-in line within one thumb scroll.
- **Do** use pole red for calling, the number's rule, the map pin and the contact band only.
- **Do** make every pressable thing a key or an underlined text link; press moves 4px down in 120ms.
- **Do** keep shadows hard and offset 4px, in ink (keys) or red (plates).
- **Do** keep above-the-fold content independent of scroll; it enters on load in 300ms or less.
- **Do** use a paper focus ring on ink and red surfaces; blue is for paper.
- **Do** check any new label face against "LØRDAG" and the digits 0-9 before adopting it.

### Don't:
- **Don't** use italics, brass or gold, or pill-shaped buttons.
- **Don't** put kicker or eyebrow labels above headings; the heading carries its own weight.
- **Don't** use unicode glyphs as icons; draw inline SVG in one filled style (phone and map pin today).
- **Don't** use blurred drop shadows, gradient text, or a texture over content.
- **Don't** add photos, reviews, awards or prices that have not been confirmed; example values stay visibly flagged.
- **Don't** repeat the same sentence of brochure copy ("i hjertet av …", "gjort med håndverk") that could sit on any barbershop site.
- **Don't** use Barlow Condensed (wide Ø) or Bodoni Moda (hairlines vanish at small sizes); both were tried and removed.
