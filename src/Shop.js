import React, {Component} from 'react';
import SuitComponent from "./Components/shopSuitComponent"
import data from "./Database/data"

function Shop() {
  return (
    <div className="App">
      <header></header>
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
