import s from './ProductItem.module.css';

const ProductItem = ({ id, title, price, image, category }) => {
   return (
      <li key={id} className={s.item}>
         <div className={s.image}>
            <img className={s.image} src={image} alt={title} />
         </div>
         <h1 className={s.title}>{title}</h1>
         <p><b>Категория:</b> {category}</p>
         <p className={s.price}>{price}грн.</p>
         <button
            className={s.button}
            type="button"
         >
            Подробнее
         </button>
      </li >
   )
}

export default ProductItem;