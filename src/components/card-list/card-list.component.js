import React from 'react';
import './card-list.styles.scss';
import { Card } from '../card/card.component';

export const CardList = ({ products }) => {
  return (
    <div className='card-list'>
      {products.map((product) => (
        <Card key={Math.random()} product={product} />
      ))}
    </div>
  );
};
