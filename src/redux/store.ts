import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducer from '../features/cartSlice'
import prodReducer from '../features/productSlice'

export const store = configureStore({

    reducer: {
        cart: cartReducer,
        prod: prodReducer
    }, 
    devTools: process.env.NODE_ENV !== "development" ? false : true,

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch