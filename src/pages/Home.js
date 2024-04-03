import React, { useState, useEffect } from 'react';
import FilterBar from '../components/FilterBar';
import NewsFeed from '../components/NewsFeed';
import ApiService from '../services/ApiService';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    fetchNewsApi(filters);
  }, [filters]);

  const fetchNewsApi = async (filters) => {
    const data = await ApiService.fetchNewsApi(filters); // Placeholder function
    setArticles(data);
  };

  const applyFilters = (newFilters) => {
        setFilters(newFilters);
  };

  return (
    <div>
      <FilterBar applyFilters={applyFilters} />
      <NewsFeed articles={articles} />
    </div>
  );
};

export default Home;
