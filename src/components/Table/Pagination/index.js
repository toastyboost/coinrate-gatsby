import React, { useState, useEffect } from 'react';
import { PagesContainer, PrevPage, NextPage, Pages, PageItem } from './styles';

const filterPages = (visiblePages, totalPages) =>
  visiblePages.filter(page => page <= totalPages);

const getVisiblePages = (page, total) => {
  if (total <= 5) {
    return filterPages([0, 1, 2, 3, 4, 5], total - 1);
  } else {
    if (page >= 5) {
      return [0, page - 2, page - 1, page, page + 1, page + 2, total - 1];
    } else {
      return [0, 1, 2, 3, 4, 5, total - 1];
    }
  }
};

const Pagination = ({
  instance,
  SSR: { ssrPage, ssrTotal, ssrPath },
  noPageLinks,
}) => {
  const { gotoPage, nextPage, previousPage, pageCount, pageIndex } = instance;

  const [visiblePages, setVisiblePages] = useState(
    getVisiblePages(ssrPage, ssrTotal)
  );

  useEffect(() => {
    setVisiblePages(getVisiblePages(pageIndex, pageCount));
  }, [pageCount, pageIndex]);

  return (
    <PagesContainer>
      <PrevPage onClick={() => previousPage()} />
      <Pages>
        {visiblePages.map((item, key) => (
          <PageItem
            key={key}
            isActive={item === pageIndex}
            href={
              noPageLinks
                ? ''
                : `${item === 0 ? '' : ssrPath + parseFloat(item + 1) + '/'}`
            }
            onClick={e => {
              e.preventDefault();
              gotoPage(item);
            }}
            as={noPageLinks ? 'div' : 'a'}
          >
            {item + 1}
          </PageItem>
        ))}
      </Pages>
      <NextPage onClick={() => nextPage()} />
    </PagesContainer>
  );
};

export { Pagination };
