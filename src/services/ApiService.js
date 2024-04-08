class ApiService {
  
    static async fetchNewsApi(preferences, filters) {
        // Construct the URL with query parameters including keyword, sources, from, and sortBy
        const url = new URL('https://newsapi.org/v2/everything');
        const params = {
            q: filters.keyword || undefined,
            sources: filters.source || '',
            from: filters.from || '',
            sortBy: filters.sortBy || 'popularity',
            pageSize: 5,
            page: filters.page || 1,
            language: 'en',
            apiKey: 'bc80427b7f3d424cb1b4766b91666195', // Replace YOUR_API_KEY with your actual NewsAPI key
        };
        url.search = new URLSearchParams(params).toString();
        // Perform API request to NewsAPI using constructed URL
        const response = await fetch(url);
        const data = await response.json();
        return data;
      }

      static async fetchHeadlinesNewsApi() {
        // Construct the URL with query parameters including keyword, sources, from, and sortBy
        const url = new URL('https://newsapi.org/v2/top-headlines');
        const params = {
            pageSize: 2,
            country: 'us',
            sortBy: 'popularity',
            apiKey: 'bc80427b7f3d424cb1b4766b91666195', // Replace YOUR_API_KEY with your actual NewsAPI key
        };
        url.search = new URLSearchParams(params).toString();
        // Perform API request to NewsAPI using constructed URL
        const response = await fetch(url);
        const data = await response.json();
        return data.articles;
      }


      static async fetchGuardianNewsApi(preferences, filters) {
        // Construct the URL with query parameters including keyword, sources, from, and sortBy
        const url = new URL('https://content.guardianapis.com/search');
        const params = {
            q: filters.keyword || undefined,
            page: filters.page || 1,
            'tag': preferences.category || '',
            'from-date': filters.from || '',
            'order-by': filters.sortBy || '',
            'show-fields':'thumbnail,trailText,byline',
            'api-key': '888dc2eb-4065-4f1e-820c-ec6fa09093be',
        };

        const filteredParams = {};
        for (const key in params) {
          if (params[key] !== '' && params[key] !== undefined) {
            filteredParams[key] = params[key];
          }
        }

        url.search = new URLSearchParams(filteredParams).toString();

        const response = await fetch(url);
        const data = await response.json();
        return data.response;
      }
  }
  
  export default ApiService;
  