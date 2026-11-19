# CODE EXPLANATION: CYBER SENTINELS

This guide provides a module-by-module breakdown of the actual source code of **Cyber Sentinels**, written in simple, clear language with viva speaking scripts.

---

## 1. Project Directory Structure

```
Cyber Sentials/
│
├── index.html                  # Semantic single-page HTML layout
├── server.py                   # Local Python HTTP server (built-in standard library)
├── server.ps1                  # Quick PowerShell launch script
│
├── css/
│   └── style.css               # Editorial civic-tech styling and responsive queries
│
├── js/
│   └── script.js               # Client-side logic (Chatbot, Generator, Checklist)
│
└── PROJECT_DOCUMENTATION/      # Complete viva and technical documentation suite
```

---

## 2. HTML Architecture (`index.html`)

### A. Semantic Structure
`index.html` organizes content into logical sections matching the user's journey:
* `<header class="navbar">`: Sticky navigation bar with wordmark, links, and emergency CTA.
* `<section id="home" class="hero">`: Core problem statement and 1930 emergency banner.
* `<section id="threats">`: 6 structured threat analysis cards.
* `<section id="response">`: 5 chronological emergency response steps.
* `<section id="assistant">`: Interactive rule-based inquiry chatbot.
* `<section id="complaint">`: Form input fields and real-time grievance preview.
* `<section id="checklist">`: 7-point interactive evidence checklist.
* `<section id="resources">`: Directory of verified statutory portals.
* `<footer class="site-footer">`: Legal disclaimer, 24/7 emergency numbers, and navigation.

### B. Form Validation Constraints
**Relevant Code Snippet (`index.html` Lines ~517–562):**
```html
<form id="complaintForm" action="#" onsubmit="return false;">
  <input type="text" id="compName" class="form-control" placeholder="e.g. Rajesh Kumar" required>
  <select id="compCategory" class="form-control" required>...</select>
  <input type="datetime-local" id="compDate" class="form-control" required>
  <textarea id="compDescription" class="form-control" placeholder="..." required></textarea>
  <button type="submit" class="btn btn-primary">Generate Structured Complaint Draft</button>
</form>
```
* **What it does:** Uses standard HTML5 form attributes like `required` and `type="datetime-local"`. It stops submission if required inputs are empty.
* **Viva Script:**
  > *"Instead of writing bulky JavaScript validation libraries, I utilized native HTML5 form constraints like `required` and specific input types. When the user clicks generate, the browser's internal engine validates the fields automatically before triggering our JavaScript event listener."*

---

## 3. CSS Architecture & Responsive Styling (`css/style.css`)

### A. CSS Custom Properties (Design Tokens)
**Relevant Code Snippet (`css/style.css` Lines 14–37):**
```css
:root {
  --bg-warm-ivory: #F5F1E8;
  --bg-card: #FFFEFA;
  --text-charcoal: #252722;
  --text-muted: #595B54;
  --accent-terracotta: #C65D3A;
  --accent-sage: #87927A;
  --border-subtle: #DFDACF;
  --font-serif: 'Newsreader', Georgia, serif;
  --font-sans: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```
* **What it does:** Declares central color and font variables in the `:root` pseudo-class.
* **Viva Script:**
  > *"I used CSS custom properties in the `:root` selector to establish a design system. This allows us to maintain consistent branding—such as our warm ivory background and terracotta accent—throughout the stylesheet without hardcoding hex codes repeatedly."*

### B. CSS Grid & Responsive Layouts
**Relevant Code Snippet (`css/style.css`):**
```css
.threats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

@media (max-width: 1024px) {
  .threats-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .threats-grid { grid-template-columns: 1fr; }
}
```
* **What it does:** Creates an adaptive 3-column layout on desktops that gracefully collapses to 2 columns on tablets, and 1 column on mobile phones.
* **Viva Script:**
  > *"For page layout, I used CSS Grid with fractional units. Through media queries at 1024px and 768px, the layout adapts fluidly from a 3-column desktop view down to a stacked single-column view on mobile screens."*

---

## 4. JavaScript Logic & DOM Manipulation (`js/script.js`)

