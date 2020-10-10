import React from 'react';
// import './search-box.styles.css';

export const SearchField = ({ placeholder, handleChange }) => {
  return (
    <input type='search' placeholder={placeholder} onChange={handleChange} />
  );
};
