import React from "react";
import { NavLink } from "react-router-dom";
import useSubCategories from "../../hooks/useSubcategories";

import Navbar from "../../UI/navbar/navbar";
import './categories.scss'

interface IProps{
    categories: any
}


const CategoriesRender:React.FC<IProps>=({categories})=>{
 
    return(
        <>
            <div className="container">
                {categories.map((e:any)=>(
                    <NavLink to={`/categories/${e.link}`}>
                    <div className="wrapper">
                        <h1>{e.title}</h1>
                        <div className="categoriesIcon">{e.icon}</div>
                    </div>
                    </NavLink>
                ))}
            </div>
        </>
    )
}

export default CategoriesRender