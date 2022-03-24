import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import Product from '../product/Product';
import './Shoes.css'
const Shoes = () => {
    const [products, setProducts] = useState([])
    const [card, setCard] = useState([])
    useEffect(() =>{
        fetch("products.json")
        .then(res => res.json())
        .then(data =>setProducts(data))
    },[])
    const addToCard = (product)=>{
        const newCard = [...card, product]
        setCard(newCard)
    }
    return (
        <div className='shoes-container'>
            <div className="main-part">
                {
                    products.map(product => <Product 
                        product = {product}
                        key = {product.id}
                        addToCard={addToCard}></Product>)
                }
            </div>
            <div className="card-area">
                <Card card = {card}></Card>
            </div>
        </div>
    );
};

export default Shoes;