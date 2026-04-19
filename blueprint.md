# Blueprint

## Overview

This project is a simple web application that provides a lottery number recommendation service. It is built using modern web standards, including HTML, CSS, and JavaScript, with a focus on creating a visually appealing and user-friendly experience.

## Project Outline

### Style and Design
*   **Layout:** A clean, centered layout that is responsive and works well on both desktop and mobile devices.
*   **Color Palette:** A vibrant color scheme will be used to create an energetic and engaging look and feel.
*   **Typography:** Expressive typography will be used to create a clear visual hierarchy.
*   **Visual Effects:** Subtle animations and drop shadows will be used to add depth and interactivity to the UI.

### Features
*   **Lottery Number Generation:** Users can click a button to generate a set of 6 unique random numbers between 1 and 45.
*   **Web Component:** The lottery number generator will be encapsulated in a Web Component for reusability.

## Current Task

**Request:** "index.html에 로또번호를 추천해주는 코드를 만들어줘" (Create code in index.html to recommend lottery numbers)

**Plan:**

1.  **Modify `index.html`:**
    *   Change the title to "Lotto Number Generator".
    *   Add a `<lotto-generator>` custom element to the body.
2.  **Modify `style.css`:**
    *   Add styles for the overall page layout and theme.
    *   Add specific styles for the `lotto-generator` component.
3.  **Modify `main.js`:**
    *   Create a `LottoGenerator` class that extends `HTMLElement`.
    *   Implement the logic for generating and displaying the lottery numbers within the Web Component.
    *   Define the `lotto-generator` custom element.
