# Design System: Premium Dark Portfolio Redesign

**Project ID:** 8856632472349626347

## 1. Visual Theme & Atmosphere

The design language is nocturnal, premium, and quietly confident. It feels like a high-end technical portfolio built from deep purple-black surfaces, luminous violet accents, and glass-like panels that float over a dark environmental glow. The mood is refined rather than loud: spacious sections, low visual noise, and precise alignment communicate seniority, control, and engineering mastery.

The interface should feel cinematic and crafted, with generous darkspace around each section. Visual attention is created through restrained radiance: soft violet halos, gradient text, rim-lit cards, and subtle hover motion. The system should avoid flat corporate neutrality; every screen should preserve a sense of depth, atmosphere, and technical polish.

## 2. Color Palette & Roles

- **Obsidian Purple-Black (#0d0d1b):** The deepest foundation color, used for page depth, scrollbar tracks, and the darkest background moments where content needs to feel grounded.
- **Nocturne Surface (#121220):** The primary page background, used as the main dark canvas for long-form portfolio sections.
- **Transparent Aubergine Glass (#1a1430 at 70% opacity):** The core glass-panel surface, used for cards, navigation treatments, and elevated content blocks with backdrop blur.
- **Smoked Violet Container (#1f1e2d):** A muted container shade for skill tiles, form fields, image wells, and secondary blocks that need separation without breaking the dark mood.
- **Soft Lavender Text (#e4e0f5):** The main foreground color for headings and high-priority copy, giving strong readability without harsh pure white.
- **Misty Lavender Copy (#cbc3d7):** The supporting text color for paragraphs, labels, metadata, and footer copy where the hierarchy should feel calm and readable.
- **Luminous Lavender (#d0bcff):** The primary accent, used for active navigation, key numbers, borders, icon color, section labels, and focused interactive states.
- **Electric Violet Container (#a078ff):** The stronger violet used in primary gradients, ambient glows, and high-energy decorative light.
- **Magenta Spark (#fbabff):** The secondary highlight used in luminous text gradients and accent transitions to keep the system from feeling monochrome.
- **Deep Orchid Action (#ae05c6):** The saturated action endpoint used in primary button gradients and vivid call-to-action moments.
- **Glass Rim White (#ffffff at 5-10% opacity):** The subtle border and divider color, used to outline panels, cards, navigation, and footer divisions without creating hard contrast.

## 3. Typography Rules

Headings use **Sora** to create a geometric, architectural voice. Large display text should be bold, tightly tracked, and confident, with generous line-height restraint: major hero titles use approximately 72px, 700 weight, 1.1 line-height, and -0.04em letter spacing on desktop. Section headlines use the same family at roughly 48px or 32px, preserving a strong but controlled hierarchy.

Body text uses **Inter** for clarity and professional neutrality. Paragraphs should sit around 16-18px with a relaxed 1.6 line-height, allowing the dark interface to remain readable and calm. Long copy should be constrained to comfortable line lengths rather than stretching across the full grid.

Labels, chips, navigation accents, buttons, and compact metadata use **JetBrains Mono**. This monospaced layer reinforces the developer identity and should appear in small uppercase labels with wide tracking, especially for section badges, button text, service list items, and technical tags.

Gradient typography is reserved for hero emphasis and key section words. Use the Luminous Lavender to Magenta Spark blend (#d0bcff to #fbabff) sparingly so it remains a premium accent rather than a decorative habit.

## 4. Component Stylings

- **Buttons:** Primary buttons are generously rounded rectangular controls, typically 12px corners, filled with a diagonal Electric Violet to Deep Orchid Action gradient (#a078ff to #ae05c6). They use white text, monospaced labels, subtle shimmer, and a soft violet glow on hover. Secondary buttons are transparent with a 1px Luminous Lavender border (#d0bcff), lavender text, and a faint lavender wash on hover. Footer-level primary actions may become pill-shaped to feel more conversational and prominent.
- **Cards/Containers:** Cards use translucent aubergine glass surfaces with backdrop blur, 1px Glass Rim White borders, and 16px rounded corners. Standard cards feel softly suspended rather than heavily shadowed. On hover, card borders shift toward Brand Violet (#8b5cf6), a low violet glow appears, and the card lifts slightly to communicate responsiveness without breaking the luxury tone.
- **Inputs/Forms:** Inputs sit on Smoked Violet Container backgrounds with quiet white 10% borders and 12px rounded corners. Focus states use Electric Violet borders (#a078ff) with a soft outer ring, approximately 2px and 20% opacity, so forms feel precise and luminous without becoming noisy. Labels stay small, monospaced, and muted.
- **Navigation:** The top navigation is fixed, semi-transparent, and glassy. It uses a blurred Nocturne Surface overlay and a very thin white divider. Active links use Luminous Lavender text with a small underline, while inactive links remain Misty Lavender Copy and brighten on hover.
- **Badges/Section Labels:** Section identifiers are compact pill-shaped capsules with translucent primary fills, thin violet borders, tiny glowing dots, uppercase monospaced text, and wide letter spacing. They act as quiet anchors before large headings.
- **Stats:** Statistic blocks are glass panels with oversized ghost numerals in near-transparent white behind the foreground value. The visible metric number uses Luminous Lavender and large Sora display sizing, while the label uses uppercase JetBrains Mono.
- **Images:** Hero and portfolio imagery should sit inside rounded, dark containers with gradient overlays. Profile imagery may use a fully circular crop and grayscale treatment that reveals color on hover, keeping personality restrained until interaction.

## 5. Layout Principles

The layout uses a spacious desktop canvas with a maximum content width of 1280px, 24px gutters, and a disciplined 8px spacing rhythm. Sections breathe with approximately 120px of vertical padding, creating a premium editorial cadence where each block feels intentional and self-contained.

Desktop compositions should use a 12-column mentality: hero text occupies the larger left span, visual assets sit to the right, and content grids resolve into two, three, or four balanced columns depending on density. Mobile layouts collapse into single-column flows while keeping the same atmosphere, rounded geometry, and darkspace.

Alignment should feel precise and architectural. Large headings anchor sections first, then supporting copy and cards follow with consistent gaps. Dense areas such as services, testimonials, stats, and portfolio cards should rely on grid repetition, soft borders, and luminous hover states rather than extra decoration.

Depth is created through luminous layering rather than heavy shadows. Use backdrop blur from 12px to 20px, translucent surfaces, radial violet glows, and subtle rim borders. Shadows should remain whisper-soft and atmospheric; avoid harsh black drop shadows that would make the interface feel less premium.
