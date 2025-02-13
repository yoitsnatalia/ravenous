import React from 'react'
import './SearchBar.css'

// sorting and searching section
export default function SearchBar() {
    const sortOptions = {
        "Best Match": "best-match",
        "Highest Rated": "highest-rated",
        "Most Reviewed": "most-reviewed"
    };
    return (
        <div className="SearchBar">
            <div className="SortOptions">
                <ul>{Object.keys(sortOptions).map(option => (
                    <li key={sortOptions[option]}>{option}</li>
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