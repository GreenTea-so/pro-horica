"use client"

import Link from 'next/link';
import { useState } from 'react';
import bem from "../../utils/bem";
import TelegramIcon from "../../svg/TelegramIcon.jsx";
import WhatsAppIcon from '@/app/svg/WhatsAppIcon';
import StarIcon from '@/app/svg/StarIcon.jsx';
import MenuIcon from '@/app/svg/MenuIcon';
import CloseIcon from '@/app/svg/CloseIcon';
import logoImg from '../../images/logo.png';
import './index.scss';


const b = bem('header');

export default function Header() {

  const [isShowPopup, setIsShowPopup] = useState(false);

  const handleClick = () => {
    setIsShowPopup(!isShowPopup);
  }

  return (
    <header className="d-flex justify-content-between align-items-center gap-3">
      <div className={b('block')}>
        <Link href="/">
          <img className={b('logo')} src={logoImg.src} />
        </Link>
        <a target="_blank" className="d-flex align-items-center gap-2" href="https://www.avito.ru/brands/1158fda1b4e16f2991f5c31bf34320bd/all/business360/oborudovanie_dlya_biznesa?gdlkerfdnwq=101&shopId=7881631&params%5B156912%5D=3266344&page_from=from_item_card&iid=7577311749&sellerId=c02853dea42ad9a234010a5cd22709d9">
          <div className="d-flex">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          <span className={b('telephone')}>5.0 на Авито</span>
        </a>
        <div className="d-flex flex-column gap-1">
          <a className={b('telephone')} href="tel:+79672863777">+7 967 286-37-77</a>
        </div>
        <div className="d-flex gap-2">
          <a target="_blank" href="https://api.whatsapp.com/send/?phone=%2B79672863777&text&type=phone_number&app_absent=0+7967286-37-77" className={`${b('whatsapp')} ${b('icon')}`}>
            <WhatsAppIcon />
          </a>
          <a href="https://t.me/+ZKQl6YrPbWVhYTcy" target="_blank" className={`${b('telegram')} ${b('icon')}`}>
            <TelegramIcon />
          </a>
        </div>
      </div>
      <div className={b('block', { wrap: true })}>
        <Link href="/services">Услуги</Link>
        <Link href="/about">О компании</Link>
        <Link href="/delivery">Доставка и оплата</Link>
        <Link href="/warranty">Гарантия и сервис</Link>
        <Link href="/contacts">Контакты</Link>
      </div>
      <div className={b('block-mobile')}>
        <Link href="/">
          <img className={b('logo')} src={logoImg.src} />
        </Link>
        <button className={b('btn')} onClick={handleClick} >
          <MenuIcon />
        </button>
      </div>
      <div className={b('popup', { show: isShowPopup })}>
        <div className={b('block-mobile')}>
          <Link href="/">
            <img className={b('logo')} src={logoImg.src} />
          </Link>
          <button className={b('btn')} onClick={handleClick} >
            <CloseIcon />
          </button>
        </div>
        <div className="d-flex flex-column gap-3 align-items-center my-2">
          <Link onClick={handleClick} href="/services">Услуги</Link>
          <Link  onClick={handleClick} href="/about">О компании</Link>
          <Link  onClick={handleClick} href="/delivery">Доставка и оплата</Link>
          <Link  onClick={handleClick} href="/warranty">Гарантия и сервис</Link>
          <Link  onClick={handleClick} href="/contacts">Контакты</Link>
        </div>
        <div className="d-flex flex-column align-items-center gap-3 mt-4">
          <a target="_blank" className="d-flex align-items-center justify-content-center gap-2" href="https://www.avito.ru/brands/1158fda1b4e16f2991f5c31bf34320bd/all/business360/oborudovanie_dlya_biznesa?gdlkerfdnwq=101&shopId=7881631&params%5B156912%5D=3266344&page_from=from_item_card&iid=7577311749&sellerId=c02853dea42ad9a234010a5cd22709d9">
            <div className="d-flex">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <span className={b('telephone')}>5.0 на Авито</span>
          </a>
          <div className="d-flex flex-column gap-1 w-100">
            <a className={b('telephone')} href="tel:+79672863777">+7 967 286-37-77</a>
          </div>
          <div className="d-flex gap-2">
            <a target="_blank" href="https://api.whatsapp.com/send/?phone=%2B79672863777&text&type=phone_number&app_absent=0+7967286-37-77" className={`${b('whatsapp')} ${b('icon')}`}>
              <WhatsAppIcon />
            </a>
            <a href="https://t.me/+ZKQl6YrPbWVhYTcy" target="_blank" className={`${b('telegram')} ${b('icon')}`}>
              <TelegramIcon />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
