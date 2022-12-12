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

    const subcategories = useSubCategories('bak')
    console.log(subcategories)

    const dispatch = useAppDispatch()

    function addToCartHandler(){
        productItems.map((e:any)=>{
            return  dispatch(addToCart({id: e.id, name : e.Title, price : +e.price}))
        })
    }

    return(
        <>
            <Navbar subcategories={subcategories}/>
            <div className="container">
                {productItems.map((e:any)=>(
                    <div className="wrapperProd">
                        <h1>{e.product}</h1>
                        <button onClick={()=>dispatch(addToCart({id: e.id, name : e.product, price : e.priceHippo}))}>Добавить в корзину</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ChosenCategoryRender