### A. Mobile Navigation Menu Toggle
**Relevant Code Snippet (`js/script.js` Lines 18–36):**
```javascript
const mobileToggleBtn = document.getElementById('mobileMenuToggle');
const navLinksContainer = document.getElementById('navLinks');

if (mobileToggleBtn && navLinksContainer) {
  mobileToggleBtn.addEventListener('click', () => {
    const isExpanded = mobileToggleBtn.getAttribute('aria-expanded') === 'true';
    mobileToggleBtn.setAttribute('aria-expanded', !isExpanded);
    navLinksContainer.classList.toggle('is-open');
  });

  const links = navLinksContainer.querySelectorAll('.nav-link');
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinksContainer.classList.remove('is-open');
      mobileToggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}
```
* **What it does:** Toggles the CSS class `.is-open` on the navigation menu when the mobile hamburger button is clicked, updates the ARIA state for screen readers, and automatically closes the menu once a user taps a destination link.
* **Viva Script:**
  > *"This function manages the mobile drawer navigation. It listens for a click event, toggles the `.is-open` class, and manages the `aria-expanded` attribute for accessibility. It also closes the menu when a link is tapped."*

---

### B. Rule-Based Chatbot Keyword Matching
**Relevant Code Snippet (`js/script.js` Lines 54–130):**
```javascript
const knowledgeBase = [
  {
    keywords: ['qr', 'qr code', 'scan to receive', 'scan code'],
    title: 'QR Code Scam Alert',
    response: 'QR Code Rule: You NEVER need to scan a QR code or enter your UPI PIN to RECEIVE money...'
  },
  // Additional threat objects: digital arrest, whatsapp, anydesk, electricity, upi, phishing
];

function evaluateRuleBasedResponse(userQuery) {
  const query = userQuery.toLowerCase();
  for (const entry of knowledgeBase) {
    const match = entry.keywords.some(keyword => query.includes(keyword));
    if (match) {
      return entry.response;
    }
  }
  return "I am a rule-based awareness assistant. For immediate financial fraud, please dial 1930 immediately...";
}
```
* **What it does:** Converts the user's input string to lowercase and iterates over an array of rule objects using `Array.prototype.some()`. If any keyword matches a substring of the input, the verified response is returned. If no match is found, an awareness fallback is triggered.
* **Viva Script:**
  > *"The safety assistant is a deterministic, rule-based algorithm. It compares the user's query against keyword arrays defined in a local knowledge base. It does not use an external AI API or machine learning model, ensuring that responses are 100% predictable, safe, and available offline."*

---

### C. Safe DOM Manipulation via `textContent`
**Relevant Code Snippet (`js/script.js` Lines 92–106):**
```javascript
function appendChatMessage(text, sender = 'bot') {
  if (!chatMessagesBox) return;

  const bubble = document.createElement('div');
  bubble.classList.add('chat-bubble', sender);
  bubble.textContent = text; // Safe text node insertion strictly preventing XSS

  chatMessagesBox.appendChild(bubble);
  chatMessagesBox.scrollTo({
    top: chatMessagesBox.scrollHeight,
    behavior: 'smooth'
  });
}
```
* **What it does:** Creates a message bubble `div` and populates it using `.textContent`.
* **Viva Script:**
  > *"From a security standpoint, we strictly use `.textContent` instead of `.innerHTML` when handling user input. The `.textContent` property treats all inputs as plain strings rather than executable HTML or scripts, completely preventing Cross-Site Scripting (XSS) attacks."*

---

### D. Structured Complaint Draft Generation
**Relevant Code Snippet (`js/script.js` Lines 225–295):**
```javascript
complaintForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!complaintForm.checkValidity()) {
    complaintForm.reportValidity();
    return;
  }

  const fullName = (document.getElementById('compName').value || '').trim() || 'Not Provided';
  const category = (document.getElementById('compCategory').value || '').trim();
  const incidentDate = (document.getElementById('compDate').value || '').trim();
  const amountLost = (document.getElementById('compAmount').value || '').trim();
  const transactionId = (document.getElementById('compTxnId').value || '').trim();
  const suspectInfo = (document.getElementById('compSuspect').value || '').trim();
  const description = (document.getElementById('compDescription').value || '').trim();

  const generatedDraft = `...FORMAL CYBER INCIDENT COMPLAINT DRAFT...`;
  complaintDraftPreview.textContent = generatedDraft;
});
```
* **What it does:** Extracts form values, applies fallback defaults if optional fields are empty, constructs a formal multi-section text document using ES6 template literals, and displays it in the read-only preview block.
* **Viva Script:**
  > *"When the complaint form is submitted, we intercept the event with `e.preventDefault()`. We extract the validated inputs and interpolate them into a formal legal template using JavaScript template literals, outputting the result directly to the preview box."*

