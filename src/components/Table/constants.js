const tableOptions = {
  getProps: () => ({
    id: 'react-table',
  }),
  minRows: 1,
  resizable: false,
  showPageJump: false,
  showPageSizeOptions: false,
  defaultSortDesc: true,
  pageText: false,
  className: '-striped',
  defaultSorted: [
    {
      id: 'RANK',
      desc: false,
    },
  ],
  defaultPageSize: 15,
};

export { tableOptions };
