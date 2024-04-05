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
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    fetchHeadlinesApi();
    fetchNewsApi(filters);
  }, [filters]);

  const fetchHeadlinesApi = async () => {
    setLoading(true); 
    const data = await ApiService.fetchHeadlinesApi(); 
    setArticleHeadlines(data);
    setLoading(false); 
  };

  const fetchNewsApi = async (filters) => {
    setLoading(true); 
    const data = await ApiService.fetchNewsApi(filters); 
    setArticles(data);
    setLoading(false); 
  };

  const applyFilters = (newFilters) => {
    setFilters(newFilters);
  };

  const onNextPage = (page) => {
    filters.page = page;
    fetchNewsApi(filters);
  };

  return (
    <div>
      <Header />
      <section className="section first-section">
        <div className="container-fluid">
          <div className="blog-top clearfix">
            <h4 className="section-title">Headlines News</h4>
          </div>
          <div className="masonry-blog clearfix">
            <Headlines articleHeadlines={articleHeadlines} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="page-wrapper">
                <div className="blog-top clearfix">
                  <h4 className="pull-left">All News</h4>
                </div>
                <FilterBar applyFilters={applyFilters} />
                <br />
                {loading ? (
                  <div className="text-center">Loading...</div>
                ) : (
                  <NewsFeed
                    articles={articles.articles}
                    totalResults={articles.totalResults}
                    onNextPage={onNextPage}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
