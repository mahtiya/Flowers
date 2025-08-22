import './../../../../assets/scss/components/home/present.scss';
import Marquee from 'react-fast-marquee';
import ViewBtn from '../../../../components/ui/ViewBtn';
import { useEffect, useState } from 'react';
import PresentItem from '../../../../components/PresentItem/PresentItem';

export default function Present() {
    const [present, setPresent] = useState([])

    useEffect(() => {
        fetch('https://687d6750918b64224331bd88.mockapi.io/toys')
            .then(res => res.json())
            .then(data => {
                const presentProducts = data.filter(item => item.category === "plush")
                setPresent(presentProducts)
            })
            .catch(err => console.error('Ошибка загрузки:', err))
    }, [])

    return (
        <section className="present">
            <div className="container">
                <div className="present_header">
                    <h6 className='present_title'>Игрушки</h6>
                    <div><ViewBtn /></div>
                </div>
            </div>

            <ul className="present_list">
                <Marquee
                    speed={100}
                    className="present_wrap"
                    gradient={false}
                    pauseOnHover={true}
                >
                    {present.map((item, index) => (
                        <PresentItem item={item} key={index} />
                    ))}
                </Marquee>
            </ul>
        </section>
    );
}
