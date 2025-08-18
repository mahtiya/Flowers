import './../../assets/scss/ui/button.scss';
export default function Button({ btn, onClick }) {
    return (
        <button className='discount_btn' onClick={onClick}>{btn}</button>

    )
}
