import React from "react";
import Card from "../../components/common/Card";

export default function LifeCulture() {
  return (
    <section className="container" style={{ paddingTop: 28, paddingBottom: 40 }}>
      <h2 className="section-title">Culture & Activities</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
        <Card>
          <h3>Leadership</h3>
          <p style={{ opacity: 0.85 }}>
            Learner leadership programmes that promote responsibility and discipline.
          </p>
        </Card>
        <Card>
          <h3>Clubs</h3>
          <p style={{ opacity: 0.85 }}>
            Clubs and activities for creativity, problem-solving and community participation.
          </p>
        </Card>
        <Card>
          <h3>Events</h3>
          <p style={{ opacity: 0.85 }}>
            School events that strengthen unity, pride, and learner confidence.
          </p>
        </Card>
      </div>
    </section>
  );
}
