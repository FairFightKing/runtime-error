import React, {Component} from 'react';
import suitComponent from "./Components/shopSuitComponent"
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
                    return <suitComponent img={data.img} name={data.name} price={data.price} color={data.color}/>
                })}

            </div>
        </section>
    </div>
  );
}


export default Shop;
