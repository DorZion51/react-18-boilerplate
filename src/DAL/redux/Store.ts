import { Action, applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Slice1Reducer } from './slices/Slice1';
import { Slice2Reducer } from './slices/Slice2';

const store = configureStore({
    reducer: { Slice1: Slice1Reducer, Slice2: Slice2Reducer },
    devTools: process.env.REACT_APP_ENV !== 'prod',
    enhancers: [applyMiddleware(thunk)],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunkDispatch = ThunkDispatch<RootState, any, Action<AppDispatch>>;
export default store;
