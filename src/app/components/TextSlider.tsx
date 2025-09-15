"use client";
import { useState } from "react";
import { testimonials } from "../data/testimonials";

export default function TextSlider(): JSX.Element {
  // Ensure TypeScript knows this is a number
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Safe navigation function
  const changeSlide = (direction: number) => {
    if (!testimonials || testimonials.length === 0) return; // prevent errors
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = testimonials.length - 1;
    if (newIndex >= testimonials.length) newIndex = 0;
    setCurrentIndex(newIndex);
  };

  // Early return if no testimonials
  if (!testimonials || testimonials.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <p className="text-gray-500 text-lg">No testimonials available.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-black">
      {/* Testimonial card */}
      <div className="max-w-xl w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <p className="text-gray-800 text-lg sm:text-xl italic">
          {testimonials[currentIndex] ?? "No testimonial"}
        </p>
      </div>

      {/* Navigation buttons */}
      <div className="flex mt-6 space-x-4">
        <button
          onClick={() => changeSlide(-1)}
          className="px-4 py-2 bg-pink-300 text-white rounded hover:bg-pink-600 transition"
        >
          Previous
        </button>
        <button
          onClick={() => changeSlide(1)}
          className="px-4 py-2 bg-pink-300 text-white rounded hover:bg-pink-600 transition"
        >
          Next
        </button>
      </div>

      {/* Slide indicator */}
      <div className="mt-3 text-white text-sm">
        Testimonial {currentIndex + 1} of {testimonials.length}
      </div>
    </div>
  );
}
