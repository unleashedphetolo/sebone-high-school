import React from "react";
import LatestNews from "../components/home/LatestNews";
// import QuickLinks from "../components/home/QuickLinks";

export default function News() {
  return (
    <div className="container" style={{ paddingTop: 28 }}>
      <h2 className="section-title">Latest News</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 20 }}>
        <LatestNews />
        {/* <QuickLinks /> */}
      </div>
    </div>
  );
}
