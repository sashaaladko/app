import React from "react";
import './header-styles.scss'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HeaderMenu from "../headerMenu/headerMenu";
import { NavLink } from "react-router-dom";
import FilterListIcon from '@mui/icons-material/FilterList';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useSetRecoilState } from "recoil";
import { filterAtom } from "../../../recoil/filter";

function HeaderComponent() {
const filterValue = useSetRecoilState(filterAtom)
    return(
        <div className="headerWrapper">
            <div className="headerContent">
                <NavLink to="/"><h1 className="headerTitle">Жмотинка</h1></NavLink>
                <div className="filter">
                <ArrowUpwardIcon onClick={()=>filterValue("ascend")}/>
                <ArrowDownwardIcon onClick={()=>filterValue("desc")}/>
                </div>
                <NavLink to="/cart"><div className="cartIcon"><ShoppingCartIcon/></div></NavLink>

            </div>
           <HeaderMenu/>
        </div>
    )
}

export default HeaderComponent