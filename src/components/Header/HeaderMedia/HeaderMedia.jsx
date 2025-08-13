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
                            <a href="https://www.instagram.com/mirsvetov.kg.kyzylkiya?igsh=ZnVkaGxxbzBiOThl">
                                <img src={Insta} alt="" />
                            </a>
                        </div>
                        <div className="header_social">
                            <a href="https://t.me/mar_ziya">
                                <img src={Teg} alt="" />
                            </a>
                        </div>
                        <div className="header_social">
                            <a href=" https://www.facebook.com/mirsvetov.kg.kyzylkiya">
                                <img src={facebook} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="header_media_num">
                        <p>+996 999 38 34 32</p>
                    </div>
                    <div className="header_media_favourite">

                        <img src={Heart} alt="" />
                        <img src={Cart} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
