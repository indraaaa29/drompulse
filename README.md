<div align="center">

<img src="https://img.shields.io/badge/version-1.0.0-006e2f?style=for-the-badge&logoColor=white" alt="Version"/>
<img src="https://img.shields.io/badge/license-MIT-22c55e?style=for-the-badge" alt="License"/>
<img src="https://img.shields.io/badge/node-20+-006e2f?style=for-the-badge&logo=node.js&logoColor=white" alt="Node"/>
<img src="https://img.shields.io/badge/built_with-Vite-646cff?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
<img src="https://img.shields.io/badge/SDG_7-Clean_Energy-fcc30b?style=for-the-badge" alt="SDG 7"/>
<img src="https://img.shields.io/badge/PRs-welcome-brightgreen?style=for-the-badge" alt="PRs Welcome"/>

<br/><br/>

<h1>⚡ Enervia</h1>
<h3><em>Smarter Energy. Greener Living.</em></h3>

<p>An AI-powered Smart Hostel Energy Management Platform that reduces electricity waste through occupancy-aware automation, real-time monitoring, and intelligent recommendations — aligned with UN SDG 7: Affordable & Clean Energy.</p>

<a href="https://github.com/indraaaa29/Enervia"><strong>Explore the repo »</strong></a>
&nbsp;·&nbsp;
<a href="https://github.com/indraaaa29/Enervia/issues/new?template=bug_report.md">Report a Bug</a>
&nbsp;·&nbsp;
<a href="https://github.com/indraaaa29/Enervia/issues/new?template=feature_request.md">Request a Feature</a>

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Problem Statement](#-problem-statement)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Pages](#-pages)
- [Getting Started](#-getting-started)
- [Local Development](#-local-development)
- [Building](#-building)
- [SDG 7 Alignment](#-sdg-7-alignment)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌿 Overview

Enervia is a full-featured, multi-page energy dashboard built for student hostels and residential facilities. It combines occupancy sensor data with AI-driven insights to automatically reduce energy consumption — all while giving administrators a beautiful, real-time interface to monitor, analyze, and act on energy waste.

> **"Every watt saved ripples through the ecosystem."**

---

## 🔋 Problem Statement

Student hostels are notorious energy wasters:

- **Empty rooms** with ACs and lights running all day
- **No real-time visibility** into which zones are consuming power needlessly
- **Manual intervention** required for every appliance shutoff
- **Zero sustainability metrics** reported to students or administrators

Enervia solves this by connecting occupancy awareness, AI pattern detection, and automated controls into a single unified platform.

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🗺️ **Interactive Hostel Map** | Multi-floor SVG floor plan with per-room energy status (Efficient / Moderate / Wasteful / Automated) and live appliance inspector |
| 🤖 **AI Energy Advisor** | Real-time anomaly detection with prioritized intervention reports and one-click protocol authorization |
| 📊 **Savings Timeline** | Interactive Daily / Weekly / Monthly chart with cost savings, KPI cards, and AI-generated insights |
| 🌱 **Sustainability Impact** | SDG 7/11/13 progress tracking, CO₂ reduction metrics, virtual forest equivalent, and economic symbiosis panel |
| ⚡ **Energy Overview** | Real-time zone status, efficiency gauges, live consumption display with animated WebGL tendrils |
| 🔔 **Optimize Now Modal** | Global 4-step AI optimization simulation accessible from any page |
| 📱 **Fully Responsive** | Mobile-first design with hamburger menu, adaptive grid layouts, and touch-friendly interactions |

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Vite](https://vitejs.dev/) 5.x — fast dev server and production bundler |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) (CDN) with custom eco-design token system |
| **Typography** | [Outfit](https://fonts.google.com/specimen/Outfit) via Google Fonts |
| **Icons** | [Material Symbols Outlined](https://fonts.google.com/icons) |
| **Visuals** | WebGL GLSL shader (energy flow animation on Overview page) |
| **Build** | Custom Node.js `build.js` static site generator (shared nav/footer/modal injection) |
| **CI/CD** | GitHub Actions (automated build verification on every push) |

---

## 🏗 Architecture

```
Enervia/
├── temp_stitch/              # Source HTML templates (edit these)
│   ├── energy_overview.html  # Main dashboard source
│   ├── hostel_map.html       # Floor plan + room inspector source
│   ├── savings_timeline.html # Chart + view switcher source
│   ├── ai_advisor.html       # AI recommendations source
│   └── sustainability_impact.html
│
├── build.js                  # Static site generator
│   # Injects: unified nav, footer, Tailwind config,
│   # Optimize Now modal, WebGL shader (index only),
│   # Room data + switchFloor() (hostel_map only)
│
├── index.html                # ← Built output (do not edit directly)
├── hostel_map.html           # ← Built output
├── savings_timeline.html     # ← Built output
├── ai_advisor.html           # ← Built output
├── sustainability_impact.html# ← Built output
│
├── agentation-mount.js       # AI agent integration
├── .github/
│   ├── workflows/ci.yml      # Automated CI pipeline
│   ├── ISSUE_TEMPLATE/       # Bug + feature templates
│   └── PULL_REQUEST_TEMPLATE.md
│
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
├── CHANGELOG.md
└── LICENSE
```

**Build Flow:**
```
temp_stitch/*.html
       │
       ▼
   build.js
  (inject nav, footer, Tailwind config, modal, page-specific scripts)
       │
       ▼
  *.html (root)  ←──  served by Vite dev server or static host
```

---

## 📄 Pages

| Route | Description |
|---|---|
| `/` (`index.html`) | Energy Overview — real-time consumption, zone status, efficiency score, WebGL animation |
| `/hostel_map.html` | Hostel Map — multi-floor SVG map, room inspector, appliance list, auto-shutoff |
| `/sustainability_impact.html` | Sustainability — SDG progress, CO₂ mitigation, economic savings, efficiency trajectory |
| `/ai_advisor.html` | AI Advisor — anomaly reports, system health gauge, protocol recommendations |
| `/savings_timeline.html` | Savings Timeline — Daily/Weekly/Monthly charts, KPIs, AI insights |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 20
- **npm** ≥ 10
- Git

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/indraaaa29/Enervia.git
cd Enervia

# 2. Install dependencies
npm install

# 3. Build all pages from source templates
npm run site-build

# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 💻 Local Development

**Workflow for editing pages:**

```bash
# 1. Edit source templates in temp_stitch/
#    e.g. temp_stitch/hostel_map.html

# 2. Rebuild to apply changes to output files
npm run site-build

# 3. Vite hot-reloads automatically
npm run dev
```

> ⚠️ **Important:** Always edit files in `temp_stitch/`, never the root HTML files directly — they are overwritten by `build.js`.

---

## 📦 Building

```bash
# Build all pages (static site generation)
npm run site-build

# Build production bundle (Vite)
npm run build

# Preview production build
npm run preview
```

---

## 🌍 SDG 7 Alignment

Enervia directly contributes to **UN Sustainable Development Goal 7: Affordable & Clean Energy**:

| SDG 7 Target | Enervia Feature |
|---|---|
| **7.3** — Double efficiency improvement rate | AI Advisor protocol recommendations targeting 14-22% efficiency gains |
| **7.2** — Increase renewable energy share | Carbon offset tracking and virtual canopy metrics |
| **7.a** — Facilitate clean energy research | Open-source codebase for academic and research use |

### Impact Metrics (Simulated Demo Data)
- 🌿 **14 trees** equivalent saved per semester
- 💨 **1,240 kg CO₂** prevented monthly
- 💰 **$3,450** accumulated savings
- ⚡ **25% improvement** in overall hostel efficiency since program launch

---

## 🗺 Roadmap

- [ ] **v1.1** — Real IoT sensor integration (MQTT / WebSocket)
- [ ] **v1.2** — User authentication + role-based access (admin / student / warden)
- [ ] **v1.3** — PDF energy report export
- [ ] **v2.0** — Multi-hostel management dashboard
- [ ] **v2.1** — React Native mobile app
- [ ] **v2.2** — Predictive maintenance AI alerts
- [ ] **v3.0** — Full backend API with historical data and trend forecasting

---

## 🤝 Contributing

Contributions are what make open source amazing! Please read our [Contributing Guide](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md) before opening a PR.

```bash
# Fork → Clone → Branch → Commit → Push → PR

git checkout -b feat/your-feature-name
git commit -m "feat(scope): add amazing feature"
git push origin feat/your-feature-name
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for full details on branching, commit conventions, and the PR checklist.

---

## 📜 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for full text.

---

<div align="center">

**Built with 💚 for a greener planet**

[GitHub](https://github.com/indraaaa29/Enervia) · [Issues](https://github.com/indraaaa29/Enervia/issues) · [Discussions](https://github.com/indraaaa29/Enervia/discussions)

*Enervia — Smarter Energy. Greener Living.*

</div>
