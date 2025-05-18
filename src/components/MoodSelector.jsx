// components/MoodSelector.jsx
import React from 'react';

const moods = [
  "Light & Wholesome",
  "Dreamy Romance",
  "Chaotic & Funny",
  "Heartbreak Recovery"
];

export default function MoodSelector({ onSelect }) {
  return (
    <div className="min-h-screen bg-blue-100 w-full flex flex-col items-center justify-center space-y-10 font-serif fixed top-0 left-0 right-0 bottom-0">
      <h1 className="text-5xl font-bold text-blue-800">Welcome Gauri</h1>
      <p className="text-lg text-blue-700">What mood romcom are you looking for?</p>
      <div className="flex flex-wrap justify-center gap-4">
        {moods.map((mood, index) => {
          const shades = ["bg-blue-200", "bg-blue-300", "bg-blue-400", "bg-blue-500"];
          const textColors = ["text-blue-800", "text-blue-900", "text-white", "text-white"];
          return (
            <button
              key={mood}
              onClick={() => onSelect(mood)}
              className={`${shades[index % shades.length]} ${textColors[index % textColors.length]} font-semibold py-2 px-5 rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg`}
            >
              {mood}
            </button>
          );
        })}
      </div>
    </div>
  );
}
