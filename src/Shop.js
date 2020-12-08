import React, {Component} from 'react';
import suitComponent from "./Components/shopSuitComponent"
function Shop() {
  return (
    <div className="App">
      <header></header>
        <section>
            <div className="filter">
                <suitComponent>
                    
                </suitComponent>
            </div>
            <div className="content">

            </div>
        </section>
    </div>
  );
}


export default Shop;
