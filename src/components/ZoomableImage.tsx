"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image, { ImageProps } from "next/image";

export default function ZoomableImage(props: ImageProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Image
        {...props}
        width={props.width || 1200}
        height={props.height || 600}
        className={`w-full max-h-[500px] h-auto rounded-lg shadow-md my-6 object-contain cursor-zoom-in bg-transparent ${props.className || ""}`}
        alt={props.alt || ""}
        onClick={() => setOpen(true)}
      />
      {mounted &&
        open &&
        createPortal(
          <div
            className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 cursor-zoom-out"
            onClick={() => setOpen(false)}
          >
            <Image
              {...props}
              width={1600}
              height={900}
              className="max-w-[90%] max-h-[90%] rounded-lg object-contain"
              alt={props.alt || ""}
            />
          </div>,
          document.body
        )}
    </>
  );
}
