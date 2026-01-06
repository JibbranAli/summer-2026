"use client";
import React from 'react';

const MapScroll = () => {
  // Dummy content boxes - static instead of scrolling
  const dummyBoxes = [
    { title: "Student Gallery 1", description: "Placeholder content" },
    { title: "Student Gallery 2", description: "Placeholder content" },
    { title: "Student Gallery 3", description: "Placeholder content" },
  ];

  return (
    <div className="relative bg-black py-4">
      <div className="flex flex-wrap gap-4 justify-center">
        {dummyBoxes.map((box, index) => (
          <div
            key={index}
            className="w-48 h-32 flex-shrink-0 border border-gray-600 rounded-lg shadow-md p-4 hover:scale-105 transition-transform duration-300 bg-gray-800"
          >
            <div className="w-full h-full flex flex-col items-center justify-center text-center">
              <h4 className="text-white text-sm font-semibold mb-2">{box.title}</h4>
              <p className="text-gray-400 text-xs">{box.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapScroll;