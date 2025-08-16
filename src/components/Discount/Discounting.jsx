import './../../assets/scss/components/discounting.scss';
import Button from '../ui/Button';
import Marquee from 'react-fast-marquee';
import products from '../data/Product'
import ViewBtn from '../ui/ViewBtn';

export default function Discounting() {
    return (
        <section className='discounting'>
            <h5 className='discount_title'>Акции</h5>

            <div className="discunting_scroll_wrapper">
                <div className="view_all_btn"><ViewBtn /></div>


                <ul className="discounting_list" >
                    <Marquee
                        speed={100}
                        className="present_list"
                        gradient={false}
                        pauseOnHover={false}
                    >
                        {products.map((product, index) => (
                            <li key={index} className="discount_item" >
                                <div>
                                    <img className='discount_img' src={product.image} alt={product.name} />
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
                    </Marquee>
                </ul>
            </div>
        </section>
    )
}
