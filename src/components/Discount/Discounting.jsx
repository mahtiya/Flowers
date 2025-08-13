import products from './../data/Products';
import './../../assets/scss/components/discounting.scss';
import Button from '../ui/Button';
import UseScroll from '../../Hooks/UseScroll';
export default function Discounting() {
    const { scrollRef,  handleScroll } = UseScroll(3, 10);
    const items = [...products, ...products, ...products];
    return (
        <section className='discounting'>
            <div className="container">
                <h5 className='discount_title'>Акции</h5>
                <div className="discunting_scroll_wrapper">
                    <ul className="discounting_list" ref={scrollRef} onScroll={handleScroll}>
                        {items.map((product, index) => (
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
                    </ul>
                </div>
            </div>
        </section>
    )
}
