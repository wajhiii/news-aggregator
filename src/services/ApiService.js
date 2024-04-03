class ApiService {

    static async fetchNewsApi(filters) {
        // Construct the URL with query parameters including keyword, sources, from, and sortBy
        const url = new URL('https://newsapi.org/v2/everything');
        const params = {
            q: filters.keyword || undefined,
            sources: filters.source || '',
            from: filters.from || '',
            sortBy: filters.sortBy || '',
            apiKey: 'bc80427b7f3d424cb1b4766b91666195', // Replace YOUR_API_KEY with your actual NewsAPI key
        };
        url.search = new URLSearchParams(params).toString();
        // Perform API request to NewsAPI using constructed URL
        const response = await fetch(url);
        const data = await response.json();
        return data.articles;
      }
  }
  
  export default ApiService;
  