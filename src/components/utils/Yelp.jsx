// personal Yelp API key
const yelpKey = import.meta.env.VITE_YELP_API_KEY;
const yelpBaseUrl = "https://api.yelp.com/v3";

// GET request to Yelp API for businesses related to user search inputs
const Search = async (term, location, sortBy) => {
    const businessRequestEndpoint = `/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
    // cors temporary demo server needed for localhost
    const cors = "https://cors-anywhere.herokuapp.com/";
    const urlToFetch = cors + yelpBaseUrl + businessRequestEndpoint; 

    try {
        const response = await fetch(urlToFetch, {
            headers: {
                Authorization: `Bearer ${yelpKey}`
            }
        });
        if (response.ok) {
            const jsonResponse = await response.json();
            const businesses = jsonResponse.businesses;
            return businesses;
        }
        throw new Error('Request failed!');
    } catch (error) {
        console.log(error);
    }

};

export default Search;