import React, { useState, useEffect } from "react";
import "./Slideshow.css";
import slide1 from "../../Images/slide1.jpg";
import slide2 from "../../Images/slide2.jpg";
import slide3 from "../../Images/slide3.jpg";

const Slideshow = () => {
  const slides = [
    { id: 1, src: slide1 },
    { id: 2, src: slide2 },
    { id: 3, src: slide3 },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 15000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentSlide ? "active" : ""}`}
        >
          <img src={slide.src} alt={`Slide ${slide.id}`} />
        </div>
      ))}
      <button className="slide-prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="slide-next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Slideshow;