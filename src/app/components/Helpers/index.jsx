'use client'

import bem from "../../utils/bem";
import WhatsAppIcon from "../../svg/WhatSappIcon";
import TelegramIcon from "../../svg/TelegramIcon";
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
          <span className="sub-title">Москва, Красногорский бульвар д4к1</span>
        </div>
        <div className="d-flex flex-column">
          <span className="text">Телефон</span>
          <a className="sub-title" href="tel:89525747666">8 800 600 54 84</a>
          <span className="text">Почта</span>
          <a className="sub-title" href="mailto:info@cormilec.ru">8 800 600 54 84</a>
        </div>
        <div className="d-flex flex-column">
          <span className="text">Соц. сети</span>
          <div className="d-flex gap-2">
            <div className={b('icon')}>
              <WhatsAppIcon />
            </div>
            <div className={b('icon')}>
              <TelegramIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
