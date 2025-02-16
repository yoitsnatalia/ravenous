import React from 'react';
import styles from "./Business.module.css";

// business card
function Business(props) {
    return (
        <div className={styles.Business}>
            <div className={styles.ImageContainer}>
                <img src={props.imageSrc} alt={props.name} />
            </div>
            <h2>{props.name}</h2>
            <div className={styles.Info}>
                <div className={styles.Address}>
                    <p>{props.address}</p>
                    <p>{props.city}</p>
                    <p>{`${props.state} ${props.zipCode}`}</p>
                </div>
                <div className={styles.Reviews}>
                    <h3 className={styles.Category}>{props.category.toUpperCase()}</h3>
                    <h3 className={styles.Rating}>{`${props.rating} stars`}</h3>
                    <p>{props.reviewCount}</p>
                </div>
            </div>
        </div>
    );
}

export default Business;