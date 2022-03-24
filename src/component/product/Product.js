import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    const {addToCard, product} = props
    const {img, name, price, ratings, category } = props.product
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h6 className='product-name'>{name}</h6>
            <h6 className='product-price'>price: {price}</h6>
            <h6 className='product-rating'>ratings: {ratings}</h6>
            <h6 className='product-category'>category: {category}</h6>
            </div>
            <button onClick={()=>addToCard(product.id)} className='product-btn'><span>add to card</span><span><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></span></button>
        </div>
    );
};

export default Product;