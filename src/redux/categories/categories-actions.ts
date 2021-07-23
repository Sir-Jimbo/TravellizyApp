import { createAction } from '@reduxjs/toolkit';

export const fetchProductsCategoriesRequest: any = createAction('categories/fetchProductsCategoriesRequest');
export const fetchProductsCategoriesSuccess: any = createAction('categories/fetchProductsCategoriesSuccess');
export const fetchProductsCategoriesError: any = createAction('categories/fetchProductsCategoriesError');

export const clearError: any = createAction('categories/clearError');