import React from 'react';
import './checkout-item.styles.scss';

const CheckoutItem = ({item}) => (
    <div className='checkout__item'>
        <div className='checkout__item--block'>
            <img src={item.imageUrl} alt='item'/>
        </div>
        <div className='checkout__item--block'>
            <p>{item.name}</p>
        </div>
        <div className='checkout__item--block'>
            <span>&lt;</span>
            <p> {item.quantity} </p>
            <span>&gt;</span>
        </div>
        <div className='checkout__item--block'>
            <p>${item.quantity * item.price}</p>
        </div>
        <div className='checkout__item--block'>
            <span>&times;</span>
        </div>
    </div>
);

export default CheckoutItem;