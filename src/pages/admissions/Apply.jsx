import React from "react";
import "../../styles/admissions.css";
import Button from "../../components/common/Button";

export default function Apply() {
  return (
    <main className="admissions container" style={{ paddingTop: 28 }}>
      <header className="admissions-hero">
        <div className="hero-left">
          <h1 className="hero-title">How to Apply</h1>
          <p className="hero-sub">
            Follow the steps below and prepare your documents. Our team will guide you if you need help.
          </p>
        </div>
        <div className="hero-cta">
          <Button href="#apply" variant="primary">Start Application</Button>
        </div>
      </header>

      <section className="admission-grid" id="apply">
        <article className="admission-card">
          <h2 className="card-title">Application Steps</h2>
          <ol className="process">
            <li>Collect required documents (IDs, report, proof of address, etc.).</li>
            <li>Complete the application form (online or at the school).</li>
            <li>Submit documents and confirm receipt.</li>
            <li>Wait for feedback and placement confirmation.</li>
          </ol>
        </article>

        <aside className="admission-card">
          <h2 className="card-title">Need Help?</h2>
          <p className="lead">
            Visit the school office or contact us. We can assist with the application process.
          </p>
          <Button to="/contact" variant="outline">Contact the school</Button>
        </aside>
      </section>
    </main>
  );
}
