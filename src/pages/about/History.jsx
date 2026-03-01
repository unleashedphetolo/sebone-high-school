import React from "react";
import Card from "../../components/common/Card";

export default function History() {
  return (
    <section className="container" style={{ paddingTop: 28, paddingBottom: 40 }}>
      <h2 className="section-title">Our History</h2>

      <Card>
        <p style={{ opacity: 0.9 }}>
          This page is ready for your real school history text. Replace this paragraph with:
          founding year, milestones, achievements, principals over time, and major upgrades
          (classrooms, labs, sports grounds, awards, etc.).
        </p>
        <p style={{ opacity: 0.85, marginTop: 10 }}>
          Tip: If you send me your history text, I’ll format it professionally into sections and timelines.
        </p>
      </Card>
    </section>
  );
}
