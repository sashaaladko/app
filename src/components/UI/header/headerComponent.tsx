import React from "react";
import './header-styles.scss'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HeaderMenu from "../headerMenu/headerMenu";
import { NavLink } from "react-router-dom";

function HeaderComponent() {

    return(
        <div className="headerWrapper">
            <div className="headerContent">
                <NavLink to="/"><h1 className="headerTitle">Жмотинка</h1></NavLink>
                <NavLink to="/cart"><div className="cartIcon"><ShoppingCartIcon/></div></NavLink>
            </div>
           <HeaderMenu/>
        </div>
    )
}

export default HeaderComponent