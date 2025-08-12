import bem from "../../utils/bem";
import image from '../../images/image5.jpg';
import './index.scss';

const b = bem('banner');

export default function Banner() {
  return (
    <div className={`${b('')} my-5`}>
      <img className={b('img')} src={image.src} />
      <div className="d-flex flex-column gap-4 justify-content-end h-100 pb-5 w-50">
        <span className="title text-white">Наше оборудование</span>
        <span className="text-white">Новое, б/у, восстановленное оборудование для оснащения торговых, промышленных, производственных предприятий и заведений сегмента HoReCa и Retail</span>
      </div>
    </div>
  );
}
