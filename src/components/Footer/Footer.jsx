import './../../assets/scss/components/footer.scss';
import HeaderLogo from './../../assets/images/Логотип.png';


export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer_block">
                    <div className="footer_logo">
                        <img className='footer_img' src={HeaderLogo} alt="" />
                    </div>
                    <div className="footer_team">
                        <div className="footer_item">
                            <h3 className='footer_title'>ИНФОРМАЦИЯ</h3>
                            <ul>
                                <li className='footer_sup'>О НАС</li>
                                <li className='footer_sup'>ДОСТАВКА И ОПЛАТА</li>
                                <li className='footer_sup'>ПОЛИТИКА КОНФИДЕЦИАЛЬНОСТИ</li>
                            </ul>
                        </div>
                        <div className="footer_item">
                            <h3 className='footer_title'>СЛУЖБА ПОДДЕРЖКИ</h3>
                            <ul>
                                <li className='footer_sup'>КАРТА САЙТА</li>
                                <li className='footer_sup'>ВОЗВРАТ ТОВАРА</li>
                                <li className='footer_sup'>СВЯЗАТЬСЯ С НАМИ</li>
                                <li className='footer_sup'>ДЛЯ СОТРУДНИЧЕСТВА</li>
                            </ul>
                        </div><div className="footer_item">
                            <h3 className='footer_title'>ЛИЧНЫЙ КАБИНЕТ</h3>
                            <ul>
                                <li className='footer_sup'>ЛИЧНЫЙ КАБИНЕТ</li>
                                <li className='footer_sup'>ИСТОРИЯ ЗАКАЗА</li>
                                <li className='footer_sup'>ЗАКЛАДКИ</li>
                                <li className='footer_sup'>СПИСОК НОВОСТЕЙ</li>

                            </ul>
                        </div><div className="footer_item">
                            <h3 className='footer_title'>ДОПОЛНИТЕЛЬНО</h3>
                            <ul>
                                <li className='footer_sup'>ПОДАРОЧНЫЕ </li>
                                <li className='footer_sup'>СЕРТИФИКАТЫ</li>
                                <li className='footer_sup'>АКЦИИ</li>
                                <li className='footer_sup'>ЦВЕТЫ В ОФИС</li>

                            </ul>
                        </div>

                    </div>

                </div>
                <hr className='footer_hr' />
                <p className='footer_designer'>2025 Мир цветов. Сайт разработан ...</p>
            </div>
        </footer>
    )
}
