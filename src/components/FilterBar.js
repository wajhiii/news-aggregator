import React, { useState } from 'react';

const FilterBar = ({ applyFilters }) => {
  const [keyword, setKeyword] = useState('');
//   new Date().toISOString().slice(0, 10)
  const [from, setFrom] = useState(''); 
  const [sortBy, setSortBy] = useState('popularity');
  const [source, setSource] = useState('business-insider'); // Set the default source to 'business-inside'

  const handleSubmit = (e) => {
    e.preventDefault();
    const filters = {
      keyword,
      source,
      from,
      sortBy
    };
    // Apply the filters
    applyFilters(filters);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Date"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <input
          type="text"
          placeholder="SortBy"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        />
        <input
          type="text"
          placeholder="Source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
        <button type="submit">Apply Filters</button>
      </form>
    </div>
  );
};

export default FilterBar;
