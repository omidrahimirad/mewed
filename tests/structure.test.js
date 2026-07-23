import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const app = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
const header = readFileSync(
  new URL("../src/components/Header.jsx", import.meta.url),
  "utf8",
);
const data = readFileSync(
  new URL("../src/data/portfolio.js", import.meta.url),
  "utf8",
);
const visuals = readFileSync(
  new URL("../src/components/TechnicalVisuals.jsx", import.meta.url),
  "utf8",
);
const css = readFileSync(new URL("../src/styles.css", import.meta.url), "utf8");

describe("portfolio delivery contract", () => {
  it("keeps core metadata and the Netlify contact form", () => {
    expect(html).toContain('name="viewport"');
    expect(html).toContain('type="application/ld+json"');
    expect(html).toContain('name="contact"');
  });

  it("ships the four primary content routes and both languages", () => {
    for (const id of ["work", "experience", "capabilities", "contact"]) {
      expect(app).toContain(`id="${id}"`);
    }
    expect(data).toContain("en:");
    expect(data).toContain("de:");
    expect(data).toContain("/files/Omid_Rahimi_CV_EN.pdf");
    expect(data).toContain("/files/Omid_Rahimi_Lebenslauf_DE.pdf");
  });

  it("includes desktop, tablet, mobile, and reduced-motion behavior", () => {
    expect(css).toContain("@media (max-width: 52rem)");
    expect(css).toContain("@media (max-width: 36rem)");
    expect(css).toContain("@media (prefers-reduced-motion: reduce)");
    expect(css).toContain("overflow-x: hidden");
  });

  it("exposes keyboard and mobile navigation semantics", () => {
    expect(app).toContain('className="skip-link"');
    expect(header).toContain("aria-expanded={open}");
    expect(header).toContain('event.key === "Escape"');
    expect(header).toContain('window.matchMedia("(max-width: 70rem)")');
    expect(header).toContain('aria-current={activeSection === id ? "location"');
  });

  it("keeps public credentials aligned with the verified source material", () => {
    expect(data).not.toContain("O-RAN");
    expect(data).toContain("(in progress)");
    expect(data).toContain("(laufend)");
  });

  it("uses content-specific technical visuals without adding project claims", () => {
    for (const code of ["RF-01", "SA-02", "RCA-03", "VAL-04", "LOG-05"]) {
      expect(visuals).toContain(`"${code}"`);
    }
    expect(visuals).toContain("HeroSpectrum");
    expect(css).toContain("--color-secondary: #d08a2e");
    expect(css).toContain("@media (prefers-reduced-motion: reduce)");
  });
});
