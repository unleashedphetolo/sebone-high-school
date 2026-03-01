import React from "react";
import Card from "../../components/common/Card";

export default function StationaryList() {
  return (
    <section className="container" style={{ paddingTop: 28, paddingBottom: 40 }}>
      <h2 className="section-title">Stationary List</h2>
      <Card>
        <p style={{ opacity: 0.9 }}>
          Add the required stationary list for each grade. You can format it as a table or bullet list.
        </p>
      </Card>
    </section>
  );
}
