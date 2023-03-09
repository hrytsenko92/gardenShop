import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface Props {
  slides: string[];
}

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 98px;
  overflow: hidden;
`;

const SlideContainer = styled.div<{ index: number }>`
  position: absolute;
  top: 0;
  left: ${({ index }) => `${index * 100}%`};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  transition-duration: 1.5s;
  text-align: center;
`;

const Carousel: React.FC<Props> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <CarouselContainer>
      {slides.map((slide, index) => (
        <SlideContainer key={index} index={index - currentSlide}>
          {slide}
        </SlideContainer>
      ))}
    </CarouselContainer>
  );
};

export default Carousel;
