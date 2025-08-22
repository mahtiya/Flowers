import './../../assets/scss/pages/view_page.scss'
import { useEffect, useState } from 'react'
import { FaCheck } from "react-icons/fa6";
import Pagination from '@mui/material/Pagination';
import ProductItem from '../../components/ProductItem/ProductItem';

export default function ViewAllPage() {
    const [products, setProducts] = useState([])
    const [present, setPresent] = useState([])
    const [cakes, setCakes] = useState([])

    const [filter, setFilter] = useState("all")
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 6

    useEffect(() => {
        fetch('https://687d6750918b64224331bd88.mockapi.io/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error('Ошибка загрузки products:', err))
    }, [])

    useEffect(() => {
        fetch('https://687d6750918b64224331bd88.mockapi.io/present')
            .then(res => res.json())
            .then(data => setPresent(data))
            .catch(err => console.error('Ошибка загрузки present:', err))
    }, [])

    useEffect(() => {
        fetch('https://687d6750918b64224331bd88.mockapi.io/cakes')
            .then(res => res.json())
            .then(data => setCakes(data)) // тут исправила
            .catch(err => console.error('Ошибка загрузки cakes:', err))
    }, [])

    const filteredProducts = products.filter(item => {
        if (filter === "all") return true
        return item.category === filter || item.flowers?.includes(filter)
    })

    const filteredPresent = present.filter(item => {
        if (filter === "all") return true
        return item.category === filter || item.plush?.includes(filter)
    })

    const filteredCakes = cakes.filter(item => {
        if (filter === "all") return true
        return item.category === filter || item.cakeType?.includes(filter)
    })

    const allItems = [...filteredProducts, ...filteredPresent, ...filteredCakes]

    const totalPages = Math.ceil(allItems.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const currentProducts = allItems.slice(startIndex, startIndex + itemsPerPage)

    const filters = [
        { value: "all", label: "Все" },
        { value: "discount", label: "Букеты в акциях" },
        { value: "present", label: "Подарки для близких" },
        { value: "season", label: "Сезонные цветы" },
        { value: "Розы", label: "Розы" },
        { value: "Тюльпаны", label: "Тюльпаны" },
        { value: "Лилии", label: "Лилии" },
        { value: "Пионы", label: "Пионы" },
        { value: "Медведи", label: "Плюшевые мишки" }
    ]

    return (
        <section className="view_page">
            <div className="container">
                <h2 className="view_title">Каталог товаров</h2>
                <div className="product_display">
                    <div className='product_filter'>
                        <div className="filter_cards">
                            {filters.map(f => (
                                <div
                                    key={f.value}
                                    className={`filter_card ${filter === f.value ? 'active' : ''}`}
                                    onClick={() => { setFilter(f.value); setCurrentPage(1) }}
                                >
                                    <FaCheck className='check_icon' />
                                    <span>{f.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="product_list_wrapper">
                        <ul className="view_list">
                            {currentProducts.map((item, index) => (
                                <ProductItem item={item} index={index} key={item.id} />
                            ))}
                        </ul>

                        <div className="pagination_wrapper">
                            <Pagination
                                count={totalPages}
                                page={currentPage}
                                onChange={(e, page) => setCurrentPage(page)}
                                color="primary"
                                shape="rounded"
                                showFirstButton
                                showLastButton
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
