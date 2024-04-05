import React from 'react';
import ArticleHeadline from './ArticleHeadline';

const Headlines = ({ articleHeadlines }) => {
  return (
    <div>
      {articleHeadlines && articleHeadlines.map((articleHeadline, index) => (
        <ArticleHeadline key={index} articleHeadline={articleHeadline} index={index} />
      ))}
    </div>
  );
};

export default Headlines;
