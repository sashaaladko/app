import React from "react";
import { Link } from "react-router-dom";
import HeaderComponent from "../../UI/header/headerComponent";
import './mainPage-styles.scss'


function MainPage() {
    const logo = require("../../../img/mainImg.jpg");
    return(
        <>
        <HeaderComponent/>
         <div className="mainContainer">
            {/* <img className="mainImg" alt='logo' src={String(logo)}/> */}
            <span className="firstMainText">Начни экономить уже сейчас!</span>
            <span className="secondMainText">Собери свою корзину</span>
            <div className="thirdTextContainer"><span className="thirdMainText">И узнай, в каком магазине ты больше всего сэкономишь!</span></div>
            <Link to={'/categories'}><button className="mainBtn">Начать</button></Link>
        </div>
        </>
       
    )
}

export default MainPage