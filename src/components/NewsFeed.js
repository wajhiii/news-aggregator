import React from 'react';
import Article from './Article';
import Pagination from './Pagination';

const NewsFeed = ({ preferences, articles, totalResults, onNextPage, page }) => {
  const totalPages = Math.ceil(totalResults / 10);

  const handlePageChange = (page) => {
    onNextPage(page); 
  };

  return (
    <div className="blog-list clearfix">
      {articles && articles.map((article, index) => (
        <Article key={index} article={article} type={preferences.source} />
      ))}
      <div className="row">
        <div className="col-md-12">
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
