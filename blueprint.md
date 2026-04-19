# Project Blueprint: Lotto Number Generator

## Overview
A modern, interactive, and visually appealing Lotto Number Generator built using framework-less web standards (HTML, CSS, JavaScript) and Web Components.

## Features
- **Lotto Number Generation:** Generates 6 unique random numbers from 1 to 45.
- **Animated UI:** Numbers appear with a "pop-in" animation and delay.
- **Color Coding:** Numbers are color-coded based on their value ranges.
- **Responsive Design:** Works perfectly on mobile and desktop.
- **Dark/Light Mode:** Users can toggle between dark and light themes, with preference persistence.
- **Partnership Inquiry Form:** Integrated with Formspree for easy collaboration requests.
- **Modern Aesthetics:** Uses Poppins font, gradients, and soft shadows for a premium feel.

## Technical Implementation
- **Web Components:** The core logic is encapsulated within a `<lotto-generator>` custom element.
- **CSS Variables:** Used for theming and consistent styling across the app and Shadow DOM.
- **Persistence:** Theme preference is saved in `localStorage`.
- **Vanilla JS:** No external frameworks used for core logic.

## Design Details
- **Fonts:** Poppins (700 for headlines, 400 for body).
- **Themes:**
    - **Light:** Bright backgrounds with vibrant gradients.
    - **Dark:** Deep charcoal and navy tones with adapted shadows.
- **Interactivity:** Theme toggle button fixed at the top-right corner.
- **Shadows:** Multi-layered shadows for depth.

## Future Roadmap
- History of generated numbers.
- Statistics on "hot" numbers.
- Integration with Firebase for sharing lucky numbers.
