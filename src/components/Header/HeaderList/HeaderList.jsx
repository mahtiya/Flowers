import { NavLink } from 'react-router-dom';
import './../../../assets/scss/components/header/headerlist.scss';
export default function HeaderList() {
  return (
    <section className="header_list">
      <div className="container">
        <div className="header_list_block">
          <ul className='header_list_ul'>
            <li className='header_list_item'>
              <NavLink to="">Главная</NavLink>
            </li>
            <li className='header_list_item'>
              <NavLink to="view-all">Каталог</NavLink>
            </li>
            <li className='header_list_item'>
              <NavLink to="forums">Форум</NavLink>
            </li>
            <li className='header_list_item'>
              <NavLink to="comments">Отзывы</NavLink>
            </li>
            <li className='header_list_item'>
              <NavLink to="news">Новости</NavLink>
            </li>
            <li className='header_list_item'>
              <NavLink to="info">Информация</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
