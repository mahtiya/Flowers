import './../../assets/scss/components/home/TopBar.scss';
import TopBarIcon1 from './../../assets/icons/heart.svg';
import TopBarIcon2 from './../../assets/icons/delivery.svg';
import TopBarIcon3 from './../../assets/icons/Call.svg';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Insta from './../../assets/icons/insta.svg';
import Teg from './../../assets/icons/teg.svg';



export default function TopBar() {
    const [age, setAge] = useState('')
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <section className="top_bar">
            <div className="container">
                <div className="topbar_block">
                    <div className="top_bar_items">
                        <div className="topbar_item">
                            <p className='topbar_lang'>Язык</p>
                            <span>Ru</span> / <span>En</span>
                        </div>
                        <div className="topbar_item">
                            <div className="topbar_icon">
                                <img className='topbar_img' src={TopBarIcon1} alt="" />
                            </div>
                            <p className='topbar_suptitle'>
                                <NavLink to="/about">О нас</NavLink>
                            </p>
                        </div>
                        <div className="topbar_item">
                            <div className="topbar_icon">
                                <img className='topbar_img' src={TopBarIcon2} alt="" />
                            </div>
                            <p className='topbar_suptitle'>
                                <NavLink to="delivery-pay">Доставка и оплата</NavLink>
                            </p>
                        </div>
                        <div className="topbar_item">
                            <div className="topbar_icon">
                                <img className='topbar_img' src={TopBarIcon3} alt="" />
                            </div>
                            <p className='topbar_suptitle'>
                                <NavLink to="contacts">Контакты</NavLink>
                            </p>
                        </div>
                    </div>
                    <div className="topbar_items">
                        <div className="top_media_block">
                            <div className="top_social">
                                <a href="https://www.instagram.com/mirsvetov.kg.kyzylkiya?igsh=ZnVkaGxxbzBiOThl">
                                    <img className='top_social_img' src={Insta} alt="" />
                                </a>
                            </div>
                            <div className="top_social">
                                <a href="https://t.me/mar_ziya">
                                    <img className='top_social_img' src={Teg} alt="" />
                                </a>
                            </div>
                            <div className="top_media_num">
                                <p>+996 999 38 34 32</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    )
}
