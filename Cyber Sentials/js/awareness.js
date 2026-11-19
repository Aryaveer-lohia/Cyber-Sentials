/**
 * ==========================================================================
 * CYBER SENTINELS - ONLINE AWARENESS PAGE JAVASCRIPT
 * Features:
 *  1. Interactive Scam Sequence Stage Inspector (Trust -> Loss)
 *  2. 5-Question Interactive Cyber Awareness Quiz with instant scoring and explanations
 *  3. Mobile Navigation Menu Toggle
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  /* -------------------------------------------------------------------------
   * 1. MOBILE MENU TOGGLE
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
   * 2. SCAM KILLCHAIN SEQUENCE INTERACTION
   * ------------------------------------------------------------------------- */
  const killchainSteps = document.querySelectorAll('.killchain-step');
  const focusBoxTitle = document.getElementById('killchainFocusTitle');
  const focusBoxBody = document.getElementById('killchainFocusBody');

  const killchainExplanations = {
    'trust': {
      title: 'Stage 1: Establishing False Trust',
      body: 'Scammers begin by manufacturing an appearance of legitimacy. They pose as bank officers, courier tracking agents (India Post/BlueDart), electricity officials, or even police personnel in uniform over video. They use forged ID cards, official logos, and caller ID spoofing to drop your psychological guard.'
    },
    'urgency': {
      title: 'Stage 2: Inducing Manufactured Urgency & Panic',
      body: 'Once connected, the fraudster creates artificial panic: "Your power will be cut in 2 hours", "A parcel containing narcotics was registered in your name", or "Your bank account has been compromised". This emotional trigger prevents rational deliberation and forces rushed decisions.'
    },
    'manipulation': {
      title: 'Stage 3: Psychological Manipulation & Isolation',
      body: 'The criminal directs the victim to maintain secrecy: "Do not disconnect this call", "This is a confidential CBI investigation", or "Follow my steps to claim your refund". They isolate the victim from family, friends, or real bank support to maintain total control over the conversation.'
    },
    'theft': {
      title: 'Stage 4: Unauthorized Payment or Credential Theft',
      body: 'The trap is sprung: The user is instructed to scan a QR code to "receive an advance", enter their UPI PIN, forward an SMS OTP, or install remote access software (AnyDesk, TeamViewer) under the guise of customer support verification.'
    },
    'loss': {
      title: 'Stage 5: Financial Loss & Digital Disappearance',
      body: 'Funds are drained instantly into multiple "mule" bank accounts or converted into cryptocurrency. The scammer blocks the victim or disconnects the call. Only rapid notification to bank nodal officers and dialing helpline 1930 within 2 hours can intercept these funds.'
    }
  };

  if (killchainSteps.length > 0 && focusBoxTitle && focusBoxBody) {
    killchainSteps.forEach(step => {
      step.addEventListener('click', () => {
        // Toggle active class
        killchainSteps.forEach(s => s.classList.remove('active'));
        step.classList.add('active');

        const stageKey = step.getAttribute('data-stage');
        if (killchainExplanations[stageKey]) {
          focusBoxTitle.textContent = killchainExplanations[stageKey].title;
          focusBoxBody.textContent = killchainExplanations[stageKey].body;
        }
      });
    });
  }

  /* -------------------------------------------------------------------------
   * 3. INTERACTIVE 5-QUESTION AWARENESS QUIZ
   * ------------------------------------------------------------------------- */
  const quizForm = document.getElementById('cyberQuizForm');
  const quizSubmitBtn = document.getElementById('quizSubmitBtn');
  const quizResetBtn = document.getElementById('quizResetBtn');
  const quizScoreDisplay = document.getElementById('quizScoreDisplay');

  // Correct Answer Key & Explanations
  const quizMaster = {
    q1: {
      correct: 'no',
      explanation: 'CORRECT: You NEVER need to scan a QR code or enter your UPI PIN to receive money. Scanning a code or entering a PIN always debits funds from your account.'
    },
    q2: {
      correct: 'no',
      explanation: 'CORRECT: "Digital Arrest" does not exist under Indian Law (BNS/CrPC). Real police or CBI officers never conduct investigations or demand money transfers over Skype or WhatsApp calls.'
    },
    q3: {
      correct: 'never',
      explanation: 'CORRECT: OTPs are personal authentication secrets. Genuine bank executives, customer service agents, and family members should never ask you to forward your OTP.'
    },
    q4: {
      correct: 'yes',
      explanation: 'CORRECT: Promises of "guaranteed 50% daily returns" or zero-risk stock investments are definitive hallmarks of Ponzi and investment fraud operations.'
    },
    q5: {
      correct: 'no',
      explanation: 'CORRECT: Apps like AnyDesk, TeamViewer, and RustDesk give callers total visibility and control of your screen and passwords. Legitimate banks never demand screen-sharing.'
    }
  };

  if (quizForm) {
    quizForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let score = 0;
      const totalQuestions = Object.keys(quizMaster).length;

      // Evaluate each question
      for (const [qKey, data] of Object.entries(quizMaster)) {
        const selectedOption = quizForm.querySelector(`input[name="${qKey}"]:checked`);
        const explanationBox = document.getElementById(`${qKey}-explanation`);

        if (explanationBox) {
          explanationBox.style.display = 'block';

          if (selectedOption && selectedOption.value === data.correct) {
            score++;
            explanationBox.className = 'quiz-explanation-box correct';
            explanationBox.textContent = `✓ Correct! ${data.explanation}`;
          } else {
            explanationBox.className = 'quiz-explanation-box incorrect';
            explanationBox.textContent = `✗ Incorrect. ${data.explanation}`;
          }
        }
      }

      // Display Final Score
      if (quizScoreDisplay) {
        quizScoreDisplay.textContent = `Score: ${score} / ${totalQuestions} (${Math.round((score / totalQuestions) * 100)}%)`;
        quizScoreDisplay.style.display = 'inline-block';
      }

      if (quizSubmitBtn) quizSubmitBtn.style.display = 'none';
      if (quizResetBtn) quizResetBtn.style.display = 'inline-flex';

      // Scroll smoothly to score box
      quizScoreDisplay.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    // Reset Quiz
    if (quizResetBtn) {
      quizResetBtn.addEventListener('click', () => {
        quizForm.reset();
        document.querySelectorAll('.quiz-explanation-box').forEach(box => {
          box.style.display = 'none';
          box.textContent = '';
        });
        if (quizScoreDisplay) quizScoreDisplay.style.display = 'none';
        if (quizSubmitBtn) quizSubmitBtn.style.display = 'inline-flex';
        quizResetBtn.style.display = 'none';
      });
    }
  }

  /* -------------------------------------------------------------------------
   * 4. CYBERCRIME CASE FILES FILTERING
   * ------------------------------------------------------------------------- */
  const caseFilterButtons = document.querySelectorAll('.case-filter-btn');
  const caseCards = document.querySelectorAll('.case-file-card');

  if (caseFilterButtons.length > 0 && caseCards.length > 0) {
    caseFilterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        // Update active filter button state
        caseFilterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter case cards
        caseCards.forEach(card => {
          const country = card.getAttribute('data-country');
          const category = card.getAttribute('data-category');

          let matches = false;

          if (filter === 'all') {
            matches = true;
          } else if (filter === 'india' || filter === 'international') {
            matches = (country === filter);
          } else if (filter === 'financial-fraud' || filter === 'ransomware' || filter === 'crypto') {
            matches = (category === filter);
          }

          if (matches) {
            card.classList.remove('is-hidden');
            card.style.display = 'grid';
          } else {
            card.classList.add('is-hidden');
            card.style.display = 'none';
          }
        });
      });
    });
  }

});
