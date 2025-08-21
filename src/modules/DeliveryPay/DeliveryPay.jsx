import Foto1 from "../../assets/images/delivery_pay/credit_card_1.png"
import Foto2 from "../../assets/images/delivery_pay/credit_card_2.jpg"
import Foto3 from "../../assets/images/delivery_pay/credit_card_3.png"
import Foto4 from "../../assets/images/delivery_pay/credit_card_4.png"

import "../../assets/scss/pages/delivery_pay.scss";

export default function DeliveryPay() {
  return (
    <section className="deliver_pay">
      <div className="container">
        <h3 className="deliver_pay_title">Оплата и доставка</h3>

        <div className="wrapper_text">
          <p className="deliver_pay_text">Мир цветов - это единая сеть партнеров, курьерская доставка цветов, что гарантирует доставку букетов и подарков по всей Украине вовремя и в надлежащем виде. Доставка цветов по украине осуществляется в удобное для Вас время.</p>
          <p className="deliver_pay_text">Цветы и корзины фруктов - это скоропортящийся продукт, поэтому компания оставляет за собой право изменения состава и внешнего вида товара на 20-25% с сохранением общего вида и стоимости компонентов.</p>
          <p className="deliver_pay_text">Доставка цветов в областные центры  -Киргизи от 100 сом <br />За ранние (с 7 до 9) и вечерние (с 21 до 23) временные промежутки доставки доплата составляет 50 сом</p>
          <p className="deliver_pay_text">В крупных городах: Киев, Днепропетровск, Одесса, Донецк, Харьков </p>

          <ul className="deliver_pay_list">
            <li>    доставка осуществляется бесплатно при заказе от 800 сом;</li>
            <li>    при заказе менее 800 сом доставка оплачивается отдельно и составляет 100 сом.</li>
          </ul>
        </div>

        <div className="credit_card">
          <img src={Foto1} alt="" />
          <img src={Foto2} alt="" />
          <img src={Foto3} alt="" />
          <img src={Foto4} alt="" />
        </div>

        <div className="wrapper_text">
          <p className="deliver_pay_text">«Приват24» – самый популярный Интернет-банк Украины.
            Наличными оплата производится предварительно перед фактом доставки наличными курьеру. Стоимость услуги выезда курьера составляет 20 сом.
            Оплата карточкой Visa/MasterCard В нашем магазине Вы можете оплатить заказ при помощи платежной (пластиковой) карты.Сервис проведения платежей обеспечивается Межбанковской системой электронной доставки и оплаты счетов Portmone.com с использованием современного и безопасного механизма авторизации платежных карт.
            Реквизиты платежных карт вводятся на сайте Portmone.com в защищенном режиме, и недоступны сотрудникам.
            Яндекс.Деньги После оплаты, пожалуйста напишите нам email с суммой проплаты и номером Вашего заказа. А также укажите эту информацию при переводе.

          </p>

          <p className="deliver_pay_text">Мы работаем по всей Киргизи!</p>
        </div>
      </div>
    </section>
  )
}
