import { FiMinus, FiPlus } from 'react-icons/fi';
import './../../assets/scss/pages/cart.scss';
import { MdDeleteOutline } from "react-icons/md";
import Button from '../../components/ui/Button';

export default function Cart() {
    return (
        <section className="cart">
            <div className="container">
                <h1 className='cart_title'>Корзина</h1>

                <div className="cart_wrapper">
                    <table className='cart_table'>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Название</th>
                                <th>Цена за шт.</th>
                                <th>Кол-во</th>
                                <th>Итог</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img src="https://donnarosa.by/upload/iblock/46b/Buket-iz-roz-_13_.jpg" alt="" />
                                </td>
                                <td>25 желтых тюльпанов</td>
                                <td><p className='price'>795 сом</p><s className='old_price'>995 сом</s></td>
                                <td>
                                    <div className="counts">
                                        <button className="btn_1"><FiMinus /></button>
                                        <p>3</p>
                                        <button className="btn_2"><FiPlus /></button>
                                    </div>
                                </td>
                                <td>2385 сом</td>
                                <td><MdDeleteOutline /></td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="cart_general">
                        <h4>Ваш заказ</h4>
                        <ul className='cart_order'>
                            <li><p className='category'>Цветы</p> <p className='price'>5362 сом</p></li>
                        </ul>

                        <p className='sum_total_all'><p className='all'>Всего</p> <p className='sum'>5304 сом</p></p>
                        <center> <Button btn={"Оформить заказ"} /></center>
                    </div>
                </div>

            </div>
        </section>
    )
}