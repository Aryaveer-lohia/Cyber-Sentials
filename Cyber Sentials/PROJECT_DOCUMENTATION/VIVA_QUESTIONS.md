# VIVA QUESTIONS & ANSWERS: CYBER SENTINELS

This reference contains **45 anticipated viva questions** categorized by topic, complete with straightforward, accurate, and memorable answers.

---

## Category 1: Project Architecture & Basics

### Q1: What is Cyber Sentinels?
**Answer:** Cyber Sentinels is a civic-tech cybersecurity awareness and grievance formatting web application. It guides citizens through cyber threat awareness, emergency response procedures, safety inquiries, and professional complaint drafting.

### Q2: What architecture does this application follow?
**Answer:** It is a client-side Single Page Application (SPA) built using vanilla HTML5, CSS3, and JavaScript, served locally via a lightweight Python standard library HTTP server.

### Q3: Why didn't you build this with React or Angular?
**Answer:** The goal was to build a clean, lightweight, framework-independent project with fast load times, zero third-party dependencies, and direct code inspectability. It demonstrates a solid grasp of core web fundamentals.

### Q4: Does Cyber Sentinels connect to a backend database?
**Answer:** No. It is deliberately designed as a stateless, client-side application. This ensures maximum privacy for victims, as sensitive financial details remain strictly inside the user's browser memory and are never saved to an external database.

### Q5: Can users register accounts or log in?
**Answer:** No. There is no user authentication system. Anyone facing an emergency can use all features immediately without having to create an account.

---

## Category 2: HTML5 & Accessibility

### Q6: What semantic HTML elements did you use and why?
**Answer:** We used `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>`. Semantic tags provide proper structure, assist screen readers for accessibility, and improve SEO compared to generic `<div>` tags.

### Q7: How did you implement form validation in HTML?
**Answer:** We used native HTML5 constraint attributes such as `required`, `type="datetime-local"`, and `type="number"`. The browser automatically checks these constraints before JavaScript generates the complaint draft.

### Q8: What are ARIA attributes, and where are they used in your code?
**Answer:** ARIA (Accessible Rich Internet Applications) attributes help assistive technologies understand page states. We used `role="banner"`, `role="log"`, `role="checkbox"`, `aria-checked` on checklist items, and `aria-expanded` on the mobile menu button.

### Q9: Why do you have `rel="noopener noreferrer"` on external links?
**Answer:** When opening external links with `target="_blank"`, `rel="noopener noreferrer"` prevents the new tab from accessing the opening page's `window.opener` object, guarding against phishing and tab-nabbing vulnerabilities.

### Q10: How do the emergency telephone links work in HTML?
**Answer:** We use the `tel:` URI scheme (e.g., `<a href="tel:1930">`). When clicked on mobile phones, it opens the phone dialer with `1930` pre-filled.

---

## Category 3: CSS3 & Responsive Design

### Q11: What are CSS custom properties (variables) and why did you use them?
**Answer:** CSS custom properties (defined inside `:root`) store reusable values like our color palette (`--bg-warm-ivory`, `--accent-terracotta`) and font families. They allow consistent styling across the entire project and make theme changes easy.

### Q12: Why did you choose an editorial color palette instead of a dark hacker theme?
**Answer:** Most cybersecurity websites use cliché dark navy backgrounds with neon green text. We chose a warm editorial civic-tech palette (warm ivory, charcoal, terracotta, sage) to appear reassuring, authoritative, and accessible to non-technical citizens.

### Q13: What is the difference between CSS Grid and Flexbox in your project?
**Answer:** Flexbox is one-dimensional and was used for components like the navbar, buttons, and timeline items. CSS Grid is two-dimensional and was used for macro-layouts like the 3-column threats grid and the 2-column complaint generator.

### Q14: How does the website adapt to different screen sizes?
**Answer:** We used CSS media queries at breakpoints of `1024px`, `768px`, and `420px`. These adjust the grid columns from three to two and then to a single-column layout on mobile devices.

### Q15: What is `scroll-padding-top` in your stylesheet?
**Answer:** Since our navbar is sticky (`position: sticky`), clicking an anchor link could cause the top of the target section to hide behind the navbar. Setting `scroll-padding-top: 85px` ensures the section title remains fully visible when scrolled to.

