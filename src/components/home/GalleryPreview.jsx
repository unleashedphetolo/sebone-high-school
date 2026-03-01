import React from "react";
import "../../styles/gallery.css";

export default function Gallery() {
  const items = [
    { id: 1, title: "ACADEMICS", img: "/images/gallery1.jpg" },
    { id: 2, title: "CULTURE", img: "/images/gallery2.avif" },
    { id: 3, title: "SPORTS", img: "/images/gallery4.jpg" },
    { id: 4, title: "STAFF", img: "/images/teachers.jpeg" },
  ];

  return (
    <section className="gallery">
      <div className="gallery-grid">
        {items.map((item) => (
          <div className="gallery-card" key={item.id}>
            <img src={item.img} alt={item.title} />
            <div className="gallery-overlay">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
