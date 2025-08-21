import { useEffect, useState } from 'react'
import './../../../../assets/scss/components/home/discounting.scss';
import Marquee from 'react-fast-marquee';
import ViewBtn from '../../../../components/ui/ViewBtn';
import ProductItem from '../../../../components/ProductItem/ProductItem';

export default function Discounting() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://687d6750918b64224331bd88.mockapi.io/products')
            .then(res => res.json())
            .then(data => {
                const discountProducts = data.filter(item => item.category === "discount")
                setProducts(discountProducts)
            })
            .catch(err => console.error('Ошибка загрузки:', err))
    }, [])

    return (
        <section className='discounting'>
            <div className="container">
                <div className="discount_header">
                    <h5 className='discount_title'>Акции</h5>
                    <div><ViewBtn /></div>
                </div>
            </div>

            <ul className="discounting_list">
                <Marquee
                    speed={100}
                    className="discount_wrap"
                    gradient={false}
                    pauseOnHover={true}
                >

                    {products.map((product, index) => (
                        <ProductItem item={product} key={index} />
                    ))}
                </Marquee>
            </ul>
        </section>
    )
}
