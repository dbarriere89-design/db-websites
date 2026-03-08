"use client"

import { useState } from "react"

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
      <img
        src={src}
        alt={alt}
        className={`${className} cursor-zoom-in`}
        onClick={() => setOpen(true)}
      />

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          onClick={() => setOpen(false)}
        >
          <img
            src={src}
            alt={alt}
            className="max-h-[90vh] max-w-[95vw] rounded-xl shadow-2xl"
          />
        </div>
      )}
    </>
  )
}