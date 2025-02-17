import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import Search from '../utils/Yelp.jsx';

// sorting and searching section
export default function SearchBar() {
    const sortOptions = {
        "Best Match": "best_match",
        "Highest Rated": "rating",
        "Most Reviewed": "review_count"
    };

    const [searchTerms, setSearchTerms] = useState("");
    const [location, setLocation] = useState("");
    const [sortBy, setSortBy] = useState("best_match");

    const handleChange = ({target}) => {
        const {id, value} = target;
        if (id === "search-terms") {
            setSearchTerms(value);
        } else if (id === "location") {
            setLocation(value);
        }
    }

    const handleSubmit = async (event) => {
        // prevent page refresh
        event.preventDefault();
        console.log(`Searching Yelp with ${searchTerms}, ${location}, and ${sortBy}`);
        const businesses = await Search(searchTerms, location, sortBy);
        console.log(businesses);
        return businesses;
    }

    const getSortByClass = (sortOption) => {
        return sortBy === sortOption ? styles.active : "";
    }

    return (
        <div className={styles.SearchBar}>
            <div className={styles.SortOptions}>
                {/* create a list object per sort option */}
                <ul>{Object.keys(sortOptions).map(option => (
                    // keep track of which sort option is active
                    <li className={getSortByClass(sortOptions[option])} key={sortOptions[option]} onClick={() => setSortBy(sortOptions[option])}>{option}</li>
                ))}</ul>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={styles.SearchFields}>
                    <input id="search-terms" type="text" placeholder="Search Businesses" onChange={handleChange}/>
                    <input id="location" type="text" placeholder="Where?" onChange={handleChange}/>
                </div>
                <div className={styles.Submit}>
                    <button id="submit" type="submit">Search</button>
                </div>
            </form>
        </div>
    );
}