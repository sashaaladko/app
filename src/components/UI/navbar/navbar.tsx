import React from "react";
import './navbar.scss'

interface IProps{
    subcategories: any
}

const Navbar:React.FC<IProps>=({subcategories})=>{

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
                    <li><a>{e.title}</a></li>
                ))}
            </ul>
            
        </div>
    )
}

export default Navbar