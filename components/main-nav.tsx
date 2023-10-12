"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

export function MainNav() {
  const pathname = usePathname()

  const links = [
    { href: "/dashboard", name: "Dashboard" },
    { href: "/cards", name: "Cards" },
    { href: "/forms", name: "Forms" },
    { href: "/authentication", name: "Authentication" },
    { href: "/music", name: "Music" },
    { href: "/playground", name: "Playground" },
    { href: "/tasks", name: "Tasks" },
    { href: "/themes", name: "Themes" },
  ]
  
  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith(link.href)
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}
