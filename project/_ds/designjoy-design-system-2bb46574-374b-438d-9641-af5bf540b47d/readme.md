# Designjoy Design System

A brand & component system reconstructed from the **Designjoy** marketing site
(`www.designjoy.co`) — Brett Williams' one-person "design as a subscription"
studio, headquartered in Phoenix, Arizona. The brand voice is confident,
playful and friendly; the visuals pair a calm warm-grey canvas and crisp black
type with explosive, saturated gradient "joy" cards and a smiling-face motif.

> **Tagline:** *Design subscriptions for everyone.*
> **One-liner:** *One subscription to rule them all. Pause or cancel anytime.*

---

## Sources

- **Figma file:** `designjoy.fig` (attached, mounted as a virtual filesystem).
  One page, four captured frames of the live site:
  1. Hero — "Design subscriptions for *everyone*" + the *Join Designjoy* card.
  2. How-it-works — "The way design *should've* been done in the first place" +
     the **Subscribe / Request / Receive** gradient trio + client logos.
  3. Why grid — benefit cards (Design board, Fixed monthly rate, Fast delivery,
     Top-notch quality, Flexible and scalable, Unique and all yours).
  4. CTA / footer — "See if Designjoy is the right fit for you (it totally is)".
- **Live reference:** https://www.designjoy.co
- No codebase was provided; values below are lifted from the Figma capture
  (exact hex, spacing, radii, shadows) and verified against screenshots.

---

## What's in here (index / manifest)

| Path | What it is |
|------|------------|
| `styles.css` | Global entry point — `@import`s only. Consumers link this. |
| `tokens/colors.css` | Neutrals, dark ramp, joy accents, alpha helpers, semantic aliases. |
| `tokens/typography.css` | Figtree scale, weights, tracking, the italic-serif accent role. |
| `tokens/spacing.css` | 8px spacing scale, container, radii. |
| `tokens/effects.css` | Shadows, glossy-black button bevel, the fluid gradient fills, motion. |
| `tokens/fonts.css` | Figtree + Newsreader (italic accent) via Google Fonts. |
| `tokens/base.css` | Base element resets + `.dj-display`, `.dj-accent`, `.dj-logo` helpers. |
| `components/core/` | `Button`, `Badge`, `ServiceTag`. |
| `components/surfaces/` | `Card`, `FeatureCard`. |
| `components/brand/` | `Logo`, `Avatar`. |
| `ui_kits/website/` | Full `designjoy.co` landing-page recreation (interactive). |
| `guidelines/*.card.html` | Foundation specimen cards (Colors / Type / Spacing / Brand). |
| `assets/` | Logo mark, smiley loyalty card, avatar, chrome smile, gradient artwork. |
| `SKILL.md` | Agent-Skill entry point for Claude Code. |

---

## Content fundamentals (voice & copy)

Designjoy's copy is **plain-spoken, breezy and confident** — it sells a premium
service in the friendliest possible terms.

