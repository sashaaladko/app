import React from "react";
import { NavLink } from "react-router-dom";
import './not-found.scss'

function NotFound(){
    return(
        <>
            <h1>404</h1>
            <div>Страница, которую вы ищете, не найдена</div>
            <NavLink to="/">Перейти на главную</NavLink>
        </>

    )
}

export default NotFound