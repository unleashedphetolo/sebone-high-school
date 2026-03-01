import React from "react";
import Card from "../components/common/Card";

export default function Facilities() {
  return (
    <section className="container" style={{ paddingTop: 28, paddingBottom: 40 }}>
      <h2 className="section-title">Facilities</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
        <Card>
          <h3>Learning Spaces</h3>
          <p style={{ opacity: 0.85 }}>
            Classrooms, labs, and spaces that support focused learning.
          </p>
        </Card>
        <Card>
          <h3>Library & Resources</h3>
          <p style={{ opacity: 0.85 }}>
            Reading, research, and digital learning access for learners.
          </p>
        </Card>
        <Card>
          <h3>Sport & Recreation</h3>
          <p style={{ opacity: 0.85 }}>
            Fields and courts that encourage participation and discipline.
          </p>
        </Card>
      </div>

      <p style={{ opacity: 0.85, marginTop: 16 }}>
        Replace these items with your real facilities list and photos.
      </p>
    </section>
  );
}
