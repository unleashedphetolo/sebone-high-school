import React from "react";
import Card from "../../components/common/Card";

export default function WhoWeAre() {
  return (
    <section className="container" style={{ paddingTop: 28, paddingBottom: 40 }}>
      <h2 className="section-title">Who We Are</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
        <Card>
          <h3>Our Community</h3>
          <p style={{ opacity: 0.85 }}>
            We are a learner-centred secondary school committed to discipline, respect and
            academic achievement, supported by teachers, parents and community partners.
          </p>
        </Card>

        <Card>
          <h3>Our Leadership</h3>
          <p style={{ opacity: 0.85 }}>
            Leadership at Sebone promotes quality teaching, strong learner support, and
            transparent collaboration with parents and stakeholders.
          </p>
        </Card>

        <Card>
          <h3>What We Believe</h3>
          <p style={{ opacity: 0.85 }}>
            Every learner can succeed with the right guidance, consistent effort, and a safe
            environment that builds confidence and character.
          </p>
        </Card>
      </div>
    </section>
  );
}
