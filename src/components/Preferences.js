import React, { useState } from 'react';

function Preferences({ updatePreferences }) {
  const [source, setSource] = useState(1);
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updatePreferences({ source, category, author });
  };

  const handleChange = (e) => {
    const newSource = e.target.value; 
    setSource(newSource); 
  };
  const authorsBySource = {
    1: ['Taylor Hall', 'Diana Usama'],
    2: ['Emma Johnson', 'Oliver Davis','Isabella Parker','Liam Thompson'],
  };
  return (
    <div className="container">
      <form onSubmit={handleFormSubmit}>
        <div className="row">
          <div className="col-md-3 mb-3">
            Select Source:
            <select className="form-control" value={source} onChange={handleChange}>
              <option value="1">NewsAPI.org</option>
              <option value="2">The Guardian</option>
            </select>
          </div>
          <div className="col-md-3 mb-3">
            Select Category:
            <select className="form-control" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">All</option>
              <option value="technology">Technology</option>
              <option value="sports">Sports</option>
              <option value="politics">Politics</option>
            </select>
          </div>
          <div className="col-md-3 mb-3">
            Select Author:
            <select className="form-control" value={author} onChange={(e) => setAuthor(e.target.value)}>
              <option value="">All</option>
              {authorsBySource[source].map((authorName, index) => (
                <option key={index} value={authorName}>{authorName}</option>
              ))}
            </select>
          </div>
          <div className="col-md-3 mb-3 mt-4">
            <button type="submit" className="btn btn-primary">Update Preferences</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Preferences;