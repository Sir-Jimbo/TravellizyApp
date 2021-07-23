import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Spinner from '../Spinner/Spinner';
import ProductsList from '../ProductsList/ProductsList';

import selectors from '../../redux/products/products-selectors';
import operations from '../../redux/products/products-operations';

export default function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchProducts());
  }, [dispatch]);

  const isLoadingProducts = useSelector(selectors.getLoadingProducts);

  return (
    <>
      {isLoadingProducts && <Spinner />}
      <ProductsList />
    </>
  );
};
