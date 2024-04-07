import React from 'react';

const Article = ({ type, article }) => {
   // Function to format the date
const formatDate = (date) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options).toUpperCase();
};

let imageUrl; 
let newsUrl;
let newsTitle; 
let newsDate;
let newsAuthor; 
let newsDescription; 

if(type == 1){
    imageUrl = article.urlToImage ? article.urlToImage : 'upload/tech_blog_01.jpg';
    newsUrl = article.url;
    newsTitle = article.title;
    newsDate = formatDate(article.publishedAt);
    newsAuthor = article.author;
    newsDescription = article.description;
}else if(type == 2){
    imageUrl = article.fields.thumbnail ? article.fields.thumbnail : 'upload/tech_blog_01.jpg';
    newsUrl = article.webUrl;
    newsTitle = article.webTitle;
    newsDate = formatDate(article.webPublicationDate);
    newsAuthor = article.fields.byline;
    newsDescription = article.fields.trailText;
}
  return (
    <div>
        <div className="blog-box row">
            <div className="col-md-4">
                <div className="post-media">
                    <a target="_blank" href={newsUrl} title="">
                        <img src={imageUrl} alt="" className="article-image"/>
                        <div className="hovereffect"></div>
                    </a>
                </div>
            </div>

            <div className="blog-meta big-meta col-md-8">
                <h4><a target="_blank" href={newsUrl} title="">{newsTitle}</a></h4>
                <p>{newsDescription}</p>
                <small>{newsDate}</small>
                <small>by {newsAuthor}</small>
            </div>
        </div>
        <hr className="invis"/>
    </div>
  );
};

export default Article;
