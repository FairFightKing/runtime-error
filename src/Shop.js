import React, {Component} from 'react';
import SuitComponent from "./Components/shopSuitComponent"
import style from "./shop.css"
import man from "./img/man.png";
import woman from "./img/woman.png";

function Shop() {
  const data = [
    {
      name: "Adidas",
      price: 80,
      color: "black",
      img: "url",
      image: man,
    },
    {
      name: "Nike",
      price: 150,
      color: "orange",
      img: "url",
      image: woman,
    },
  ];
  return (
    <div className="App">
      <header></header>
      <section>
        <div className="filter"></div>
        <div className="content">
          {data.map((e, i) => {
            return (
              <SuitComponent
                img={e.image}
                name={e.name}
                price={e.price}
                color={e.color}
                key={i}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Shop;
