
import Banner1 from './../../assets/images/banner1.png';
import Banner2 from './../../assets/images/banner2.png';
import Banner3 from './../../assets/images/banner3.png';
import Banner4 from './../../assets/images/banner4.png';
import Banner5 from './../../assets/images/banner5.png';
import './../../assets/scss/components/banner.scss';

export default function Banner() {
    return (
        <section className="banner">
            <div className="container">
                <div className="banner_block">
                    <div className="banner_main">
                        <img src={Banner1} alt="" />
                    </div>
                    <div className="banner_details">
                        <div className="banner_details_item1">
                            <div>
                                <img src={Banner2} alt="" />
                            </div>
                            <div>
                                <img src={Banner3} alt="" />
                            </div>

                        </div>
                        <div className="banner_details_item2">
                            <div>
                                <img src={Banner4} alt="" />
                            </div>
                            <div>
                                <img src={Banner5} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
