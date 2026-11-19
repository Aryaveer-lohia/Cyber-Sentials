# PROJECT OVERVIEW: CYBER SENTINELS

**Project Name:** CYBER SENTINELS  
**Tagline:** Your first response against cybercrime.  
**Domain:** Civic-Tech / Cybersecurity Awareness & Grievance Formatting  
**Application Architecture:** Client-side Single Page Application (SPA) served via a lightweight local Python HTTP server.

---

## 1. What Cyber Sentinels Is
**Cyber Sentinels** is a civic-tech public awareness and digital assistance web platform. It is designed to act as an immediate first-response companion for everyday internet users and victims of cyber fraud. 

Instead of adopting clichéd "hacker" visual tropes (matrix backgrounds, dark navy screens, neon green text), Cyber Sentinels utilizes a **warm editorial civic-tech identity** (warm ivory, charcoal, terracotta, and sage) that looks reassuring, authoritative, and accessible to non-technical citizens.

The platform educates users on active online fraud patterns, outlines a 5-step emergency response protocol, provides a rule-based safety inquiry assistant, helps victims organize and format a formal incident complaint draft, tracks critical digital evidence, and directs citizens to authorized statutory reporting portals.

---

## 2. The Problem It Addresses
With the exponential rise of real-time digital payments (UPI) and internet penetration, cyber frauds such as QR code scams, digital arrest impersonation, APK-based screen sharing, and phishing have surged. 

Victims facing these attacks face three distinct problems:
1. **Psychological Panic & Confusion:** Attackers use extreme urgency, impersonate police/agencies, or threaten immediate utility disconnections, causing victims to make rushed decisions.
2. **Ignorance of Critical Deadlines:** Most victims do not know about the "Golden Window" (the first 1–2 hours after financial fraud) where calling **1930** enables banks to freeze suspect accounts before funds are laundered.
3. **Disorganized Reporting:** When victims approach police cyber cells or log into `cybercrime.gov.in`, their statements often miss crucial evidence (UTR numbers, sender phone numbers, timestamps, transaction proofs), leading to delays in case registration.

---

## 3. Main Objectives
* **Public Education:** Provide plain-language breakdowns of common cyber threats with clear warning signs and practical prevention rules.
* **Immediate Emergency Guidance:** Present a clear, sequential 5-step response roadmap starting from disconnecting scammers to freezing bank accounts.
* **Instant Threat Inquiries:** Offer an offline, private, rule-based chatbot that matches user queries with actionable security advice without relying on external paid APIs.
* **Structured Complaint Drafting:** Enable victims to input incident parameters and automatically format a clean, professional grievance document that can be copied or downloaded.
* **Evidence Preparation:** Provide an interactive checklist of required digital artifacts (UTR, SMS, screenshots, chat logs) needed for an investigation.
* **Direct Statutory Access:** Guide users directly to official Government of India helplines (`1930`) and reporting portals (`cybercrime.gov.in`, `sancharsaathi.gov.in`).

---

## 4. Target Users
1. **Everyday Citizens & Online Consumers:** Individuals using UPI, banking apps, online marketplaces (OLX, Facebook Marketplace), and messaging apps who want to verify suspicious messages.
2. **Elderly and Non-Technical Internet Users:** People vulnerable to high-pressure threats like "Digital Arrest" video calls or fake electricity bill disconnection SMS alerts.
3. **Victims of Recent Cybercrime:** Individuals who have recently suffered unauthorized transactions and need an emergency guide and an organized complaint template.
4. **Students & Educators:** Individuals studying practical cyber safety, web development, and digital citizenship.

---

## 5. Important Features
* **Sticky Editorial Navigation:** Clean header with logo, smooth-scrolling section links, and an emergency reporting CTA.
* **Hero Section & Emergency Banner:** Highlighting the national 1930 financial fraud helpline and 2-hour account freezing window with an editorial SVG shield emblem.
* **6 Threat Awareness Dossiers:** In-depth breakdown of:
  1. UPI & QR Code Scams
  2. Digital Arrest Scams
  3. WhatsApp Account Hijacking
  4. Remote Access / Screen Sharing Fraud (AnyDesk, TeamViewer)
  5. Fake Electricity Bill Scams
  6. Phishing & Fake Banking Links
* **5-Step Emergency Response Guide:** Step-by-step guidance prioritizing communication severance, bank alerts, 1930 dialing, cybercrime portal filing, and evidence logging.
* **Rule-Based Cyber Safety Assistant:** Offline chatbot recognizing natural keywords and offering pre-programmed advice with safe text rendering.
* **Grievance Complaint Generator:** Form that compiles user input into an official legal draft, featuring a one-click clipboard copy and `.txt` file export.
* **Interactive 7-Point Evidence Checklist:** Real-time visual progress counter tracking collected investigation proof.
* **Verified Statutory Directory & Emergency Contacts:** Direct links and telephone triggers for official law enforcement portals.

---

## 6. System Limitations
* **Informational Draft Only:** The complaint generator does **not** automatically submit complaints to police or government servers; it creates a structured draft for the user to copy/paste into official portals.
* **No Database or Persistent Storage:** No backend database (MySQL, MongoDB, PostgreSQL) is connected. When the browser tab is refreshed, form entries and checklist states reset.
* **No User Accounts or Authentication:** There is no login, registration, or session management system.
* **Rule-Based Assistant (No AI/NLP Model):** The chatbot matches keywords deterministically. It does not possess machine learning or deep learning natural language models.
* **No Automatic Fund Recovery:** The application cannot retrieve or track stolen funds; it can only direct users to contact banks and dial 1930.
