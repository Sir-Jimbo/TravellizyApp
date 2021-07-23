import { CSSTransition } from 'react-transition-group';
import ProductItem from '../ProductItem/ProductItem';

const SortProductsItemList = ({ sortProducts }: any) => {
   return (
      sortProducts.map(({ id, title, price, image, category }: any) => (
         <CSSTransition
            key={id}
            timeout={250}
         >
            <ProductItem
               id={id}
               title={title}
               price={price}
               image={image}
               category={category}
            />
         </CSSTransition>
      ))
   )
}

export default SortProductsItemList