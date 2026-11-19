/**
 * ==========================================================================
 * CYBER SENTINELS - MAIN JAVASCRIPT LOGIC
 * Features:
 *  1. Mobile Navigation Menu Toggle
 *  2. Comprehensive Rule-Based Cyber Safety Assistant (24 Threat Categories)
 *  3. Interactive Evidence Checklist (Fixed Unchecked State & Dynamic Counter)
 *  4. Professional Cyber Complaint Draft Generator (Balanced & Aligned)
 *  5. Smooth scrolling & active nav state tracking
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  /* -------------------------------------------------------------------------
   * 1. MOBILE NAVIGATION TOGGLE
   * ------------------------------------------------------------------------- */
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

  /* -------------------------------------------------------------------------
   * 2. COMPREHENSIVE RULE-BASED CYBER SAFETY ASSISTANT
   * 
   * Architecture Notice for Examiners:
   * This is a 100% client-side, deterministic, rule-based awareness engine.
   * It does not use any paid machine learning API or LLM.
   * All responses are pre-verified, secure, and offline.
   * All user messages are rendered safely using .textContent to prevent XSS.
   * ------------------------------------------------------------------------- */
  const chatMessagesBox = document.getElementById('chatMessages');
  const chatForm = document.getElementById('chatForm');
  const chatInput = document.getElementById('chatInput');
  const quickPromptChips = document.querySelectorAll('.prompt-chip');

  // Expanded Knowledge Base: 24 Specialized Cyber Threat Categories
  const knowledgeBase = [
    // 1. UPI Fraud
    {
      keywords: ['upi', 'google pay', 'gpay', 'phonepe', 'paytm', 'bhim', 'upi pin', 'upi fraud', 'upi refund', 'cashback', 'lottery prize'],
      title: 'UPI Payment Fraud',
      response: `[UPI FRAUD ALERT]
1. What it is: Deceptive schemes that trick you into authorizing outward bank transfers via UPI apps.
2. How it works: Scammers send fake payment links, cashback requests, or reverse collect requests claiming you will receive money.
3. Warning signs: Any request asking you to enter your 4-digit or 6-digit secret UPI PIN to "receive" cashbacks, rewards, or refunds.
4. Immediate action: Instantly freeze your UPI and net banking via your mobile banking app. Call helpline 1930 within the 2-hour golden window.
5. Prevention rule: Your UPI PIN is strictly used to DEDUCT money. Receiving funds never requires entering a PIN.`
    },

    // 2. QR Code Scams
    {
      keywords: ['qr', 'qr code', 'scan qr', 'scan to receive', 'barcode scan', 'qr scanner', 'olx qr'],
      title: 'QR Code Scam',
      response: `[QR CODE SCAM ALERT]
1. What it is: A payment trick where buyers on marketplaces send QR codes claiming you must scan them to receive an advance.
2. How it works: The QR code contains a hidden debit instruction. Scanning it and entering your PIN transfers funds to the scammer.
3. Warning signs: Buyer claiming they can only pay via QR code due to "business account limitations".
4. Immediate action: Do not scan further codes. Alert your bank immediately to block outgoing transactions and call 1930.
5. Prevention rule: You NEVER need to scan a QR code to receive money. Scanning is solely an authorization to PAY.`
    },

    // 3. Fake Customer Care Numbers
    {
      keywords: ['customer care', 'fake helpline', 'google search number', 'courier number', 'airline support', 'swiggy support', 'zomato support'],
      title: 'Fake Customer Care Numbers',
      response: `[FAKE CUSTOMER CARE FRAUD]
1. What it is: Fraudsters manipulate Google Search and Google Maps listings with their personal phone numbers posing as official customer service.
2. How it works: When you call for a refund or order issue, they ask you to install remote access apps or send ₹2 verification payments.
3. Warning signs: Customer care answering from a personal 10-digit mobile number, or asking you to download an app.
4. Immediate action: Hang up immediately. Contact the official corporate entity solely via their verified in-app help portal.
5. Prevention rule: Never search for customer care phone numbers on Google or social media. Use official app support tickets.`
    },

    // 4. Digital Arrest Scams
    {
      keywords: ['digital arrest', 'arrest on video', 'skype arrest', 'whatsapp arrest', 'virtual arrest', 'police video call'],
      title: 'Digital Arrest Threat',
      response: `[DIGITAL ARREST EXTORTION]
1. What it is: An intimidation racket where callers impersonate senior police officers, CBI, ED, or Customs over video calls.
2. How it works: They falsely claim your Aadhaar or phone was involved in money laundering or narcotics, threatening instant arrest unless funds are sent to an "escrow account".
3. Warning signs: Forged police uniforms, fake Supreme Court seals, Skype calls, and demands for total secrecy.
4. Immediate action: Disconnect the call immediately. Do not transfer a single rupee. Report on cybercrime.gov.in.
5. Prevention rule: "Digital Arrest" does not exist under Indian law (BNS / CrPC). Police never conduct inquiries or trials via video calls.`
    },

    // 5. Fake Police, CBI, ED & Customs Calls
    {
      keywords: ['cbi', 'police', 'customs', 'narcotics', 'fedex parcel', 'courier illegal', 'ed officer', 'trai disconnection'],
      title: 'Law Enforcement Impersonation',
      response: `[AGENCY IMPERSONATION ALERT]
1. What it is: Fraudulent calls alleging that a parcel sent to Taiwan or Cambodia in your name contained contraband, fake passports, or drugs.
2. How it works: Callers intimidate you with legal action and connect you to fake "cyber police stations" to extort settlements.
3. Warning signs: Threat of immediate arrest, demands to verify bank balances, and pressure not to inform family members.
4. Immediate action: Disconnect. Genuine law enforcement issues formal physical summons under Section 41A CrPC / BNSS.
5. Prevention rule: Never share your Aadhaar or financial holdings with unsolicited callers claiming to represent government agencies.`
    },

    // 6. WhatsApp Account Takeover
    {
      keywords: ['whatsapp', 'whatsapp hack', 'whatsapp takeover', 'whatsapp otp', 'whatsapp code', 'forward code whatsapp'],
      title: 'WhatsApp Account Hijacking',
      response: `[WHATSAPP TAKEOVER ALERT]
1. What it is: Attackers trick you into surrendering the 6-digit registration code needed to log into your WhatsApp account.
2. How it works: A contact or friend's hacked profile messages saying: "I accidentally sent my OTP to your phone, please forward it."
3. Warning signs: Sudden messages asking for 6-digit SMS verification numbers or sudden logouts from WhatsApp.
4. Immediate action: Re-register your phone number on WhatsApp immediately to reclaim your session and alert your contacts.
5. Prevention rule: Enable Two-Step Verification right now: WhatsApp > Settings > Account > Two-Step Verification > Enable PIN.`
    },

    // 7. OTP Theft
    {
      keywords: ['otp', 'one time password', 'share otp', 'otp forward', 'sms verification code', 'banking otp'],
      title: 'OTP Theft & Interception',
      response: `[OTP THEFT SECURITY NOTICE]
1. What it is: Social engineering attacks aimed at obtaining the One-Time Password needed to authorize banking or login actions.
2. How it works: Callers pose as bank staff, delivery executives, or telecom agents asking for the code to "complete delivery" or "verify account".
3. Warning signs: Any caller or text asking you to verbally state or forward a numerical OTP received on your phone.
4. Immediate action: If an OTP was shared, immediately contact your bank to freeze net banking and call helpline 1930.
5. Prevention rule: An OTP is a confidential digital key. Genuine banking and support staff are strictly prohibited from asking for OTPs.`
    },

    // 8. SIM Swap Fraud
    {
      keywords: ['sim swap', 'no service', 'sim blocked', 'esim fraud', 'sim upgrade', 'duplicate sim'],
      title: 'SIM Swap & Telecom Interception',
      response: `[SIM SWAP FRAUD ALERT]
1. What it is: Criminals obtain a duplicate SIM card of your mobile number from telecom providers using leaked identity documents.
2. How it works: Once the duplicate SIM activates, your genuine card loses network while the criminal receives all your banking OTPs.
3. Warning signs: Sudden, prolonged "No Service" status in areas with known coverage, often preceded by repeated nuisance calls.
4. Immediate action: Contact your mobile operator immediately from another phone to block the duplicate SIM. Alert your bank to freeze accounts.
5. Prevention rule: Use sancharsaathi.gov.in (TAFCOP) to monitor all mobile numbers registered under your identity.`
    },

    // 9. Phishing & Malicious Links
    {
      keywords: ['phishing', 'fake link', 'suspicious link', 'malicious link', 'shorturl', 'bitly link', 'tinyurl', 'fake website'],
      title: 'Phishing & Credential Theft',
      response: `[PHISHING URL ALERT]
1. What it is: Cloned websites mimicking legitimate banks, tax portals, or courier services designed to harvest usernames and passwords.
2. How it works: Deceptive SMS/emails contain links directing you to a forged page that captures your credentials and OTPs in real time.
3. Warning signs: Mismatched domain names (e.g. sbi-kyc-update.xyz), spelling errors, and urgency-driven SMS text.
4. Immediate action: Do not input data. If you entered passwords, change them immediately on the genuine website from a secure device.
5. Prevention rule: Inspect URLs closely. Official Government of India portals end strictly in ".gov.in" or ".nic.in".`
    },

    // 10. Fake KYC Updates
    {
      keywords: ['kyc', 'pan update', 'aadhaar kyc', 'bank kyc', 'account suspended kyc', 'kyc expired'],
      title: 'Fake KYC Update Scam',
      response: `[FAKE KYC ALERT]
1. What it is: Messages claiming your bank account, credit card, or wallet is suspended due to pending or expired KYC documents.
2. How it works: The SMS directs you to an unverified link or provides an unverified phone number to "update PAN/Aadhaar".
3. Warning signs: Messages sent from personal 10-digit mobile numbers rather than official bank SMS headers (e.g., AD-HDFCBK).
4. Immediate action: Delete the SMS. Do not click links. Verify your KYC status directly by logging into your bank's official app.
5. Prevention rule: Banks never freeze accounts without written notice and never perform KYC via random SMS links.`
    },

    // 11. Electricity Bill Scams
    {
      keywords: ['electricity', 'power bill', 'light bill', 'bijli', 'power disconnection', 'electricity officer', 'bill overdue'],
      title: 'Fake Electricity Disconnection Scam',
      response: `[ELECTRICITY BILL SCAM]
1. What it is: Urgent SMS threats claiming your home electricity will be disconnected tonight at 9:30 PM due to an unpaid bill.
2. How it works: The text instructs you to call a personal phone number or install a mobile app (APK) to settle overdue dues.
3. Warning signs: Sent from personal mobile numbers, extreme deadline pressure, and asking for APK app downloads.
4. Immediate action: Do not call the number. Check your genuine electricity bill status via authorized utility portals or official apps.
5. Prevention rule: Power utility boards never instruct consumers to settle bills by calling personal mobile numbers.`
    },

    // 12. AnyDesk / TeamViewer / Remote Access Scams
    {
      keywords: ['anydesk', 'teamviewer', 'rustdesk', 'quicksupport', 'screen share', 'remote access', 'zoho assist', 'remote control'],
      title: 'Remote Access Tool Abuse',
      response: `[REMOTE SCREEN SHARING WARNING]
1. What it is: Fraudsters instructing you to install remote support applications to gain complete view and control of your device.
2. How it works: Once installed, they ask for a 9-digit code, view your screen, watch you type banking passwords, and intercept OTPs.
3. Warning signs: Any customer care, courier, or bank caller asking you to download AnyDesk, TeamViewer, or QuickSupport.
4. Immediate action: Disconnect Wi-Fi/mobile data immediately. Uninstall the app. Contact your bank to freeze net banking credentials.
5. Prevention rule: Never install screen-sharing software at the request of an incoming caller. Banks never require remote access.`
    },

    // 13. Fake Job Offers
    {
      keywords: ['fake job', 'work from home', 'job offer', 'part time job', 'daily salary', 'part time earning', 'hr job'],
      title: 'Employment & Job Scam',
      response: `[JOB FRAUD ALERT]
1. What it is: Unsolicited WhatsApp/SMS offers promising high daily earnings (₹2,000–₹5,000) for simple online part-time tasks.
2. How it works: After initial engagement, candidates are told to pay "registration fees", "laptop security deposits", or "document charges".
3. Warning signs: Offers from international numbers (+62, +84, +234), no formal interview, and demanding money to secure employment.
4. Immediate action: Block the recruiter. Do not pay any registration charges. Report the communication on sancharsaathi.gov.in.
5. Prevention rule: Legitimate companies never demand upfront fees, training charges, or equipment deposits from job candidates.`
    },

    // 14. Task-Based Investment Scams
    {
      keywords: ['task scam', 'like video earn', 'hotel review earn', 'youtube like task', 'telegram task', 'vip task', 'prepaid task'],
      title: 'Task-Based Pre-Paid Scam',
      response: `[TASK-BASED FRAUD]
1. What it is: Schemes that pay small real amounts (₹150–₹500) for liking YouTube clips or rating hotels, before trapping you in prepaid tasks.
2. How it works: You are added to a Telegram group and told to deposit ₹10,000 to ₹1,00,000 to unlock higher commission tiers, which are then frozen.
3. Warning signs: Guaranteed returns for trivial tasks, Telegram-only coordination, and demands to deposit funds to withdraw earnings.
4. Immediate action: Stop sending money immediately. Preserve all transaction IDs, Telegram handles, and bank details. Dial 1930.
5. Prevention rule: Paying money to complete tasks or withdraw earned wages is the definitive hallmark of a task scam.`
    },

    // 15. Cryptocurrency Scams
    {
      keywords: ['crypto', 'cryptocurrency', 'bitcoin scam', 'crypto investment', 'usdt', 'binance fraud', 'fake crypto exchange'],
      title: 'Cryptocurrency Fraud',
      response: `[CRYPTO FRAUD ALERT]
1. What it is: Unregistered websites, Telegram channels, or social media acquaintances promoting fraudulent crypto trading schemes.
2. How it works: Victims buy USDT/crypto on legitimate exchanges and transfer it to private scam wallets or manipulated trading sites.
3. Warning signs: Promises of doubling crypto assets, guaranteed arbitrage profits, and strangers offering romantic or investment advice.
4. Immediate action: Report transaction hash addresses and receiving wallet addresses immediately to cybercrime.gov.in and helpline 1930.
5. Prevention rule: Once cryptocurrency leaves your custody, blockchain transactions are mathematically irreversible. Never transfer crypto to unknown platforms.`
    },

    // 16. Online Trading Fraud
    {
      keywords: ['trading fraud', 'stock tips', 'fake trading app', 'sebi tips', 'institutional trading', 'ipo allotment scam', 'upper circuit'],
      title: 'Fake Stock Trading Platforms',
      response: `[TRADING & IPO FRAUD]
1. What it is: Cloned trading dashboards and fake institutional accounts promising guaranteed IPO allotments or upper-circuit stock gains.
2. How it works: Victims deposit funds into personal savings accounts via UPI. The fake app displays huge gains, but withdrawals are blocked.
3. Warning signs: Demanding funds to be sent to individual accounts rather than registered SEBI stockbroker clearing accounts.
4. Immediate action: Stop depositing "tax" or "withdrawal" fees. Save transfer receipts and register an FIR on cybercrime.gov.in.
5. Prevention rule: Only invest through SEBI-registered brokers. Verify registration numbers on the official SEBI portal (sebi.gov.in).`
    },

    // 17. Loan App Fraud & Harassment
    {
      keywords: ['loan app', 'instant loan', 'loan harassment', 'contact access loan', '7 days loan', 'edited photo blackmail'],
      title: 'Illegal Instant Loan App Fraud',
      response: `[LOAN APP EXTORTION]
1. What it is: Unregulated mobile loan apps that disburse small amounts without paperwork, then extort exorbitant interest within 7 days.
2. How it works: When installed, the app steals your contacts and photo gallery. If payment is delayed, they send morphed abusive images to your relatives.
3. Warning signs: Apps not listed on RBI-registered NBFC directories, demanding full access to contacts and media gallery.
4. Immediate action: Do not pay extortion demands. Revoke all app permissions or factory-reset your phone. File a complaint on cybercrime.gov.in.
5. Prevention rule: Only borrow from RBI-regulated commercial banks or Non-Banking Financial Companies (NBFCs).`
    },

    // 18. Credit Card Fraud
    {
      keywords: ['credit card', 'card fraud', 'cvv', 'card limit increase', 'reward points card', 'card expired'],
      title: 'Credit Card Skimming & Fraud',
      response: `[CREDIT CARD FRAUD]
1. What it is: Unauthorized transactions resulting from compromised card numbers, expiry dates, CVVs, or cloned magnetic strips.
2. How it works: Callers pose as bank staff offering reward redemption or credit limit upgrades to coax card details and approval OTPs.
3. Warning signs: Callers asking for the 3-digit CVV printed on the reverse of the card or one-time verification SMS codes.
4. Immediate action: Block the credit card immediately via your bank mobile app. Report unauthorized transactions to your bank within 24 hours.
5. Prevention rule: Never disclose your CVV or card PIN. Keep international and online card transactions turned off when not in active use.`
    },

    // 19. Identity Theft
    {
      keywords: ['identity theft', 'aadhaar misuse', 'pan misuse', 'fake cibil', 'stolen identity', 'impersonation identity'],
      title: 'Identity Theft & Document Misuse',
      response: `[IDENTITY THEFT NOTICE]
1. What it is: Unauthorized use of your Aadhaar card, PAN card, or personal identifiers to open mule bank accounts or take loans.
2. How it works: Criminals obtain photocopies of IDs leaked online or shared casually and use them for illegal SIM or credit registrations.
3. Warning signs: Unexplained drops in your CIBIL score, unfamiliar loans appearing on credit reports, or unknown SIM cards under your name.
4. Immediate action: Lock your biometrics on the official UIDAI portal (myaadhaar.uidai.gov.in). Report stolen documents to police.
5. Prevention rule: Use Masked Aadhaar (showing only the last 4 digits) for verification. Check your credit score regularly via official bureaus.`
    },

    // 20. Sextortion & Online Blackmail
    {
      keywords: ['sextortion', 'blackmail', 'video call intimate', 'leaked video', 'nude video call', 'extortion money'],
      title: 'Sextortion & Cyber Blackmail',
      response: `[SEXTORTION EMERGENCY ADVICE]
1. What it is: Attackers initiate a brief video call on WhatsApp displaying explicit footage, record your face, and threaten to send morphed videos to your contacts.
2. How it works: Callers posing as police or cyber cell officers call demanding immediate payment to "remove the clip from YouTube".
3. Warning signs: Video calls from unknown female profiles on WhatsApp, followed by immediate screenshots of your family contact list.
4. Immediate action: DO NOT PAY. Paying never stops extortion; it invites higher demands. Block the caller. Deactivate social profiles temporarily.
5. Prevention rule: Report immediately to National Cyber Crime Portal (cybercrime.gov.in). For women and children, use the anonymous reporting tab.`
    },

    // 21. Social Media Impersonation
    {
      keywords: ['impersonation', 'fake profile', 'instagram hack', 'facebook clone', 'friend asking money', 'cloned profile'],
      title: 'Social Media Impersonation',
      response: `[SOCIAL MEDIA IMPERSONATION]
1. What it is: Creating exact duplicate profiles of you or your friends using stolen public photos and names to borrow emergency money.
2. How it works: The fake profile messages your friends claiming: "I am in hospital, urgent medical emergency, please send ₹10,000 on this UPI."
3. Warning signs: A friend creating a "new account" suddenly asking for immediate cash transfers via UPI.
4. Immediate action: Call your real friend directly on cellular voice call to verify. Report the fake profile directly inside the social media app.
5. Prevention rule: Keep your friends list and photo galleries private to prevent automated cloning by fraudulent bots.`
    },

    // 22. Email Hacking & Account Compromise
    {
      keywords: ['email hack', 'gmail hacked', 'compromised account', 'password leak', 'unauthorized login', 'email breach'],
      title: 'Email Account Compromise',
      response: `[EMAIL SECURITY ALERT]
1. What it is: Unauthorized intrusion into your primary email account, allowing attackers to reset passwords across banking and social services.
2. How it works: Credential stuffing from third-party data breaches, keyloggers, or phishing login pages.
3. Warning signs: Security alerts notifying of logins from unfamiliar cities or devices, or unrecognized sent emails.
4. Immediate action: Change your email password immediately. Select "Sign out of all sessions". Check forwarding rules for unauthorized rerouting.
5. Prevention rule: Enable Two-Factor Authentication (2FA) using an Authenticator App (Google Authenticator) rather than simple SMS.`
    },

    // 23. Ransomware
    {
      keywords: ['ransomware', 'files encrypted', 'locked files', 'ransom note', 'pay bitcoin files', 'decrypt files'],
      title: 'Ransomware Attack',
      response: `[RANSOMWARE PROTOCOL]
1. What it is: Malicious software that encrypts documents, photos, and system files, demanding a cryptocurrency ransom for the decryption key.
2. How it works: Delivered via infected email attachments, pirated software downloads, or unpatched vulnerabilities in remote desktop protocol (RDP).
3. Warning signs: Files suddenly having weird extensions (e.g. .locked), and text documents appearing on desktop demanding ransom payments.
4. Immediate action: Disconnect the infected computer from the network and Wi-Fi immediately to prevent lateral spread. Do not pay the ransom.
5. Prevention rule: Maintain regular offline backups on disconnected external hard drives and keep operating systems fully updated.`
    },

    // 25. Matrimonial & Romance Fraud
    {
      keywords: ['matrimonial', 'romance', 'shaadi scam', 'fake bride', 'fake groom', 'customs gift scam', 'foreign friend scam'],
      title: 'Matrimonial and Romance Fraud',
      response: `[MATRIMONIAL & ROMANCE SCAM GUIDANCE]
1. What it is: Deceptive individuals posing as affluent prospective suitors or foreign professionals on matrimony portals or social apps.
2. How it works: Fraudsters build emotional intimacy over weeks, then claim an urgent crisis, medical emergency, or announce an expensive gift/parcel sent from abroad that is supposedly 'stuck at customs' requiring immediate clearance fees.
3. Warning signs: Requests for money before meeting in person; claims of high-value gifts detained by customs; refusal to meet in person or conduct verifiable video calls.
4. Immediate action: Do not send any money. Cease contact immediately. Preserve all chat transcripts, photos, and bank account details.
5. Reporting: Lodge a report at https://cybercrime.gov.in and report the fraudulent profile directly to the matrimony or social platform.`
    },

    // 24. Data Breaches
    {
      keywords: ['data breach', 'leaked password', 'haveibeenpwned', 'database leak', 'dark web leak', 'information leaked'],
      title: 'Data Breach Exposure',
      response: `[DATA BREACH GUIDANCE]
1. What it is: Unauthorized exfiltration of sensitive consumer records (passwords, emails, phone numbers) from commercial company databases.
2. How it works: Attackers compromise corporate web servers and publish stolen database dumps on dark web hacker forums.
3. Warning signs: Security notifications from Google/Apple stating your saved password was found in a known data breach.
4. Immediate action: Change the password on the compromised service immediately. If you reuse that password on other sites, change those as well.
5. Prevention rule: Use unique, complex passwords for every platform using a password manager. Never reuse passwords across banking and email.`
    }
  ];

  const chatSendBtn = document.getElementById('chatSendBtn');

  // Safe Chat Bubble Insertion using textContent
  function appendChatMessage(text, sender = 'bot') {
    if (!chatMessagesBox) return;

    const bubble = document.createElement('div');
    bubble.classList.add('chat-bubble', sender);
    bubble.textContent = text; // Safe text insertion preventing XSS

    chatMessagesBox.appendChild(bubble);
    chatMessagesBox.scrollTo({
      top: chatMessagesBox.scrollHeight,
      behavior: 'smooth'
    });
  }

  // Enhanced Natural Language Keyword Matching
  function evaluateRuleBasedResponse(userQuery) {
    const cleanQuery = userQuery.toLowerCase().replace(/[^\w\s]/gi, ' ');

    for (const entry of knowledgeBase) {
      // Check full phrase match or multi-word match
      const matched = entry.keywords.some(keyword => {
        if (cleanQuery.includes(keyword)) return true;
        const kwWords = keyword.split(' ');
        if (kwWords.length > 1) {
          return kwWords.every(w => cleanQuery.includes(w));
        }
        return false;
      });

      if (matched) {
        return entry.response;
      }
    }

    // Default Fallback
    return `I am an offline, rule-based awareness assistant. I could not identify a specific match for your inquiry.

SAFE IMMEDIATE GUIDANCE:
• If you have experienced an unauthorized financial debit, immediately call national helpline 1930 and inform your bank within 2 hours.
• For general cybercrime, blackmail, or impersonation, lodge a formal report at https://cybercrime.gov.in.
• Never share OTPs, UPI PINs, passwords, or install remote access apps (AnyDesk/TeamViewer).

You can ask me about: UPI fraud, QR scams, fake customer care, digital arrest, fake police/CBI, WhatsApp takeover, OTP theft, SIM swap, phishing links, fake KYC, electricity bills, AnyDesk scams, fake job tasks, crypto fraud, loan app harassment, credit cards, sextortion, impersonation, or ransomware.`;
  }

  // Unified Message Sending Function for Send button, Enter key, and Form submit
  function sendMessage() {
    if (!chatInput) return;
    const message = chatInput.value.trim();
    if (!message) return; // Do not send empty messages

    // Render user message safely using textContent
    appendChatMessage(message, 'user');
    chatInput.value = '';

    // Deterministic rule-based evaluation with slight natural pause
    setTimeout(() => {
      const botResponse = evaluateRuleBasedResponse(message);
      appendChatMessage(botResponse, 'bot');
    }, 280);
  }

  // Form Submit Handler (prevents accidental page reload)
  if (chatForm) {
    chatForm.addEventListener('submit', (e) => {
      if (e) e.preventDefault();
      sendMessage();
    });
  }

  // Explicit Send Button Click Listener
  if (chatSendBtn) {
    chatSendBtn.addEventListener('click', (e) => {
      if (e) e.preventDefault();
      sendMessage();
    });
  }

  // Enter Key Listener on Input Field
  if (chatInput) {
    chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        sendMessage();
      }
    });
  }

  // Quick Prompt Chips
  quickPromptChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const promptText = chip.getAttribute('data-prompt') || chip.textContent;
      if (chatInput) {
        chatInput.value = promptText;
        sendMessage();
      }
    });
  });

  /* -------------------------------------------------------------------------
   * 3. INTERACTIVE EVIDENCE CHECKLIST (Tested for 0/7 Initial State)
   * ------------------------------------------------------------------------- */
  const checklistItems = document.querySelectorAll('.checklist-item');
  const checklistCountSpan = document.getElementById('checklistCount');

  function updateChecklistCounter() {
    if (!checklistCountSpan) return;
    const checkedCount = document.querySelectorAll('.checklist-item.checked').length;
    checklistCountSpan.textContent = checkedCount;
  }

  // Guarantee clean initial state (0 of 7)
  checklistItems.forEach(item => {
    item.classList.remove('checked');
    item.setAttribute('aria-checked', 'false');

    item.addEventListener('click', () => {
      item.classList.toggle('checked');
      const isChecked = item.classList.contains('checked');
      item.setAttribute('aria-checked', isChecked ? 'true' : 'false');
      updateChecklistCounter();
    });

    item.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        item.click();
      }
    });
  });

  updateChecklistCounter();

  /* -------------------------------------------------------------------------
   * 4. COMPLAINT DRAFTING TOOL
   * ------------------------------------------------------------------------- */
  const complaintForm = document.getElementById('complaintForm');
  const complaintDraftPreview = document.getElementById('complaintDraftPreview');
  const copyDraftBtn = document.getElementById('copyDraftBtn');
  const downloadDraftBtn = document.getElementById('downloadDraftBtn');

  const defaultTemplate = 
