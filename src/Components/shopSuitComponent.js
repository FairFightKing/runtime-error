import React from 'react';

const SuitComponent = (props) => {
    return  (
        <div data-color={props.color} className="card">
            <img src={props.img}/>
            <div>
                <h3>{props.name}</h3>
                <p>price : {props.price}</p>
                <button>Add to cart</button>
            </div>
        </div>
    )
}

export default SuitComponent;