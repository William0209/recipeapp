"use client"

import { useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  // Prevent scroll position change on page change
  useEffect(() => {
    const scrollPosition = window.scrollY
    return () => window.scrollTo(0, scrollPosition)
  }, [currentPage])

  const handlePageChange = (page: number) => {
    // Store current scroll position before page change
    const scrollPosition = window.scrollY
    onPageChange(page)
    // Immediately restore scroll position
    window.scrollTo(0, scrollPosition)
  }

  return (
    <div className="flex items-center justify-center gap-3 py-8">
      <Button
        variant="outline"
        size="icon"
        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="h-10 w-10 border-green-400 bg-white text-green-700 hover:bg-green-50 hover:border-green-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
      <div className="flex gap-2">
        {pages.map((page) => (
          <Button
            key={page}
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(page)}
            className={`h-10 w-10 transition-all duration-200 ${
              currentPage === page
                ? "border-green-600 bg-green-600 text-white shadow-md"
                : "border-green-400 bg-white text-green-700 hover:bg-green-50 hover:border-green-500 shadow-sm"
            }`}
          >
            <span className="font-medium">{page}</span>
          </Button>
        ))}
      </div>
      <Button
        variant="outline"
        size="icon"
        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="h-10 w-10 border-green-400 bg-white text-green-700 hover:bg-green-50 hover:border-green-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  )
}

