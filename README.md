# Calm Web Accessibility Demo

A lightweight, lightning-fast single-page demo showcasing strict WCAG AA/AAA accessibility standards and specialized UI controls for neurodivergent individuals.

## Features

- **Semantic HTML**: Fully accessible core structure using `<main>`, `<header>`, and `<section>`.
- **Dark/Light Mode**: No flash of incorrect theme, utilizing CSS custom properties and `prefers-color-scheme`.
- **Calm Mode**: Reduces motion and animations for individuals with vestibular disorders or sensory processing sensitivity.
- **Dyslexia-Friendly Font**: Global toggle to switch to OpenDyslexic via jsDelivr for improved readability.
- **Adjustable Font Size**: Proportional scaling up to 200% without breaking layout using `rem` based units everywhere.
- **Strict A11y Standards**: Fully keyboard navigable, high-contrast focus outlines for `:focus-visible`, and ARIA attributes like `aria-pressed` for explicit state announcements.

## Tech Stack

- **Vanilla HTML5**
- **Vanilla CSS3** (CSS Variables, Flexbox, Grid)
- **Vanilla JavaScript** (ES6+)
- **Zero Heavy Frameworks**

## Running Locally

Since this is a vanilla project with no build steps, you can run it using any simple local web server.

1. Clone the repository.
2. Open the project folder in your terminal.
3. Run a local server, for example with Python or Node.js:
   
   **Using Python 3:**
   ```bash
   python -m http.server 8000
   ```
   
   **Using Node.js (npx/serve):**
   ```bash
   npx serve .
   ```

4. Navigate to `http://localhost:8000` (or the port specified by your server) in your web browser.

## Deploying to Vercel

This project includes a `vercel.json` file optimized for static deployments.

1. Install the Vercel CLI if you haven't already:
   ```bash
   npm i -g vercel
   ```

2. Run the deployment command in the project root:
   ```bash
   vercel
   ```

3. Follow the prompts to complete the deployment. For a production release, run:
   ```bash
   vercel --prod
   ```

## Design Decisions
- The "flash of wrong theme" is avoided using a render-blocking inline script inside the `<head>` that reads `localStorage` before the DOM is painted.
- All dimensions and sizing use `rem` relative to the root `<html>` font-size, which enables simple, scalable font-size adjustments that don't break the layout.
