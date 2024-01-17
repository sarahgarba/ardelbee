'use client'
import {
  TabBar
} from "@/components"
import { DIAGNOSTIC_TAB_LINKS } from "@/constants/tabsLinks"
import { usePathname } from 'next/navigation'

export default function DiagnosticLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    
    const PATHNAME = usePathname()
    const LINK_ARRAY = PATHNAME.split("/")
    const PARENT = "Diagnostic"
    const CHILD = PARENT.toUpperCase() === LINK_ARRAY[LINK_ARRAY.length-1].toUpperCase()? DIAGNOSTIC_TAB_LINKS[0].label : LINK_ARRAY[LINK_ARRAY.length-1]

    return (
      <>
        <TabBar
            parent={PARENT}
            child={CHILD}
            tabLinkItems={DIAGNOSTIC_TAB_LINKS}
        />
        {children}
      </>
    )
  }