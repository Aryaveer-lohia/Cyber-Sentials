# 5-MINUTE PRESENTATION SCRIPT: CYBER SENTINELS

**Speaker Role:** Lead Developer & Presenter  
**Total Estimated Time:** 4 minutes 45 seconds – 5 minutes  
**Tone:** Confident, articulate, professional, and clear.

---

## Slide / Screen 1: Introduction & Problem Statement (0:00 – 1:00)

**[Action: Display the Hero Section on screen at `http://localhost:8000` with the navbar and editorial shield illustration visible.]**

> *"Respected evaluators and professors, good morning.*
>
> *Today, I am pleased to present **CYBER SENTINELS** — an editorial civic-tech platform designed as a citizen’s first response against cybercrime.*
>
> *In recent years, digital financial penetration through UPI and mobile banking has grown exponentially across India. However, this growth has been accompanied by a sharp surge in cyber fraud — ranging from QR code scams and WhatsApp hijackings to high-pressure 'Digital Arrest' extortion calls.*
>
> *When ordinary citizens encounter these threats, they often face three major hurdles:*
> 1. *They panic and do not know what immediate steps to take.*
> 2. *They are unaware of the critical 'Golden Window' — the first one to two hours where calling national helpline **1930** can freeze stolen funds before they are withdrawn.*
> 3. *When attempting to file complaints, their narratives are disorganized, missing essential identifiers like UTR numbers, timestamps, and suspect phone logs.*
>
> *Cyber Sentinels was built to solve these exact problems."*

---

## Slide / Screen 2: Objectives & Design Direction (1:00 – 1:45)

> *"Our primary objective is to provide a calm, authoritative, and actionable guide for citizens.*
>
> *Instead of relying on the typical 'hacker' aesthetic — such as dark backgrounds, neon green text, and matrix animations — we developed a **warm editorial civic-tech visual identity**.*
>
> *We paired an accessible warm ivory background with rich charcoal text, terracotta accents, and sage borders, combining elegant serif headings with clean sans-serif body typography. This ensures the platform feels like a trustworthy public resource rather than an intimidating tech dashboard.*
>
> *Technically, the website is built entirely on vanilla **HTML5, CSS3, and ECMAScript 6+ JavaScript**, served locally using a lightweight Python HTTP server without external paid libraries, heavy frameworks, or unnecessary dependencies."*

---

## Slide / Screen 3: Live Demonstration of Features (1:45 – 3:30)

**[Action: Scroll down smoothly to the Threat Awareness section.]**

> *"Let us walk through the working features of the application.*
>
> *First, we have our **Threat Awareness Section**. Here, we break down the 6 most common attack vectors, including UPI scams, Digital Arrests, and remote screen-sharing fraud. Each card details the attack mechanism, specific warning signs, and a memorable golden prevention rule.*

**[Action: Scroll to the Emergency Response Guide.]**

> *Next is our **Emergency Response Protocol**. This provides an easy-to-follow 5-step roadmap prioritizing communication severance, immediate bank contact, calling helpline 1930 within the golden window, filing on `cybercrime.gov.in`, and preserving evidentiary records.*

**[Action: Scroll to the Cyber Safety Assistant. Click on the 'QR Code Scan Scam' quick chip.]**

> *Here we have the **Cyber Safety Assistant**. This is an offline, rule-based chatbot designed to provide immediate safety guidance without needing expensive or privacy-invasive third-party AI APIs.*
>
> *When I click a chip or ask about someone asking to scan a QR code to receive money, the assistant immediately clarifies that a UPI PIN is only entered to send money, never to receive it.*
>
> *Importantly, from a security standpoint, user inputs are rendered strictly using JavaScript's `.textContent` property, ensuring the chat interface is completely immune to Cross-Site Scripting (XSS) injection.*

**[Action: Scroll down to the Complaint Drafting Tool. Fill in the sample details or demonstrate validation.]**

> *Now, let’s look at the **Grievance Drafting Tool**.*
>
> *When a victim approaches authorities, presenting disorganized information causes delays. Our tool accepts basic incident parameters: complainant name, incident type, date, amount, transaction UTR, suspect contact, and narrative.*
>
> *Notice that if I leave required fields empty, native HTML5 validation prompts me to complete them.*
>
> *Upon submission, our JavaScript formats this into a professional legal grievance draft ready for submission to `cybercrime.gov.in`.*
>
> *With our **Copy Complaint** button, the text is copied to the system clipboard using the asynchronous Clipboard API. And with the **Download as .txt** button, we use the browser's Blob API to generate and download a plain text file instantly on the client side without needing any server processing.*

**[Action: Scroll to the Evidence Checklist and click 3 items.]**

> *Finally, our **Interactive Evidence Checklist** allows victims to verify that they have gathered all necessary artifacts — such as bank SMS alerts, UTR numbers, and screenshots. As I select items, the progress indicator updates dynamically in real time."*

---

## Slide / Screen 4: Limitations & Future Scope (3:30 – 4:30)

> *"To maintain complete transparency, let me highlight the intentional architectural scope and limitations of the project:*
>
> 1. *First, the complaint generator is strictly an informational drafting aid. It does **not** automatically file cases with police servers, ensuring that no sensitive user data is stored without explicit authorization.*
> 2. *Second, there is no external database or user login system. This ensures that user data remains private within the browser session.*
> 3. *Third, the chatbot is rule-based rather than a deep learning language model, ensuring deterministic, predictable, and offline availability.*
>
> *In the future, this project can be expanded by:*
> * Integrating multi-lingual localization in regional Indian languages.
> * Connecting with public APIs from platforms like Sanchar Saathi for direct IMEI/number verification.
> * Adding client-side cryptographic hashing to verify the integrity of uploaded evidence screenshots."*

---

## Slide / Screen 5: Conclusion & Q&A (4:30 – 5:00)

> *"In conclusion, **Cyber Sentinels** bridges the critical gap between experiencing a cyber threat and taking organized, effective action. It combines an accessible civic-tech design with secure, lightweight, and framework-free engineering.*
>
> *Thank you very much for your time and attention. I am now open to your questions."*
