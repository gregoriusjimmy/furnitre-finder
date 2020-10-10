import React from 'react';
import './card.styles.scss';
import { formatMoney } from '../../utils/utils';
export const Card = ({ product }) => {
  const { name, price, description, delivery_time, furniture_style } = product;

  return (
    <div className='card'>
      <div className='header'>
        <h3 className='name'>{name}</h3>
        <p className='price'>{`Rp.${formatMoney(price)}`}</p>
      </div>
      <p className='description'>{description}</p>
      <ul className='furniture-style'>
        {furniture_style.map((style) => {
          return <li key={Math.random()}>{style}</li>;
        })}
      </ul>
      <p className='delivery-time'>{delivery_time}</p>
    </div>
  );
};
