import React from 'react';

export default function SearchBar() {
    const sortOptions = {
        "Best Match": "best-match",
        "Highest Rated": "highest-rated",
        "Most Reviewed": "most-reviewed"
    };
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search terms" />
            <input type="text" placeholder="Location" />
            <button>Search</button>
            <div className="sort-options">
                {Object.keys(sortOptions).map(option => (
                    <button key={sortOptions[option]}>{option}</button>
                ))};
            </div>
        </div>
    );
}