import { cakes } from '../data/Presents';
import './../../assets/scss/components/present.scss';
import CakeImg from './../../assets/images/cake.png';
import Button from '../ui/Button';

export default function Present() {
    return (
        <div className="present">
            <div className="container">
                <h6 className='present_title'>Подарки</h6>
                <ul className="present_list">
                    {cakes.map((cake) => (
                        <li className="present_item" key={cake.id}>
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
                </ul>
            </div>
        </div>
    );
}
