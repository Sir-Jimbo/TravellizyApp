import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useSelector } from 'react-redux';

import selectorsCategoties from '../../redux/categories/categories-selectors';

export default function ProductsFilterList({ filteredCategory }: any) {

   const categories = useSelector(selectorsCategoties.getAllCategories);

   return (
      <div>
         <TransitionGroup>
            {categories.map((category: any) => (
               <CSSTransition
                  key={category}
                  timeout={250}
               >
                  <button onClick={() => filteredCategory(`${category}`)}>{category}</button>
               </CSSTransition>
            ))}
         </TransitionGroup>
      </div>

   )
}
