import React from "react"
import CartComponent from "./Components/cartComponent"
import style from "./cart.css"

function Cart() {
    const data = [
        {
            "name" : "Adidas",
            "price" : 80,
            "color" : "black",
        },
        {
            "name" : "Nike",
            "price" : 120,
            "color" : "Grey",
        }
    ]
    return(
    <div className="App">
        <header></header>
        <section>
            <div className="table">
                {data.map((e,i) => {
                    return <CartComponent name={e.name} price={e.price} color={e.color} key={i}/>
                } )}
            </div>
        </section>
    </div>
    )
}

export default Cart