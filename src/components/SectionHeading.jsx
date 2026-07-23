export function SectionHeading({ intro, label, title }) {
  return (
    <header className="section-heading">
      <p className="section-label">{label}</p>
      <div className="section-heading-copy">
        <h2>{title}</h2>
        {intro ? <p className="section-intro">{intro}</p> : null}
      </div>
    </header>
  );
}
