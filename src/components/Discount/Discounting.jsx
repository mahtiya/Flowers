import products from './../data/Products';
import './../../assets/scss/components/discounting.scss';
import Flower from './../../assets/images/flower.png';
import Button from '../ui/Button';
export default function Discounting() {
    return (
        <section className='discounting'>
            <div className="container">
                <h5 className='discount_title'>Акции</h5>
                <ul className="discounting_list">
                    {products.map((product) => (
                        <li key={product.id} className="discount_item">
                            <div>
                                <img className='discount_img' src={Flower} alt={product.name} />
                            </div>
                            <p className="discount_rating">
                                {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
                            </p>
                            <div className='discount_team'>
                                <h3 className="discount_name">{product.name}</h3>
                                <div className="discounting_item">
                                    {product.oldPrice > product.price && (
                                        <s className="discount_old"> {product.oldPrice} сом
                                        </s>
                                    )}
                                    <p className=' discount_price'> {product.price} сом</p>
                                </div>
                            </div>
                            <div className='discounting_btn'>
                                <Button btn="Заказать" />

                                <p className='discount_sup'>Быстрый заказ</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
