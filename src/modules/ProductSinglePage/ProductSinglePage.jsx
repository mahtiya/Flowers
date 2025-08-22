import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './../../assets/scss/pages/product_single.scss'
import Button from "../../components/ui/Button";
import useCartStore from "../../store/useCartStore";
import Present from "../Home/Components/Present/Present";

export default function ProductSinglePage() {
    const { id } = useParams()
    const [single, setSingle] = useState()
    const addToCart = useCartStore((state) => state.addToCart);

    useEffect(() => {
        fetch(`https://687d6750918b64224331bd88.mockapi.io/products/${id}`)
            .then(res => res.json())
            .then(data => setSingle(data))
            .catch(err => console.error('Ошибка загрузки:', err))
    }, [id])

    if (!single) {
        return <p>Загрузка...</p>
    }

    return (
        <section className="product_single_page">
            <div className="container">
                <div className="product_single_main">
                    <div className="product_single_left">
                        <img className="product_single_left_img" src={single.image} alt={single.name} />
                    </div>
                    <div className="product_single_right">
                        <h2 className="product_single_title">{single.name}</h2>

                        <div className="product_single_price">
                            <p className="product_single_price">{single.price} сом</p>
                            {single.oldPrice > single.price && (
                                <s>{single.oldPrice} сом</s>
                            )}
                        </div>

                        <div className="product_single_list">
                            <div>
                                <p className="product_single_materials">Цветы</p>
                                <p className="product_single_materials">Размер</p>
                                <p className="product_single_materials">Материалы</p>
                                <p className="product_single_materials">Дополнительно</p>
                            </div>
                            <div>
                                <p className="product_single_materials"><span>{single.flowers}</span></p>
                                <p className="product_single_materials"><span>{single.size}</span></p>
                                <p className="product_single_materials"><span>{single.materials}</span></p>
                                <p className="product_single_materials"><span>Оформление</span></p>
                            </div>
                        </div>



                        <p className="product_single_description">
                            Описание: <span>{single.description}</span>
                        </p>

                        <div className="product_single_btn">
                            <Button
                                btn="В корзину"
                                onClick={() => {
                                    addToCart({ ...single, type: "flower" })
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Present />
        </section>
    )
}