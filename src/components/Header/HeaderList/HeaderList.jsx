import { Link } from 'react-router-dom';
import './../../../assets/scss/components/headerlist.scss';
export default function HeaderList() {
  return (
    <section className="header_list">
      <div className="container">
        <div className="header_list_block">
          <ul className='header_list_ul'>
            <li className='header_list_item'>
              <Link to="view-all">Каталог товаров</Link>
            </li>
            <li className='header_list_item'>
              <Link to="forums">Форум</Link>
            </li>
            <li className='header_list_item'>
              <Link to="comments">Отзывы</Link>
            </li>
            <li className='header_list_item'>
              <Link to="discount">Акции</Link>
            </li>
            <li className='header_list_item'>
              <Link to="news">Новости</Link>
            </li>
            <li className='header_list_item'>
              <Link to="info">Информация</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
