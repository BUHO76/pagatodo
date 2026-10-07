import { createSlice } from "@reduxjs/toolkit";

interface AccontsState {
    items: ,
    status:,
    error:
}

const initialState: AccontsState

const accountsSlice = createSlice({
    name: 'accounts',
    initialState,
    reducers:{},
})

export default accountsSlice.reducer