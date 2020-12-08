import React, {Component} from 'react';
import SuitComponent from "./Components/shopSuitComponent"
<<<<<<< HEAD

=======
>>>>>>> dd8ce594bdabea8b84eed8a6f65932357a65a834

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
                {data.map((e, i) => {
                    return <SuitComponent img={e.img} name={e.name} price={e.price} color={e.color} key={i}/>
                })}

            </div>
        </section>
    </div>
  );
}


export default Shop;
