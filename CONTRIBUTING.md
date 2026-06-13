# Contributing to Enervia

Thank you for your interest in contributing to **Enervia** — an AI-powered smart hostel energy management platform! Your contributions help us build a more sustainable future aligned with UN SDG 7: Affordable & Clean Energy.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Branching Strategy](#branching-strategy)
- [Commit Convention](#commit-convention)
- [Pull Request Process](#pull-request-process)
- [Reporting Bugs](#reporting-bugs)
- [Requesting Features](#requesting-features)

---

## Code of Conduct

This project adheres to the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

---

## Getting Started

1. **Fork** the repository on GitHub
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Enervia.git
   cd Enervia
   ```
3. **Install** dependencies:
   ```bash
   npm install
   ```
4. **Start** the development server:
   ```bash
   npm run dev
   ```

---

## Development Setup

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server at `http://localhost:5173` |
| `npm run site-build` | Rebuild all HTML pages from source templates |
| `npm run build` | Create production bundle |
| `npm run preview` | Preview production build |

**Source files** live in `temp_stitch/` — edit these, then run `npm run site-build` to regenerate output HTML files.

---

## Branching Strategy

Use the following branch prefixes:

| Prefix | Use case |
|---|---|
| `feat/` | New features or UI improvements |
| `fix/` | Bug fixes |
| `docs/` | Documentation updates |
| `chore/` | Build, config, or dependency changes |
| `refactor/` | Code restructuring without behavior change |

Example: `feat/add-sdg7-progress-tracker`

---

## Commit Convention

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `chore`, `perf`

**Examples:**
```
feat(hostel-map): add real-time room occupancy indicator
fix(savings-timeline): resolve weekly view button not responding
docs(readme): add architecture diagram and screenshots
chore(ci): add GitHub Actions build verification
```

---

## Pull Request Process

1. Ensure all existing functionality still works (`npm run site-build` completes without errors)
2. Update the relevant documentation if your change affects usage
3. Verify no `console.log` debug calls are left in your code
4. Test on mobile, tablet, and desktop viewports
5. Fill in the PR template completely
6. Request a review from a maintainer

---

## Reporting Bugs

Use the [Bug Report](.github/ISSUE_TEMPLATE/bug_report.md) issue template. Include:

- Steps to reproduce
- Expected vs actual behavior
- Browser and OS version
- Screenshots if applicable

---

## Requesting Features

Use the [Feature Request](.github/ISSUE_TEMPLATE/feature_request.md) template. Bonus points for:

- Describing how it aligns with SDG 7 goals
- Mocking up the proposed UI
- Explaining the energy-saving impact

---

## Questions?

Open a [Discussion](https://github.com/indraaaa29/Enervia/discussions) — we're happy to help!
