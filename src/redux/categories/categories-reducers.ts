import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
   fetchProductsCategoriesRequest,
   fetchProductsCategoriesSuccess,
   fetchProductsCategoriesError,
   clearError
} from './categories-actions';

const initialState: any = {
   categories: []
}

const categories = createReducer(initialState.categories, {
   [fetchProductsCategoriesSuccess]: (_: any, { payload }) => payload,
});

const loading = createReducer(false, {
   [fetchProductsCategoriesRequest]: () => true,
   [fetchProductsCategoriesSuccess]: () => false,
   [fetchProductsCategoriesError]: () => false,
});

const setError = (_: any, { payload }: any) => payload;

const error = createReducer(null, {
   [fetchProductsCategoriesError]: setError,
   [clearError]: () => null,
});

export default combineReducers({
   categories,
   loading,
   error,
});