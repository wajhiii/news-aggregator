import React, { useState, useEffect } from 'react';
import FilterBar from '../components/FilterBar';
import NewsFeed from '../components/NewsFeed';
import Headlines from '../components/Headlines';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Preferences from '../components/Preferences';
import ApiService from '../services/ApiService';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [filters, setFilters] = useState({});
  const [articleHeadlines, setArticleHeadlines] = useState([]);
  const [loading, setLoading] = useState(false); 
  const [preferences, setPreferences] = useState({
    source: 1,
    category: '',
    author: ''
  });


  useEffect(() => {
    fetchHeadlinesNewsApi();
    if(preferences.source == 2){
      fetchGuardianNewsApi(preferences, filters);
    }else{
      fetchNewsApi(preferences, filters);
    }
  }, [filters]);

  const fetchHeadlinesNewsApi = async () => {
    setLoading(true); 
    const data = await ApiService.fetchHeadlinesNewsApi(); 
    setArticleHeadlines(data);
    setLoading(false); 
  };

  const fetchNewsApi = async (preferences, filters) => {
    setLoading(true); 
    const data = await ApiService.fetchNewsApi(preferences, filters); 
    setArticles(data);
    setLoading(false); 
  };

  const fetchGuardianNewsApi = async (preferences, filters) => {
    setLoading(true); 
    const data = await ApiService.fetchGuardianNewsApi(preferences, filters);
    setArticles(data);
    setLoading(false);  
  };

  const applyFilters = (newFilters) => {
    setFilters(newFilters);
  };

  const onNextPage = (page) => {
    filters.page = page;
    if(preferences.source == 2){
      fetchGuardianNewsApi(preferences, filters);
    }else{
      fetchNewsApi(preferences, filters);
    }
  };

  const updatePreferences = (newPreferences) => {
    setPreferences(newPreferences);
    if(newPreferences.source == 2){
      fetchGuardianNewsApi(newPreferences, filters);
    }else{
      fetchNewsApi(newPreferences, filters);
    }
  };

  return (
    <div>
      <Header />
      <section className="section first-section">
        <div className="container-fluid mt-5">
          <div className="blog-top clearfix mb-3 ">
            <h2 className="section-title text-center">Top Headlines</h2>
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
                <Preferences updatePreferences={updatePreferences} />
                <br/>
                <FilterBar applyFilters={applyFilters} selectsSource={preferences.source} />
                <br />
                {loading ? (
                  <div className="text-center">Loading...</div>
                ) : (
                  <NewsFeed
                    preferences={preferences}
                    articles={preferences.source == 1 ? articles.articles : articles.results}
                    totalResults={preferences.source == 1 ? articles.totalResults : articles.total}
                    onNextPage={onNextPage}
                    page={filters.page || 1}
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
