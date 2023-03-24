import React from "react";
import "./style.css";
// eslint-disable-next-line no-unused-vars
import Menu from "./menuapi.js";
// eslint-disable-next-line no-unused-vars
//import Menucard from "./MenuCard";

const MenuCard = ({ menuData }) => {
  // eslint-disable-next-line no-unused-vars, no-undef

  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          // eslint-disable-next-line no-unused-vars
          const{ id, name, category, image, description} = curElem
          return (
            <>
              <div className="card-container" key={id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle">{id}</span>
                    <h2 className="card-title">{name}</h2>
                    <span className="card-description subtle">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Incidunt sit voluptatem excepturi minima! Vero accusantium
                      
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                 <img src={image} alt="images" className="card-media" /> 
                  
                  <span className="card-tag subtle">Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
