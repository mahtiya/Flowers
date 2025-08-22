import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './../../assets/scss/pages/cake_single.scss'
import Button from "../../components/ui/Button";
import useCartStore from "../../store/useCartStore";

export default function CakeSinglePage() {
    const { id } = useParams()
    const [single, setSingle] = useState()
    const addToCart = useCartStore((state) => state.addToCart);

    useEffect(() => {
        fetch(`https://68a2cb21c5a31eb7bb1dcd1b.mockapi.io/cakes/${id}`)
            .then(res => res.json())
            .then(data => setSingle(data))
            .catch(err => console.error('Ошибка загрузки:', err))
    }, [id])

    if (!single) {
        return <p>Загрузка...</p>
    }

    return (
        <section className="cake_single_page">
            <div className="container">
                <div className="cake_single_main">
                    <div className="cake_single_left">
                        <img className="cake_single_left_img" src={single.image} alt={single.name} />
                    </div>
                    <div className="cake_single_right">
                        <h2 className="cake_single_title">{single.name}</h2>

                        <div className="cake_single_price">
                            <p className="cake_single_price">{single.price} сом</p>
                            {single.oldPrice > single.price && (
                                <s>{single.oldPrice} сом</s>
                            )}
                        </div>

                        <div className="cake_single_list">
                            <div>

                                <p className="cake_single_materials">Размер</p>
                                <p className="cake_single_materials">Внутри</p>
                                <p className="cake_single_materials">Дополнительно</p>
                            </div>
                            <div>
                                <p className="cake_single_materials"><span>{single.size}</span></p>
                                <p className="cake_single_materials"><span>{single.contain}</span></p>
                                <p className="cake_single_materials"><span>Оформление</span></p>
                            </div>
                        </div>


                        <p className="cake_single_description">
                            Описание: <span>{single.description}</span>
                        </p>

                        <div className="cake_single_btn">
                            <Button
                                btn="В корзину"
                                onClick={() => {
                                    addToCart({ ...single, type: "cake" })
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}