import Cards1 from './../../../../assets/icons/card1.svg'
import Cards2 from './../../../../assets/icons/card2.svg'
import Cards3 from './../../../../assets/icons/card3.svg'
import './../../../../assets/scss/components/home/cards.scss'
import Design from './../../../../assets/icons/design.svg'


export default function Cards() {
    return (
        <section className="cards">
            <div className="container">
                <div className="cards_block">
                    <div className="cards_img">
                        <img src={Cards1} alt="" />
                    </div>
                    <div className="cards_img">
                        <img src={Cards2} alt="" />
                    </div>
                    <div className="cards_img">
                        <img src={Cards3} alt="" />
                    </div>
                </div>
                <div className="design_left">
                    <img className='design_left_img' src={Design} alt="" />
                </div>
            </div>
        </section>
    )
}
