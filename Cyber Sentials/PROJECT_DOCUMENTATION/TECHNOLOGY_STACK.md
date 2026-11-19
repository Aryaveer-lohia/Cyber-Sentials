# TECHNOLOGY STACK: CYBER SENTINELS

This document details the actual technologies, libraries, and protocols used to build and run **Cyber Sentinels**, along with the architectural justification for each choice.

---

## 1. Technologies Actually Present in the Codebase

```
+------------------------------------------------------------------------+
|                          CYBER SENTINELS                              |
+------------------------------------------------------------------------+
| FRONTEND PRESENTATION LAYER:                                           |
|   - HTML5 (Semantic Structure, ARIA Roles, Form Constraints)          |
|   - CSS3 (CSS Variables, Flexbox, Grid, Media Queries, Keyframes)      |
|   - Google Fonts (Newsreader, Inter, JetBrains Mono)                   |
|                                                                        |
| CLIENT-SIDE APPLICATION LOGIC:                                         |
|   - Pure Vanilla JavaScript (ECMAScript 6+)                           |
|   - DOM Manipulation via textContent (Zero XSS)                       |
|   - Browser Web APIs: Clipboard API, Blob API, URL.createObjectURL    |
|                                                                        |
| LOCAL BACKEND / WEB SERVER LAYER:                                      |
|   - Python 3 `http.server` & `socketserver`                            |
|   - PowerShell Automation Script (`server.ps1`)                        |
+------------------------------------------------------------------------+
```

---

## 2. Detailed Technology Breakdown & Justifications

### A. HTML5 (HyperText Markup Language 5)
* **What it does:** Provides the core semantic backbone and accessible content structure for the single-page application.
* **Why it was used:**
  1. **Semantic Elements:** Utilizes `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` rather than generic `<div>` containers. This improves document accessibility (screen readers) and search engine readability.
  2. **Native Form Constraints:** Fields utilize native HTML5 validation attributes (`required`, `type="datetime-local"`, `type="number"`), eliminating the need for heavy JavaScript validation libraries.
  3. **Accessibility (ARIA):** Includes explicit accessibility attributes such as `role="banner"`, `role="log"`, `role="checkbox"`, `aria-checked`, and `aria-expanded` to ensure compliance with web accessibility standards.

### B. CSS3 (Cascading Style Sheets 3)
* **What it does:** Delivers custom visual presentation, typography, color theming, and responsive layouts.
* **Why it was used:**
  1. **CSS Custom Properties (Variables):** Defined in `:root` (`--bg-warm-ivory`, `--accent-terracotta`, `--text-charcoal`). This maintains a single source of truth for color and typography and allows instant sitewide adjustments.
  2. **Modern Layout Engines (Flexbox & CSS Grid):** 
     - CSS Grid handles multi-column layouts like the 3-column threats grid and the 2-column complaint generator.
     - Flexbox manages fluid alignments inside the navigation bar, timeline cards, and chatbot UI.
  3. **Zero CSS Frameworks:** No Bootstrap, Tailwind, or Bulma. Avoiding heavy frameworks ensures rapid load times, zero build steps, and complete code inspectability during a viva.
  4. **Smooth Responsive Breakpoints:** Media queries at `1024px`, `768px`, and `420px` guarantee layout stability from large desktop monitors down to 375px mobile displays.

### C. Vanilla JavaScript (ECMAScript 6+)
* **What it does:** Powers all interactive behaviors: mobile navigation toggle, rule-based chatbot query processing, real-time complaint draft assembly, one-click clipboard copying, `.txt` file downloading, and evidence checklist counting.
* **Why it was used:**
  1. **No External Framework Overhead:** No React, Angular, Vue, or jQuery. It executes directly in all modern web browsers without node modules, compilers (Babel), or bundlers (Webpack/Vite).
  2. **Defensive DOM Manipulation (`textContent`):** Untrusted user inputs are injected via `.textContent` instead of `.innerHTML`. This prevents Cross-Site Scripting (XSS) vulnerabilities.
  3. **Standard Native Web APIs:**
     - **Clipboard API (`navigator.clipboard`):** Facilitates direct copying of the formatted complaint draft to the system clipboard, backed by an off-screen `document.execCommand('copy')` fallback for non-secure contexts.
     - **Blob API (`new Blob(...)`) & `URL.createObjectURL`:** Converts client-side string memory into a downloadable plaintext (`.txt`) file without communicating with a server.

### D. Google Fonts (External Web Fonts)
* **What it does:** Delivers the project's distinctive editorial civic-tech typographic identity.
* **Fonts included via CDN:**
  1. **Newsreader (Serif):** Applied to major headlines (`h1`, `h2`, `h3`). Conveys the dignity, gravitas, and seriousness of an editorial civic publication.
  2. **Inter (Sans-Serif):** Applied to general body copy, UI buttons, and descriptions. Provides high legibility and readability across screens.
  3. **JetBrains Mono (Monospace):** Applied to case badges, section numbering, technical timestamps, and generated complaint code blocks.

### E. Python 3 Built-in HTTP Server (`server.py`)
* **What it does:** Serves static files (`index.html`, `css/style.css`, `js/script.js`) over `http://localhost:8000`.
* **Why it was used:**
  1. **Standard Library Only:** Uses Python's native `http.server` and `socketserver`. Requires no external pip packages (`pip install flask` or `django` are not required).
  2. **Reliable Static File Hosting:** Serving files through HTTP avoids local file scheme (`file:///`) security restrictions that modern browsers impose on certain web APIs.
  3. **Reusable Port Configuration:** Implements `allow_reuse_address = True` on `socketserver.TCPServer` to ensure the server can be restarted without `Address already in use` socket errors.

### F. PowerShell Script (`server.ps1`)
* **What it does:** Offers a convenient single-click launcher for Windows users that outputs a color-coded status message and boots `python server.py`.

---

## 3. What Was Deliberately Excluded (And Why)
* **No Database (MySQL, MongoDB, Firebase):** Excluded to ensure absolute privacy for victims drafting sensitive financial complaints. No user data leaves the browser.
* **No Third-Party Paid APIs (OpenAI, Gemini API, Claude):** Excluded so the project operates completely free of cost, offline, and without API key rate limits or network dependencies.
* **No Heavy Frontend Frameworks (React, Vue, Angular):** Excluded to ensure clean, readable vanilla code that can be examined line-by-line during a college viva examination.
