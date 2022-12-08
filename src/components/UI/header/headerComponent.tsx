import React from "react";
import './header-styles.scss'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HeaderMenu from "../headerMenu/headerMenu";

function HeaderComponent() {

    return(
        <div className="headerWrapper">
            <div className="headerContent">
                <h1 className="headerTitle">Жмотинка</h1>
                <div className="cartIcon"><ShoppingCartIcon/></div>
            </div>
           <HeaderMenu/>
        </div>
    )
}

export default HeaderComponent