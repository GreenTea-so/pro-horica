import logoImg from '../../images/logo.png';
import bem from "../../utils/bem";
import Link from 'next/link';
import TelegramIcon from "../../svg/TelegramIcon.jsx";
import WhatsAppIcon from '@/app/svg/WhatsAppIcon';
import './index.scss';

const b = bem('footer');

export default function Footer() {
  return (
    <footer className={b('')}>
      <div className="d-flex flex-column">
        <Link href="/">
          <img className={b('logo')} src={logoImg.src} />
        </Link>
        <span className="text">Оборудование для пищевых производств</span>
        <span className="text">и ресторанов</span>
      </div>
      <div className={b('clients')}>
        <span className="sub-title mb-4">Клиентам</span>
        <Link href="/services">Услуги</Link>
        <Link href="/about">О компании</Link>
        <Link href="/delivery">Доставка и оплата</Link>
        <Link href="/warranty">Гарантия и сервис</Link>
        <Link href="/contacts">Контакты</Link>
      </div>
      <div className={b('contacts')}>
        <span className="sub-title mb-4">Контакты</span>
        <a target="_blank" href="https://yandex.ru/maps/?from=api-maps&ll=37.809978%2C55.943154&mode=routes&origin=jsapi_2_1_79&rtext=~55.814750%2C37.362711&rtt=auto&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DIgoNa3MVQhVOQl9C&z=8">Москва, Красногорский бульвар д4к1</a>
        <a href="tel:+79672863777">+7 967 286-37-77</a>
        <a href="mailto:vladislav-khv@mail.ru">vladislav-khv@mail.ru</a>
        <div className="d-flex gap-2">
          <a target="_blank" href="https://api.whatsapp.com/send/?phone=%2B79672863777&text&type=phone_number&app_absent=0+7967286-37-77" className={`${b('whatsapp')} ${b('icon')}`}>
            <WhatsAppIcon />
          </a>
          <a href="https://t.me/+ZKQl6YrPbWVhYTcy" target="_blank" className={`${b('telegram')} ${b('icon')}`}>
            <TelegramIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
