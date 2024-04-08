import React, { useState } from 'react';

const FilterBar = ({ applyFilters, selectsSource }) => {
  const [keyword, setKeyword] = useState('');
  const [from, setFrom] = useState(''); 
  const [sortBy, setSortBy] = useState('popularity');
  const [source, setSource] = useState('business-insider');
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

  const clearFilters = () => {
    setKeyword('');
    setFrom('');
    setSortBy('popularity');
    setSource('business-insider');
    applyFilters({ keyword: '', source: '', from: '', sortBy: 'popularity' });
  };

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-3 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        <div className="col-md-3 mb-3">
          <input
            type="date"
            className="form-control"
            placeholder="Date"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>
        <div className="col-md-3 mb-3">
          {selectsSource == 1 && (<select
            className="form-control"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="popularity">Popularity</option>
            <option value="publishedAt">Published Date</option>
            <option value="relevancy">Relevancy</option>
          </select>
          )}

          {selectsSource == 2 && (<select
                    className="form-control"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="relevance">Relevance</option>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                  </select>
          )}
        </div>
        {selectsSource == 1 && (<div className="col-md-3 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Source"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
        </div>)}
        <div className="col-md-12 d-flex justify-content-end">
          <button type="submit" className="btn btn-primary mr-2" onClick={handleSubmit}>Apply Filters</button>
          <button type="button" className="btn btn-secondary" onClick={clearFilters}>Clear Filters</button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
