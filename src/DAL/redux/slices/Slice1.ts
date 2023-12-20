import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Slice1State {
    value: string[];
}

const initialState: Slice1State = {
    value: [],
};

const Slice1 = createSlice({
    name: 'slice1',
    initialState,
    reducers: {
        addToSlice1: (state, action: PayloadAction<string>) => {
            state.value.push(action.payload);
        },
        addFromSlice1: (state, action: PayloadAction<number>) => {
            state.value.splice(action.payload, 1);
        },
    },
});

export const { addFromSlice1, addToSlice1 } = Slice1.actions;
export const Slice1Reducer = Slice1.reducer;
