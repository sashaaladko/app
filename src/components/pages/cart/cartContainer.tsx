import React from "react";
import './cart.scss'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { useAppSelector } from '../../hooks/reduxHooks'
import { incrementAmount, decrementAmount, removeItem } from '../../../features/cartSlice'
import type {CartData} from '../../../features/cartSlice'
import HeaderComponent from "../../UI/header/headerComponent";
import Cart from "./cartRender";
// import { useContext } from "react";
// import ThemeContext from "../../themeContext";



function CartContainer() {
    const dispatch = useAppDispatch()
    const cartItem = useAppSelector((store)=>store.cart.cartItems)
    // const{color, theme, changeTheme} = useContext(ThemeContext)

    function incrAmountProductInCart(id:string) {
        return dispatch(incrementAmount(id))
    }
    function decrAmountProductInCart(id:string) {
        return dispatch(decrementAmount(id))
    }
    function clearCart():void{
        var result = window.confirm("Вы увеерны, что хотите очистить корзину?")
        if(result){
            dispatch(removeItem())
        }
    }


    function totalPriceHippo():number{
        let inval:number = 0
        const totalPrice = cartItem.map((e: CartData)=>{
           return e.priceHippo*e.cartAmount
        })
        return totalPrice.reduce((a: number, b: number)=>a+b, inval)
    }

    function totalPriceEvroopt():number{
        let inval:number = 0
        const totalPrice = cartItem.map((e: CartData)=>{
           return e.priceEvroopt*e.cartAmount
        })
        return totalPrice.reduce((a: number, b: number)=>a+b, inval)
    }

    if(cartItem.length<1){

        return (
            <div >
                <HeaderComponent/>
                <h1>ваша корзина пуста</h1>
            </div>
        )
    }

        return(
            <>
                <HeaderComponent />
                <Cart cartItem={cartItem} incrAmountProductInCart={incrAmountProductInCart} 
                decrAmountProductInCart={decrAmountProductInCart} theme={undefined} clearCart={clearCart}
                totalPriceEvroopt={totalPriceEvroopt} totalPriceHippo={totalPriceHippo}/>   
            </>
        )

   
}

export default CartContainer