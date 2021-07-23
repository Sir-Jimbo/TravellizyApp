import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
   fetchProductsRequest,
   fetchProductsSuccess,
   fetchProductsError,
   clearError
} from './products-actions';

const initialState: any = {
   products: []
}
const products = createReducer(initialState.products, {
   [fetchProductsSuccess]: (_: any, { payload }) => payload,
});

const loading = createReducer(false, {
   [fetchProductsRequest]: () => true,
   [fetchProductsSuccess]: () => false,
   [fetchProductsError]: () => false,
});

const setError = (_: any, { payload }: any) => payload;

const error = createReducer(null, {
   [fetchProductsError]: setError,
   [clearError]: () => null,
});

export default combineReducers({
   products,
   loading,
   error,
});