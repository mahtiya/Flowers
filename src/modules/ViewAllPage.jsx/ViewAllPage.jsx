import TopBar from './../../components/TopBar/TopBar'
import Header from './../../components/Header/Header'
import products from './../../data/Product'
import { cakes } from './../../data/Presents'
import { flowers } from './../../data/Seasons'
import './../../assets/scss/pages/view_page.scss'
import Button from './../../components/ui/Button'

export default function ViewAllPage() {
    const allItems = [
        ...products,
        ...cakes,
        ...flowers
    ]

    return (
        <section className="view_page">
            <div className="container">
                <h2 className="view_title">Все товары</h2>
                <ul className="view_list">
                    {allItems.map((item, index) => (
                        <li key={index} className="view_item">
                            <div className="view_img_wrap">
                                <img className="view_img" src={item.image} alt={item.name} />
                            </div>
                            <p className="view_rating">
                                {'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}
                            </p>
                            <div className="view_content">
                                <h3 className="view_name">{item.name}</h3>
                                <div className="view_price_wrap">
                                    {item.oldPrice > item.price && (
                                        <s className="view_old_price">
                                            {item.oldPrice} сом
                                        </s>
                                    )}
                                    <p className="view_price">{item.price} сом</p>
                                </div>
                            </div>
                            <div className="view_actions">
                                <Button btn="Заказать" />
                                <p className="view_fast">Быстрый заказ</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
