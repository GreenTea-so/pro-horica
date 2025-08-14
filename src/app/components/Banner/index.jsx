import bem from "../../utils/bem";
import image from '../../images/image5.jpg';
import './index.scss';

const b = bem('banner');

export default function Banner() {
  return (
    <div className={`${b('')} mb-5 mt-2`}>
      <img className={b('img')} src={image.src} />
      <div className={b('block')}>
        <span className="title text-white">Наше оборудование</span>
        <span className="text-white">Новое, б/у, восстановленное оборудование для оснащения торговых, промышленных, производственных предприятий и заведений сегмента HoReCa и Retail</span>
      </div>
    </div>
  );
}
