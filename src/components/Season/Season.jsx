import { flowers } from './../data/Seasons';
import './../../assets/scss/components/season.scss';
import SeasonImg from './../../assets/images/rose.png'
import Button from '../ui/Button';

export default function Season() {
    return (
        <div className="season">
            <div className="container">
                <h6 className='season_title'>Сезонные</h6>
                <ul className="season_list">
                    {flowers.map((item) => (
                        <li className="season_item" key={item.id}>
                            <img src={SeasonImg} alt={item.name} className="season_img" />
                            <div className="season_pad">
                                <p className="season_rating">
                                    {'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}
                                </p>
                                <div className="season_team">
                                    <p className="season_name">{item.name}</p>
                                    <p className="season_price">{item.price} грн</p>
                                </div>
                            </div>
                            <div className="season_btn">
                                <Button btn="Заказать" />
                            </div>
                            <p className='season_sup'>Быстрый заказ</p>

                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
