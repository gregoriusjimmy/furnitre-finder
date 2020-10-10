import React from 'react';

export const CheckboxInput = ({ value, handleChange }) => {
  return (
    <div>
      <input
        type='checkbox'
        name={value}
        value={value}
        onClick={handleChange}
      />
      <label htmlFor={value}>{value}</label>
    </div>
  );
};
