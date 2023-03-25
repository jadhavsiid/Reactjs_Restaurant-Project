import React, { useState } from 'react'
import "./Style.css";
import Menu from "./Menu-api"
import Menucard from './Menu-card';
import Navbar from './Navbar';

const uniquelist = [...new Set(Menu.map((curElem) => {
  return curElem.category;
})
)];
console.log(uniquelist);

const Restaurant = () => {
const[MenuData, setMenuData] = useState(Menu);
const[MenuList, setMenuList] = useState(uniquelist);

const filterItem = (category) => {
  const updatedList = Menu.filter((curElem) => {
    return curElem.category === category;
  });

  setMenuData(updatedList);

};

  return (
    <>
    <Navbar filterItem = {filterItem} MenuList = {MenuList} />
    <Menucard MenuData={MenuData}/>
    </>
  )
}

export default Restaurant