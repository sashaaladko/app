import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

// type prodData={
//     id: string;
//     product
//     type
//     priceHippo
//     priceEvroopt
//     link
// }


type ProdState={
    prodItems: any;
}

const initialState: ProdState={
    prodItems: [],
}

export const getDataProd:any = createAsyncThunk(
    'outlet/getDataOutlet',
      async function json(){
        const url = "http://localhost:8080/getObjProds"
        const response = await fetch(url)
        const dataProd = await response.json()
        return (dataProd)
    }
    
)

const prodSlice = createSlice ({
    name: 'prod',
    initialState,
    reducers: {
    },
    
    extraReducers: (builder)=>{
        builder.addCase(getDataProd.fulfilled, (state, action)=>{
          state.prodItems = action.payload
        })
        
      },
})

export default prodSlice.reducer