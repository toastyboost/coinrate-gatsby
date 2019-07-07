const tableOptions = {
  getProps: () => ({
    id: 'react-table',
  }),
  resizable: false,
  showPageJump: false,
  showPageSizeOptions: false,
  defaultSortDesc: true,
  pageText: false,
  className: '-striped',
  defaultSorted: [
    {
      id: 'CAP',
      desc: true,
    },
  ],
  defaultPageSize: 15,
};

export { tableOptions };
