import React from 'react';

const Article = ({ type, article }) => {
    const formatDate = (date) => {
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return new Date(date).toLocaleDateString('en-US', options).toUpperCase();
    };

    const {
        urlToImage,
        url,
        title,
        publishedAt,
        author,
        description,
        fields = {},
        webUrl,
        webTitle,
        webPublicationDate,
    } = article;

    const imageUrl = type === 1 ? (urlToImage || 'upload/tech_blog_01.jpg') : (fields.thumbnail || 'upload/tech_blog_01.jpg');
    const newsUrl = type === 1 ? url : webUrl;
    const newsTitle = type === 1 ? title : webTitle;
    const newsDate = type === 1 ? formatDate(publishedAt) : formatDate(webPublicationDate);
    const newsAuthor = type === 1 ? author : fields.byline;
    const newsDescription = type === 1 ? description : fields.trailText;

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
