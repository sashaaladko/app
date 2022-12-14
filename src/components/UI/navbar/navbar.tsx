import React from "react";
import { Link, NavLink } from "react-router-dom";
import './navbar.scss'

interface IProps{
    subcategories: any
    subCat?: any
}

const Navbar:React.FC<IProps>=({subcategories, subCat})=>{

    return(
        <div className="navbarMenu">
            <input type="checkbox" id="hmt" className="hidden-menu-ticker"></input>
            <label className="btn-menu" htmlFor="hmt">
                <span className="first"></span>
                <span className="second"></span>
                <span className="third"></span>
            </label>
            <ul className="hidden-menu">
                {subcategories.list&&subcategories.list.map((e:any)=>(
                    <Link to={`/categories/${subcategories.link}/${e.link}`} replace={true}><li><a>{e.title}</a></li></Link>
                ))}
            </ul>
            
        </div>
    )
}

export default Navbar