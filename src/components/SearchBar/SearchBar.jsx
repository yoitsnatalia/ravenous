import React, { useState } from 'react';
import styles from './SearchBar.module.css';

// sorting and searching section
export default function SearchBar() {
    const sortOptions = {
        "Best Match": "best-match",
        "Highest Rated": "highest-rated",
        "Most Reviewed": "most-reviewed"
    };

    const [searchTerms, setSearchTerms] = useState("");
    const [location, setLocation] = useState("");
    const [sortBy, setSortBy] = useState(sortOptions["Best Match"]);

    const handleChange = ({target}) => {
        const {id, value} = target;
        if (id === "search-terms") {
            setSearchTerms(value);
        } else if (id === "location") {
            setLocation(value);
        }
    }

    const handleSearch = (event) => {
        // prevent page refresh
        event.preventDefault();
        console.log(`Searching Yelp with ${searchTerms}, ${location}, and ${sortBy}`);
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
            <div className={styles.SearchFields}>
                <input id="search-terms" type="text" placeholder="Search terms" onChange={handleChange}/>
                <input id="location" type="text" placeholder="Location" onChange={handleChange}/>
            </div>
            <div className={styles.Submit}>
                <a onClick={handleSearch}>Search</a>
            </div>
        </div>
    );
}