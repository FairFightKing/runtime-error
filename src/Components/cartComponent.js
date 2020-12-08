import React, {useState} from "react";

const CartComponent = (props) => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <div className="infos">
                <p>product : {props.name}</p>
                <p>price : {props.price}</p>
                <p>color : {props.color}</p>
            </div>
            <div className="amount">
                <button onClick={() => setCount(count + 1)}>+</button>
                {count}
                <button onClick={() => setCount(count - 1)}>-</button>
            </div>
        </div>
    )
}

export default CartComponent;