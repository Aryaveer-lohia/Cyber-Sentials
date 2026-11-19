# LIVE DEMO GUIDE: CYBER SENTINELS

Follow this step-by-step demonstration walkthrough during your presentation or viva exam.

---

## 1. Pre-Demo Setup Checklist

1. Open PowerShell or Terminal in the project directory:
   ```powershell
   python server.py
   ```
2. Confirm the server outputs:
   ```
   Cyber Sentinels running at http://localhost:8000
   Press Ctrl+C to stop the server.
   ```
3. Open your browser (Google Chrome, Edge, or Firefox) and navigate to:
   ```
   http://localhost:8000
   ```
4. Set browser zoom to **100%**. Press `F11` if full screen is preferred.
5. Have this document handy or memorized.

---

## 2. Step-by-Step Demonstration Sequence

### Step 1: Navigation & Hero Presentation
* **What to show:**
  - Point out the sticky header, the **CYBER SENTINELS** wordmark, and the animated radar pulse on the **Report Cyber Fraud** button.
  - Highlight the primary headline: *"One wrong click. A lifetime of consequences."*
  - Point to the **Emergency Strip** and emphasize the national **1930 Helpline** and the **2-Hour Golden Window**.
* **What to click:**
  - Click the **"Explore Cyber Threats"** CTA button.
  - *Result:* Smoothly scrolls down to the Modern Attack Vectors section.

---

### Step 2: Cyber Threat Awareness Cards
* **What to show:**
  - Show the 6 editorial threat cards:
    1. *UPI & QR Code Scams*
    2. *Digital Arrest Scams*
    3. *WhatsApp Account Hijacking*
    4. *Remote Access / Screen Sharing*
    5. *Fake Electricity Bill Scams*
    6. *Phishing & Fake Links*
  - Hover over a card to show the subtle elevation animation (`transform: translateY(-4px)`).
  - Highlight the structured visual hierarchy on each card: Threat Summary &rarr; Warning Signs &rarr; Prevention Rule.

---

### Step 3: Emergency Protocol Timeline
* **What to show:**
  - Scroll down to the **Emergency Response Roadmap**.
  - Show the 5 chronological steps, especially Steps 2 and 3 highlighted with terracotta accents:
    - Step 2: Contact Bank Immediately (< 1 Hour)
    - Step 3: Call 1930 for Financial Cyber Fraud
  - Emphasize to the evaluator: *"This section counters panic by giving victims a clear chronological sequence of actions."*

---

### Step 4: Cyber Safety Assistant (Chatbot Demo)
* **What to show:**
  - Explain: *"This is an offline, rule-based awareness assistant with zero external paid API dependencies."*

* **Scenario A: Quick-Prompt Demo**
  - Click the quick chip: **"QR Code Scan Scam"**.
  - *Result:* The query automatically fills into the chat input, posts into the conversation as a user bubble, and the assistant replies:
    > *"QR Code Rule: You NEVER need to scan a QR code or enter your UPI PIN to RECEIVE money..."*

* **Scenario B: Manual Keyword Inquiry**
  - Type the following into the prompt box and click **Send** (or press Enter):
    ```
    Someone on Skype says I am under digital arrest
    ```
  - *Result:* The bot recognizes the keywords `digital arrest` and `skype` and immediately responds:
    > *"Urgent Awareness: There is NO concept or provision of 'Digital Arrest' under Indian Law (BNS or CrPC)..."*

* **Scenario C: Unknown Query Fallback**
  - Type:
    ```
    How do I bake a chocolate cake?
    ```
  - *Result:* The bot gracefully triggers its awareness fallback:
    > *"I am a rule-based awareness assistant. For immediate financial fraud, please dial 1930..."*

* **Key Technical Point for Evaluator:**
  - Point out that message bubbles are inserted using `textContent` to ensure total immunity against Cross-Site Scripting (XSS).

---

### Step 5: Complaint Drafting Tool Demo
* **What to show:**
  - Explain: *"This tool formats chaotic victim narratives into structured grievances ready for official portals."*

* **A. Demonstration of Form Validation:**
  - Leave all fields blank and click **"Generate Structured Complaint Draft"**.
  - *Result:* The browser automatically stops submission and displays a native validation popup over the Complainant Name field (*"Please fill out this field"*).

* **B. Entering Safe Fictional Demo Data:**
  Fill in the form with these sample inputs:
  - **Complainant Full Name:** `Rajesh Sharma`
  - **Incident Category:** Select `UPI / QR Code Fraud`
  - **Date & Time of Incident:** Choose any recent date/time (e.g., today at 10:30 AM)
  - **Amount Lost (INR):** `25000`
  - **Transaction ID / UTR Number:** `429108374619`
  - **Suspect Contact / Identifiers:** `Phone: +91 98765 43210 | UPI: fake-refund@ybl`
  - **Detailed Chronology:**
    ```
    I listed a dining table for sale on OLX. A buyer contacted me agreeing to pay an advance of Rs 25,000. He sent a QR code stating that scanning it would credit the advance to my bank. Upon scanning and authorizing, Rs 25,000 was debited from my account instead. The caller immediately blocked my number.
    ```

* **C. Generating the Draft:**
  - Click **"Generate Structured Complaint Draft"**.
  - *Result:* The preview block instantly renders a formal document divided into:
    1. *Complainant Particulars*
    2. *Incident Specifications*
    3. *Suspect Identifiers*
    4. *Factual Narrative & Chronology*
    5. *Relief / Action Requested*
    6. *Formal Declaration & Disclaimer*

* **D. Copying to Clipboard:**
  - Click the **"Copy Complaint"** button.
  - *Result:* The button changes color and shows `✓ Copied to Clipboard!`. Open Notepad or press `Ctrl + V` anywhere to show the text is copied.

* **E. Downloading as File:**
  - Click the **"Download as .txt"** button.
  - *Result:* The browser downloads `Cyber_Complaint_Draft_<timestamp>.txt`.
  - Open the file to show that it is a properly encoded text document created entirely client-side using JavaScript's `Blob` API.

---

### Step 6: Interactive Evidence Checklist Demo
* **What to show:**
  - Scroll down to the **Critical Evidence Collection Checklist**.
  - Note the initial counter: `Evidence Artifacts Collected: 0 of 7`.
  - Click on the following items:
    1. *Transaction Screenshots*
    2. *UTR / Transaction ID Reference*
    3. *Bank SMS Notifications*
  - *Result:* The counter updates smoothly to **3 of 7** and the selected items turn sage-green with checkmarks.
  - Press the `Tab` key to focus on an item, then press `Enter` or `Space` to demonstrate keyboard accessibility.

---

### Step 7: Official Resources & Footer
* **What to show:**
  - Scroll to the **Official Resources Section**.
  - Point out direct links to `cybercrime.gov.in`, `sancharsaathi.gov.in`, and the direct `tel:1930` helpline link.
  - Show the footer with the civic disclaimer: *"Cyber Sentinels is an independent public educational and awareness initiative. This website is not affiliated with... any government ministry..."*

---

### Step 8: Responsiveness Demo (Mobile View)
* **What to show:**
  - Right-click and choose **Inspect** (or press `Ctrl + Shift + I` / `F12`).
  - Toggle device emulation (`Ctrl + Shift + M`) and select **iPhone 12/14/15** or set width to **375px**.
  - Click the hamburger menu button in the top right to open the mobile drawer navigation.
  - Click any link (e.g., *Draft Complaint*) to show that the drawer closes automatically and smoothly scrolls to the section.
