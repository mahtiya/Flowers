import './../../assets/scss/pages/view_page.scss'
import { useEffect, useState } from 'react'
import { FaCheck } from "react-icons/fa6";
import Pagination from '@mui/material/Pagination';
import ProductItem from '../../components/ProductItem/ProductItem';

export default function ViewAllPage() {
    const [products, setProducts] = useState([])
    const [toys, setToys] = useState([])
    const [cakes, setCakes] = useState([])
    const [filter, setFilter] = useState("all")
    const [currentPage, setCurrentPage] = useState(1)
    const [showFlowers, setShowFlowers] = useState(false)
    const itemsPerPage = 6

    useEffect(() => {
        fetch('https://687d6750918b64224331bd88.mockapi.io/products')
            .then(res => res.json())
            .then(data => setProducts(Array.isArray(data) ? data : []))
            .catch(err => console.error('Ошибка загрузки products:', err))

        fetch('https://687d6750918b64224331bd88.mockapi.io/toys')
            .then(res => res.json())
            .then(data => setToys(Array.isArray(data) ? data : []))
            .catch(err => console.error('Ошибка загрузки toys:', err))

        fetch('https://68a2cb21c5a31eb7bb1dcd1b.mockapi.io/cakes')
            .then(res => res.json())
            .then(data => setCakes(Array.isArray(data) ? data : []))
            .catch(err => console.error('Ошибка загрузки cakes:', err))
    }, [])

    // фильтрация
    let filteredItems = []
    if (filter === "all") {
        filteredItems = [...products, ...toys, ...cakes]
    } else if (["роза", "тюльпан", "пион", "discount", "season", "гортензия", "фрезия", "ромашка", "амариллиc", "ландыш"].includes(filter)) {
        filteredItems = products.filter(item => {
            if (["роза", "тюльпан", "пион", "гортензия", "фрезия", "ромашка", "амариллиc", "ландыш"].includes(filter)) {
                return item.flowersType === filter
            } else {
                return item.category === filter
            }
        })
    } else {
        filteredItems = [...products, ...toys, ...cakes].filter(item => item.category === filter)
    }

    const totalPages = Math.ceil(filteredItems.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const currentItems = filteredItems.slice(startIndex, startIndex + itemsPerPage)

    const filters = [
        { value: "all", label: "Все" },
        { value: "discount", label: "Скидочные букеты" },
        { value: "season", label: "Сезонные букеты" },
        { value: "flowers", label: "Цветы" },
        { value: "plush", label: "Подарки для близких" },
        { value: "sweets", label: "Торты и сладости" }
    ]

    const flowerTypes = ["роза", "тюльпан", "пион", "гортензия", "фрезия", "ромашка", "ландыш"]

    return (
        <section className="view_page">
            <div className="container">
                <h2 className="view_title">Каталог товаров</h2>
                <div className="product_display">
                    <div className='product_filter'>
                        <div className="filter_cards">
                            {filters.map(f => (
                                <div key={f.value} style={{ display: "flex", flexDirection: "column" }}>
                                    <div
                                        className={`filter_card ${filter === f.value ? 'active' : ''}`}
                                        onClick={() => {
                                            if (f.value === "flowers") {
                                                setShowFlowers(!showFlowers)
                                            } else {
                                                setFilter(f.value)
                                                setCurrentPage(1)
                                                setShowFlowers(false)
                                            }
                                        }}
                                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <FaCheck className='check_icon' />
                                            <span>{f.label}</span>
                                        </div>
                                        {f.value === "flowers" && (
                                            <span style={{ fontSize: '14px' }}>
                                                {showFlowers ? '▼' : '▶'}
                                            </span>
                                        )}
                                    </div>

                                    {f.value === "flowers" && showFlowers && (
                                        <div className="flower_subcards" style={{ marginLeft: '20px', marginTop: '5px' }}>
                                            {flowerTypes.map(ft => (
                                                <div
                                                    key={ft}
                                                    className={`filter_card ${filter === ft ? 'active' : ''}`}
                                                    onClick={() => { setFilter(ft); setCurrentPage(1) }}
                                                >
                                                    <FaCheck className='check_icon' />
                                                    <span>{ft.charAt(0).toUpperCase() + ft.slice(1)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                        </div>
                    </div>

                    <div className="product_list_wrapper">
                        <ul className="view_list">
                            {currentItems.map((item, index) => (
                                <ProductItem item={item} index={index} key={item.id || index} />
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
