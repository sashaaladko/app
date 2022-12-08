import React from "react";
import HeaderComponent from '../../UI/header/headerComponent'
import './categories.scss'
import CategoriesRender from "./categoriesRender";


function CategoriesContainer(){

    const veg = require('../../../img/vegfrut.jpg')
    const bread = require('../../../img/bread.jpg')
    const milk = require('../../../img/milk.jpg')
    const water = require('../../../img/water.jpeg')
    const fish = require('../../../img/fish.jpg')
    const meat = require('../../../img/meat.jpg')
    const bakaleya = require('../../../img/bakaleya.jpeg')

    const categories = [
    {title: "Молочные продукты, яйца", link: "milk", icon: <img src={milk}/>},
    {title: "Овощи и фрукты", link: "vegetables", icon: <img src={veg}/>},
    {title: "Хлеб, кондитерские изделия", link: "bread", icon: <img src={bread}/>},
    {title: "Мясо, колбасные изделия", link: "meat", icon: <img src={meat}/>},
    {title: "Рыба, морепродукты ", link: "fish", icon: <img src={fish}/>},
    {title: "Вода, напитки", link: "water", icon: <img src={water}/>},
    {title: "Бакалея", link: "bak", icon: <img src={bakaleya}/>},
]


    return(
        <>
        <HeaderComponent/>
           <CategoriesRender categories={categories}/>
        </>
    )
}

export default CategoriesContainer