import React from 'react'
import { createHighlighter, type BundledLanguage } from 'shiki'
import CopyButton from './CopyButton'

const LANG_ALIASES: Record<string, BundledLanguage> = {
  py: 'python',
  js: 'javascript',
  ts: 'typescript',
  sh: 'bash',
  shell: 'bash',
  zsh: 'bash',
  yml: 'yaml',
  md: 'markdown',
  dockerfile: 'docker',
}

const SUPPORTED_LANGS: BundledLanguage[] = [
  'python', 'javascript', 'typescript', 'jsx', 'tsx',
  'bash', 'sh', 'json', 'html', 'css',
  'markdown', 'yaml', 'toml', 'rust', 'go', 'sql',
  'java', 'c', 'cpp', 'docker',
]

function resolveLanguage(raw: string): BundledLanguage | null {
  const normalized = raw.toLowerCase()
  if (LANG_ALIASES[normalized]) return LANG_ALIASES[normalized]
  if (SUPPORTED_LANGS.includes(normalized as BundledLanguage)) return normalized as BundledLanguage
  return null
}

let highlighterPromise: ReturnType<typeof createHighlighter> | null = null

function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ['github-dark'],
      langs: SUPPORTED_LANGS,
    })
  }
  return highlighterPromise
}

interface Props extends React.HTMLAttributes<HTMLPreElement> {
  children: React.ReactNode
}

export default async function CodeBlock({ children }: Props) {
  let language = ''
  let rawCode = ''

  if (React.isValidElement<{ className?: string; children?: string }>(children)) {
    const className = children.props.className ?? ''
    language = className.startsWith('language-') ? className.slice(9) : ''
    rawCode = children.props.children ?? ''
  } else if (typeof children === 'string') {
    rawCode = children
  }

  let highlightedHtml = ''
  const resolvedLang = language ? resolveLanguage(language) : null

  if (resolvedLang && rawCode) {
    try {
      const highlighter = await getHighlighter()
      highlightedHtml = highlighter.codeToHtml(rawCode.trimEnd(), {
        lang: resolvedLang,
        theme: 'github-dark',
      })
    } catch {
      // fall through to plain rendering
    }
  }

  return (
    <div className="relative mb-6 rounded-lg overflow-hidden shadow-md border border-gray-700/50">
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2 border-b border-gray-700">
        {language ? (
          <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
            {language}
          </span>
        ) : (
          <span />
        )}
        <CopyButton text={rawCode.trimEnd()} />
      </div>
      {highlightedHtml ? (
        <div
          className="text-sm leading-relaxed overflow-x-auto [&>pre]:p-4 [&>pre]:m-0 [&>pre]:bg-gray-900! [&>pre]:text-sm [&>pre]:leading-relaxed [&>pre]:font-mono"
          dangerouslySetInnerHTML={{ __html: highlightedHtml }}
        />
      ) : (
        <pre className="bg-gray-900 text-white p-4 overflow-x-auto text-sm leading-relaxed m-0 font-mono">
          {children}
        </pre>
      )}
    </div>
  )
}
