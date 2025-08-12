import Link from 'next/link';
import bem from "../../utils/bem";
import WhatsAppIcon from "../../svg/WhatSappIcon.jsx";
import TelegramIcon from "../../svg/TelegramIcon.jsx";
import StarIcon from '@/app/svg/StarIcon.jsx';
import logoImg from '../../images/logo.png';
import './index.scss';


const b = bem('header');

export default function Header() {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <div className="d-flex justify-content-between align-items-center gap-5">
        <Link href="/">
          <img className={b('logo')} src={logoImg.src} />
        </Link>
        <a className="d-flex align-items-center gap-2" href="tel:89525747666">
          <div>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          <span className={b('telephone')}>5.0 на Авито</span>
        </a>
        <div className="d-flex flex-column gap-1">
          <a className={b('telephone')} href="tel:89525747666">8(952)-57-47-666</a>
          <a className={b('telephone')} href="tel:89525747666">8(952)-57-47-666</a>
        </div>
        <div className="d-flex gap-2">
          <div className={`${b('whatsapp')} ${b('icon')}`}>
            <WhatsAppIcon />
          </div>
          <div className={`${b('telegram')} ${b('icon')}`}>
            <TelegramIcon />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center flex-wrap gap-4">
        <Link className={b('link', { selectable: true })} href="/services">Услуги</Link>
        <Link href="/about">О компании</Link>
        <Link href="/delivery">Доставка и оплата</Link>
        <Link href="/about">Гарантия и сервис</Link>
        <Link href="/contacts">Контакты</Link>
      </div>
    </header>
  );
}
