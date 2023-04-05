import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    ui: {
        darkMode: false,
        datileShow: false
    }
}

const slice = createSlice({
    name: "ui",
    initialState: initialState,
    reducers: {
        switch: (state) => {
            state.ui.darkMode = !state.ui.darkMode;
        },
        showHundel: (state) => {
            state.ui.datileShow = !state.ui.datileShow;
        }
    }
});

export const actions = slice.actions
export default slice.reducer