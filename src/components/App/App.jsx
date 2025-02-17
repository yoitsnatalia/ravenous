import React, { useState } from 'react';
import styles from './App.module.css';
import BusinessList from '../BusinessList/BusinessList.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';

export default function App() {
  const [businesses, setBusinesses] = useState([]);

  // update businesses shown with new search inputs
  const updateBusinesses = (businesses) => {
    setBusinesses(businesses);
  }

  return (
    <div className={styles.App}>
        <h1>ravenous</h1>
        < SearchBar updateBusinesses={updateBusinesses}/>
        {businesses.length > 0 ? (< BusinessList businesses={businesses}/>) : (<p>Find your next craving...</p>)}
    </div>
  );
};


