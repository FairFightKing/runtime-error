import React, {Component} from 'react';

const suitComponent = (props) => {
    return  (
        <div data-color={props.color}>
            <img src={props.img} alt=""/>
            <div>
                <h3>{props.name}</h3>
                <p>price : {props.price}</p>
                <button>Add to cart</button>
            </div>
        </div>
    )
}

export default suitComponent();