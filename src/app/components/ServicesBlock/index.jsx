import Link from 'next/link';
import bem from "../../utils/bem";
import image2 from '../../images/image2.jpg';
import './index.scss';

const b = bem('services');

export default function ServicesBlock() {
  return (
    <div className="my-5">
      <div className="d-flex flex-wrap gap-5 justify-content-center">
        <Link href="/services/design" className={"d-flex flex-column gap-1"}>
          <img className={b('img')} src={image2.src} />
          <span className="sub-title">Проектирование</span>
        </Link>
        <Link href="/services/moving" className={"d-flex flex-column gap-1"}>
          <img className={b('img')} src={image2.src} />
          <span className="sub-title">Поставка</span>
        </Link>
        <Link href="/services/ransom" className={"d-flex flex-column gap-1"}>
          <img className={b('img')} src={image2.src} />
          <span className="sub-title">Выкуп</span>
        </Link>
        <Link href="/services/moving" className={"d-flex flex-column gap-1"}>
          <img className={b('img')} src={image2.src} />
          <span className="sub-title">Переезд</span>
        </Link>
        <Link href="/services/dismantling-installation" className={"d-flex flex-column gap-1"}>
          <img className={b('img')} src={image2.src} />
          <span className="sub-title">Демонтаж/Монтаж</span>
        </Link>
        <Link href="/services/finishing" className={"d-flex flex-column gap-1"}>
          <img className={b('img')} src={image2.src} />
          <span className="sub-title">Отделка</span>
        </Link>
        <Link href="/services/opening" className={"d-flex flex-column gap-1"}>
          <img className={b('img')} src={image2.src} />
          <span className="sub-title">Открытие объекта</span>
        </Link>
      </div>
    </div>
  );
}
