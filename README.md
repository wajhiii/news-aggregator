# News Aggregator

## Overview
News Aggregator is a web application built with React.js that allows users to search for articles and filter the results based on various criteria such as keyword, date, category, and source. Users can also customize their news feed by selecting preferred sources, categories, and authors.

## Features
- **Article Search and Filtering:** Users can search for articles by keyword and filter the results by date, category, and source.
- **Personalized News Feed:** Users can customize their news feed by selecting their preferred sources, categories, and authors.

## Data Sources
The application fetches articles from multiple data sources, including:
- NewsAPI

## Setup Instructions

### Prerequisites
- Node.js (v14.x or later)
- npm (v6.x or later)
- Docker

### Installation
1. Clone the repository:
   ```bash
https://github.com/wajhiii/news-aggregator.git

### Navigate to the project directory:
- cd news-aggregator

### Install dependencies:
- npm install

## Running Locally

### Start the development server:
- npm start

Open your browser and navigate to http://localhost:3000 to view the app.


## Docker Configuration

### Building Docker Image
- docker build -t news-aggregator .

### Run the Docker container:
- docker run -p 3000:3000 news-aggregator

Open your browser and navigate to http://localhost:3000 to view the app.