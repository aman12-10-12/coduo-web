import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: true,
        error: null,
    },
    reducers: {
        authStart: (state) => {
            state.loading = true
            state.error = null
        },
        authSuccess: (state) => {
            state.loading = false
            state.error = null
        },
        authError: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    }
})

export const { authStart, authSuccess, authError } = authSlice.actions
export default authSlice.reducer
