
import React from 'react';

const ArticleHeadline = ({ articleHeadline, index }) => {
    // Function to format the date
    const formatDate = (date) => {
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return new Date(date).toLocaleDateString('en-US', options).toUpperCase();
    };

    return (
        <div className='first-slot'>
            <div className="masonry-box post-media">
                <img src={articleHeadline.urlToImage} alt="" className="img-fluid"/>
                <div className="shadoweffect">
                    <div className="shadow-desc">
                        <div className="blog-meta">
                            <h4><a target="_blank" href={articleHeadline.url} title={articleHeadline.title}>{articleHeadline.title}</a></h4>
                            <small className="text-white">{formatDate(articleHeadline.publishedAt)}</small>
                            <small className="text-white">by {articleHeadline.author}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleHeadline;
                    