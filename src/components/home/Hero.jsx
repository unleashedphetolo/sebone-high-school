import React, { useEffect, useRef, useState } from "react";
import "../../styles/hero.css";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    type: "image",
    src: "/images/gallery3.png",
    alt: "Learners in classroom",
    title: "Academic Excellence",
    subtitle: "High standards, caring teachers",
  },
  {
    id: 2,
    type: "image",
    src: "/images/academics/acade14.jpg",
    alt: "School awards and trophies",
    title: "Achievement & Pride",
    subtitle: "Celebrating achievement across all grades",
  },
  {
    id: 3,
    type: "image",
    src: "/images/gallery4.jpg",
    alt: "Students on campus",
    title: "Community & Spirit",
    subtitle: "A safe, supportive learning environment",
  },
  {
    id: 4,
    type: "video",
    src: "/images/acade1.mp4",
    poster: "/images/hero1.jpg",
    alt: "School introduction video",
    title: "Welcome Video",
    subtitle: "Discover M.O.M Sebone Secondary School",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const autoplayRef = useRef(null);
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  // Autoplay logic
  useEffect(() => {
    startAutoplay();
    function onKey(e) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => {
      stopAutoplay();
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, isPaused, isVideoPlaying]);

  const startAutoplay = () => {
    if (autoplayRef.current) return;
    if (isPaused || isVideoPlaying) return;
    autoplayRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 2000); // 5 seconds
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  // Pause on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
    stopAutoplay();
  };
  const handleMouseLeave = () => {
    setIsPaused(false);
    if (!isVideoPlaying) startAutoplay();
  };

  const goTo = (i) => {
    setIndex(i);
    // if jumping to video slide, pause autoplay
    if (slides[i].type === "video") {
      stopAutoplay();
    } else if (!isPaused && !isVideoPlaying) {
      startAutoplay();
    }
  };

  const prev = () => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  };
  const next = () => {
    setIndex((i) => (i + 1) % slides.length);
  };

  const handleVideoPlay = async () => {
    if (!videoRef.current) return;
    try {
      await videoRef.current.play();
      setIsVideoPlaying(true);
      stopAutoplay();
    } catch (err) {
      // autoplay policies may block play; leave as is
    }
  };

  const handleVideoPause = () => {
    setIsVideoPlaying(false);
    if (!isPaused) startAutoplay();
  };

  // When switching slides, if the new slide is video, show controls; otherwise pause video
  useEffect(() => {
    const current = slides[index];
    if (current.type !== "video" && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsVideoPlaying(false);
    } else if (current.type === "video") {
      stopAutoplay();
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <section
      className="hero hero-carousel"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
      aria-roledescription="carousel"
      aria-label="M.O.M Sebone Secondary School highlights"
    >
      <div className="slides">
        {slides.map((s, i) => {
          const active = i === index;
          return (
            <div
              key={s.id}
              className={`slide ${active ? "active" : ""}`}
              aria-hidden={!active}
            >
              {s.type === "image" ? (
                <div
                  className="slide-media"
                  style={{
                    backgroundImage: `url(${s.src})`,
                  }}
                >
                  <img
                    src={s.src}
                    alt={s.alt}
                    loading="lazy"
                    className="visually-hidden"
                    aria-hidden="true"
                  />
                </div>
              ) : (
                <div className="slide-media video-wrap">
                  <video
                    ref={videoRef}
                    className="hero-video"
                    src={s.src}
                    poster={s.poster}
                    muted
                    autoPlay
                    playsInline
                    preload="auto"
                    onPlay={handleVideoPlay}
                    onPause={handleVideoPause}
                    onEnded={() => {
                      setIsVideoPlaying(false);
                      setIndex((i) => (i + 1) % slides.length); // ★ go to next slide
                      startAutoplay(); // ★ continue slideshow
                    }}
                    aria-label={s.alt}
                  />
                </div>
              )}

              <div className="slide-caption container">
                <h2>{s.title}</h2>
                <p className="subtitle">{s.subtitle}</p>

                <div className="cta-row">
                  <Link to="/admissions" className="btns primary">
                    Admissions
                  </Link>

                  <a href="/about/who-we-are" className="btns ghost">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <button
        className="carousel-btn prev"
        onClick={prev}
        aria-label="Previous slide"
        title="Previous"
      >
        ‹
      </button>
      <button
        className="carousel-btn next"
        onClick={next}
        aria-label="Next slide"
        title="Next"
      >
        ›
      </button>

      {/* Indicators */}
      <div className="indicators" role="tablist" aria-label="Slide indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`indicator ${i === index ? "active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            role="tab"
            aria-selected={i === index}
            tabIndex={0}
          />
        ))}
      </div>
    </section>
  );
}
