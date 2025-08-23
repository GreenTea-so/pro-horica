import Link from "next/link";
import bem from "../../utils/bem";
import image from '../../images/image10.jpg';
import './index.scss';

const b = bem('banner-design');

export default function BannerDesign() {
  return (
    <div className={`${b('')} mb-5 mt-2`}>
      <img className={b('img')} src={image.src} />
      <div className={b('block')}>
        <span className="title text-white">Проектирование под ключ</span>
        <span className="sub-title text-white">— Расстановка</span>
        <span className="sub-title text-white">— Технологический проект</span>
        <span className="sub-title text-white">— Дизайн проект</span>
        <div className="d-flex align-items-center justify-content-between mt-2 flex-wrap h-100">
          <a className="title text-white" href="tel:+79672863777">+7 (967) 286-37-77</a>
          <Link className={b('btn')} href="/services/design">Подробнее об услуге     →</Link>
        </div>
      </div>
    </div>
  );
}
