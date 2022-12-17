import React from "react";
import './footer-styles.scss'
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import { NavLink } from "react-router-dom";

function FooterComponent() {

    return (
        <>
        <div className="footer">
            <span className="footerTitle">Свяжитесь с нами: </span>
            <a href="https://www.instagram.com/lohushkam_mimo/"><InstagramIcon href="https://www.instagram.com/lohushkam_mimo/"/></a>
        </div>

<div className="aboutUsLink"><NavLink to="aboutUs"><span>O нас</span></NavLink></div>
</>
    )
}

export default FooterComponent