import React from "react";
import Card from "../../components/common/Card";

export default function LifeSports() {
  return (
    <section className="container" style={{ paddingTop: 28, paddingBottom: 40 }}>
      <h2 className="section-title">Sports & Recreation</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
        <Card>
          <h3>Team Sports</h3>
          <p style={{ opacity: 0.85 }}>
            Structured training, fixtures and school spirit that builds teamwork and confidence.
          </p>
        </Card>
        <Card>
          <h3>Fitness & Wellness</h3>
          <p style={{ opacity: 0.85 }}>
            Physical education and activities that support a healthy learner lifestyle.
          </p>
        </Card>
        <Card>
          <h3>Participation</h3>
          <p style={{ opacity: 0.85 }}>
            Opportunities for all learners to take part, improve skills, and represent the school.
          </p>
        </Card>
      </div>
    </section>
  );
}
