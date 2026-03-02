import React from "react";
import { Link } from "react-router-dom";
import "../../styles/admissions.css";
import Card from "../../components/common/Card";

export default function Requirements() {
  // const applicationForm = "/docs/admission-form.pdf";

  return (
    <main className="container" style={{ paddingTop: 28, paddingBottom: 40 }}>
      <h2 className="section-title">Entry Requirements</h2>

      <Card>
        <div style={{ maxWidth: 900, lineHeight: 1.7 }}>
          <p>
            M.O.M Sebone Secondary School welcomes applications from learners
            who are committed to academic excellence, discipline, and positive
            participation in school life. Admission is subject to available
            space and compliance with the school's admission policy.
          </p>

          <h3 style={{ marginTop: 20 }}>Required Documents</h3>
          <p>
            All applications must include the following certified documents:
          </p>

          <ul style={{ marginTop: 10, paddingLeft: 18 }}>
            <li>Certified copy of learner's birth certificate or ID</li>
            <li>Certified copy of parent/guardian ID</li>
            <li>Latest school report</li>
            <li>Proof of residential address</li>
            <li>Transfer letter from previous school (if applicable)</li>
            <li>Immunisation card (if available)</li>
          </ul>

          <h3 style={{ marginTop: 20 }}>Grade Admissions</h3>
          <p>
            Applications are primarily accepted for <strong>Grade 8</strong>,
            which is the entry level for the school. Applications for higher
            grades (Grades 9–12) may be considered depending on space
            availability.
          </p>

          <h3 style={{ marginTop: 20 }}>Application Process</h3>
          <ul style={{ paddingLeft: 18 }}>
            <li>Complete the official school application form.</li>
            <li>Submit all required supporting documents.</li>
            <li>
              Applications may be submitted online or at the school office.
            </li>
            <li>
              Parents will be contacted once the application has been reviewed.
            </li>
          </ul>

          <h3 style={{ marginTop: 20 }}>Important Notes</h3>
          <ul style={{ paddingLeft: 18 }}>
            <li>All documents must be certified.</li>
            <li>Incomplete applications may not be processed.</li>
            <li>Submission of an application does not guarantee admission.</li>
            <li>Admission decisions are subject to the school's capacity.</li>
          </ul>

          {/* ACTION BUTTONS */}
          <div
            style={{
              marginTop: 26,
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            {/* Apply Online */}
            <Link
              to="/admissions/apply"
              style={{
                padding: "11px 18px",
                borderRadius: 10,
                background: "#2a1b6b",
                color: "#fff",
                fontWeight: 800,
                textDecoration: "none",
              }}
            >
              Apply Online
            </Link>

            {/* Manual Application (Download PDF) */}
            <a
              href="/docs/admission-form.pdf"
              download
              style={{
                padding: "11px 18px",
                borderRadius: 10,
                background: "#0b3b8f",
                color: "#fff",
                fontWeight: 800,
                textDecoration: "none",
              }}
            >
              Manual Application (PDF)
            </a>

            {/* Optional: View PDF */}
            <a
              href="/docs/admission-form.pdf"
              target="_blank"
              rel="noreferrer"
              style={{
                padding: "11px 18px",
                borderRadius: 10,
                background: "#475569",
                color: "#fff",
                fontWeight: 800,
                textDecoration: "none",
              }}
            >
              View Form
            </a>
          </div>

          <p
            style={{
              marginTop: 12,
              color: "#64748b",
              fontSize: 13.5,
              lineHeight: 1.6,
            }}
          >
            You can apply online, or download the manual form, complete it, and
            submit it to the school office with the required certified
            documents.
          </p>
        </div>
      </Card>
    </main>
  );
}
