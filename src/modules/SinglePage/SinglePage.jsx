import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

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
                        <img src={single.image} alt={single.name} />
                    </div>
                    <div className="single_right">
                        <h2>{single.name}</h2>
                        <p>Рейтинг: {'★'.repeat(single.rating)}{'☆'.repeat(5 - single.rating)}</p>
                        <div className="single_price">
                            {single.oldPrice > single.price && (
                                <s>{single.oldPrice} сом</s>
                            )}
                            <p>{single.price} сом</p>
                        </div>
                        <p className="single_flowers">{single.flowers}</p>
                        <p className="single_size">{single.size}</p>
                        <p className="single_materials">{single.materials}</p>

                        <p>{single.description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

