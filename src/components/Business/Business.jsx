import React from 'react';
import "./Business.css";

// business card
function Business(props) {
    return (
        <div className="Business">
            <div className="imageContainer">
                <img src={props.imageSrc} alt={props.name} />
            </div>
            <h2>{props.name}</h2>
            <div className="info">
                <div className="address">
                    <p>{props.address}</p>
                    <p>{props.city}</p>
                    <p>{`${props.state} ${props.zipCode}`}</p>
                </div>
                <div className="reviews">
                    <h3 className="category">{props.category.toUpperCase()}</h3>
                    <h3 className="rating">{`${props.rating} stars`}</h3>
                    <p>{props.reviewCount}</p>
                </div>
            </div>
        </div>
    );
}

export default Business;