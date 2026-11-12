import { Search } from "lucide-react"
import type { ComponentProps, FormEvent } from "react"

import { useSearch } from "@/components/search-context"
import { Label } from "@/components/ui/label"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
} from "@/components/ui/sidebar"

export function SearchForm({
  ...props
}: ComponentProps<"form">) {
  const { query, setQuery } = useSearch()

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <form onSubmit={onSubmit} {...props}>
      <SidebarGroup className="py-0">
        <SidebarGroupContent className="relative">
          <Label htmlFor="search" className="sr-only">
            搜索笔记
          </Label>
          <SidebarInput
            id="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="搜索笔记..."
            className="pl-8"
          />
          <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  )
}
