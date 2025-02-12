import React from 'react';

function Business() {
    const business = {
        imageSrc: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
        name: "Caló Kitchen & Tequila",
        address: "28141 Crown Valley Pkwy Suite A",
        city: "Laguna Niguel",
        state: "CA",
        zipCode: "92677",
        category: "MEXICAN",
        rating: "4.6",
        reviewCount: "440"
    }
    return (
        <div className="business">
            <img src={business.imageSrc} 
            alt={business.name} />
            <h1>{business.name}</h1>
            <div className="business-info">
                <p>{business.address}</p>
                <p>{business.city}</p>
                <p>{business.state}</p>
                <p>{business.zipCode}</p>
                <p>{business.category}</p>
                <p>{business.rating}</p>
                <p>{business.reviewCount}</p>
            </div>
        </div>
    );
}

export default Business;