"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

export default function ZoomableImage(props: ImageProps) {
  const [open, setOpen] = useState(false);

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
      {open && (
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
        </div>
      )}
    </>
  );
}