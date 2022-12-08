 import React from "react"
import { useRoutes } from "react-router-dom";
import CartContainer from "../pages/cart/cartContainer";
import ChosenCategoryContainer from "../pages/chosenCategory/chosenCategoryContainer";
import MainPage from "../pages/manePage/mainPage";
import CategoriesContainer from "../pages/сategories/categoriesContainer";


const RouteHook:React.FC = () => {
    let routeResult = useRoutes([
        {
          path: '/',
          element: <MainPage/>
        },
        {
          path: "categories",
          element: <CategoriesContainer/>
        }, 
       {
        path: 'categories/:link',
        element: <ChosenCategoryContainer/>
       },
       {
        path: 'cart',
        element: <CartContainer/>
       }

        
      ])

      return routeResult
}

export default RouteHook