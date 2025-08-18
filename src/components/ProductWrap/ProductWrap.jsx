import Button from "./../../components/ui/Button";
import './../../assets/scss/components/product_wrap.scss'
import { useNavigate } from "react-router-dom";
export default function ProductWrap({ item, index }) {
    const navigate = useNavigate()
    return (
        <li style={{ borderRadius: "15px" }} key={index} className="li_item" >
            <div>
                <img style={{ borderRadius: "15px" }} className='li_img' src={item.image} alt={item.name} />
            </div>
            <p className="li_rating">
                {'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}
            </p>
            <div className='li_team'>
                <h3 className="li_name">{item.name}</h3>
                <div className="list_item">
                    {item.oldPrice > item.price && (
                        <s className="li_old">{item.oldPrice} сом</s>
                    )}
                    <p className='li_price'>{item.price} сом</p>
                </div>
            </div>
            <div className='li_btn'>
                <Button btn="Заказать" onClick={() => navigate(`/product/${item.id}`)} />
            </div>
        </li>
    )
}
