import type { ReactNode } from "react"

export default function BrowserFrame({
  children,
  className = "",
  padded = true,
}: {
  children: ReactNode
  className?: string
  padded?: boolean
}) {
  return (
    <div
      className={`overflow-hidden rounded-3xl border border-border bg-card shadow-sm ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-border bg-muted/60 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
        <div className="ml-3 h-7 flex-1 rounded-full border border-border bg-background/80" />
      </div>

      <div className={padded ? "bg-muted/40 p-6" : "bg-muted/40"}>
        {children}
      </div>
    </div>
  )
}