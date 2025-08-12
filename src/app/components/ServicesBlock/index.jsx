import bem from "../../utils/bem";
import image2 from '../../images/image2.jpg';
import './index.scss';

const b = bem('services');

export default function ServicesBlock() {
  return (
    <div className="my-5">
      <div className="d-flex flex-wrap gap-5 justify-content-center">
        <a className={"d-flex flex-column gap-1"}>
          <img className={b('img')} src={image2.src} />
          <span className="sub-title">Проектирование</span>
        </a>
        <a className={"d-flex flex-column gap-1"}>
          <img className={b('img')} src={image2.src} />
          <span className="sub-title">Поставка</span>
        </a>
        <a className={"d-flex flex-column gap-1"}>
          <img className={b('img')} src={image2.src} />
          <span className="sub-title">Выкуп</span>
        </a>
        <a className={"d-flex flex-column gap-1"}>
          <img className={b('img')} src={image2.src} />
          <span className="sub-title">Переезд</span>
        </a>
        <a className={"d-flex flex-column gap-1"}>
          <img className={b('img')} src={image2.src} />
          <span className="sub-title">Демонтаж/Монтаж</span>
        </a>
        <a className={"d-flex flex-column gap-1"}>
          <img className={b('img')} src={image2.src} />
          <span className="sub-title">Отделка</span>
        </a>
        <a className={"d-flex flex-column gap-1"}>
          <img className={b('img')} src={image2.src} />
          <span className="sub-title">Открытие объекта</span>
        </a>
      </div>
    </div>
  );
}
