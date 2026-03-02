import React from "react";
import Card from "../../components/common/Card";

export default function TermPlan() {

  const pdfPath = "/docs/term-plan.pdf";

  return (
    <section
      className="container"
      style={{ paddingTop: 28, paddingBottom: 40 }}
    >
      <h2 className="section-title">Academic Term Plan</h2>

      <Card>
        <div style={{ maxWidth: 850 }}>
          
          <p style={{ opacity: 0.9, lineHeight: 1.6 }}>
            The Academic Term Plan provides important information regarding
            school opening and closing dates, examination periods, holidays,
            and other key academic activities for the year.
          </p>

          <p style={{ opacity: 0.9, lineHeight: 1.6 }}>
            Learners, parents, and staff are encouraged to download or view the
            official term plan document for detailed scheduling and planning
            throughout the academic year.
          </p>

          {/* Buttons */}
          <div
            style={{
              marginTop: 18,
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            {/* View */}
            <a
              href={pdfPath}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{
                padding: "10px 16px",
                borderRadius: 8,
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              View Term Plan
            </a>

            {/* Download */}
            <a
              href={pdfPath}
              download
              className="btn-secondary"
              style={{
                padding: "10px 16px",
                borderRadius: 8,
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Download PDF
            </a>
          </div>
        </div>
      </Card>
    </section>
  );
}