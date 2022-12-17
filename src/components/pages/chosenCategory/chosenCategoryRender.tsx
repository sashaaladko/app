import React from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../hooks/reduxHooks";
import useSubCategories from "../../hooks/useSubcategories";
import HeaderComponent from '../../UI/header/headerComponent'
import Navbar from "../../UI/navbar/navbar";
import './chosen-category.scss'
import { addToCart } from '../../../features/cartSlice'
import { useRecoilValue } from "recoil";
import { filterAtom } from "../../../recoil/filter";

interface IProps{
    productItems: any
    categoriesName: any
}


const ChosenCategoryRender:React.FC<IProps>=({productItems, categoriesName})=>{

    const subcategories = useSubCategories(categoriesName)
    const filter = useRecoilValue(filterAtom)
    const dispatch = useAppDispatch()

    if(filter==="ascend"){
        //@ts-ignore
        productItems.sort((a,b)=>a.lowestPrice-b.lowestPrice)
    }
    else if(filter==='desc'){
        //@ts-ignore
        productItems.sort((a,b)=> b.lowestPrice-a.lowestPrice)
    }

    return(
        <>
            <Navbar subcategories={subcategories}/>
            <div className="container">
                {productItems.map((e:any)=>(
                    <div className="wrapperProd">
                        <h1>{e.product}</h1>
                        <span className="priceProd">{e.lowestPrice}</span>
                        <button onClick={()=>dispatch(addToCart({id: e.id, name : e.product, price : e.lowestPrice, priceHippo: e.priceHippo, priceEvroopt: e.priceEvroopt}))}>Добавить в корзину</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ChosenCategoryRender