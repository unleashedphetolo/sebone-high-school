import React from "react";
import Card from "../../components/common/Card";

export default function LifeAcademics() {
  return (
    <section className="container" style={{ paddingTop: 28, paddingBottom: 40 }}>
      <h2 className="section-title">Academics</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
        <Card>
          <h3>Subject Support</h3>
          <p style={{ opacity: 0.85 }}>
            Extra lessons, study groups and targeted revision to help learners improve.
          </p>
        </Card>
        <Card>
          <h3>Assessment Culture</h3>
          <p style={{ opacity: 0.85 }}>
            Clear expectations, consistent feedback, and exam preparation throughout the year.
          </p>
        </Card>
        <Card>
          <h3>Career Guidance</h3>
          <p style={{ opacity: 0.85 }}>
            Subject choices and pathways aligned to learner strengths and future goals.
          </p>
        </Card>
      </div>
    </section>
  );
}
