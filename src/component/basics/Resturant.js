import React, { useState } from "react";
import "./style.css";
// eslint-disable-next-line no-unused-vars
import Menu from "./menuapi.js";
// eslint-disable-next-line no-unused-vars
import MenuCard from "./MenuCard";
import Navbar from "./Navbar"

// eslint-disable-next-line no-unused-vars
const uniqueList = [
  ...new Set(
  Menu.map((curElem) => {
    return curElem.category
  })
),
"All"
]

const Resturant = () => {
  // eslint-disable-next-line no-unused-vars
  const [menuData, setMenuData] = useState(Menu);
  // eslint-disable-next-line no-unused-vars
  const [menuList, setMenuList] = useState(uniqueList);


  const filterItem = (category) => {
    if(category === "All"){
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((currElem) => {
      return currElem.category === category;
    });
    setMenuData(updatedList);
  };
  return (
    <>
      
      <Navbar filterItem={filterItem} menuList={menuList}/>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;
