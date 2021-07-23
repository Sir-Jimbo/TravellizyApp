
import { createAction } from '@reduxjs/toolkit';

export const fetchProductsRequest: any = createAction('products/fetchProductsRequest');
export const fetchProductsSuccess: any = createAction('products/fetchProductsSuccess');
export const fetchProductsError: any = createAction('products/fetchProductsError');

export const clearError: any = createAction('products/clearError');