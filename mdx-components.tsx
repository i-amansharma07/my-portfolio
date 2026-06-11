import type { MDXComponents } from "mdx/types";
import { ImageProps } from "next/image";
import { Inter } from "next/font/google";
import ZoomableImage from "@/components/ZoomableImage";
import CodeBlock from "@/components/CodeBlock";

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
    h4: ({ children }) => (
      <h4 className="text-xl font-medium text-gray-700 dark:text-gray-300 mt-6 mb-2">
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-lg font-medium text-gray-600 dark:text-gray-400 mt-5 mb-2">
        {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-base font-semibold text-gray-600 dark:text-gray-400 mt-4 mb-1 uppercase tracking-wide">
        {children}
      </h6>
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
    // Inline code — skip extra styling when inside a highlighted code block
    code: ({ children, className, ...props }) => {
      if (className?.startsWith('language-')) {
        return <code className={className} {...props}>{children}</code>
      }
      return (
        <code className="px-1 py-0.5 rounded text-sm font-mono bg-gray-100 dark:bg-gray-800" {...props}>
          {children}
        </code>
      )
    },
    pre: ({ children, ...props }) => (
      <CodeBlock {...(props as any)}>
        {children}
      </CodeBlock>
    ),
    hr: () => (
      <hr className="my-8 border-none h-px bg-gray-200 dark:bg-gray-700" />
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full text-sm border-collapse">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-gray-100 dark:bg-gray-800">
        {children}
      </thead>
    ),
    tbody: ({ children }) => (
      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
        {children}
      </tbody>
    ),
    tr: ({ children }) => (
      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
        {children}
      </tr>
    ),
    th: ({ children }) => (
      <th className="px-4 py-2 text-left font-semibold text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-2 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
        {children}
      </td>
    ),
    img: (props) => {
      return <ZoomableImage {...(props as ImageProps)} />;
    },
    ...components,
  };
}
