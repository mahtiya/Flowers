import Button from "./../../components/ui/Button";
import './../../assets/scss/components/product_wrap.scss'
import { useNavigate } from "react-router-dom";
import { IoMdStar } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
export default function ProductWrap({ item, index }) {
    const navigate = useNavigate()
    return (
        <li key={index} className="li_item" >
            <div>
                <img className='li_img' src={item.image} alt={item.name} />
            </div>
            <p className="li_rating">
                {Array(item.rating)
                    .fill(0)
                    .map((_, i) => (
                        <IoMdStar key={`star-filled-${i}`} />
                    ))}
                {Array(5 - item.rating)
                    .fill(0)
                    .map((_, i) => (
                        <IoMdStarOutline key={`star-outline-${i}`} />
                    ))}
            </p>
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
                <Button btn="Посмотреть" onClick={() => navigate(`/product/${item.id}`)} />
            </div>
        </li>
    )
}
