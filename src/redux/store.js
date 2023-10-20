import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "./reducer";

export  default configureStore({
    reducer:{
        cart:cartreducer
    }
})