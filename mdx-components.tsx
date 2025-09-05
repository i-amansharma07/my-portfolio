"use client";

import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    wrapper: ({ children }) => (
      <article
        className={`${inter.className} prose prose-lg dark:prose-invert max-w-none antialiased`}
      >
        {children}
      </article>
    ),
    h1: ({ children }) => (
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 text-balance">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-medium text-gray-700 dark:text-gray-300 mt-8 mb-3">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
        {children}
      </ol>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic text-gray-600 dark:text-gray-400 mb-6">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="px-1 py-0.5 rounded text-sm font-mono bg-gray-100 dark:bg-gray-800">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-6 text-sm leading-relaxed shadow-md">
        {children}
      </pre>
    ),
    img: (props) => {
      const [open, setOpen] = useState(false);
      return (
        <>
          <Image
            {...(props as ImageProps)}
            width={1200}
            height={600}
            className="w-full max-h-[500px] h-auto rounded-lg shadow-md my-6 object-contain cursor-zoom-in bg-transparent"
            alt={props.alt || ""}
            onClick={() => setOpen(true)}
          />
          {open && (
            <div
              className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 cursor-zoom-out"
              onClick={() => setOpen(false)}
            >
              <Image
                {...(props as ImageProps)}
                width={1600}
                height={900}
                className="max-w-[90%] max-h-[90%] rounded-lg  object-contain"
                alt={props.alt || ""}
              />
            </div>
          )}
        </>
      );
    },
    ...components,
  };
}
