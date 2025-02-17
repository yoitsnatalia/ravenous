import React from 'react';
import Business from '../Business/Business.jsx';
import styles from './BusinessList.module.css';

// collection of business cards compatible with Yelp API
export default function BusinessList(props) {
    return (
        <div className={styles.BusinessList}>
            {props.businesses.map((business, index) => (
                <Business 
                    key={index}
                    imageSrc={business.image_url}
                    name={business.name}
                    address={business.location.address1}
                    city={business.location.city}
                    state={business.location.state}
                    zipCode={business.location.zip_code}
                    category={business.categories[0].title}
                    rating={business.rating}
                    reviewCount={business.review_count}
                />
            ))}
        </div>
    );    
}