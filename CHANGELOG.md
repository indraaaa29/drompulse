# Changelog

All notable changes to **Enervia** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] — 2026-06-13

### 🎉 Initial Production Release

#### Added
- **Energy Overview Dashboard** — Real-time energy consumption monitoring with animated SVG tendril visualization, zone status cards, and efficiency rating gauge
- **Hostel Map** — Interactive multi-floor (1/2/3) SVG floor plan with per-room appliance inspector, live occupancy data, and auto-shutoff trigger
- **Savings Timeline** — Interactive chart with working Daily / Weekly / Monthly view switcher, KPI cards, and AI insight panels
- **AI Advisor** — Bento-grid layout for high-priority anomaly alerts, system health gauge (94%), and protocol revision recommendations with authorize actions
- **Sustainability Impact** — SDG 7/11/13 progress indicators, virtual canopy CO₂ metrics, economic symbiosis panel, and efficiency trajectory chart
- **Shared Build Pipeline** — `build.js` static site generator injecting unified nav, footer, Tailwind config, Optimize Now modal, and WebGL shader into all pages
- **Global Optimize Now Modal** — Animated 4-step energy optimization simulation accessible from every page
- **Mobile Navigation** — Responsive hamburger menu with dropdown on all pages
- **Enervia Branding** — Full rebrand: logo, nav, footer, meta, page titles, and all copy updated from legacy name

#### Infrastructure
- Vite-based development server and production build
- `build.js` pipeline for multi-page static site generation
- Professional `README.md` with badges, architecture overview, feature table, and setup guide
- MIT `LICENSE`
- `CONTRIBUTING.md` with branch strategy and conventional commit guide
- `CODE_OF_CONDUCT.md` (Contributor Covenant v2.1)
- `SECURITY.md` with responsible disclosure policy
- `.github/ISSUE_TEMPLATE/` for bug reports and feature requests
- `.github/PULL_REQUEST_TEMPLATE.md`
- `.github/workflows/ci.yml` for automated build verification on push/PR

#### Fixed
- Removed `console.log` debug call from `hostel_map.html` `selectRoom` function
- Fixed duplicate Material Symbols CDN `<link>` on every page
- Fixed non-functional Weekly / Monthly view buttons in Savings Timeline
- Removed `darkMode: "class"` from all Tailwind configs
- Removed legacy pages: `dormpulse_flow.html`, `room_insights.html`, `shader.html`, `sdg7_goals.html`
- Removed internal tooling scripts (`download.js`, `download.ps1`) from tracked files
- Updated copyright year from 2024 → 2026

---

## [Unreleased]

- Real backend API integration for live occupancy data
- WebSocket-based real-time energy meter updates
- Multi-hostel management dashboard
- User authentication and role-based access control
- Mobile app (React Native)
- Export energy reports as PDF
