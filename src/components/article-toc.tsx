import { useEffect, useState } from "react"

import { cn } from "cn"

export type ArticleTocItem = {
  id: string
  text: string
}

const SCROLL_OFFSET = 104

export function ArticleToc({ items }: { items: ArticleTocItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "")

  useEffect(() => {
    const ids = items.map((item) => item.id)

    const update = () => {
      let current = ids[0] ?? ""
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top <= SCROLL_OFFSET) {
          current = id
        }
      }
      setActiveId(current)
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [items])

  return (
    <aside className="pointer-events-none absolute inset-y-0 right-0 hidden w-48 xl:block">
    <nav
      aria-label="目录"
      className="pointer-events-auto sticky top-24 max-h-[calc(100svh-8rem)] overflow-y-auto"
    >
      <p className="mb-3 text-xs font-medium text-muted-foreground">目录</p>
      <ul className="border-l border-border">
        {items.map((item) => {
          const isActive = item.id === activeId
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(event) => {
                  event.preventDefault()
                  document.getElementById(item.id)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                  history.replaceState(null, "", `#${item.id}`)
                }}
                className={cn(
                  "-ml-px line-clamp-2 block border-l-2 py-1.5 pl-3 text-sm leading-snug transition-colors",
                  isActive
                    ? "border-foreground font-medium text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground",
                )}
              >
                {item.text}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
    </aside>
  )
}
