# TSA OBHS Website

A modern, single-page static website for the **Technology Student Association** chapter at **Olentangy Berlin High School (TSA OBHS)**. Built with plain HTML, CSS, and vanilla JavaScript — no build tools required.

Deploy directly to **GitHub Pages** with zero configuration.

---

## File Structure

```
TSA_Chapter_Website/
├── index.html          # Main page (all sections)
├── styles.css          # Styles, animations, responsive layout
├── script.js           # Announcements, scroll effects, mobile menu
├── assets/
│   └── tsa-logo.png    # Official TSA logo (you provide this)
└── README.md           # This file
```

---

## Quick Start (Local Preview)

1. Add your TSA logo to `assets/tsa-logo.png`
2. Open `index.html` in any modern browser, or run a local server:

   ```bash
   # Python 3
   python3 -m http.server 8080

   # Then visit http://localhost:8080
   ```

No install or build step needed.

---

## Adding the TSA Logo

Place your official TSA logo image at:

```
assets/tsa-logo.png
```

It appears in the **navbar**, **hero section**, and **footer**. Recommended size: at least **240×240 px** (square, transparent PNG works best).

---

## Adding New Announcements

Open `script.js` and edit the `announcements` array near the top of the file:

```javascript
const announcements = [
  {
    date: '2026-04-10',           // YYYY-MM-DD format
    title: 'Your Title Here',
    body: 'Short description of the announcement.',
    tag: 'Meeting',               // Meeting | Deadline | Event (or custom)
  },
  // Add more entries above older ones (newest first)
];
```

**Tips:**
- Use `YYYY-MM-DD` for the date — cards show month, day, and year automatically
- Put newest announcements first in the array
- Supported tags with built-in styling: `Meeting`, `Deadline`, `Event`
- Cards animate in with a stagger effect when scrolled into view

---

## Replacing Placeholder Links

Search the project for `PLACEHOLDER` or `data-placeholder="true"` to find everything that still needs a real URL.

| Location | What to update |
|----------|----------------|
| Navbar "Join Our GroupMe" button | Replace `href="#"` with your GroupMe invite link |
| Join Us section button | Same GroupMe link |
| Events section card | Replace `href="#"` with the [official TSA events page](https://tsaweb.org/competition-programs/tsa-high-school-competitive-events) URL |

**Example — GroupMe link:**

```html
<!-- Before -->
<a href="#" class="btn btn--groupme" data-placeholder="true" ...>

<!-- After -->
<a href="https://groupme.com/join_group/YOUR_CODE" class="btn btn--groupme" ...>
```

Remove `data-placeholder="true"` once the link is real.

---

## Filling In "What is TSA" Content

In `index.html`, find:

```html
<!-- PLACEHOLDER: Add "What is TSA" description here -->
```

Replace the placeholder box below it with your chapter's description of TSA.

---

## Customizing Colors

All brand colors live in CSS custom properties at the top of `styles.css`:

```css
:root {
  --tsa-red: #C8102E;
  --tsa-blue: #003DA5;
  --tsa-white: #FFFFFF;
  /* ... */
}
```

Change these values to adjust the entire site theme from one place.

---

## Deploy to GitHub Pages

1. **Create a GitHub repository** (e.g. `tsa-obhs-website`)

2. **Push this folder** to the repo:

   ```bash
   git init
   git add .
   git commit -m "Initial TSA OBHS website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/tsa-obhs-website.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repo → **Settings** → **Pages**
   - Under **Source**, select **Deploy from a branch**
   - Choose branch: `main`, folder: `/ (root)`
   - Click **Save**

4. Your site will be live at:

   ```
   https://YOUR_USERNAME.github.io/tsa-obhs-website/
   ```

> **Note:** If your repo is named `YOUR_USERNAME.github.io`, the site publishes at `https://YOUR_USERNAME.github.io/` instead.

---

## Features

- Sticky navbar that shrinks on scroll
- Active nav link highlighting while scrolling
- Scroll-triggered fade/slide animations (Intersection Observer)
- Animated hero with gradient shift and floating icons
- Mobile-responsive hamburger menu
- Dynamic announcements from a JS array
- TSA brand colors (red, blue, white) via CSS variables
- Accessible markup and reduced-motion support

---

## Browser Support

Works in all modern browsers: Chrome, Firefox, Safari, Edge. Requires JavaScript enabled for announcements and interactive features.

---

© 2026 TSA OBHS — Olentangy Berlin High School Technology Student Association
