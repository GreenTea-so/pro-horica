import logoImg from '../../images/logo.png';
import bem from "../../utils/bem";
import Link from 'next/link';
import WhatsAppIcon from "../../svg/WhatSappIcon.jsx";
import TelegramIcon from "../../svg/TelegramIcon.jsx";
import './index.scss';

const b = bem('footer');

export default function Footer() {
  return (
    <footer className="d-flex justify-content-between">
      <div className="d-flex flex-column">
        <Link href="/">
          <img className={b('logo')} src={logoImg.src} />
        </Link>
        <span className="text">Оборудование для пищевых производств</span>
        <span className="text">и ресторанов</span>
      </div>
      <div className="d-flex flex-column gap-2">
        <span className="sub-title mb-4">Клиентам</span>
        <Link href="/services">Услуги</Link>
        <Link href="/about">О компании</Link>
        <Link href="/delivery">Доставка и оплата</Link>
        <Link href="/tst">Гарантия и сервис</Link>
        <Link href="/contacts">Контакты</Link>
      </div>
      <div className="d-flex flex-column gap-2">
        <span className="sub-title mb-4">Контакты</span>
        <a>Москва, Красногорский бульвар д4к1</a>
        <a>8 800 000</a>
        <a>8 800 000</a>
        <div className="d-flex gap-2">
          <div className={`${b('whatsapp')} ${b('icon')}`}>
            <WhatsAppIcon />
          </div>
          <div className={`${b('telegram')} ${b('icon')}`}>
            <TelegramIcon />
          </div>
        </div>
      </div>
    </footer>
  );
}
