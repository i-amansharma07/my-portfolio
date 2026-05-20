"use client";

import { useState } from "react";
import { Maximize2 } from "lucide-react";

export interface ClickType {
  title: string;
  image: string;
  description: string;
  year: string;
}

export default function ClickCard({ click }: { click: ClickType }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div className="relative group overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
        <img
          className="w-full h-auto object-cover"
          src={click.image}
          alt={click.title}
        />

        {/* Maximize Icon */}
        <div
          className="absolute top-2 right-2 sm:opacity-0 group-hover:opacity-100  transition-opacity duration-300 cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <Maximize2 className="w-6 h-6 text-white drop-shadow" />
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm transition-transform duration-300"
          onClick={() => setIsOpen(false)} // close on backdrop click
        >
          <div
            className="relative max-w-5xl w-full mx-4 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()} // prevent close on modal click
          >
            {/* Image */}
            <img
              src={click.image}
              alt={click.title}
              className="max-h-[80vh] w-auto object-contain rounded-lg shadow-lg"
            />

            {/* Description */}
            <div className="mt-4 text-center text-gray-200 max-w-3xl">
              <h2 className="text-xl font-semibold text-black dark:text-white">
                {click.title}
              </h2>
              <p className="mt-2 text-sm  text-light-dim dark:text-dark-dim">
                {click.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}