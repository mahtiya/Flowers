import './../../../../assets/scss/components/home/present.scss';
import Marquee from 'react-fast-marquee';
import ViewBtn from '../../../../components/ui/ViewBtn';
import ProductWrap from '../../../../components/ProductWrap/ProductWrap';
import { useEffect, useState } from 'react';

export default function Present() {
    const [present, setPresent] = useState([])

    useEffect(() => {
        fetch('https://687d6750918b64224331bd88.mockapi.io/present')
            .then(res => res.json())
            .then(data => setPresent(data))
            .catch(err => console.error('Ошибка загрузки:', err))
    }, [])
    return (
        <section className="present">
            <div className="container">
                <div className="present_header">

                    <h6 className='present_title'>Подарки</h6>
                    <div className="view_all_btn"><ViewBtn /></div>
                </div>
            </div>

            <ul className="present_list">

                <Marquee
                    speed={100}
                    className="present_list"
                    gradient={false}
                    pauseOnHover={true}
                >
                    {present.map((cake, index) => (
                        <ProductWrap item={cake} index={index} />
                    ))}
                </Marquee>
            </ul>
        </section>
    );
}