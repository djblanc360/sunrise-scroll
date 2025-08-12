"use client"

import { useEffect, useState } from "react"
import signature from "@/public/signature.png"
import Image from "next/image"

export function Header() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const headerOpacity = Math.max(1 - scrollY / 300, 0.7)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-100 px-6 py-6 transition-all duration-300"
      style={{ opacity: headerOpacity }}
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-black rounded-full" />
          </div> */}
          <span className="text-black font-medium text-lg">PiggyBanx</span>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#about"
            className="text-white hover:text-gray-300 transition-colors duration-200 text-sm font-medium"
          >
            <Image src={signature} alt="PiggyBanx" width={80} height={80} />
          </a>

        </div>
      </nav>
    </header>
  )
}
