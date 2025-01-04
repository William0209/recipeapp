'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-white shadow-sm relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-semibold text-green-700 flex items-center">
            <svg className="w-8 h-8 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
            </svg>
            Tasty Bytes
          </Link>
          <div className="hidden md:flex space-x-6">
            <NavLinks pathname={pathname} />
          </div>
          <button
            className="md:hidden w-8 h-8 flex items-center justify-center focus:outline-none mr-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-5">
              <motion.span
                className="absolute top-0 left-0 w-5 h-0.5 bg-green-700 rounded-full"
                animate={{
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 9 : 0,
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              />
              <motion.span
                className="absolute top-[9px] left-0 w-5 h-0.5 bg-green-700 rounded-full"
                animate={{
                  opacity: isOpen ? 0 : 1,
                  x: isOpen ? -20 : 0,
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute bottom-0 left-0 w-5 h-0.5 bg-green-700 rounded-full"
                animate={{
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? -9 : 0,
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              />
            </div>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="container mx-auto px-4 py-2">
              <NavLinks pathname={pathname} mobile />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

function NavLinks({ pathname, mobile = false }: { pathname: string, mobile?: boolean }) {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/recipes', label: 'Recipes' },
    { href: '/about', label: 'About' },
  ]

  return (
    <div className={`flex ${mobile ? 'flex-col space-y-2' : 'space-x-6'}`}>
      {links.map((link) => (
        <NavLink key={link.href} {...link} active={pathname === link.href} />
      ))}
    </div>
  )
}

function NavLink({ href, label, active }: { href: string, label: string, active: boolean }) {
  return (
    <Link 
      href={href} 
      className={`py-2 text-sm font-medium transition-colors duration-200
        ${active ? 'text-green-600' : 'text-gray-600 hover:text-green-600'}
      `}
    >
      {label}
    </Link>
  )
}

