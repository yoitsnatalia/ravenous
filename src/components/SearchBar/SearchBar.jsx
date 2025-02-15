import React, { useState } from 'react';
import './SearchBar.css';

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

    return (
        <div className="SearchBar">
            <div className="SortOptions">
                {/* create a list object per sort option */}
                <ul>{Object.keys(sortOptions).map(option => (
                    // keep track of which sort option is active
                    <li className={sortBy === sortOptions[option] ? "active" : ""} key={sortOptions[option]} onClick={() => setSortBy(sortOptions[option])}>{option}</li>
                ))}</ul>
            </div>
            <div className="SearchFields">
                <input type="text" placeholder="Search terms" />
                <input type="text" placeholder="Location" />
            </div>
            <div className="Submit">
                <a>Search</a>
            </div>
        </div>
    );
}