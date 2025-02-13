import React from 'react';
import Business from '../Business/Business.jsx';
import "./BusinessList.css";

// collection of business cards
export default function BusinessList(props) {
    return (
        <div className="BusinessList">
            {props.businesses.map((business, index) => (
                <Business 
                    key={index}
                    imageSrc={business.imageSrc}
                    name={business.name}
                    address={business.address}
                    city={business.city}
                    state={business.state}
                    zipCode={business.zipCode}
                    category={business.category}
                    rating={business.rating}
                    reviewCount={business.reviewCount}
                />
            ))}
        </div>
    );    
}