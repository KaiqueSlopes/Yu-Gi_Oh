import { useState, useEffect } from "react";
import "./Banner.css";

export const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "./src/components/assets/banner/banner1.jpg",
      alt: "Banner 1",
    },
    {
      id: 2,
      image: "./src/components/assets/banner/banner2.jpg",
      alt: "Banner 2",
    },
    {
      id: 3,
      image: "./src/components/assets/banner/banner3.jpg",
      alt: "Banner 3",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="banner">
      <div
        className="banner-slides"
        style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="banner-slide">
            <img src={slide.image} alt={slide.alt} className="banner-image" />
          </div>
        ))}
      </div>

      <button className="banner-prev" onClick={goToPrev}>
        ‹
      </button>

      <button className="banner-next" onClick={goToNext}>
        ›
      </button>

      <div className="banner-controls">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`banner-dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};
