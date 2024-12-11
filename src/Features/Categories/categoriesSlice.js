import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getFirebaseData } from "../../database/firebaseUtils"





const initialState = {
    category: [],
    isLoading: false,
    isError: false,
    error: null,
}

export const getCategory = createAsyncThunk('categories/getCategory', async () => {
    let data = await getFirebaseData()
    console.log(data);
    
    return data
})



const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => { 
        builder.addCase(getCategory.pending, (state) => {
            state.isLoading = true 
            state.isError = false
        })
        builder.addCase(getCategory.fulfilled, (state, action) => {
            state.isLoading = false 
            state.category = action.payload
            
        })
        builder.addCase(getCategory.rejected, (state , action) => {
         state.isLoading = false 
         state.isError = true 
         state.error = action.error.message  
        })
    }
})


export default categoriesSlice.reducer