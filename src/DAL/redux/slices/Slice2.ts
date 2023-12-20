import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getSome } from '../../server-requests/SomeDAL';

interface Slice2State {
    darkMode: boolean;
    isLoading: boolean;
    name: string;
    error: string;
}

const initialState: Slice2State = {
    darkMode: false,
    isLoading: false,
    name: '',
    error: '',
};

enum SomeAsyncActionTypes {
    SET_SOME = 'SET_SOME',
    GET_SOME = 'GET_SOME',
}

export const getSomeAction = createAsyncThunk(
    SomeAsyncActionTypes.GET_SOME,
    async ({ someId }: { someId: string }) => getSome(someId).then((response) => response),
);

const Slice2 = createSlice({
    name: 'slice2',
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.darkMode = !state.darkMode;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getSomeAction.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getSomeAction.fulfilled, (state, action) => {
            state.isLoading = false;
            state.name = action.payload.name;
        });
        builder.addCase(getSomeAction.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
    },
});

export const { toggleDarkMode } = Slice2.actions;
export const Slice2Reducer = Slice2.reducer;
