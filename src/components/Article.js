import React from 'react';

const Article = ({ article }) => {
   // Function to format the date
   const formatDate = (date) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options).toUpperCase();
};

const imageUrl = article.urlToImage ? article.urlToImage : 'upload/tech_blog_01.jpg';
  return (
    <div>
        <div className="blog-box row">
            <div className="col-md-4">
                <div className="post-media">
                    <a target="_blank" href={article.url} title="">
                        <img src={imageUrl} alt="" className="img-fluid"/>
                        <div className="hovereffect"></div>
                    </a>
                </div>
            </div>

            <div className="blog-meta big-meta col-md-8">
                <h4><a target="_blank" href={article.url} title="">{article.title}</a></h4>
                <p>{article.description}</p>
                {/* <small className="firstsmall"></small> */}
                <small>{formatDate(article.publishedAt)}</small>
                <small>by {article.author}</small>
            </div>
        </div>
        <hr className="invis"/>
    </div>
  );
};

export default Article;
