import React, {Component} from 'react';
import SuitComponent from "./Components/shopSuitComponent"
import style from "./shop.css"
import image from "./img/image.png";

function Shop() {
  const data = [
    {
      name: "Adidas",
      price: 80,
      color: "black",
      img: "url",
      image: image,
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
