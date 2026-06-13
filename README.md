# ⚡ Enervia

**Smarter Energy. Greener Living.**

Enervia is an AI-powered smart hostel energy management platform that monitors occupancy, automates appliance control, and visualizes energy consumption — empowering hostel administrators to drive sustainability aligned with **UN SDG 7: Affordable and Clean Energy**.

---

## 🌿 Overview

Enervia provides hostel managers with a real-time, data-driven dashboard to understand, optimize, and reduce energy consumption across their facilities. Through intelligent occupancy sensing, per-room appliance control, and actionable AI insights, Enervia makes sustainable energy management effortless.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🏠 **Energy Overview** | Real-time energy usage visualization with animated WebGL flow shader for immersive data display |
| 🗺️ **Interactive Hostel Map** | Multi-floor room inspector with per-appliance control, auto-shutoff triggers, and occupancy status |
| 📈 **Savings Timeline** | Weekly and monthly energy consumption trend charts with cost savings projections |
| 🤖 **AI Advisor** | Context-aware energy optimization recommendations with one-click authorize-and-apply actions |
| 🌍 **Sustainability Impact** | SDG 7-aligned impact tracker showing carbon offsets, renewable energy share, and community progress |

---

## 🛠️ Tech Stack

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Build Tool**: [Vite](https://vitejs.dev/) `^5.0`
- **Build Pipeline**: Custom `build.js` Node.js script for templating and asset injection
- **AI Assistant**: [Agentation](https://agentation.dev/) `^3.0` — in-browser AI agent overlay
- **Design**: Material Design 3 tokens, Outfit & Inter Google Fonts, CSS custom properties

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) `>=18.x`
- npm `>=9.x`

### Installation

```bash
# Clone the repository
git clone https://github.com/indraaaa29/drompulse.git
cd drompulse

# Install dependencies
npm install
```

### Development

```bash
# Start the local development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
# Rebuild all HTML pages from source templates
npm run site-build

# Build production bundle
npm run build
```

---

## 📁 Project Structure

```
enervia/
├── temp_stitch/            # Source HTML page templates
│   ├── energy_overview.html
│   ├── hostel_map.html
│   ├── savings_timeline.html
│   ├── ai_advisor.html
│   └── sustainability_impact.html
├── index.html              # Built: Energy Overview (home)
├── hostel_map.html         # Built: Interactive Map
├── savings_timeline.html   # Built: Savings Timeline
├── ai_advisor.html         # Built: AI Advisor
├── sustainability_impact.html # Built: Sustainability Impact
├── build.js                # Build pipeline: injects nav, footer, scripts
├── agentation-mount.js     # Agentation AI agent mount script
├── package.json
└── vite.config.js (auto-generated)
```

---

## 🎨 Design System

Enervia uses a custom eco-inspired design language:

- **Primary**: Leaf Green `#006e2f`
- **Secondary**: Ocean Blue `#00668a`
- **Background**: Soft Greenish-Beige `#f8faf4`
- **Typography**: [Outfit](https://fonts.google.com/specimen/Outfit) (headings), [Inter](https://fonts.google.com/specimen/Inter) (body)
- **Principles**: Glassmorphism cards, micro-animations, responsive layout, accessibility-first

---

## 🌐 Pages

| Route | Page |
|---|---|
| `/` | Energy Overview Dashboard |
| `/hostel_map.html` | Interactive Floor Map |
| `/savings_timeline.html` | Energy Savings Timeline |
| `/ai_advisor.html` | AI Energy Advisor |
| `/sustainability_impact.html` | Sustainability Impact |

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'feat: add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 🌱 SDG Alignment

Enervia directly supports:
- **SDG 7** – Affordable and Clean Energy
- **SDG 11** – Sustainable Cities and Communities
- **SDG 13** – Climate Action

---

*Built with 💚 for a greener, smarter future.*
