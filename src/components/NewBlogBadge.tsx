'use client'

import { useEffect, useState } from 'react'

export default function NewBlogBadge() {
  const [hasNew, setHasNew] = useState(false)

  useEffect(() => {
    fetch('/api/latest-post')
      .then((res) => res.json())
      .then((data) => {
        if (data.hasNew) setHasNew(true)
      })
      .catch(() => {})
  }, [])

  if (!hasNew) return null

  return (
    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-500 rounded-full whitespace-nowrap animate-pulse">
      New Blog
    </span>
  )
}