---

### E. Clipboard API Functionality with Legacy Fallback
**Relevant Code Snippet (`js/script.js` Lines 312–356):**
```javascript
copyDraftBtn.addEventListener('click', async () => {
  const textToCopy = complaintDraftPreview.textContent;
  if (!textToCopy) return;

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(textToCopy);
      setCopiedUI();
    } else {
      throw new Error('Clipboard API unavailable');
    }
  } catch (err) {
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    setCopiedUI();
  }
});
```
* **What it does:** Attempts to use the modern asynchronous `navigator.clipboard.writeText()` method. If the browser blocks this or runs in an insecure context, it creates a temporary hidden `<textarea>`, selects its text, and runs `document.execCommand('copy')`.
* **Viva Script:**
  > *"For clipboard copying, we implement progressive enhancement. We first try the modern asynchronous `navigator.clipboard.writeText` API. If that fails or is unsupported, our `catch` block falls back to a hidden textarea element using `document.execCommand('copy')`."*

---

### F. File Download via Blob API & Object URLs
**Relevant Code Snippet (`js/script.js` Lines 359–371):**
```javascript
downloadDraftBtn.addEventListener('click', () => {
  const text = complaintDraftPreview.textContent;
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `Cyber_Complaint_Draft_${Date.now()}.txt`;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
});
```
* **What it does:** 
  1. Creates an in-memory binary large object (`Blob`) with MIME type `text/plain`.
  2. Generates an ephemeral memory address using `URL.createObjectURL(blob)`.
  3. Programmatically creates a hidden `<a>` anchor with a `download` attribute and triggers `.click()`.
  4. Calls `URL.revokeObjectURL(url)` to free up browser memory.
* **Viva Script:**
  > *"To download the complaint as a file without a server, we use the browser's Blob API. We encapsulate the draft text into a `text/plain` Blob, create an object URL, attach it to a temporary anchor tag with a download attribute, click it programmatically, and then release the allocated memory with `URL.revokeObjectURL`."*

---

### G. Evidence Checklist Interactive Counter
**Relevant Code Snippet (`js/script.js` Lines 153–177):**
```javascript
const checklistItems = document.querySelectorAll('.checklist-item');
const checklistCountSpan = document.getElementById('checklistCount');

function updateChecklistCounter() {
  if (!checklistCountSpan) return;
  const checkedCount = document.querySelectorAll('.checklist-item.checked').length;
  checklistCountSpan.textContent = checkedCount;
}

checklistItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('checked');
    const isChecked = item.classList.contains('checked');
    item.setAttribute('aria-checked', isChecked);
    updateChecklistCounter();
  });
});
```
* **What it does:** Adds a click listener to all checklist items that toggles the `.checked` class and queries the DOM with `querySelectorAll('.checklist-item.checked').length` to update the counter badge in real time.
* **Viva Script:**
  > *"For the evidence checklist, we attach click and keydown listeners to each item. When an item is toggled, we count how many items possess the `.checked` class and update the counter span dynamically."*

---

## 5. Python Server (`server.py`)

**Relevant Code Snippet (`server.py`):**
```python
import http.server
import socketserver
import os

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

class ReusableTCPServer(socketserver.TCPServer):
    allow_reuse_address = True

if __name__ == "__main__":
    with ReusableTCPServer(("", PORT), Handler) as httpd:
        print(f"Cyber Sentinels running at http://localhost:{PORT}")
        httpd.serve_forever()
```
* **What it does:** Creates an HTTP server on port 8000 using Python's standard library. `allow_reuse_address = True` prevents "address in use" socket errors if the server is restarted quickly.
* **Viva Script:**
  > *"Our server script is built entirely on Python's built-in `http.server` and `socketserver` modules. It serves our project directory over port 8000. We subclassed `socketserver.TCPServer` with `allow_reuse_address = True` so the port unbinds cleanly when stopped."*
