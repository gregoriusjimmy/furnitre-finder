import React from 'react';
import { CheckboxInput } from '../checkbox-input/checkbox-input.component';
export const CheckboxDeliveryTime = ({ handleChange }) => {
  return (
    <div>
      <CheckboxInput value='1 week' handleChange={handleChange} />
      <CheckboxInput value='2 weeks' handleChange={handleChange} />
      <CheckboxInput value='1 month' handleChange={handleChange} />
      <CheckboxInput value='2 months' handleChange={handleChange} />
    </div>
  );
};
