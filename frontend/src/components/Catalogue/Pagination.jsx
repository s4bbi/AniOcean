import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function CatalogPagination({ currentPage, totalPages, onPageChange }) {
  // Generate visible page numbers (basic version)
  const getPageNumbers = () => {
    const pages = [];
    const maxButtons = 5;
    const half = Math.floor(maxButtons / 2);
    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, start + maxButtons - 1);

    if (end - start < maxButtons - 1) {
      start = Math.max(1, end - maxButtons + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="flex justify-center items-center gap-2 py-8">
      {/* Previous Button */}
      <button
        className={`px-3 py-1 rounded-full border text-sm transition ${
          currentPage === 1
            ? "text-white/30 border-white/10 cursor-not-allowed"
            : "text-white border-white/20 hover:bg-ocean/70"
        }`}
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaChevronLeft />
      </button>

      {/* Page Numbers */}
      {getPageNumbers().map((page) => (
        <button
          key={page}
          className={`px-3 py-1 rounded-full text-sm font-medium transition border ${
            page === currentPage
              ? "bg-ocean text-white border-ocean"
              : "text-white border-white/20 hover:bg-white/10"
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        className={`px-3 py-1 rounded-full border text-sm transition ${
          currentPage === totalPages
            ? "text-white/30 border-white/10 cursor-not-allowed"
            : "text-white border-white/20 hover:bg-ocean/70"
        }`}
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
