import React, { FC, ReactNode, useState, useRef } from "react";
import Arrow from "@/styles/images/icons/arrow.svg";

interface SliderProps {
  children: ReactNode[];
}

export const Slider: FC<SliderProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const contentWidth = 232;
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const slidesInView = Math.floor(containerWidth / contentWidth);
      setCurrentIndex((prevIndex) => Math.max(prevIndex - slidesInView, 0));
    }
  };

  const handleNext = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const slidesInView = Math.floor(containerWidth / contentWidth);
      setCurrentIndex((prevIndex) =>
        Math.min(prevIndex + slidesInView, children.length - slidesInView)
      );
    }
  };

  return (
    <div className="relative overflow-hidden" ref={containerRef}>
      <div
        className="flex gap-4 transition-transform duration-300"
        style={{
          transform: `translateX(-${currentIndex * contentWidth}px)`,
        }}
      >
        {children.map((child, index) => (
          <div
            key={index}
            className="flex-shrink-0  flex justify-center items-center"
            style={{ width: contentWidth }}
          >
            {child}
          </div>
        ))}
      </div>
      {currentIndex > 0 && (
        <button
          className="hover:bg-black-accent hover:text-white-main transition absolute left-3 top-1/2 transform -translate-y-1/2  p-2 rounded-full shadow-md bg-white-main"
          onClick={handlePrev}
        >
          <Arrow className="rotate-180" />
        </button>
      )}
      {currentIndex <= children.length - 4 && (
        <button
          className="hover:bg-black-accent hover:text-white-main transition absolute right-3 top-1/2 transform -translate-y-1/2 p-2 rounded-full shadow-md bg-white-main mg:hidden"
          onClick={handleNext}
        >
          <Arrow />
        </button>
      )}
    </div>
  );
};
