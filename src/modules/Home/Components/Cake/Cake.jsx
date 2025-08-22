import { useEffect, useState } from "react"
import ViewBtn from "../../../../components/ui/ViewBtn"
import Marquee from "react-fast-marquee"
import './../../../../assets/scss/components/home/cake.scss'
import ProductItem from "../../../../components/ProductItem/ProductItem"
import CakeItem from "../../../../components/CakeItem/CakeItem"

export default function Cake() {
    const [cake, setCake] = useState([])

    useEffect(() => {
        fetch('https://68a2cb21c5a31eb7bb1dcd1b.mockapi.io/cakes')
            .then(res => res.json())
            .then(data => setCake(data))
            .catch(err => console.error('Ошибка загрузки:', err))
    }, [])

    return (
        <section className='cake'>
            <div className="container">
                <div className="cake_header">
                    <h5 className='cake_title'>Сладости</h5>
                    <div><ViewBtn /></div>
                </div>
            </div>

            <ul className="cake_list">
                <Marquee
                    speed={100}
                    className="cake_wrap"
                    gradient={false}
                    pauseOnHover={true}
                >
                    {cake.map((cake, index) => (
                        <CakeItem item={cake} key={index} />
                    ))}
                </Marquee>
            </ul>
        </section>
    )
}
