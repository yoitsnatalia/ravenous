import React from 'react';
import './App.css';
import Business from '../Business/Business.jsx';
import BusinessList from '../BusinessList/BusinessList.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import { businesses } from './businessData'

export default function App() {
  return (
    <div className="App">
        <h1>ravenous</h1>
        < SearchBar />
        < BusinessList businesses={businesses}/>
    </div>
  );
};


