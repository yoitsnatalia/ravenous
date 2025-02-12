import React from 'react';
import "./Business.css"

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
        <div className="Business">
            <div className="imageContainer">
                <img src={business.imageSrc} alt={business.name} />
            </div>
            <h2>{business.name}</h2>
            <div className="info">
                <div className="address">
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{`${business.state} ${business.zipCode}`}</p>
                </div>
                <div className="reviews">
                    <h3 className="category">{business.category.toUpperCase()}</h3>
                    <h3 className="rating">{`${business.rating} stars`}</h3>
                    <p>{business.reviewCount}</p>
                </div>
            </div>
        </div>
    );
}

export default Business;