import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from '../Features/Categories/categoriesSlice'


const store = configureStore({
    reducer: {
        categories: categoriesSlice
    },
   
})

export default store;