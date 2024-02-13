import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get } from 'firebase/database';
import { db, refe } from '../Database/firebaseDB'

const initialState = {
    Tank : {
        tank1 : 0,
        tank2: 0,
        tank3 : 0
    }
}


export const fetchData = createAsyncThunk('tankData/fetchData', async ()=>{

    try {
        const snapshot = await get(refe(db, `/Tank`));
        const tankLevel = snapshot.val();
        return tankLevel;
    } catch (error) {
        console.log(error.message);
    }

})

const tankSlice = createSlice({
    name: 'tankData',
    initialState,
    reducers: {
        getTankData: (state, action) => {
            console.log(action.payload);
            state.tankLevel = action.payload;
            console.log(state);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, () => {
            console.log("Pending fetching the data!");
        });
        builder.addCase(fetchData.fulfilled, (state, action) => {
            console.log("data is fetched", action.payload)
            state.Tank.tank1 = action.payload.Tank1
            state.Tank.tank2 = action.payload.Tank2
            state.Tank.tank3 = action.payload.Tank3
        });
        builder.addCase(fetchData.rejected, () => {
            console.log("fetching data is failed!");
        });
    }
})


export const tankReducer = tankSlice.reducer;
export const { getTankData } = tankSlice.actions