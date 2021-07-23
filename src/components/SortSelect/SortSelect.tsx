import s from './SortSelect.module.css'

const SortSelect = ({ onSortChange }: any) => {
   return (
      <select onChange={onSortChange} className={s.select}>
         <option value="Empty">Выберите сортировку</option>
         <option value="LOW">От дешёвых к дорогим</option>
         <option value="HIGH">От дорогих к дешёвым</option>
      </select>
   )
}
export default SortSelect