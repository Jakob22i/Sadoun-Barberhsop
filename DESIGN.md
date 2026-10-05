---
name: Sadoun Barbershop
description: A warm, confident retro barbershop sign for Torggata, Skien: cream paper, ink-navy board, barber-pole red and blue, brass trim.
colors:
  paper-cream: "#f3ead7"
  ticket-cream: "#e9dcc0"
  sign-ink: "#16213a"
  ink-soft: "#2a3556"
  pole-red: "#b3262d"
  pole-red-deep: "#8f1d23"
  pole-blue: "#1f3c88"
  brass: "#b98a2f"
  brass-light: "#d9b765"
typography:
  display:
    fontFamily: "Fraunces, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(44px, 9.5vw, 92px)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Fraunces, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(36px, 6vw, 56px)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Fraunces, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(20px, 3.4vw, 26px)"
    fontWeight: 500
    lineHeight: 1.2
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Oswald, Arial Narrow, sans-serif"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.18em"
rounded:
  sm: "6px"
  md: "10px"
  lg: "14px"
  pill: "999px"
  arch: "160px 160px 14px 14px"
spacing:
  gutter: "16px"
  gutter-wide: "32px"
  section: "64px"
  section-wide: "96px"
  container: "1120px"
components:
  button-primary:
    backgroundColor: "{colors.pole-red}"
    textColor: "{colors.paper-cream}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
    height: "56px"
  button-primary-hover:
    backgroundColor: "{colors.pole-red-deep}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.sign-ink}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
    height: "56px"
  card-ticket:
    backgroundColor: "{colors.ticket-cream}"
    textColor: "{colors.sign-ink}"
    rounded: "{rounded.md}"
    padding: "8px 24px"
  card-menu:
    backgroundColor: "{colors.sign-ink}"
    textColor: "{colors.paper-cream}"
    rounded: "{rounded.sm}"
    padding: "8px 20px"
---

# Design System: Sadoun Barbershop

## Overview

**Creative North Star: "The Barber Sign on Torggata"**

The whole site behaves like the sign over the shop door: a dark enamel board with brass trim, a spinning red-and-blue pole, and a phone number you can read from across the street. It is warm and everyday rather than exclusive, and proud rather than apologetic. The cream paper ground keeps it human; the ink board and pole red give it the confidence to take up space.

Every surface answers one question first: how does a person in Skien reach the shop? Decoration (stripes, brass rules, the pole) is drawn from real barbershop signage and never competes with the phone number, address, prices and hours.

**Key Characteristics:**
- Cream paper ground with ink-navy boards; pole red is the single action color.
- Display serif for headlines and prices-of-things; condensed uppercase labels for wayfinding.
- Hard, offset shadows and doubled brass rules (printed, tactile) instead of soft blur shadows.
- Pill buttons that physically press in (scale 0.97).
- Motion is limited to the pole's constant spin, a short load-in of the hero, and press feedback.

## Colors

A signage palette: warm paper, deep ink, barber-pole red and blue, brass.

