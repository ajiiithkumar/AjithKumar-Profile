---
name: Ajith Kumar Portfolio From Scratch
overview: Wipe the existing portfolio content and rebuild it from scratch using React + Vite + Tailwind CSS with a fresh, impressive design — fully populated with Ajith Kumar A's real resume data, a mailto contact CTA, and all 8 sections.
todos:
  - id: palette
    content: "Update index.css and tailwind.config palette tokens to teal/cyan (#0D2137, #00C2FF, #F4F9FF)"
    status: pending
  - id: navbar
    content: "Rewrite Navbar: monogram AK, name Ajith Kumar A, GitHub/LinkedIn links updated"
    status: pending
  - id: hero
    content: "Rewrite Hero: typewriter roles, new headline/subline, chips from resume, correct CTA links"
    status: pending
  - id: ai
    content: "Rewrite AIImplementation: Ajith's 4-step AI approach with ChatGPT, Antigravity IDE, Chrome DevTools Recorder"
    status: pending
  - id: skills
    content: "Rewrite Skills: 9 skill groups matching resume exactly"
    status: pending
  - id: experience
    content: "Rewrite Experience: single employer Digient Technologies, 2 case study cards from resume, updated timeline"
    status: pending
  - id: projects
    content: "Rewrite Projects: 3 project cards from resume, GitHub links to ajithbabu03"
    status: pending
  - id: certifications
    content: "Rewrite Certifications: 2 certs from resume"
    status: pending
  - id: about
    content: "Rewrite About: bio paragraph and 4 strength cards matching Ajith's profile"
    status: pending
  - id: contact
    content: "Rewrite Contact: remove Web3Forms, add mailto CTA button, static info cards (email, phone, LinkedIn, location)"
    status: pending
  - id: footer
    content: "Rewrite Footer: Ajith Kumar A, correct email, LinkedIn, GitHub links"
    status: pending
isProject: false
---

# Ajith Kumar A — Portfolio Rebuild From Scratch

## Approach

Delete all existing component content and rebuild every file from zero. Keep the Vite + React + Tailwind toolchain and shared infrastructure (hooks, `index.css` tokens, `tailwind.config`). Every line of UI and data is written fresh for Ajith Kumar A.

## Identity & Data

| Field | Value |
|---|---|
| Name | Ajith Kumar A |
| Role | QA Automation Engineer |
| Company | Digient Technologies Pvt Ltd, Chennai |
| Since | Apr 2021 (5+ years) |
| Email | ajithbabuofficial@gmail.com |
| Phone | +91 63791 31350 |
| LinkedIn | linkedin.com/in/ajithbabu03 |
| GitHub | github.com/ajithbabu03 |
| Location | Chennai, India |

## Design Direction

- Fresh color palette — deep teal/slate (`#0D2137`) + electric cyan accent (`#00C2FF`) + near-white (`#F4F9FF`)
- Bold hero with animated gradient heading and typewriter roles
- Glassmorphism cards with teal/cyan borders (no indigo/violet)
- Smooth scroll-triggered entrance animations (existing `useScrollAnimation` hook reused)
- Dark-mode-first with a light mode toggle
- Mobile-first responsive layout

## Section Plan

### 1. `Hero.tsx`
- Typewriter cycling: "QA Automation Engineer", "SDET", "Performance Testing Expert", "AI-Augmented Tester"
- Headline: **"Building Confidence Into Every Release"**
- Subline: 5+ years, CRM & Gaming, AI-driven BDD frameworks
- CTA buttons: "View Experience" (scroll) + "Download Resume" (PDF link)
- Chips: `Selenium` `Cucumber BDD` `Gatling` `TestNG` `Java` `AI-Assisted QA`

### 2. `AIImplementation.tsx`
- Ajith's **4-step AI-driven automation approach**:
  1. Framework setup via AI
  2. Workflow capture with Chrome DevTools Recorder (JSON)
  3. AI-generated Gherkin scenarios & Step Definitions
  4. Locator stabilization via DOM analysis
- Tools: ChatGPT, Antigravity IDE, Chrome DevTools Recorder

### 3. `Skills.tsx`
Skill groups (from resume):
- **Test Automation** — Selenium WebDriver, Playwright, TestNG, Cucumber BDD, POM, Data-Driven Testing
- **Languages** — Java (Core), JavaScript, Gherkin, XPath, CSS Selectors
- **Frameworks** — BDD Framework, Hybrid Framework, Maven Project Structure
- **Build & Dev Tools** — Maven, IntelliJ IDEA, Git, Chrome DevTools Recorder
- **Performance Testing** — Gatling, Zabbix
- **Security Testing** — Burp Suite
- **Reporting** — Extent Reports, HTML Reports
- **AI Tooling** — ChatGPT, Antigravity IDE
- **Management** — ClickUp, JIRA

### 4. `Experience.tsx`
Single employer (Digient Technologies, Apr 2021–Present). Two case study cards:
- **AI-Enhanced CRM Test Automation Framework** — BDD/POM for CRM (Audience, Campaigns, Journeys); AI-assisted Gherkin; session injection cuts execution ∼50%; 60%+ manual effort reduction
- **Performance & Load Testing Suite** — Gatling scripts for CRM & Gaming APIs; Zabbix correlation; response time / throughput / error rate analysis

### 5. `Projects.tsx`
Three project cards:
- **AI-Enhanced CRM Test Automation** (Java, Selenium, Cucumber, TestNG, Maven)
- **Performance & Load Testing Suite** (Gatling, Zabbix, Scala)
- **Session State Injection System** (Java, localStorage/cookie injection, Selenium)

### 6. `Certifications.tsx`
Two certification cards:
- Selenium with Java & Cucumber – Test Automation (BDD Framework)
- Manual Testing + Agile Methodologies + JIRA – Software Quality Assurance

### 7. `About.tsx`
Bio + 4 strength cards:
- AI-Augmented QA Pioneer
- Scalable BDD Architecture
- Performance & Security Testing
- Agile Delivery & Defect Tracking

### 8. `Contact.tsx`
- No form, no Web3Forms
- Big `mailto:` CTA button: **"Send Me an Email"** → opens email client
- Info cards: Email, Phone, LinkedIn, Location
- Availability badge: "Open to QA Automation roles"

## Files to rewrite

- [`src/components/Hero.tsx`](src/components/Hero.tsx)
- [`src/components/AIImplementation.tsx`](src/components/AIImplementation.tsx)
- [`src/components/Skills.tsx`](src/components/Skills.tsx)
- [`src/components/Experience.tsx`](src/components/Experience.tsx)
- [`src/components/Projects.tsx`](src/components/Projects.tsx)
- [`src/components/Certifications.tsx`](src/components/Certifications.tsx)
- [`src/components/About.tsx`](src/components/About.tsx)
- [`src/components/Contact.tsx`](src/components/Contact.tsx)
- [`src/components/Navbar.tsx`](src/components/Navbar.tsx) — monogram AK, name, links
- [`src/components/Footer.tsx`](src/components/Footer.tsx) — name, email, LinkedIn, GitHub
- [`src/index.css`](src/index.css) — update palette tokens to teal/cyan
- [`src/App.tsx`](src/App.tsx) — update orb colors to match new palette

## What is NOT changing

- Vite/React/Tailwind toolchain and `package.json`
- `src/hooks.ts` (useScrollAnimation, useDarkMode, useActiveSection)
- `tailwind.config.js` structure (only palette values updated)
- File/folder structure
