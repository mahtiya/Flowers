import { CiLocationOn } from "react-icons/ci";
import { PiPhoneLight } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";

import "../../assets/scss/pages/contact.scss"
import FormBot from "./FormBot";

export default function Contacts() {
  return (
    <section className="contacts">
      <div className="container">

        <h2 className="contact_title">Контакты</h2>

        <div className="contact_wrapper">
          <div className="contact_content">
            <h3 className="contact_content_title">Свяжитесь с нами</h3>
            <p className="contact_content_subtitle">Свяжитесь с нами — мы ценим каждого клиента и готовы ответить на любые вопросы, оказать поддержку и предложить оптимальные решения для ваших задач. Ваше обращение не останется без внимания.</p>

            <ul className="contact_info">
              <li><CiLocationOn className="icon" /> Ош, Улиция Пушкина Набережна, 7, корпус 5</li>
              <li><PiPhoneLight className="icon" /> +380 99 937 1556</li>
              <li><CiClock2 className="icon" /> Пн - Пт: 09:00 - 20:00
                <br />
                Сб - Вс 09:00 - 15:00</li>
            </ul>
          </div>

          <div>
            <h3 className="contact_content_title">Заполните форму для обратной связи</h3>
            <FormBot />
          </div>
        </div>
      </div>
    </section>
  )
}