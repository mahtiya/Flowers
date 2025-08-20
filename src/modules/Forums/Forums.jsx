import './../../assets/scss/pages/forum_page.scss';
import { FaAngleDown } from "react-icons/fa6";
import { useState } from 'react';

export default function Forums() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      title: "О нашей компании",
      content: "Наша компания заботится о каждом клиенте и старается постоянно усовершенствоваться. Поэтому согласно закона «Про защиту прав потребителя» если купленный товар вам не подошел по какой-то из причин, имеет заводские дефекты, Вы имеете право вернуть или обменять товар в течении 14 дней с момента его покупки."
    },
    {
      title: "Как купить?",
      content: "Купить товар у нас Вы можете, позвоним по одному из наших телефонов или оформить товар купив его через наш магазин, после чего с Вами свяжется наш менеджер и обговорит все детали."
    },
    {
      title: "Доставка и оплата",
      content: "Вы можете заказать товар через сайт, после чего Вам позвонит наш менеджер и обсудит все детали заказа, или сделать заказ по одному из телефонов: (xxx) xxx-xx-xx, (xxx) xxx-xx-xx, время работы в будние дни с 9:00 до 18:00, суббота с 10:00 до 16:00."
    }
  ];

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  }

  return (
    <div className='forum_page'>
      <div className="container">
        <div className="forums_page_block">
          <div className="forum_page_title">Форум</div>
          <div className="forum_page_items">
            {faqItems.map((item, index) => (
              <div key={index} className="forum_block">
                <div className={`forum_page_bg ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleItem(index)}>
                  <p>{item.title}</p>
                  <FaAngleDown className={activeIndex === index ? 'rotate' : ''} />
                </div>
                {activeIndex === index && (
                  <p className='forum_page_sup'>{item.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
