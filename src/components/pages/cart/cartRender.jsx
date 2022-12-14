import React, { useState } from "react";

// import type {CartData} from '../../../features/cartSlice'

import ButtonComponent from "../../UI/button/buttonComponent";
import { useLoadScript } from "@react-google-maps/api";
import MapContainer from "../map/mapContainer";
import { Wrapper } from "@googlemaps/react-wrapper";
import RemoveIcon from '@mui/icons-material/Remove';
import Map from "../map/mapContainer";

// interface IProps{
//     cartItem:CartData[];
//     theme?: string;
//     incrAmountProductInCart: (id:string)=>void;
//     decrAmountProductInCart: (id:string)=>void;
//     color?: string;
// }

const Cart=({cartItem, theme, incrAmountProductInCart, decrAmountProductInCart, color, clearCart})=> {
    
    const [shop, setShop] = useState('')
    const[evroopt, setEvroopt] = useState(0)
    const[hippo, setHippo] = useState(0)
    const[address, setAddress] = useState([])

    const evrooptAddress = [
        {lat:53.840148,
        lng: 27.568784,
      key:1},
        {lat:53.925937,
        lng: 27.444781,
      key:2},
        {lat:53.873521,
        lng: 27.416187,
      key:3},
        {lat:53.917538,
        lng: 27.429321,
      key:4},
        {lat:53.9077,
        lng: 27.48463,
      key:5},
    ]

    const hippoAddress = [
      {lat:53.859164,
      lng: 27.46307,
    key:1},
      {lat:53.899976,
      lng: 27.441268,
    key:2},
      {lat:53.870601,
      lng: 27.551438,
    key:3},
      {lat:53.851198,
      lng: 27.545643,
    key:4},
      {lat:53.875045,
      lng: 27.594871,
    key:5},
  ]


    function calculateHandler(){
        let inval = 0
        const totalPriceEvroopt = cartItem.map((e)=>{
           return e.priceEvroopt
        })
        const totalPriceHippo = cartItem.map((e)=>{
            return e.priceHippo
        })
        const evr =  totalPriceEvroopt.reduce((a, b)=>a+b, inval)
        const hipp= totalPriceHippo.reduce((a,b)=>a+b, inval)
        setEvroopt(evr)
        setHippo(hipp)
        if(evroopt<hippo){
            setShop('Евроопт')
            setAddress(evrooptAddress)
        }
        else if(hippo<evroopt){
            setShop('Гиппо')
            setAddress(hippoAddress)
        }
        else if(hippo==evroopt){
            setShop('Одинаково')
            setAddress(evrooptAddress)
        }
        console.log(evroopt)
        console.log(hippo)
    }

    
   const {isLoaded} = useLoadScript({googleMapsApiKey: "AIzaSyASM6kY7nNQfeNAvrpsyrkT8a0GzsxBRkE"})
        return (
            <div className="cart">
            <div className={`cartPage ${theme}`} >
                <div className="cartWrapper">
                    <div className="btnContainer">
                        <button className="cartBtn" onClick={calculateHandler}>Рассчитать</button>
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
                                <span className="price">{e.price*e.cartAmount} BYN</span><br/>
                                <span className="price">Цена в гиппо: {e.priceHippo}</span><br/>
                                <span className="price">Цена в евроопт: {e.priceEvroopt}</span><br/>
                            </div>
                            <div className="quantity">
                                <RemoveIcon onClick={()=>incrAmountProductInCart(e.id)}/>
                                <span className="amount">{e.cartAmount}</span>
                                <RemoveIcon  onClick={()=>decrAmountProductInCart(e.id)}/>
                            </div>
                           
                        </div>
                      
                        </>
                       )
                    })}
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