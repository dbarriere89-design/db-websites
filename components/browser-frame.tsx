"use client"

import { useState } from "react"
import { Expand } from "lucide-react"

export default function Lightbox({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative block w-full overflow-hidden rounded-2xl text-left focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        aria-label={`View full image: ${alt}`}
      >
        <img
          src={src}
          alt={alt}
          className={`${className ?? ""} transition duration-300 group-hover:scale-[1.01]`}
        />

        <div className="pointer-events-none absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/10" />

        <div className="pointer-events-none absolute bottom-4 right-4 opacity-0 transition duration-300 group-hover:opacity-100">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/70 px-3 py-1.5 text-xs font-medium text-white shadow-lg backdrop-blur-sm">
            <Expand className="h-3.5 w-3.5" />
            View full image
          </div>
        </div>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-6"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/60 px-3 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-black/80"
            aria-label="Close image"
          >
            Close
          </button>

          <div
            className="max-h-[92vh] max-w-[96vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={src}
              alt={alt}
              className="max-h-[92vh] max-w-[96vw] rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  )
}