### Primary
- **Pole Red** (#b3262d): The one action color. Call buttons, the sticky call bar, the contact panel, the accent word in the headline. Deepens to **Pole Red Deep** (#8f1d23) on hover and as the button's base-line shadow.

### Secondary
- **Pole Blue** (#1f3c88): Appears only in barber-pole stripes and as the keyboard focus ring. It never fills a surface.

### Tertiary
- **Brass** (#b98a2f) and **Brass Light** (#d9b765): Trim and numerals. Doubled rules around the price card, pole end-caps, the sign's inner rule, price figures on the ink board.

### Neutral
- **Paper Cream** (#f3ead7): Page ground and text on dark boards.
- **Ticket Cream** (#e9dcc0): The hours ticket, one step deeper than the page.
- **Sign Ink** (#16213a): Text on paper; the price board, sign, footer and pole-sign background.
- **Ink Soft** (#2a3556): Secondary body copy on paper.

### Named Rules
**The One Action Color Rule.** Pole red marks the way to call or visit and nothing else. If red appears on something that is not a call-to-action, the contact panel, or the headline accent, remove it.

**The Stripe Is Trim Rule.** Red and blue appear together only as pole stripes and the thin divider between hero and prices. Never use them as a large pattern or a card background.

**The Cream Is Paper Rule.** Keep the cream ground warm and slightly grainy (the faint paper noise). Pure white is not part of this system.

## Typography

**Display Font:** Fraunces (with Iowan Old Style, Georgia)
**Body Font:** Barlow (with system-ui)
**Label Font:** Oswald (with Arial Narrow)

**Character:** Fraunces brings old-shop warmth and a hint of wonk; Oswald is the lettering from a shopfront sign; Barlow keeps running text honest and readable on a phone.

### Hierarchy
- **Display** (600, clamp(44px, 9.5vw, 92px), 0.98): The hero headline only. One word ("barbering") is set italic in pole red.
- **Headline** (600, clamp(36px, 6vw, 56px), 1.02): Section titles, the contact address.
- **Title** (500, clamp(20px, 3.4vw, 26px)): Service names and hours figures.
- **Body** (400, 18px, 1.55): Running copy, capped around 30-34ch for the lede and notes.
- **Label** (Oswald 500-700, 17-21px, tracking 0.06-0.18em, uppercase): Buttons, nav, day names, prices (700).

### Named Rules
**The Roman Headline Rule.** Headlines are roman. Italic is reserved for the single accent word, the sign's "Torggata 15" and the phone number's emphasis in the contact panel.

**The Real Ø Rule.** Norwegian text must render æ, ø and å in the same face as its neighbours. Barlow Condensed was dropped because its Ø is visibly wider; confirm any label face with the word "LØRDAG" before adopting it.

## Layout

A single column of full-width bands inside a 1120px container with 16px gutters (32px from 760px up). Bands alternate paper, ink and paper again, then close on a red contact panel. The header sticks from 760px; below that it is static with the nav on a second row. The hero is two columns from 900px (copy 1.35fr, sign 1fr) and stacks on mobile with the copy first. Prices sit in a 0.8fr/1.2fr split on desktop and stack on mobile. Section padding is 64px (mobile) to 96px (desktop).

Below 900px a fixed pill call bar sits at the bottom with safe-area padding; it slides away while the hero call button or the contact panel is in view, and from 900px the header carries a call button instead. Touch targets are at least 42-56px high.

## Elevation & Depth

Tactile and printed, never blurred: depth comes from hard offset shadows and doubled rules, with one soft ambient shadow reserved for the hanging sign.

### Shadow Vocabulary
- **Button base-line** (`box-shadow: 0 2px 0 #8f1d23`): Under red buttons, like a pressed enamel edge.
- **Call bar lip** (`box-shadow: 0 4px 0 #16213a`): Under the sticky call bar.
- **Ticket offset** (`box-shadow: 8px 8px 0 #16213a`): The hours ticket sits on the page like a stamped card.
- **Panel lip** (`box-shadow: 0 8px 0 #16213a`): Under the red contact panel.
- **Sign** (inset ink and brass rules, a cream under-edge, plus `0 22px 40px -18px rgba(22,33,58,.55)`): The only soft shadow, because the sign hangs in space.

### Named Rules
**The Hard Shadow Rule.** Shadows are offset and solid, in sign ink or deep red. A blurred shadow appears only under the hanging sign.

## Shapes

Mostly softly rounded rectangles (6-14px) with full pills for every button and the language toggle, and one arched silhouette: the sign (160px top corners) echoing a shopfront or a shield. Borders are 2px in ink or brass; the price card doubles its brass rule with a 5px-offset outline. The barber pole is a rounded tube with brass end-caps.

## Components

### Buttons
- **Shape:** Full pill (999px), minimum height 48px, 56px for big variants.
- **Primary:** Pole red fill, cream Oswald label (uppercase, 0.06em tracking), 14px 28px padding, deep-red base-line shadow.
- **Hover / Focus:** Hover (mouse only) deepens to #8f1d23; press scales to 0.97 in 160ms with a strong ease-out; focus shows a 3px pole-blue ring with 3px offset.
- **Ghost:** 2px ink outline, transparent; on hover (mouse only) fills with ink and flips text to cream.
- **Cream / Ghost-light:** Used only on the red contact panel.

### Hours Ticket
A ticket-cream card with a 2px ink border, 10px radius, 8px 8px hard shadow, and dashed row separators; days are Oswald labels, times are Fraunces figures, "closed" is red italic.

### Price Board
An ink board with a doubled brass border. Each row: service name in Fraunces, a dotted brass leader, price in Oswald bold brass-light. Rows are separated by hairlines.

### Navigation
Sticky, translucent cream bar with a blurred backdrop and a hairline. Oswald uppercase links (a second row below 760px) with a red underline that grows in on hover; the NO/EN pill toggle stays visible at all widths; the header call button appears from 900px.

### The Sign (signature)
An arched ink board, tilted 1.5 degrees, framed by a brass rule, holding "Siden 2024", the animated pole, "Torggata 15" in Fraunces italic and "SKIEN" in widely tracked Oswald. The shop name lives in the header, footer and page title; the sign carries the place. The pole stripe scrolls at a constant 3.2s loop and stops under reduced motion.

## Do's and Don'ts

### Do:
- **Do** keep the phone number (46 15 91 57) and address one tap or one scroll away on every screen.
- **Do** use pole red only for calling, visiting and the headline accent word.
- **Do** keep shadows hard and offset (0 2px / 0 4px / 8px 8px / 0 8px) in ink or deep red.
- **Do** keep motion short and purposeful: 160ms press, 520ms hero load-in, constant pole spin; respect `prefers-reduced-motion`.
- **Do** keep above-the-fold content independent of scroll: it enters on load, never behind a scroll observer.
- **Do** use a cream focus ring on red and ink surfaces; the blue ring is for cream surfaces.
- **Do** check any new label or heading face against the word "LØRDAG" and the digits 0-9 before adopting it.

### Don't:
- **Don't** use blurred drop shadows outside the hanging sign.
- **Don't** use Barlow Condensed (wide Ø) or Bodoni Moda (hairlines vanish at small sizes); both were tried and removed.
- **Don't** add photos, reviews, awards or prices that have not been confirmed; example prices and hours stay clearly replaceable.
- **Don't** let the red-and-blue stripe become a large pattern or a card background.
- **Don't** put kicker or eyebrow labels above headings; the heading carries its own weight.
- **Don't** use unicode glyphs as icons; draw them as inline SVG in one filled style (phone and map pin today).
- **Don't** use pure white or pure black; stay with paper cream and sign ink.
