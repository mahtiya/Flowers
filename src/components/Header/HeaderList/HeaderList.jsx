import './../../../assets/scss/components/headerlist.scss';
export default function HeaderList() {
  return (
    <section className="header_list">
      <div className="container">
        <div className="header_list_block">
          <ul className='header_list_ul'>
            <li className='header_list_item'>Каталог товаров</li>
            <li className='header_list_item'>Форум</li>
            <li className='header_list_item'>Отзывы</li>
            <li className='header_list_item'>Акции</li>
            <li className='header_list_item'>Новости</li>
            <li className='header_list_item'>Информация</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
