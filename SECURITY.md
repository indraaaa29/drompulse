# Security Policy

## Supported Versions

| Version | Supported |
|---------|-----------|
| 1.x     | ✅ Yes    |

## Reporting a Vulnerability

We take security seriously. If you discover a security vulnerability in Enervia, please do **not** open a public GitHub issue.

Instead, please report it responsibly:

1. **Open a private GitHub issue** at [https://github.com/indraaaa29/Enervia/issues](https://github.com/indraaaa29/Enervia/issues) — mark it as **confidential** if the option is available.
2. Include the following details:
   - A description of the vulnerability
   - Steps to reproduce the issue
   - Potential impact
   - Any suggested fix (optional)

## Response Timeline

- We will acknowledge your report within **72 hours**
- We aim to resolve critical vulnerabilities within **7 days**
- We will credit you in the release notes (unless you prefer anonymity)

## Scope

This is a static web application with no backend server or database. The primary security concerns are:

- Cross-site scripting (XSS) in any dynamic content rendering
- Insecure dependencies (reported via `npm audit`)
- Sensitive data exposure via client-side code

## Thank You

We appreciate responsible disclosure. Security researchers who help improve Enervia will be acknowledged in the project's `CHANGELOG.md`.
