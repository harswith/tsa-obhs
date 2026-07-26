# TSA OBHS Website

A modern, single-page static website for the **Technology Student Association** chapter at **Olentangy Berlin High School (TSA OBHS)**. Built with plain HTML, CSS, and vanilla JavaScript.

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

1. Open `index.html` in any modern browser, or run a local server:

   ```bash
   # Python 3
   python3 -m http.server 8080

   # Then visit http://localhost:8080
   ```

No install or build step needed.

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
