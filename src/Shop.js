import React, {Component} from 'react';
import SuitComponent from "./Components/shopSuitComponent"


function Shop() {
    const data = [
        {
            "name" : "Adidas",
            "price" : 80,
            "color" : "black",
            "img" : "url"
        }
    ]
  return (
    <div className="App">
      <header>

      </header>
        <section>
            <div className="filter">
            </div>
            <div className="content">
                {data.map((data) => {
                    return <SuitComponent img={data.img} name={data.name} price={data.price} color={data.color}/>
                })}

            </div>
        </section>
    </div>
  );
}


export default Shop;
