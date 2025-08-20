import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './../../assets/scss/pages/single.scss'
import { IoMdStar } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
import Button from "../../components/ui/Button";

export default function SinglePage() {
    const { id } = useParams()
    const [single, setSingle] = useState()
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
        <section className="single_page">
            <div className="container">
                <div className="single_main">
                    <div className="single_left">
                        <img className="single_left_img" src={single.image} alt={single.name} />
                    </div>
                    <div className="single_right">
                        <h2 className="single_title">{single.name}</h2>

                        <div className="single_price">
                            {single.oldPrice > single.price && (
                                <s>{single.oldPrice} сом</s>
                            )}
                            <p className="single_price">Цена: {single.price} сом</p>
                        </div>
                        <p className="single_size">Размер: <span>{single.size}</span></p>
                        <p className="single_materials">Материалы: <span>{single.materials}</span></p>
                        <p className="single_rating">
                            {Array(single.rating)
                                .fill(0)
                                .map((_, i) => (
                                    <IoMdStar key={`star-filled-${i}`} />
                                ))}
                            {Array(5 - single.rating)
                                .fill(0)
                                .map((_, i) => (
                                    <IoMdStarOutline key={`star-outline-${i}`} />
                                ))}
                        </p>
                        <p className="single_description">Описание: <span>{single.description}</span></p>
                        <div className="single_btn">
                            <Button btn="В корзину" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

