import React from "react";
import { useParams } from "react-router-dom";
import useSubcatRender from "../../hooks/useSubcatRender";
import ChosenCategoryContainer from "../chosenCategory/chosenCategoryContainer";
import ChosenCategoryRender from "../chosenCategory/chosenCategoryRender";
import { addToCart } from '../../../features/cartSlice'
import { useAppDispatch } from "../../hooks/reduxHooks";
import Navbar from "../../UI/navbar/navbar";
import HeaderComponent from "../../UI/header/headerComponent";
import useSubCategories from "../../hooks/useSubcategories";


const SubCategories = () => {

    const params = useParams();
    const subCategoriesName = params.sublink
    const subCat = params.link
    const prodItems = useSubcatRender(subCategoriesName)
    const subcategories = useSubCategories(subCat)
    console.log(subCat)
    const dispatch = useAppDispatch()
    return(
        <>
        <HeaderComponent/>
        <Navbar subcategories={subcategories} subCat={subCat}/>
            <div className="container">
                {/* @ts-ignore */}
                {prodItems&&prodItems.map((e:any)=>(
                    <div className="wrapperProd">
                        <h1>{e.product}</h1>
                        <button onClick={()=>dispatch(addToCart({id: e.id, name : e.product, price : e.lowestPrice, priceHippo: e.priceHippo, priceEvroopt: e.priceEvroopt}))}>Добавить в корзину</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default SubCategories