---

## Category 4: JavaScript & DOM Manipulation

### Q16: How do you listen for events in JavaScript?
**Answer:** We use the `addEventListener()` method (for example, `button.addEventListener('click', handler)`). This keeps our JavaScript logic clean and decoupled from our HTML structure.

### Q17: What does `event.preventDefault()` do in your complaint form?
**Answer:** By default, submitting an HTML form refreshes the page or submits a GET/POST request. `e.preventDefault()` stops this default browser behavior so our JavaScript can process the inputs locally without reloading.

### Q18: What is the difference between `innerHTML` and `textContent`?
**Answer:** `innerHTML` parses strings as HTML elements and can execute embedded scripts, introducing Cross-Site Scripting (XSS) risks. `textContent` sets raw text without parsing HTML, preventing malicious code injection.

### Q19: Where did you use `textContent` specifically for security?
**Answer:** In the chatbot message function (`appendChatMessage`) and the complaint draft preview block. This ensures that any input entered by the user is treated strictly as plain text.

### Q20: How does the active navigation link highlighter work?
**Answer:** A `scroll` event listener checks the user's vertical scroll position (`window.scrollY`) against the `offsetTop` and `offsetHeight` of each `<section>`. It then adds the `.active` class to the matching navigation link.

---

## Category 5: Chatbot Functionality

### Q21: Does the chatbot use an AI model or Machine Learning?
**Answer:** No. It is a deterministic, rule-based awareness engine. It matches user keywords against a predefined array of known scam categories using JavaScript string operations.

### Q22: How does the keyword matching algorithm work?
**Answer:** The function converts the user's message to lowercase using `.toLowerCase()`. It then iterates through an array of threat objects and uses `.some()` and `.includes()` to check if any keyword exists in the user's query.

### Q23: What happens if the chatbot does not recognize a keyword?
**Answer:** It falls back to a default guidance message that clarifies it is a rule-based awareness tool, reminds the user to call 1930 for emergencies, and lists the topics it can answer.

### Q24: What topics are supported by the chatbot's knowledge base?
**Answer:** 
1. QR Code and scan-to-receive scams
2. Digital Arrest extortion threats
3. WhatsApp account hijacking and OTP theft
4. Remote screen access apps (AnyDesk, TeamViewer)
5. Fake electricity bill disconnection SMS
6. UPI fraud and fake cashbacks
7. Phishing links and malicious URLs

### Q25: Why choose a rule-based assistant over an AI API like OpenAI or Gemini?
**Answer:** A rule-based assistant works completely offline, requires no expensive API keys or subscription fees, operates with zero latency, and provides verified responses without the risk of AI hallucinations.

---

## Category 6: Complaint Generator & File APIs

### Q26: Does the complaint generator submit cases to the government?
**Answer:** No. It is an informational formatting tool. It structures the victim's details into a formal grievance draft so they can copy and paste it into official reporting portals like `cybercrime.gov.in`.

### Q27: How does the "Copy Complaint" button work?
**Answer:** It first tries the modern asynchronous `navigator.clipboard.writeText()` API. If that fails (such as in older browsers or non-secure contexts), it falls back to creating an off-screen `<textarea>` and running `document.execCommand('copy')`.

### Q28: What is a `Blob` in JavaScript and how is it used in your project?
**Answer:** A `Blob` (Binary Large Object) represents raw, immutable data in the browser. In our download button, we pass the text of the complaint draft into `new Blob([text], { type: 'text/plain' })` to create an in-memory text file.

### Q29: What is `URL.createObjectURL()`?
**Answer:** It generates a unique, temporary URL referencing a `Blob` in browser memory (e.g., `blob:http://localhost...`). We assign this URL to a temporary download anchor.

### Q30: Why do you call `URL.revokeObjectURL(url)`?
**Answer:** Once the file is triggered for download, calling `revokeObjectURL` releases the allocated browser memory, preventing memory leaks.

---

## Category 7: Evidence Checklist Logic

