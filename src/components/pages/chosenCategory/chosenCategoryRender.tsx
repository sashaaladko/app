import React from "react";
import { NavLink } from "react-router-dom";
import useSubCategories from "../../hooks/useSubcategories";
import HeaderComponent from '../../UI/header/headerComponent'
import Navbar from "../../UI/navbar/navbar";
import '../сategories/categories.scss'

interface IProps{
    chosenCategory: any
}


const ChosenCategoryRender:React.FC<IProps>=({chosenCategory})=>{

    const subcategories = useSubCategories(chosenCategory[0].link)
    console.log(chosenCategory)
    return(
        <>
            <Navbar subcategories={subcategories}/>
            <div className="container">
                {chosenCategory.map((e:any)=>(
                    <div className="wrapper">
                        <h1>{e.Title}</h1>
                        <button>Добавить в корзину</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ChosenCategoryRender