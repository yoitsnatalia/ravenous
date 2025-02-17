import React from 'react';

const yelpKey = "dIp81e2NPq-nYbOfXEihy8syFvMBbByDhA3Nv8yEzHCidtcdGn8AIt3wmfR6I5W2izd5lEiwQPuggHfBbJAggfviC7CDZ8SrEwiCYz0WA8IYk-1whGdxSm-JzLCyZ3Yx";
const yelpBaseUrl = "https://api.yelp.com/v3";

const Search = async (term, location, sortBy) => {
    const businessRequestEndpoint = `/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
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