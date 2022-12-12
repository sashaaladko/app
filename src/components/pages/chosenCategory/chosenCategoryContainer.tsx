import React from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";
import useCategories from "../../hooks/useCategories";
import HeaderComponent from '../../UI/header/headerComponent'
import NotFound from "../notFound/notFound";
import '../сategories/categories.scss'
import ChosenCategoryRender from "./chosenCategoryRender";


function ChosenCategoryContainer(){


const params = useParams();
const categoriesName = params.link

const chosenCategory = useCategories(categoriesName)
const productItems = useAppSelector((store)=>store.prod.prodItems)

    return(
        <>
        <HeaderComponent/>
        {chosenCategory=='not found'?<NotFound/>: <ChosenCategoryRender productItems={productItems} categoriesName={categoriesName}/>}
           
        </>
    )
}

export default ChosenCategoryContainer