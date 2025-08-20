import BtnDes from './../../assets/icons/BtnDes.svg';
import './../../assets/scss/ui/button.scss'

export default function Button({ btn, onClick }) {
    return (
        <button
            className='order_btn'
            style={{ backgroundImage: `url(${BtnDes})` }}
            onClick={onClick}
        >
            {btn}
        </button>
    );
}
