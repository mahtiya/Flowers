
import Banner1 from './../../../../assets/icons/banner1.svg';
import Banner2 from './../../../../assets/icons/banner2.svg';
import Banner3 from './../../../../assets/icons/banner3.svg';
import Banner4 from './../../../../assets/icons/banner4.svg';
import Banner5 from './../../../../assets/icons/banner5.svg';
import './../../../../assets/scss/components/home/banner.scss';

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