### Q31: How does the evidence checklist update its counter?
**Answer:** Each checklist item has a click listener that toggles the `.checked` class. The function then queries `document.querySelectorAll('.checklist-item.checked').length` and updates the text of `#checklistCount`.

### Q32: How did you make the checklist keyboard accessible?
**Answer:** We added `tabindex="0"` to each checklist element in HTML and added a `keydown` listener in JavaScript that checks for `Enter` or `Space` key presses to toggle the item.

### Q33: Why is an evidence checklist important for cybercrime victims?
**Answer:** Police cyber cells and banks require specific digital artifacts (such as bank UTR numbers, raw SMS headers, and uncropped screenshots). The checklist ensures victims collect the right evidence before filing their complaints.

---

## Category 8: Python Server

### Q34: How does `server.py` work?
**Answer:** It uses Python's built-in `http.server` and `socketserver` libraries. It creates an HTTP listener on port 8000 and serves static files from the project directory.

### Q35: What is the purpose of `allow_reuse_address = True` in `server.py`?
**Answer:** Under standard TCP socket behavior, when a server terminates, its port can remain in a `TIME_WAIT` state for several minutes. Setting `allow_reuse_address = True` allows the server to rebind to port 8000 immediately upon restart.

### Q36: Is Python required to view the website?
**Answer:** No. Because the frontend relies entirely on HTML, CSS, and client-side JavaScript, double-clicking `index.html` in any web browser also opens the site. However, running a local HTTP server provides a production-like environment for testing Web APIs.

---

## Category 9: Cybersecurity Domain Knowledge

### Q37: What is the 1930 helpline in India?
**Answer:** 1930 is the national toll-free helpline run by the Indian Cyber Crime Coordination Centre (I4C) under the Ministry of Home Affairs for reporting immediate financial cyber fraud.

### Q38: What is the "Golden Window" in financial cyber fraud?
**Answer:** The Golden Window is the first 1 to 2 hours following an unauthorized transaction. If reported during this window, authorities can alert the concerned bank's nodal officers and freeze the funds in the scammer's beneficiary account before it is withdrawn.

### Q39: What is a "Digital Arrest" scam?
**Answer:** It is a psychological scam where fraudsters pose as police or customs officers over video calls (Skype or WhatsApp) claiming that a parcel containing contraband has been found in the victim's name. They falsely claim the victim is under "digital arrest" and demand money to clear their name.

### Q40: Does "Digital Arrest" exist in Indian law?
**Answer:** No. There is no legal provision for "digital arrest" under the Bharatiya Nyaya Sanhita (BNS) or the Code of Criminal Procedure (CrPC). Law enforcement never conducts video trials or demands money transfers.

### Q41: Why should users never enter their UPI PIN to receive money?
**Answer:** By architecture, entering a UPI PIN is strictly an authorization to debit funds from an account. Receiving funds or cashbacks never requires a PIN.

### Q42: What is the Sanchar Saathi portal?
**Answer:** `sancharsaathi.gov.in` is an official initiative by the Department of Telecommunications that allows citizens to block lost or stolen mobile devices (CEIR) and check mobile connections registered under their identity.

---

## Category 10: Security, Limitations & Future Scope

### Q43: What are the main security limitations of this project?
**Answer:** 
1. It runs on a local HTTP server rather than HTTPS (in production, HTTPS is required for secure transport).
2. It does not possess a backend to verify whether a user's transaction ID (UTR) is genuine.
3. The chatbot's knowledge base is client-side, meaning its rules are visible in `script.js`.

### Q44: How could this project be improved in the future?
**Answer:** 
1. Integrate official public APIs (such as government fraud databases or telecom registries) if made publicly accessible.
2. Add multi-language support (Hindi and regional languages) to increase accessibility for rural citizens.
3. Implement a backend with end-to-end encryption to allow secure PDF generation and dispatch to authorized cyber cells.

### Q45: What was your main personal takeaway from building Cyber Sentinels?
**Answer:** Understanding how to build clean, accessible, and fast web applications using core web standards without relying on heavy frameworks, while applying thoughtful UI/UX and defensive JavaScript coding practices to address a real-world civic problem.
