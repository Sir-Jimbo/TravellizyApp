import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TransitionGroup } from 'react-transition-group';

import ProductsFilter from '../ProductsFilter/ProductsFilter';
import SortSelect from '../SortSelect/SortSelect';
import ProductsItemList from '../ProductsItemList/ProductsItemList';
import SortProductsItemList from '../SortProductsItemList/SortProductsItemList';

import selectors from '../../redux/products/products-selectors';
import s from './ProductsList.module.css';

export default function ProductsList() {

   const products = useSelector(selectors.getAllProducts);

   const [items, setItems] = useState(products);
   const [sortType, setSortType] = useState('');

   useEffect(() => {
      const sortProductsPrice = (type: any) => {

         const types: any = {
            Empty: 'Empty',
            LOW: 'LOW',
            HIGH: 'HIGH'
         };

         const sortProperty = types[type];

         const sorted: any = [...products].sort((a, b) => {
            if (sortProperty === 'HIGH') {
               return b.price - a.price
            }
            if (sortProperty === 'LOW') {
               return a.price - b.price
            }
            else
               return products
         });

         setItems(sorted);
      };

      sortProductsPrice(sortType);

   }, [products, sortType]);

   const handleSortChange = (e: any) => setSortType(e.target.value)

   const filteredCategory = (category: any) => {
      const updateItems = [...products].filter((product) => {
         return product.category === category
      })

      setItems(updateItems)
   }

   return (
      <div className={s.section}>
         <div className={s.filter}>
            <ProductsFilter filteredCategory={filteredCategory} />
            <SortSelect onSortChange={handleSortChange} />
         </div>
         <TransitionGroup
            component="ul"
            className={s.list}
         >
            {items.length === 0
               ? <ProductsItemList products={products} />
               : <SortProductsItemList sortProducts={items} />
            }
         </TransitionGroup>
      </div>
   )
}