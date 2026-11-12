import type { ComponentProps } from "react"
import { Link, useLocation } from "react-router-dom"

import { SearchForm } from "@/components/search-form"
import { useSearch } from "@/components/search-context"
import { VersionSwitcher } from "@/components/version-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"
import {
  getMonthByPath,
  getNav,
  isNavItemActive,
  searchNotes,
  type NavItem,
} from "@/data/notes"

const menuButtonClassName =
  "h-auto min-h-8 items-start whitespace-normal py-1.5 leading-[1.35] [&>span:last-child]:overflow-visible [&>span:last-child]:whitespace-normal [&>span:last-child]:text-clip"

function SidebarNavLink({
  item,
  isActive,
}: {
  item: NavItem
  isActive: boolean
}) {
  const { isMobile, setOpenMobile } = useSidebar()

  return (
    <SidebarMenuButton asChild isActive={isActive} className={menuButtonClassName}>
      <Link
        to={item.path}
        onClick={() => {
          if (isMobile) setOpenMobile(false)
        }}
      >
        {item.title}
      </Link>
    </SidebarMenuButton>
  )
}

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
  const { pathname } = useLocation()
  const { query } = useSearch()
  const q = query.trim().toLowerCase()
  const activeMonth = getMonthByPath(pathname)

  const groups = q
    ? [
        {
          title: "搜索结果",
          items: searchNotes(query).map((note) => ({
            title: note.title,
            path: note.path,
            id: note.path,
          })),
        },
      ].filter((group) => group.items.length > 0)
    : getNav(activeMonth)

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher currentMonth={activeMonth} />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {groups.length === 0 ? (
          <SidebarGroup>
            <SidebarGroupLabel>搜索结果</SidebarGroupLabel>
            <SidebarGroupContent>
              <p className="px-2 py-1.5 text-sm text-sidebar-foreground/70">
                没有匹配的笔记
              </p>
            </SidebarGroupContent>
          </SidebarGroup>
        ) : (
          groups.map((group) => (
            <SidebarGroup key={group.title}>
              <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item) => (
                    <SidebarMenuItem key={item.id}>
                      <SidebarNavLink
                        item={item}
                        isActive={isNavItemActive(item, pathname, group.title)}
                      />
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))
        )}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
