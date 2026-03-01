import React from "react";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";

export default function LifeFacilities() {
  return (
    <section className="container" style={{ paddingTop: 28, paddingBottom: 40 }}>
      <h2 className="section-title">Campus Facilities</h2>

      <Card>
        <p style={{ opacity: 0.9 }}>
          This page lists the facilities that support learning and activities: classrooms, labs, library, sports grounds, etc.
          You can edit this content with your real facility list.
        </p>
        <div style={{ marginTop: 12 }}>
          <Button to="/facilities" variant="outline">See full facilities page</Button>
        </div>
      </Card>
    </section>
  );
}
