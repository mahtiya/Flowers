import './../../assets/scss/pages/forum_page.scss';
import { FaAngleDown } from "react-icons/fa6";

export default function Forums() {
  return (
    <div className='forum_page'>
      <div className="container">
        <div className="forums_page_block">
          <div className="forum_page_title">Форум</div>
          <div className="forum_page_items">
            <p className='forum_page_sup'>Наша компания заботиться о каждом клиенте и старается постоянно усовершенствоваться. Поэтому согласно закона «Про защиту прав потребителя» если купленный товар вам не подошел по какой - то из причин, имеет заводские дефекты, Вы имеете право вернуть или обменять товар в течении 14 дней с момента его покупки.</p>
            <div className="forum_pages">
              <div className="forum_page_bg">
                <p>Как купить?</p>
                <FaAngleDown />
              </div>
            </div>

            <p className='forum_page_sup'>Вы можете заказать товар через сайт, после чего Вам позвонит наш менеджер и обсудит все детали заказа, или сделать заказ по одному из телефонов: (xxx) xxx-xx-xx, (xxx) xxx-xx-xx, время работы в будние дни с 9:00 до 18:00, суббота с 10:00 до 16:00,</p>
            <div className="forum_pages">
              <div className="forum_page_bg">
                <p>Доставка и оплата</p>
                <FaAngleDown />
              </div>
            </div>
            <div className="forum_page_bg">
              <p>О нашем магазине</p>
              <FaAngleDown />
            </div>
            <p className='forum_page_sup'>Купить товар у нас Вы можете, позвоним по одному из наших телефонов или оформить товар купив его через наш магазин, после чего с Вами свяжется наш менеджер и обговорить все детали.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
