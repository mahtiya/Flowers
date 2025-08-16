import './../../assets/scss/components/present.scss';
import CakeImg from './../../assets/images/cake.png';
import Button from '../ui/Button';
import Marquee from 'react-fast-marquee';
import { cakes } from './../data/Presents'
import ViewBtn from '../ui/ViewBtn';

export default function Present() {
    return (
        <div className="present">
            <h6 className='present_title'>Подарки</h6>
            <div className="present_wrapper">
                <div className="view_all_btn"><ViewBtn /></div>


                <ul className="present_list">

                    <Marquee
                        speed={100}
                        className="present_list"
                        gradient={false}
                        pauseOnHover={false}
                    >
                        {cakes.map((cake, index) => (
                            <li className="present_item" key={index}>
                                <img src={CakeImg} alt={cake.name} className="present_img" />
                                <div className="present_pad">
                                    <p className="present_rating">
                                        {'★'.repeat(cake.rating)}{'☆'.repeat(5 - cake.rating)}
                                    </p>
                                    <div className="present_team">
                                        <p className="present_name">{cake.name}</p>
                                        <p className="present_price">{cake.price} грн</p>
                                    </div>
                                </div>
                                <div className="present_btn">
                                    <Button btn="Заказать" />
                                </div>
                                <p className='present_sup'>Быстрый заказ</p>
                            </li>
                        ))}
                    </Marquee>
                </ul>
            </div>
        </div>
    );
}