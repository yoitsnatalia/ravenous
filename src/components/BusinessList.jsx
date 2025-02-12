import React from 'react';
import Business from './Business.jsx'

const businesses = [
    {
        imageSrc: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
        name: "Caló Kitchen & Tequila",
        address: "28141 Crown Valley Pkwy Suite A",
        city: "Laguna Niguel",
        state: "CA",
        zipCode: "92677",
        category: "MEXICAN",
        rating: "4.6",
        reviewCount: "440"
    },
    {
        imageSrc: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
        name: "Din Tai Fung",
        address: "28141 Crown Valley Pkwy Suite A",
        city: "Laguna Niguel",
        state: "CA",
        zipCode: "92677",
        category: "TAIWANESE",
        rating: "4.6",
        reviewCount: "440"
    },
    {
        imageSrc: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
        name: "Casanova Ristorante",
        address: "28141 Crown Valley Pkwy Suite A",
        city: "Laguna Niguel",
        state: "CA",
        zipCode: "92677",
        category: "ITALIAN",
        rating: "4.6",
        reviewCount: "440"
    }
];

export default function BusinessList() {
    return (
        <div className="business-list">
            {businesses.map((business, index) => (
                <Business 
                    key={index}
                    imgSrc={business.imgSrc}
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