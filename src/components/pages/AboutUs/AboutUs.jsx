import React from "react";
import HeaderComponent from "../../UI/header/headerComponent";
import './about-us-styles.scss'
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

function AboutUs(){

    return(
        <>
        <HeaderComponent/>
            <h1>О сайте</h1>
                <span>Наш сайт предоставляет возможность сравнить цены на продукты в таких продуктовых сетях как Гиппо и Евроопт.
                    Вы можете добавить в корзину необходимые вам товары и наглядно сравнить цены и определить, в каком магазине
                    ваша корзина обойдется вам выгоднее всего!
                    Экономте деньги с нашей помощью!
                </span>
            <h1>О разработчиках</h1>
            <span>С помощью Куц Вероники - бэкэнд-разработчик
                и Аладко Александры - фронтэнд-разработчик мы создали этот сайт, нацеленый помочь людям экономить деньги.
                Наш сайт - молодой проект, которому всего 3 месяца, но мы стремимся развиваться для вас!
            </span>
            <span>По всем вопросам и предложениям вы можете связаться с нами <a href="https://www.instagram.com/lohushkam_mimo/"><InstagramIcon/></a> </span>
        </>
    )
}

export default AboutUs