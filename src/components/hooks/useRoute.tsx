 import React from "react"
import { useRoutes } from "react-router-dom";
import FormContainer from "../form/form";
import AboutUs from "../pages/AboutUs/AboutUs";
import CartContainer from "../pages/cart/cartContainer";
import ChosenCategoryContainer from "../pages/chosenCategory/chosenCategoryContainer";
import MainPage from "../pages/manePage/mainPage";
import NotFound from "../pages/notFound/notFound";
import SubCategories from "../pages/subCategories/subCategories";
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
       },
       {
        path: 'categories/:link/:sublink',
        element: <SubCategories/>
       },
       {
        path: 'aboutUs',
        element: <AboutUs/>
       },
       {
        path: 'delivery',
        element: <FormContainer/>
       },
       {path: '*',
        element: <NotFound/>
      },
        
      ])

      return routeResult
}

export default RouteHook