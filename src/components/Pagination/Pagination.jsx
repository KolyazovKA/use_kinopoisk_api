import React from 'react';
import './Pagination.css';  // Импортируешь файл стилей

export function Pagination({ currentPage, totalPages, onPageChange }) {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="pagination-container">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`pagination-btn ${currentPage === 1 ? 'disabled' : 'enabled'}`}
        aria-label="Предыдущая страница"
      >
        &laquo;
      </button>

      {pageNumbers.map((pageNumber, index) => (
        <button
          key={index}
          onClick={() => {
            if (pageNumber !== '...') {
              onPageChange(pageNumber);
            }
          }}
          className={`pagination-btn ${
            pageNumber === currentPage
              ? 'active'
              : pageNumber === '...'
              ? 'ellipsis'
              : 'enabled'
          }`}
          aria-label={pageNumber === '...' ? "Пропущенные страницы" : `Страница ${pageNumber}`}
        >
          {pageNumber}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`pagination-btn ${currentPage === totalPages ? 'disabled' : 'enabled'}`}
        aria-label="Следующая страница"
      >
        &raquo;
      </button>
    </div>
  );
}
