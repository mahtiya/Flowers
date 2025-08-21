import { useNavigate } from 'react-router-dom'
import Button from '../ui/Button'

export default function CakeItem({ item, index }) {
    const navigate = useNavigate()

    return (
        <li key={index} className="li_item" >
            <div>
                <img className='li_img' src={item.image} alt={item.name} />
            </div>

            <div className='li_team'>
                <div className="li_name_wrapper">
                    <h3 className="li_name">{item.name}</h3>
                    <div className="tooltip">{item.name}</div>
                </div>
                <div className="list_item">
                    {item.oldPrice > item.price && (
                        <s className="li_old">{item.oldPrice} сом</s>
                    )}
                    <p className='li_price'>{item.price} сом</p>
                </div>
            </div>
            <div className='li_btn'>
                <Button btn="Посмотреть" onClick={() => navigate(`/cake/${item.id}`)} />
            </div>
        </li>
    )
}
