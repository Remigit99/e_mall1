import {configureStore} from "@reduxjs/toolkit"
import { productsApi } from "./services/productsApi.js";
import cartSlice from "./Features/cartSlice.js";

const store = configureStore({
    reducer:{
        [productsApi.reducerPath]: productsApi.reducer,
        cart: cartSlice,

    },
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(productsApi.middleware)
    
    
})


export default store