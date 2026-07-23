const schematicPaths = {
  "RF-01": (
    <>
      <path d="M12 58 C32 34 52 34 72 58 S112 82 132 58" />
      <path d="M20 58 C38 42 52 42 68 58" className="schematic-secondary" />
      <circle cx="12" cy="58" r="4" />
      <circle cx="72" cy="58" r="4" />
      <circle cx="132" cy="58" r="4" />
      <path d="M12 70 H132" className="schematic-grid" />
    </>
  ),
  "SA-02": (
    <>
      <rect x="8" y="43" width="24" height="24" />
      <rect x="60" y="29" width="28" height="28" />
      <rect x="112" y="43" width="24" height="24" />
      <path d="M32 55 H60 M88 43 L112 51 M88 55 L112 59" />
      <circle cx="74" cy="43" r="4" className="schematic-secondary" />
      <path d="M20 35 V22 M14 28 Q20 22 26 28" className="schematic-secondary" />
    </>
  ),
  "RCA-03": (
    <>
      <path d="M10 58 H136" />
      <circle cx="22" cy="58" r="5" />
      <circle cx="58" cy="58" r="5" />
      <circle cx="94" cy="58" r="5" />
      <circle cx="130" cy="58" r="5" />
      <path d="M22 58 V34 H58 V48 H94 V24 H130 V42" className="schematic-secondary" />
      <path d="M10 76 H136" className="schematic-grid" />
    </>
  ),
  "VAL-04": (
    <>
      <path d="M12 34 H48 V76 H84 V34 H132" />
      <path d="M24 55 L34 65 L52 43" className="schematic-secondary" />
      <path d="M94 55 L104 65 L122 43" className="schematic-secondary" />
      <circle cx="12" cy="34" r="4" />
      <circle cx="132" cy="34" r="4" />
    </>
  ),
  "LOG-05": (
    <>
      <path d="M24 20 V78 M74 20 V78 M124 20 V78" className="schematic-grid" />
      <path d="M24 31 H74 L124 43 M124 55 H74 L24 67" />
      <circle cx="24" cy="31" r="4" />
      <circle cx="74" cy="31" r="4" />
      <circle cx="124" cy="43" r="4" />
      <circle cx="124" cy="55" r="4" className="schematic-secondary" />
      <circle cx="74" cy="55" r="4" className="schematic-secondary" />
      <circle cx="24" cy="67" r="4" className="schematic-secondary" />
    </>
  ),
};

export function HeroSpectrum() {
  return (
    <svg
      className="hero-spectrum"
      viewBox="0 0 1200 620"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <g className="spectrum-grid">
        {[120, 240, 360, 480, 600, 720, 840, 960, 1080].map((x) => (
          <line x1={x} y1="70" x2={x} y2="560" key={x} />
        ))}
        {[140, 240, 340, 440, 540].map((y) => (
          <line x1="40" y1={y} x2="1160" y2={y} key={y} />
        ))}
      </g>
      <path
        className="spectrum-trace"
        d="M40 500 C105 500 114 492 165 490 C225 487 228 444 274 442 C322 440 331 494 392 490 C454 486 466 365 520 360 C577 354 585 489 650 486 C712 483 726 284 792 278 C856 272 866 483 925 480 C980 477 992 399 1034 396 C1080 392 1092 476 1160 472"
      />
      <path
        className="spectrum-trace-secondary"
        d="M40 520 C176 515 220 513 332 510 C460 506 525 499 626 502 C768 506 858 494 1160 500"
      />
      <g className="spectrum-nodes">
        <circle cx="274" cy="442" r="6" />
        <circle cx="520" cy="360" r="6" />
        <circle cx="792" cy="278" r="6" />
        <circle cx="1034" cy="396" r="6" />
      </g>
    </svg>
  );
}

export function ProjectSchematic({ code }) {
  return (
    <div className="project-schematic" aria-hidden="true">
      <svg viewBox="0 0 144 96" preserveAspectRatio="xMidYMid meet">
        {schematicPaths[code]}
      </svg>
      <span>signal path / {code}</span>
    </div>
  );
}
