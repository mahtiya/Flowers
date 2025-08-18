
import Heart from './../../../assets/icons/heart.svg';
import Cart from './../../../assets/icons/cart.svg';

import './../../../assets/scss/components/header/headermedia.scss';

export default function HeaderMedia() {
    return (
        <div className="header_media">
            <div className="container">
                    <div className="header_media_favourite">
                        <img src={Heart} alt="" />
                        <img src={Cart} alt="" />
                    </div>
                </div>
            </div>
   
    )
}
