import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const app = readFileSync(new URL("../src/main.jsx", import.meta.url), "utf8");
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
    expect(app).toContain("en:");
    expect(app).toContain("de:");
  });

  it("includes desktop, tablet, mobile, and reduced-motion behavior", () => {
    expect(css).toContain("@media (max-width: 900px)");
    expect(css).toContain("@media (max-width: 620px)");
    expect(css).toContain("@media (prefers-reduced-motion: reduce)");
    expect(css).toContain("overflow-x: hidden");
  });
});
