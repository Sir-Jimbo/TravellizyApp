import axios from 'axios';
import { BaseURL } from '../../services/BaseUrl';
import {
   fetchProductsRequest,
   fetchProductsSuccess,
   fetchProductsError,
} from './products-actions';

BaseURL();

const fetchProducts = () => async (dispatch: any) => {

   dispatch(fetchProductsRequest());

   try {
      const { data } = await axios.get(`/products`);
      dispatch(fetchProductsSuccess(data));
   }
   catch (error) {
      dispatch(fetchProductsError(error.message))
   }
};

const operations = {
   fetchProducts
};

export default operations;