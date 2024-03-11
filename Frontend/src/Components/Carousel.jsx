import React, { useState,useEffect } from 'react';
import '../Styles/Carousel.css'

const CarouselIndicators = ({ images, activeIndex, onClick }) => {
    return (
      <div className="carousel__indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`carousel__indicator ${
              index === activeIndex ? 'active' : ''
            }`}
            onClick={() => onClick(index)}
          />
        ))}
      </div>
    );
  };

const Carousel = ({ images,interval=3000, children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const autoPlayInterval = setInterval(nextSlide, interval);
    return () => {
      clearInterval(autoPlayInterval);
    };
  }, [interval]);
  return (
    <div className="carousel">
      <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
        &lt;
      </button>
      <img
        src={images[activeIndex]}
        alt={`Slide ${activeIndex}`}
        className="carousel__img"
      />

      <button onClick={nextSlide} className="carousel__btn carousel__btn--next">
        &gt;
      </button>

      {children}

      <CarouselIndicators
        images={images}
        activeIndex={activeIndex}
        onClick={goToSlide}
      />
    </div>
  );
};
export default Carousel;