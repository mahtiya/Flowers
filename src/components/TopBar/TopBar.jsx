import './../../assets/scss/components/TopBar.scss';
import TopBarIcon1 from './../../assets/icons/heart.svg';
import TopBarIcon2 from './../../assets/icons/delivery.svg';
import TopBarIcon3 from './../../assets/icons/Call.svg';
import TopBarIcon4 from './../../assets/icons/person.svg';
import TopBarIcon5 from './../../assets/icons/stick.svg';



export default function TopBar() {
    return (
        <section className="top_bar">
            <div className="container">
                <div className="topbar_block">
                    <div className="top_bar_items">
                        <div className="topbar_item">
                            <p className='topbar_suptitle'>Валюта</p>
                            <select className='topbar_select'>
                                <option value="">USA</option>
                                <option value="">EURO</option>
                                <option value="">RUB</option>
                                <option value="">KGZ</option>
                            </select>
                        </div>
                        <div className="topbar_item">
                            <p className='topbar_suptitle'>Язык</p>
                            <select className='topbar_select'>
                                <option value="">Ру</option>
                                <option value="">EN</option>
                            </select>
                        </div>
                        <div className="topbar_item">
                            <div className="topbar_icon">
                                <img className='topbar_img' src={TopBarIcon1} alt="" />
                            </div>
                            <p className='topbar_suptitle'>Закладки</p>
                        </div>
                        <div className="topbar_item">
                            <div className="topbar_icon">
                                <img className='topbar_img' src={TopBarIcon2} alt="" />
                            </div>
                            <p className='topbar_suptitle'>Доставка и оплата</p>
                        </div>
                        <div className="topbar_item">
                            <div className="topbar_icon">
                                <img className='topbar_img' src={TopBarIcon3} alt="" />
                            </div>
                            <p className='topbar_suptitle'>Контакты</p>
                        </div>
                    </div>
                    <div className="topbar_items">
                        <div className="topbar_item">
                            <div className="topbar_icon">
                                <img className='topbar_img' src={TopBarIcon4} alt="" />
                            </div>
                            <p className='topbar_suptitle'>Вход</p>
                        </div>

                        <div className="topbar_item">
                            <div className="topbar_icon">
                                <img className='topbar_img' src={TopBarIcon5} alt="" />
                            </div>
                            <p className='topbar_suptitle'>Регистрация</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
