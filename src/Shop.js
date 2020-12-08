<<<<<<< HEAD
import React from "react";
import SuitComponent from "./Components/shopSuitComponent";
import image from "./img/image.png";
=======
import React, {Component} from 'react';
import SuitComponent from "./Components/shopSuitComponent"
<<<<<<< HEAD

=======
>>>>>>> dd8ce594bdabea8b84eed8a6f65932357a65a834

>>>>>>> 91809d79d9de68b1ff13be3d11cb746639f4e728
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
