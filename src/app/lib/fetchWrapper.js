const BASE_URL = 'https://api.shopdiy.in/'; // Base URL for all API requests

const fetchWrapper = async (endpoint, options = {}) => {
  try {
    const headers = new Headers({
      'Content-Type': 'application/json',
      domain: 'meeat.in', // Example custom header
      ...options.headers, // Merge any additional headers
    });

    // Build the complete URL by appending the endpoint to the base URL
    const url = `${BASE_URL}${endpoint}`;

    const response = await fetch(url, {
      ...options,
      headers,
    });

    // Check if the response is okay, otherwise throw an error
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response JSON
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error; // Re-throw to allow handling by calling code
  }
};

export default fetchWrapper;

// Example usage:
// (async () => {
//   try {
//     const data = await fetchWrapper('/repos/vercel/next.js');
//     console.log(data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// })();
