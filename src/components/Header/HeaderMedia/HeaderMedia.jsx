import Twitter from './../../../assets/icons/twitter.svg';
import Insta from './../../../assets/icons/insta.svg';
import Teg from './../../../assets/icons/teg.svg';
import facebook from './../../../assets/icons/facebook.svg';
import Heart from './../../../assets/icons/heart.svg';
import Cart from './../../../assets/icons/cart.svg';

import './../../../assets/scss/components/headermedia.scss';

export default function HeaderMedia() {
    return (
        <div className="header_media">
            <div className="container">
                <div className="header_media_block">
                    <div className="header_media_social">
                        <div className="header_social">
                            <img src={Twitter} alt="" />
                        </div>
                        <div className="header_social">
                            <img src={Insta} alt="" />
                        </div>
                        <div className="header_social">
                            <img src={Teg} alt="" />
                        </div>
                        <div className="header_social">
                            <img src={facebook} alt="" />
                        </div>
                    </div>
                    <div className="header_media_num">
                        <p>+38 (067) 829 30 30</p>
                    </div>
                    <div className="header_media_favourite">
                        
                        <img src={Heart} alt="" />
                        <img src={Cart} alt="" />
                        <p className='header_media_currency'>₴ 1 520</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
