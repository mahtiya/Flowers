import { Link } from 'react-router-dom';
import './../../assets/scss/ui/viewBtn.scss';
import { FaArrowCircleRight } from "react-icons/fa";
export default function ViewBtn() {
    return (
        <Link to="view-all">
            <button className="view_all">Посмотреть все <FaArrowCircleRight /></button>
        </Link >
    )
}
