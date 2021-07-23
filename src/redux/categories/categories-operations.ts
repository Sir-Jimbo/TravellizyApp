import axios from 'axios';
import { BaseURL } from '../../services/BaseUrl';
import {
   fetchProductsCategoriesRequest,
   fetchProductsCategoriesSuccess,
   fetchProductsCategoriesError
} from './categories-actions';

BaseURL();

const fetchProductsCategories = () => async (dispatch: any) => {

   dispatch(fetchProductsCategoriesRequest());

   try {
      const { data } = await axios.get(`/products/categories`);
      dispatch(fetchProductsCategoriesSuccess(data));
   }
   catch (error) {
      dispatch(fetchProductsCategoriesError(error.message))
   }
};

const operations = {
   fetchProductsCategories
};

export default operations;