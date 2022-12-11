import React from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../hooks/reduxHooks";
import useSubCategories from "../../hooks/useSubcategories";
import HeaderComponent from '../../UI/header/headerComponent'
import Navbar from "../../UI/navbar/navbar";
import './chosen-category.scss'
import { addToCart } from '../../../features/cartSlice'

interface IProps{
    chosenCategory: any
    categoriesName: any
}


const ChosenCategoryRender:React.FC<IProps>=({chosenCategory, categoriesName})=>{

    const subcategories = useSubCategories('bak')
    console.log(subcategories)

    const dispatch = useAppDispatch()

    function addToCartHandler(){
        chosenCategory.map((e:any)=>{
            return  dispatch(addToCart({id: e.id, name : e.Title, price : +e.price}))
        })
    }

    return(
        <>
            <Navbar subcategories={subcategories}/>
            <div className="container">
                {chosenCategory.map((e:any)=>(
                    <div className="wrapperProd">
                        <h1>{e.Title}</h1>
                        <button onClick={()=>dispatch(addToCart({id: e.id, name : e.Title, price : +e.price}))}>Добавить в корзину</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ChosenCategoryRender