// Pagination.js
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const handleBack = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const renderPagination = () => {
    const pages = [];
    let startPage = currentPage - 2;
    let endPage = currentPage + 2;
  
    if (startPage < 1) {
      startPage = 1;
      endPage = Math.min(totalPages, 5);
    }
  
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, totalPages - 4);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <li key={i} className="page-item">
          <a className={`page-link ${i === currentPage ? 'active' : ''}`} href="#" onClick={() => handlePageChange(i)}>
            {i}
          </a>
        </li>
      );
    }
    return pages;
  };

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-start">
        <li className="page-item">
          <a className="page-link" href="#" onClick={handleBack}>
            Back
          </a>
        </li>
        {renderPagination()}
        <li className="page-item">
          <a className="page-link" href="#" onClick={handleNext}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
