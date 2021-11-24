import React from 'react';
import './styles.css';

const Card = ({ data, varient }) => {
    return (
        <div className={`card ${varient}`}>
            <img src={data.image} alt={data.type} />
            <div className="container">
                <h4><b>{data.type.toUpperCase()}</b></h4>
                <p>{data.description}</p>
            </div>
        </div>
    );
}

export default Card;