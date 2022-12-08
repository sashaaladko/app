import React from "react";
import './navbar.scss'

interface IProps{
    subcategories: any
}

const Navbar:React.FC<IProps>=({subcategories})=>{

    return(
        <div>
            <ul className="hidden-menu">
                {subcategories&&subcategories.map((e:any)=>(
                    <li><a>{e.title}</a></li>
                ))}
            </ul>
        </div>
    )
}

export default Navbar