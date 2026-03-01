import React from "react";
import "../../styles/admissions.css";
import Card from "../../components/common/Card";

export default function Requirements() {
  return (
    <main className="container" style={{ paddingTop: 28, paddingBottom: 40 }}>
      <h2 className="section-title">Entry Requirements</h2>

      <Card>
        <p style={{ opacity: 0.9 }}>
          Add your official entry requirements here (per grade): documents, deadlines, zoning, and any special criteria.
        </p>
        <ul style={{ marginTop: 10, paddingLeft: 18, opacity: 0.88 }}>
          <li>Certified copy of learner birth certificate / ID</li>
          <li>Certified copy of parent/guardian ID</li>
          <li>Latest school report</li>
          <li>Proof of address</li>
          <li>Transfer letter (if applicable)</li>
        </ul>
      </Card>
    </main>
  );
}
