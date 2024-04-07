import React, {useState} from 'react';
import Article from './Article';
import Pagination from './Pagination'; // Import the Pagination component

const NewsFeed = ({ preferences, articles, totalResults, onNextPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalResults / 10); // Assuming 10 articles per page

  const handlePageChange = (page) => {
    setCurrentPage(page);
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
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
            </div>
        </div>
    </div>
  );
};

export default NewsFeed;