- **Person:** addresses the reader directly as **"you" / "your"** ("request as
  many designs as *you'd* like", "made especially for *you*"). Brand refers to
  itself as **"Designjoy"**, rarely "we".
- **Tone:** warm, reassuring, lightly cheeky. Parentheticals land the joke —
  *"See if Designjoy is the right fit for you **(it totally is)**"*. Reassurance
  is repeated as a mantra: *"Pause or cancel anytime."*
- **Casing:** **sentence case everywhere** — headlines, buttons and labels alike
  ("See pricing", "Book a call", "Start today", "Monthly club"). No ALL-CAPS
  except tiny eyebrow labels ("INCLUDED"). Prices are concrete: **$5,995/month**.
- **Sentence shape:** short, declarative, benefit-first. Feature blurbs are one
  sentence ("No surprises here! Pay the same fixed price each month.").
  Exclamation points appear, but sparingly.
- **One emphasised word per headline** is set in the editorial italic serif —
  *everyone*, *should've* — for a hand-on-heart, human accent against the
  geometric sans.
- **Emoji:** the brand leans on **3D glossy objects** (a smiling face, lock,
  lightning bolt, star, Trello board) as feature icons rather than inline text
  emoji. Treat these as *illustrated* icons, not Unicode in running copy.

**Lexicon:** "Design subscriptions", "Monthly club", "One request at a time",
"Unlimited brands", "Avg. 48 hour delivery", "Senior-level design quality",
"Pause or cancel anytime", "Start today", "Join today", "Book a 15-min intro call".

---

## Visual foundations

**Canvas & mood.** The page sits on a calm **warm pink-grey (`#EDE6E8`)**.
Type is **true black**; supporting copy is a soft taupe **`#99948F`**. Thin
**`#DDCED3`** hairlines divide the layout. Against this restraint, content cards
explode into **saturated, full-bleed fluid gradients** — this contrast *is* the
brand.

**Color.** A vivid accent deck pulled straight from the gradient art:
**orange `#FF5A00`** (primary), **yellow `#FFD817`**, **pink/magenta `#FF0084`**,
**electric blue `#0000FE`**, **spring green `#2BE86B`**. Dark surfaces use a
black→charcoal ramp (`#000` → `#444`). Gradients are *fluid blob* radial blends
(see `--grad-yellow/blue/orange/join`) — never tame two-stop linears.

**Type.** **Figtree** does nearly everything, set in **Medium (500)** for
display and tightly tracked (hero is 82px / 0.95 line-height / −3px). A single
emphasised word per headline switches to an **editorial italic serif**
(*Newsreader* here — see Caveats). Body is Figtree Regular at a calm 1.5.
The **wordmark** is Figtree Black (800) preceded by the smile mark.

**Backgrounds & imagery.** Photoreal **iridescent-foil and fluid-gradient**
textures fill cards; product shots are tilted and stacked with deep shadows.
Imagery is **hyper-saturated and warm-to-electric**, never muted or grainy.
The recurring hero asset is the **"Monthly club" smiley loyalty card**.

**Corner radii.** Buttons & inputs **8px**; the signature card radius is **19px**
(`--radius-lg`); marketing panels go to **28px**; badges/eyebrow chips are full
**pills**.

**Cards.** Large radius, *overflow hidden*, either a white panel with a soft
drop shadow (`--shadow-card`) or a black/gradient surface with an **inner
top-light bevel** (`--gloss-inset-dark`) and a heavy float shadow.

**Buttons.** The signature primary is a **glossy black** pill/rounded button:
a `#444→#000` vertical gradient with a 1px black border, a `0 1px 2px` drop
shadow **and** two inset white glints (top bevel + hairline) — it reads like a
polished physical key. Secondary buttons are **hairline-outlined** on the canvas;
on dark cards the CTA flips to a **solid white** button.

**Shadows.** Soft, large-radius ambient shadows for elevation; the glossy bevel
recipe for buttons; inner glints on dark cards. No hard or coloured drop shadows
except gradient glows behind pricing.

**Motion.** Restrained and smooth — `cubic-bezier(0.22,1,0.36,1)` ease-out,
120–320ms. Hover = subtle lift / slight darken; press = small scale-down. No
bounces, no infinite decorative loops.

**Transparency & blur.** Reserved for **frosted service pills** floating over
gradient art (`backdrop-filter: blur`) and translucent scrims on dark cards.

**Layout.** A centered **1200px** container with **40px** gutters; generous
**60px** section padding and roomy **120px** hero blocks. Three-up card rows are
the workhorse grid.

---

## Iconography

- **Brand mark:** the **smile** ("⌣") — a simple two-dot-and-curve happy face.
  It anchors the wordmark, appears as a standalone app-icon glyph, and recurs as
  3D smiling-face illustrations. Vector lives at `assets/designjoy-smile.svg`
  (`fill: currentColor`, so it inherits text colour when inlined as SVG).
- **Feature icons:** **glossy 3D objects** — a Trello board, padlock, lightning
  bolt, star, pixel grid — rendered as illustrations on gradient tiles, not a
  line-icon set. `assets/feature-icon-a.png` (Trello board) is the one captured
  original; the UI kit substitutes platform emoji as stand-ins (flag/fix below).
- **UI glyphs:** a few thin line icons (phone for "Book a call", arrow "→" in a
  white circle). `assets/icon-phone.svg` is included.
- No icon font or large icon library is present in the source. For additional
  UI glyphs, prefer a **thin, rounded** set (e.g. Lucide) to match the phone/arrow
  weight — flag any such addition.
- **Emoji in running text:** essentially none. Joy is expressed through the 3D
  illustrated icons and colour, not inline emoji.

---

## Caveats & substitutions

- **Editorial italic font is substituted.** The original site's italic accent
  ("*everyone*", "*should've*") is a licensed serif; this system substitutes
  **Newsreader** (Google Fonts) italic as the nearest free match. Swap
  `--font-accent` for the licensed face when available.
- **Webfonts load from Google Fonts** (`tokens/fonts.css` `@import`), not
  self-hosted binaries — no `.woff2` files were provided. Self-host for
  production if offline/perf guarantees are needed.
- **Feature-tile icons** in the website kit use platform **emoji** as stand-ins
  for Designjoy's custom 3D illustrations (only the Trello board was captured).
  Replace with the real renders for fidelity.
- **Client logos** (nectar, Buy me a coffee, beehiiv, Laravel, xfinity) are
  rendered as plain wordmarks — original logo assets were not in the capture.
- Gradient **artwork** images (`assets/grad-*.jpg`) are the real captured fills;
  the `--grad-*` CSS tokens are faithful approximations for when you need a
  resolution-independent fill.
