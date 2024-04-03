import React from 'react';
import Article from './Article';

const NewsFeed = ({ articles }) => {
  return (
    <div>
      {articles && articles.map((article, index) => (
        <Article key={index} article={article} />
      ))}
    </div>
  );
};

export default NewsFeed;
