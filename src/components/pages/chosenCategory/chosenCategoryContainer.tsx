import React from "react";
import { useParams } from "react-router-dom";
import useCategories from "../../hooks/useCategories";
import HeaderComponent from '../../UI/header/headerComponent'
import NotFound from "../notFound/notFound";
import '../сategories/categories.scss'
import ChosenCategoryRender from "./chosenCategoryRender";


function ChosenCategoryContainer(){


const params = useParams();
const categoriesName = params.link

const chosenCategory = useCategories(categoriesName)


    return(
        <>
        <HeaderComponent/>
        {chosenCategory=='not found'?<NotFound/>: <ChosenCategoryRender chosenCategory={chosenCategory}/>}
           
        </>
    )
}

export default ChosenCategoryContainer