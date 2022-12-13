import React, { useState } from "react";

import type {CartData} from '../../../features/cartSlice'
import {ReactComponent as Pay} from '../../../img/pay.svg'
import {ReactComponent as ArrowTop} from '../../../img/arrowTop.svg'

import {ReactComponent as ArrowDown} from '../../../img/arrow-down-1-svgrepo-com.svg'
import ButtonComponent from "../../UI/button/buttonComponent";
import { useLoadScript } from "@react-google-maps/api";
import MapContainer from "../map/mapContainer";
import { Wrapper } from "@googlemaps/react-wrapper";

import Map from "../map/mapContainer";

interface IProps{
    cartItem:CartData[];
    theme?: string;
    incrAmountProductInCart: (id:string)=>void;
    decrAmountProductInCart: (id:string)=>void;
    imgRender?: (id:string)=>any;
    color?: string;
}

const Cart:React.FC<IProps>=({cartItem, theme, incrAmountProductInCart, decrAmountProductInCart,  imgRender, color})=> {
    
const [isFormClicked, setisFormClicked]=useState<boolean>(false)
    function pay(){
        setisFormClicked(true)
    }
    
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
                                <ButtonComponent  name={`btn ${theme}`} func={()=>incrAmountProductInCart(e.id)}/>
                                <span className="amount">{e.cartAmount}</span>
                                <ButtonComponent  name={`btn ${theme}`} func={()=>decrAmountProductInCart(e.id)}/>
                            </div>
                        </div>
                        </>
                       )
                    })}
                    </div>
            </div>
            {/* <Wrapper apiKey="AIzaSyASM6kY7nNQfeNAvrpsyrkT8a0GzsxBRkE">
            @ts-ignore
                <Map/>
                <Marker position={position} />
            </Wrapper> */}
           
            </>
              
        ) 
}

export default Cart