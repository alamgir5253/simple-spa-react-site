import React from 'react';
import './Card.css'

const Card = ({card}) => {
    console.log(card)
    let totalPrice = 0;
    let shippingPrice = 0;
    for(const product of card){
        totalPrice = totalPrice + product.price
        shippingPrice = shippingPrice + product.shipping
    }
    const tax = totalPrice * .1;
    const toFixed = tax.toFixed(2)
    return (
        <div className='card'>
            <h4 className='text-center'>order summery</h4>
                <p> selected item: {card.length}</p>
                <p>total price: $ {totalPrice} </p>
                <p>total shipping price: $ {shippingPrice}</p>
                <p>tax $ {toFixed}</p>
                <h5>grund total</h5>
        </div>
    );
};

export default Card;