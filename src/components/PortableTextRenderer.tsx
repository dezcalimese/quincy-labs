'use client'

import { PortableText } from '@portabletext/react'
import { PortableTextBlock } from '@portabletext/types'
import { urlFor } from '@/lib/sanity.client'
import Image from 'next/image'
import Link from 'next/link'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface PortableTextRendererProps {
  value: PortableTextBlock[]
}

const components = {
  types: {
    image: ({ value }: any) => {
      return (
        <figure className="my-8">
          <Image
            src={urlFor(value).width(800).url()}
            alt={value.alt || ''}
            width={800}
            height={400}
            className="w-full h-auto rounded-lg"
          />
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-gray-500 italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
    code: ({ value }: any) => {
      return (
        <div className="my-8">
          <SyntaxHighlighter
            language={value.language || 'javascript'}
            style={oneDark}
            customStyle={{
              borderRadius: '0.5rem',
              padding: '1.5rem',
              fontSize: '0.875rem',
            }}
          >
            {value.code}
          </SyntaxHighlighter>
        </div>
      )
    },
  },
  marks: {
    link: ({ children, value }: any) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      return (
        <Link
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noopener' : undefined}
          className="text-blue-500 hover:underline"
        >
          {children}
        </Link>
      )
    },
    code: ({ children }: any) => (
      <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-sm font-mono">
        {children}
      </code>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl md:text-4xl font-bold mt-12 mb-6 first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-5 first:mt-0">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl md:text-2xl font-bold mt-8 mb-4 first:mt-0">
        {children}
      </h3>
    ),
    normal: ({ children }: any) => (
      <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue-500 pl-6 my-8 italic text-gray-600 dark:text-gray-400">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="mb-6 ml-6 space-y-2 list-disc text-gray-700 dark:text-gray-300">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="mb-6 ml-6 space-y-2 list-decimal text-gray-700 dark:text-gray-300">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="leading-relaxed">{children}</li>
    ),
    number: ({ children }: any) => (
      <li className="leading-relaxed">{children}</li>
    ),
  },
}

export default function PortableTextRenderer({ value }: PortableTextRendererProps) {
  return <PortableText value={value} components={components} />
}