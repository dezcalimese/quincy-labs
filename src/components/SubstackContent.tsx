'use client'

export default function SubstackContent({ html }: { html: string }) {
  return (
    <div
      className="substack-content font-lora text-lg max-w-none mb-12"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
