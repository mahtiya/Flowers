import ProductWrap from '../../components/ProductWrap/ProductWrap'
import './../../assets/scss/pages/view_page.scss'
import { useEffect, useState } from 'react'

export default function ViewAllPage() {
    const [products, setProducts] = useState([])
    const [selectedFilters, setSelectedFilters] = useState([])
    const [openCategories, setOpenCategories] = useState({})

    // Фильтры — ключевые слова, которые реально встречаются в name
    const filterData = {
        'Букеты': ['розы', 'пионы', 'тюльпаны', 'лилии'],
        'Десерты': ['торт', 'кекс', 'печенье'],
        'Подарки': ['шоколад', 'игрушка', 'корзина']
    }

    useEffect(() => {
        fetch('https://687d6750918b64224331bd88.mockapi.io/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error('Ошибка загрузки:', err))
    }, [])

    const toggleCategory = (cat) => {
        setOpenCategories(prev => ({ ...prev, [cat]: !prev[cat] }))
    }

    const handleFilterClick = (filterName) => {
        setSelectedFilters(prev =>
            prev.includes(filterName)
                ? prev.filter(f => f !== filterName)
                : [...prev, filterName]
        )
    }

    // Фильтруем по ключевым словам в name
    const filteredProducts = products.filter(product => {
        if (selectedFilters.length === 0) return true
        return selectedFilters.some(filter =>
            product.name.toLowerCase().includes(filter.toLowerCase())
        )
    })

    return (
        <section className="view_page">
            <div className="container">
                <div className="filter_wrapper">
                    <div className="filter_sidebar">
                        {Object.entries(filterData).map(([category, subcategories], index) => (
                            <div key={index} className="filter_group">
                                <h3
                                    className="filter_title"
                                    onClick={() => toggleCategory(category)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {category} {openCategories[category] ? '-' : '+'}
                                </h3>
                                {openCategories[category] && subcategories.length > 0 && (
                                    <ul className="filter_list">
                                        {subcategories.map((item, subIndex) => (
                                            <li
                                                key={subIndex}
                                                className={`filter_item ${selectedFilters.includes(item) ? 'active' : ''}`}
                                                onClick={() => handleFilterClick(item)}
                                            >
                                                {item}
                                                {selectedFilters.includes(item) && (
                                                    <span className="checkmark">✅</span>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="product_display">
                        <h2 className="view_title">Категории</h2>
                        <ul className="view_list">
                            {filteredProducts.map((item, index) => (
                                <ProductWrap item={item} index={index} key={item.id} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
