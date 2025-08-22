import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './../../assets/scss/pages/present_single.scss'
import Button from "../../components/ui/Button";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function PresentSinglePage() {
    const { id } = useParams()
    const [single, setSingle] = useState()
    const [count, setCount] = useState(1)

    useEffect(() => {
        fetch(`https://687d6750918b64224331bd88.mockapi.io/toys/${id}`)
            .then(res => res.json())
            .then(data => setSingle(data))
            .catch(err => console.error('Ошибка загрузки:', err))
    }, [id])

    if (!single) {
        return <p>Загрузка...</p>
    }

    const decrement = () => {
        if (count > 1) setCount(count - 1)
    }

    const increment = () => {
        if (count < 10) setCount(count + 1)
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

                        <div className="present_single_btn">
                            <div className="present_single_count">
                                <button className="present_btn_1" onClick={decrement}><FiMinus /></button>
                                <p>{count}</p>
                                <button className="present_btn_2" onClick={increment}><FiPlus /></button>
                            </div>
                            <Button btn="В корзину" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}