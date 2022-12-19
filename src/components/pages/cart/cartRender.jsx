import React, { useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import MapContainer from "../map/mapContainer";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { evrooptAddress } from "./constans";
import { hippoAddress } from "./constans";
import { NavLink } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import {shopAtom} from '../../../recoil/form'


const Cart=({cartItem, theme, incrAmountProductInCart, decrAmountProductInCart, clearCart,
  totalPriceEvroopt, totalPriceHippo})=> {
    
    const [shop, setShop] = useState('')
    const[evroopt, setEvroopt] = useState(0)
    const[hippo, setHippo] = useState(0)
    const[address, setAddress] = useState([])
    const shopValue = useSetRecoilState(shopAtom)

    function calculateHandler(){

        if(totalPriceEvroopt()<totalPriceHippo()){
            setShop('Евроопт')
            setAddress(evrooptAddress)
            shopValue('1')
        }
        else if(totalPriceHippo()<totalPriceEvroopt()){
            setShop('Гиппо')
            setAddress(hippoAddress)
            shopValue('2')
        }
        else if(totalPriceEvroopt()==totalPriceHippo()){
            setShop('Одинаково')
            setAddress(evrooptAddress)
            shopValue('1')
        }
    }
    
   const {isLoaded} = useLoadScript({googleMapsApiKey: "AIzaSyASM6kY7nNQfeNAvrpsyrkT8a0GzsxBRkE"})

        return (
            <div className="cart">
            <div className={`cartPage ${theme}`} >
                <div className="cartWrapper">
                    <div className="btnContainer">
                        <button className="cartBtn" onClick={calculateHandler}>Рассчитать</button>
                        <NavLink to="/delivery"><button className="delivery cartBtn">Заказать доставку</button></NavLink>
                        <button className="cartBtn" onClick={clearCart}>Очистить корзину</button>
                    </div>
                
                    {cartItem.map((e)=>{
                       return( 
                        <>
                         <div className={`cartContainer ${theme}`}>
                            <div>
                           
                            </div>
                            <div className="infoCart">
                                <h2>{e.name}</h2>
                                <span className="price">Гиппо: {e.priceHippo*e.cartAmount} BYN</span><br/>
                                <span className="price">Евроопт: {e.priceEvroopt*e.cartAmount} BYN</span><br/>
                                <span className="price">Цена в гиппо: {e.priceHippo} BYN</span><br/>
                                <span className="price">Цена в евроопт: {e.priceEvroopt} BYN</span><br/>
                            </div>
                            <div className="quantity">
                                <AddIcon onClick={()=>incrAmountProductInCart(e.id)}/>
                                <span className="amount">{e.cartAmount}</span>
                                <RemoveIcon  onClick={()=>decrAmountProductInCart(e.id)}/>
                            </div>
                        </div>
                        </>
                       )
                    })}
                    <span>Общая стоимость в Евроопте: {totalPriceEvroopt()}</span>
                    <span>Общая стоимость в Гиппо: {totalPriceHippo()}</span>
                     <span>Ваша корзина обойдется вам дешевле: {shop}</span>
                    
                    </div>
            </div>
            <MapContainer address={address}/>
            {/* <Wrapper apiKey="AIzaSyASM6kY7nNQfeNAvrpsyrkT8a0GzsxBRkE">
            @ts-ignore
                <Map/>
                <Marker position={position} />
            </Wrapper> */}
           
            </div>
        ) 
}

export default Cart