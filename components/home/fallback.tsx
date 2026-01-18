import React from 'react';
import DataTable from '@/components/DataTable';

export const CoinOverviewFallback = () => {
  return (
    <div id="coin-overview-fallback">
      <div className="header pt-2">
        <div className="header-image skeleton" />
        <div className="info">
          <div className="header-line-sm skeleton" />
          <div className="header-line-lg skeleton" />
        </div>
      </div>
    </div>
  );
};

export const TrendingCoinsFallback = () => {
  const dummyData = Array.from({ length: 6 }, (_, i) => i);

  const columns: DataTableColumn<number>[] = [
    {
      header: 'Name',
      cellClassName: 'name-cell',
      cell: () => (
        <div className="name-link">
          <div className="name-image skeleton" />
          <div className="name-line skeleton" />
        </div>
      ),
    },
    {
      header: '24h Change',
      cellClassName: 'change-cell',
      cell: () => (
        <div className="flex items-center gap-1">
          <div className="change-icon skeleton" />
          <div className="value-skeleton-sm skeleton" />
        </div>
      ),
    },
    {
      header: 'Price',
      cellClassName: 'price-cell',
      cell: () => <div className="value-skeleton-md skeleton" />,
    },
  ];

  return (
    <div id="trending-coins-fallback">
      <h4>Trending Coins</h4>
      <DataTable
        data={dummyData}
        columns={columns}
        rowKey={(i) => i}
        tableClassName="trending-coins-table"
        headerClassName="py-3!"
        bodyCellClassName="py-2!"
      />
    </div>
  );
};

export const CategoriesFallback = () => {
  const dummyData = Array.from({ length: 10 }, (_, i) => i);

  const columns: DataTableColumn<number>[] = [
    {
      header: 'Category',
      cellClassName: 'category-cell',
      cell: () => <div className="value-skeleton-md skeleton" />,
    },
    {
      header: 'Top Gainers',
      cellClassName: 'top-gainers-cell',
      cell: () => (
        <div className="flex gap-1">
          <div className="w-7 h-7 rounded-full skeleton" />
          <div className="w-7 h-7 rounded-full skeleton" />
          <div className="w-7 h-7 rounded-full skeleton" />
        </div>
      ),
    },
    {
      header: '24h Change',
      cellClassName: 'change-header-cell',
      cell: () => <div className="value-skeleton-sm skeleton" />,
    },
    {
      header: 'Market Cap',
      cellClassName: 'market-cap-cell',
      cell: () => <div className="value-skeleton-md skeleton" />,
    },
    {
      header: '24h Volume',
      cellClassName: 'volume-cell',
      cell: () => <div className="value-skeleton-md skeleton" />,
    },
  ];

  return (
    <div id="categories">
      <h4>Top Categories</h4>
      <DataTable data={dummyData} columns={columns} rowKey={(i) => i} tableClassName="mt-3" />
    </div>
  );
};
