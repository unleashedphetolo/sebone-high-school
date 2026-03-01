import React from "react";
import Card from "../../components/common/Card";

export default function TermPlan() {
  return (
    <section className="container" style={{ paddingTop: 28, paddingBottom: 40 }}>
      <h2 className="section-title">Term Plan</h2>
      <Card>
        <p style={{ opacity: 0.9 }}>
          Upload the term plan (PDF/image) and link it here. This page is already wired in the navbar.
        </p>
      </Card>
    </section>
  );
}
