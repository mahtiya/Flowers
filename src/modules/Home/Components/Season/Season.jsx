import './../../../../assets/scss/components/home/season.scss';
import Marquee from 'react-fast-marquee';
import ViewBtn from '../../../../components/ui/ViewBtn';
import { useEffect, useState } from 'react';
import ProductItem from '../../../../components/ProductItem/ProductItem';

export default function Season() {
    const [season, setSeason] = useState([])

    useEffect(() => {
        fetch('https://687d6750918b64224331bd88.mockapi.io/products')
            .then(res => res.json())
            .then(data => {
                const seasonProducts = data.filter(item => item.category === "season")
                setSeason(seasonProducts)
            })
            .catch(err => console.error('Ошибка загрузки:', err))
    }, [])

    return (
        <section className="season">
            <div className="container">
                <div className="season_header">
                    <h6 className='season_title'>Сезонные</h6>
                    <div ><ViewBtn /></div>
                </div>
            </div>

            <ul className="season_list">
                <Marquee
                    speed={100}
                    className="present_list"
                    gradient={false}
                    pauseOnHover={true}
                >
                    {season.map((item, index) => (
                        <ProductItem item={item} key={index} />
                    ))}
                </Marquee>
            </ul>
        </section>
    );
}
