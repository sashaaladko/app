import React from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../hooks/reduxHooks";
import useSubCategories from "../../hooks/useSubcategories";
import HeaderComponent from '../../UI/header/headerComponent'
import Navbar from "../../UI/navbar/navbar";
import './chosen-category.scss'
import { addToCart } from '../../../features/cartSlice'

interface IProps{
    productItems: any
    categoriesName: any
}


const ChosenCategoryRender:React.FC<IProps>=({productItems, categoriesName})=>{

    const subcategories = useSubCategories(categoriesName)

    const dispatch = useAppDispatch()

    return(
        <>
            <Navbar subcategories={subcategories}/>
            <div className="container">
                {productItems.map((e:any)=>(
                    <div className="wrapperProd">
                        <h1>{e.product}</h1>
                        <button onClick={()=>dispatch(addToCart({id: e.id, name : e.product, price : e.lowestPrice, priceHippo: e.priceHippo, priceEvroopt: e.priceEvroopt}))}>Добавить в корзину</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ChosenCategoryRender