import React, { useState, useEffect } from 'react';
import FilterBar from '../components/FilterBar';
import NewsFeed from '../components/NewsFeed';
import Headlines from '../components/Headlines';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ApiService from '../services/ApiService';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [filters, setFilters] = useState({});
  const [articleHeadlines, setArticleHeadlines] = useState([]);

  useEffect(() => {
    fetchHeadlinesApi();
    fetchNewsApi(filters);
  }, [filters]);

  const fetchHeadlinesApi = async () => {
    const data = await ApiService.fetchHeadlinesApi(); // Placeholder function
    setArticleHeadlines(data);
  };

  const fetchNewsApi = async (filters) => {
    const data = await ApiService.fetchNewsApi(filters); // Placeholder function
    setArticles(data);
  };

  const applyFilters = (newFilters) => {
        setFilters(newFilters);
  };

  return (
    <div>
      <Header />
      {/* <FilterBar applyFilters={applyFilters} />
      <NewsFeed articles={articles} /> */}
      <section className="section first-section">
            <div className="container-fluid">
                <div className="masonry-blog clearfix">
                 <Headlines articleHeadlines={articleHeadlines} />

                    {/* <div className="second-slot">
                        <div className="masonry-box post-media">
                          <img src="upload/tech_02.jpg" alt="" class="img-fluid"/>
                             <div className="shadoweffect">
                                <div className="shadow-desc">
                                    <div className="blog-meta">
                                        <span className="bg-orange"><a href="tech-category-01.html" title="">Gadgets</a></span>
                                        <h4><a href="tech-single.html" title="">Do not make mistakes when choosing web hosting</a></h4>
                                        <small><a href="tech-single.html" title="">03 July, 2017</a></small>
                                        <small><a href="tech-author.html" title="">by Jessica</a></small>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>

                    <div className="last-slot">
                        <div className="masonry-box post-media">
                          <img src="upload/tech_03.jpg" alt="" class="img-fluid"/>
                             <div className="shadoweffect">
                                <div className="shadow-desc">
                                    <div className="blog-meta">
                                        <span className="bg-orange"><a href="tech-category-01.html" title="">Technology</a></span>
                                        <h4><a href="tech-single.html" title="">The most reliable Galaxy Note 8 images leaked</a></h4>
                                        <small><a href="tech-single.html" title="">01 July, 2017</a></small>
                                        <small><a href="tech-author.html" title="">by Jessica</a></small>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
        <Footer/>
    </div>
  );
};

export default Home;