`======================================================================
               INCIDENT COMPLAINT DRAFT
======================================================================
Generated via Cyber Sentinels Civic Awareness Portal
Intended for: Official reporting on cybercrime.gov.in / Cyber Police Cell
======================================================================

Date of Generation: [Today]
Complainant Name  : [Fill form on the left]
Incident Category : [Select Category]
Date & Time       : [Specify Date]
Financial Loss    : [Amount in INR]
Transaction ID/UTR: [Ref / UTR numbers]
Suspect Details   : [Phone / Link / UPI ID / Account Number]

DETAILED NARRATIVE OF THE INCIDENT:
----------------------------------------------------------------------
Fill in the form to generate a structured, professional grievance draft 
ready for your official submission.
----------------------------------------------------------------------
NOTE: This document is an informational draft to assist victims in filing 
organized complaints. Cyber Sentinels does not file cases directly with 
law enforcement authorities.`;

  if (complaintDraftPreview) {
    complaintDraftPreview.textContent = defaultTemplate;
  }

  if (complaintForm && complaintDraftPreview) {
    complaintForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!complaintForm.checkValidity()) {
        complaintForm.reportValidity();
        return;
      }

      const fullName = (document.getElementById('compName').value || '').trim() || 'Not Provided';
      const category = (document.getElementById('compCategory').value || '').trim() || 'Uncategorized Cyber Incident';
      const incidentDate = (document.getElementById('compDate').value || '').trim() || 'Date Not Specified';
      const amountLost = (document.getElementById('compAmount').value || '').trim() || 'Nil / Non-financial';
      const transactionId = (document.getElementById('compTxnId').value || '').trim() || 'N/A';
      const suspectInfo = (document.getElementById('compSuspect').value || '').trim() || 'Details Unknown / Under Investigation';
      const description = (document.getElementById('compDescription').value || '').trim() || 'No additional narrative provided.';
      const generationDate = new Date().toLocaleString();

      const generatedDraft = 
