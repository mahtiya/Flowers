import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './../../assets/scss/pages/present_single.scss'
import Button from "../../components/ui/Button";
import useCartStore from "../../store/useCartStore";
import Cake from "../Home/Components/Cake/Cake";

export default function PresentSinglePage() {
    const { id } = useParams()
    const [single, setSingle] = useState()
    const addToCart = useCartStore((state) => state.addToCart);

    useEffect(() => {
        fetch(`https://687d6750918b64224331bd88.mockapi.io/toys/${id}`)
            .then(res => res.json())
            .then(data => setSingle(data))
            .catch(err => console.error('Ошибка загрузки:', err))
    }, [id])

    if (!single) {
        return <p>Загрузка...</p>
    }

    return (
        <section className="present_single_page">
            <div className="container">
                <div className="present_single_main">
                    <div className="present_single_left">
                        <img className="present_single_left_img" src={single.image} alt={single.name} />
                    </div>
                    <div className="present_single_right">
                        <h2 className="present_single_title">{single.name}</h2>

                        <div className="present_single_price">
                            <p className="present_single_price">{single.price} сом</p>
                            {single.oldPrice > single.price && (
                                <s>{single.oldPrice} сом</s>
                            )}
                        </div>

                        <div className="present_single_list">
                            <div>
                                <p className="present_single_materials">Игрушка</p>
                                <p className="present_single_materials">Размер</p>
                                <p className="present_single_materials">Материалы</p>
                            </div>
                            <div>
                                <p className="present_single_materials"><span>{single.toy}</span></p>
                                <p className="present_single_materials"><span>{single.size}</span></p>
                                <p className="present_single_materials"><span>{single.materials}</span></p>
                            </div>
                        </div>


                        <p className="present_single_description">
                            Описание: <span>{single.description}</span>
                        </p>

                        <div className="product_single_btn">
                            <Button
                                btn="В корзину"
                                onClick={() => {
                                    addToCart({ ...single, type: "present" })
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Cake />
        </section>
    )
}