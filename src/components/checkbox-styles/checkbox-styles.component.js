import React from 'react';
import { CheckboxInput } from '../checkbox-input/checkbox-input.component';
export const CheckboxStyles = ({ handleChange }) => {
  return (
    <div>
      <CheckboxInput value='Classic' handleChange={handleChange} />
      <CheckboxInput value='Midcentury' handleChange={handleChange} />
      <CheckboxInput value='Scandinavian' handleChange={handleChange} />
      <CheckboxInput value='Modern' handleChange={handleChange} />
      <CheckboxInput value='Contemporary' handleChange={handleChange} />
    </div>
  );
};
