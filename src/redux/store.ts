import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categories-reducers';
import productsReducer from './products/products-reducers';




const store = configureStore({
   reducer: {
      products: productsReducer,
      categories: categoriesReducer
   },

   devTools: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


// eslint-disable-next-line import/no-anonymous-default-export
export default { store };
