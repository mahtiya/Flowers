import './../../../../assets/scss/components/home/season.scss';
import Marquee from 'react-fast-marquee';
import ViewBtn from '../../../../components/ui/ViewBtn';
import ProductWrap from '../../../../components/ProductWrap/ProductWrap';
import { useEffect, useState } from 'react';

export default function Season() {
    const [season, setSeason] = useState([])

    useEffect(() => {
        fetch('https://687d6750918b64224331bd88.mockapi.io/products')
            .then(res => res.json())
            .then(data => setSeason(data))
            .catch(err => console.error('Ошибка загрузки:', err))
    }, [])
    return (
        <section className="season">
            <div className="container">
                <div className="season_header">
                    <h6 className='season_title'>Сезонные</h6>
                    <div className="view_all_btn"><ViewBtn /></div>
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
                        <ProductWrap item={item} index={index} />
                    ))}
                </Marquee>
            </ul>

        </section>
    );
}
