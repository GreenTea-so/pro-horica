'use client'

import bem from "../../utils/bem";
import TelegramIcon from "../../svg/TelegramIcon.jsx";
import './index.scss';

const b = bem('helpers');

export default function Helpers() {
  return (
    <div className="my-5">
      <span className="title mb-4">Наши менеджеры будут рады помочь вам</span>
      <div className="d-flex justify-content-center flex-wrap gap-5">
        <div className="d-flex flex-column">
          <span className="text">Время работы</span>
          <span className="sub-title">Мск: 10:00 — 19:00 ежедневно</span>
        </div>
        <div className="d-flex flex-column">
          <span className="text">Адрес</span>
          <a className="sub-title" target="_blank" href="https://yandex.ru/maps/?from=api-maps&ll=37.809978%2C55.943154&mode=routes&origin=jsapi_2_1_79&rtext=~55.814750%2C37.362711&rtt=auto&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DIgoNa3MVQhVOQl9C&z=8">Москва, Красногорский бульвар д4к1</a>
        </div>
        <div className="d-flex flex-column">
          <span className="text">Телефон</span>
          <a className="sub-title" href="tel:+79672863777">+7 967 286-37-77</a>
          <span className="text">Почта</span>
          <a className="sub-title" href="mailto:vladislav-khv@mail.ru">vladislav-khv@mail.ru</a>
        </div>
        <div className="d-flex flex-column">
          <span className="text">Соц. сети</span>
          <div className="d-flex gap-2">
            <a target="_blank" href="https://api.whatsapp.com/send/?phone=%2B79672863777&text&type=phone_number&app_absent=0+7967286-37-77" className={b('icon')}>
            </a>
            <a href="https://t.me/+ZKQl6YrPbWVhYTcy" target="_blank" className={b('icon')}>
              <TelegramIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
