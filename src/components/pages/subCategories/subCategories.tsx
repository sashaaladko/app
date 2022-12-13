import React from "react";
import { useParams } from "react-router-dom";
import ChosenCategoryContainer from "../chosenCategory/chosenCategoryContainer";



const SubCategories = () => {

    const params = useParams();
    const subCategoriesName = params.sublink

    return(
        <>
        {/* <ChosenCategoryRender/> */}
        </>
    )
}

export default SubCategories