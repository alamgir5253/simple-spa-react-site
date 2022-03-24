import React from 'react';
import './Card.css'

const Card = ({card}) => {
    return (
        <div>
            <h1>card part</h1>
                <p>count:{card.length}</p>
        </div>
    );
};

export default Card;