import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Spinner from '../Spinner/Spinner';
import ProductsFilterList from '../ProductsFilterList/ProductsFilterList';

import operations from '../../redux/categories/categories-operations';
import selectors from '../../redux/categories/categories-selectors';

export default function ProductsFilter({ filteredCategory }: any) {

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(operations.fetchProductsCategories());
   }, [dispatch]);

   const isLoadingCategories = useSelector(selectors.getLoadingCategories);

   return (
      <>
         {isLoadingCategories && <Spinner />}
         <ProductsFilterList filteredCategory={filteredCategory} />
      </>
   );
}