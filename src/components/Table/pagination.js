import React, { useState, useEffect } from 'react';
import { PagesContainer, VisiblePages } from './styles';

const NavButton = props => <button {...props}>{props.children}</button>;

const filterPages = (visiblePages, totalPages) =>
  visiblePages.filter(page => page <= totalPages);

const getVisiblePages = (page, total) => {
  if (total < 4) {
    return filterPages([0, 1, 2, 3, 4], total);
  } else {
    if (page % 4 >= 0 && page > 3 && page + 2 < total) {
      return [0, page - 1, page, page + 1, total];
    } else if (page % 4 >= 0 && page > 3 && page + 2 >= total) {
      return [0, total - 3, total - 2, total - 1, total];
    } else {
      return [0, 1, 2, 3, 4, total];
    }
  }
};

const Pagination = ({ pages, page, onPageChange, Button = NavButton }) => {
  console.log('pages', pages);
  const [visiblePages, setVisiblePages] = useState([]);
  const [currentPage, setPage] = useState(page);

  useEffect(() => {
    setVisiblePages(getVisiblePages(currentPage, pages));
  }, [currentPage, pages]);

  useEffect(() => {
    setVisiblePages(getVisiblePages(currentPage, pages));
  }, [currentPage]);

  const prevPage = page => {
    if (page === 0) return;
    setPage(page - 1);
    onPageChange(page - 1);
  };

  const nextPage = page => {
    if (page === pages) return;
    setPage(page + 1);
    onPageChange(page + 1);
  };

  return (
    <PagesContainer>
      <Button className="prev" onClick={() => prevPage(currentPage)} />
      <VisiblePages>
        {pages}
        {visiblePages}
        {visiblePages.map((item, key) => (
          <Button
            key={key}
            onClick={() => {
              setPage(item);
              onPageChange(item);
            }}
            className={`item ${item === currentPage ? 'current' : ''}`}
          >
            {item + 1}
          </Button>
        ))}
      </VisiblePages>
      <Button className="next" onClick={() => nextPage(currentPage)} />
    </PagesContainer>
  );
};

export { Pagination };
