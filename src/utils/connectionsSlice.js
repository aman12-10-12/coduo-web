import { createSlice } from "@reduxjs/toolkit";

const connectionSclice = createSlice({
    name : "connections",
    initialState : null,
    reducers : {
        addConnection : (state, action) => {
            return action.payload
        },
        removeConnection : (state, action) => {
            return null
        }
    }
})

export const {addConnection, removeConnection} = connectionSclice.actions
export default connectionSclice.reducer