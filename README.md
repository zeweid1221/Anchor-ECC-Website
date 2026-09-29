# Anchor-ECC Website

Static companion website for *Anchor-ECC: Local Integrity Checking for Watermarked LLM Outputs via Error-Correcting Codes*.

## Scope

This repository contains only the website source, static figures, and paper-reported display data. It does not contain the Anchor-ECC implementation, experiment runners, model artifacts, or private result archives. The interactive walkthrough replays static examples and does not execute watermark generation or detection.

## Development

```bash
npm ci
npm run dev
```

Create a production build with:

```bash
npm run build
```

The generated `dist/` directory is intentionally excluded from version control.