`======================================================================
             FORMAL CYBER INCIDENT COMPLAINT DRAFT
======================================================================
Generated via: Cyber Sentinels Civic Awareness Initiative
Intended Recipient: National Cyber Crime Reporting Portal (cybercrime.gov.in)
                    or Local District Cyber Police Station
Notice: This is a client-side drafting aid; no data has been transmitted.
======================================================================

1. COMPLAINANT PARTICULARS
----------------------------------------------------------------------
Full Name             : ${fullName}
Date of Report Draft  : ${generationDate}

2. INCIDENT SPECIFICATIONS
----------------------------------------------------------------------
Nature of Cyber Crime : ${category}
Date & Time Occurred  : ${incidentDate}
Total Financial Loss  : INR ${amountLost}
Transaction ID / UTR  : ${transactionId}

3. SUSPECT IDENTIFIERS (IF KNOWN)
----------------------------------------------------------------------
Suspect Details       : ${suspectInfo}
(e.g., Phone numbers, suspicious links, UPI IDs, beneficiary accounts)

4. FACTUAL NARRATIVE & CHRONOLOGY
----------------------------------------------------------------------
${description}

5. RELIEF / ACTION REQUESTED
----------------------------------------------------------------------
a) Register this grievance under relevant sections of the Information 
   Technology Act, 2000 and the Bharatiya Nyaya Sanhita (BNS) as deemed 
   applicable by competent investigating officers.
b) Issue prompt directions to concerned payment gateways, intermediary 
   banks, or nodal authorities regarding Transaction Reference: ${transactionId}.
c) Initiate technical analysis into associated caller IDs, URLs, and logs.

DECLARATION:
I hereby state that the information provided in this grievance draft is 
an accurate account of the incident to the best of my knowledge and memory.

Complainant Signature: ________________________
Name                 : ${fullName}
Date                 : ${new Date().toLocaleDateString()}

======================================================================
IMPORTANT LEGAL & CIVIC DISCLAIMER:
This document is an informational draft generated locally in your browser 
to help victims organize evidence and statements before official submission.
Cyber Sentinels does not file or submit complaints to government or police 
authorities. Stolen fund recovery cannot be guaranteed. To officially lodge 
your complaint, submit this draft at https://cybercrime.gov.in or report 
financial cyber frauds immediately by calling toll-free helpline 1930.
======================================================================`;

      complaintDraftPreview.textContent = generatedDraft;

      if (window.innerWidth < 1024) {
        complaintDraftPreview.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }

  // Copy Draft Button
  if (copyDraftBtn && complaintDraftPreview) {
    copyDraftBtn.addEventListener('click', async () => {
      const textToCopy = complaintDraftPreview.textContent;
      if (!textToCopy) return;

      const setCopiedUI = () => {
        const originalText = copyDraftBtn.innerHTML;
        copyDraftBtn.textContent = '✓ Copied to Clipboard!';
        copyDraftBtn.style.backgroundColor = '#762F49';
        copyDraftBtn.style.color = '#FFFFFF';
        setTimeout(() => {
          copyDraftBtn.innerHTML = originalText;
          copyDraftBtn.style.backgroundColor = '';
          copyDraftBtn.style.color = '';
        }, 2200);
      };

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
        tempTextArea.style.position = 'fixed';
        tempTextArea.style.left = '-9999px';
        tempTextArea.style.top = '-9999px';
        document.body.appendChild(tempTextArea);
        tempTextArea.focus();
        tempTextArea.select();
        try {
          const successful = document.execCommand('copy');
          if (successful) {
            setCopiedUI();
          } else {
            alert('Please select and copy the text from the preview box.');
          }
        } catch (e) {
          alert('Copy failed. Please manually copy the draft text.');
        } finally {
          document.body.removeChild(tempTextArea);
        }
      }
    });
  }

  // Download Draft Button
  if (downloadDraftBtn && complaintDraftPreview) {
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
  }

  /* -------------------------------------------------------------------------
   * 5. ACTIVE NAVIGATION OBSERVER
   * ------------------------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (currentId && link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });

});
