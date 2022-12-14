import React, { useState } from "react";

import type {CartData} from '../../../features/cartSlice'
import {ReactComponent as Pay} from '../../../img/pay.svg'
import {ReactComponent as ArrowTop} from '../../../img/arrowTop.svg'

import {ReactComponent as ArrowDown} from '../../../img/arrow-down-1-svgrepo-com.svg'
import ButtonComponent from "../../UI/button/buttonComponent";
import { useLoadScript } from "@react-google-maps/api";
import MapContainer from "../map/mapContainer";
import { Wrapper } from "@googlemaps/react-wrapper";
import RemoveIcon from '@mui/icons-material/Remove';
import Map from "../map/mapContainer";

interface IProps{
    cartItem:CartData[];
    theme?: string;
    incrAmountProductInCart: (id:string)=>void;
    decrAmountProductInCart: (id:string)=>void;
    color?: string;
}

const Cart:React.FC<IProps>=({cartItem, theme, incrAmountProductInCart, decrAmountProductInCart, color})=> {
    
    const [shop, setShop] = useState<string>('')
    const[evroopt, setEvroopt] = useState<number>(0)
    const[hippo, setHippo] = useState<number>(0)

    cartItem.map((e:any)=>{
        setEvroopt(evroopt+e.priceEvroopt)
        setHippo(hippo+e.priceHippo)
        if(evroopt<hippo){
            setShop('Евроопт')
        }
        else if(hippo<evroopt){
            setShop('Гиппо')
        }
        else if(hippo==evroopt){
            setShop('Одинаково')
        }
    })
    
    
    const {isLoaded} = useLoadScript({googleMapsApiKey: "AIzaSyASM6kY7nNQfeNAvrpsyrkT8a0GzsxBRkE"})
        return (
            <>
            <div className={`cartPage ${theme}`} >
                
                <div className="cartWrapper">
               
                    {cartItem.map((e)=>{
              
                       return( 
                        <>
                         <div className={`cartContainer ${theme}`}>
                            <div>
                           
                            </div>
                            <div className="infoCart">
                                <h2>{e.name}</h2>
                                <span className="price">{e.price*e.cartAmount} BYN</span>
                            </div>
                            <div className="quantity">
                                <RemoveIcon onClick={()=>incrAmountProductInCart(e.id)}/>
                                <span className="amount">{e.cartAmount}</span>
                                <span>{e.priceHippo}</span>
                                <span>{e.priceEvroopt}</span>
                                <RemoveIcon  onClick={()=>decrAmountProductInCart(e.id)}/>
                            </div>
                            <span>Ваша корзина обойдется вам дешевле: {shop}</span>
                        </div>
                        </>
                       )
                    })}
                    </div>
            </div>
            <MapContainer/>
            {/* <Wrapper apiKey="AIzaSyASM6kY7nNQfeNAvrpsyrkT8a0GzsxBRkE">
            @ts-ignore
                <Map/>
                <Marker position={position} />
            </Wrapper> */}
           
            </>
              
        ) 
}

export default Cart