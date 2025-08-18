import './../../assets/scss/components/home/TopBar.scss';
import TopBarIcon1 from './../../assets/icons/heart.svg';
import TopBarIcon2 from './../../assets/icons/delivery.svg';
import TopBarIcon3 from './../../assets/icons/Call.svg';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import { useState } from 'react';
import Insta from './../../assets/icons/insta.svg';
import Teg from './../../assets/icons/teg.svg';


const BootstrapInput = styled(InputBase)(({ theme }) => ({

    '& .MuiInputBase-input': {
        borderRadius: 10,
        backgroundColor: (theme.vars ?? theme).palette.background.paper,
        border: '4px solid #956D84',
        width: "40px",
        height: "20px",
        fontSize: 16,
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        fontFamily: ["Golos text"].join(','),
        '&:focus': {
            borderRadius: 10,
            borderColor: '#956D84',
        },
    },
}));

export default function TopBar() {
    const [age, setAge] = useState('');
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
                            <div className='topbar_select'>
                                <FormControl sx={{ m: 1 }} variant="standard">
                                    <NativeSelect
                                        id="demo-customized-select-native"
                                        value={age}
                                        onChange={handleChange}
                                        input={<BootstrapInput />}>
                                        <option value={"Ru"}>Ru</option>
                                        <option value={"En"}>En</option>
                                    </NativeSelect>
                                </FormControl>
                            </div>
                        </div>
                        <div className="topbar_item">
                            <div className="topbar_icon">
                                <img className='topbar_img' src={TopBarIcon1} alt="" />
                            </div>
                            <p className='topbar_suptitle'>
                                <Link to="notes">О нас</Link>
                            </p>
                        </div>
                        <div className="topbar_item">
                            <div className="topbar_icon">
                                <img className='topbar_img' src={TopBarIcon2} alt="" />
                            </div>
                            <p className='topbar_suptitle'>
                                <Link to="delivery-pay">Доставка и оплата</Link>
                            </p>
                        </div>
                        <div className="topbar_item">
                            <div className="topbar_icon">
                                <img className='topbar_img' src={TopBarIcon3} alt="" />
                            </div>
                            <p className='topbar_suptitle'>
                                <Link to="contacts">Контакты</Link>
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
