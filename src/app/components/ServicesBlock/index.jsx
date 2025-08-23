import Link from 'next/link';
import bem from "../../utils/bem";
import image1 from '@/app/images/service/image1.jpg';
import image2 from '@/app/images/service/image2.png';
import image3 from '@/app/images/service/image3.png';
import image4 from '@/app/images/service/image4.png';
import image5 from '@/app/images/service/image5.png';
import image6 from '@/app/images/service/image6.png';
import image7 from '@/app/images/service/image7.png';
import image8 from '@/app/images/service/image8.jpg';
import image9 from '@/app/images/service/image9.jpg';
import './index.scss';

const b = bem('services');

export default function ServicesBlock() {
  return (
    <div className="my-5">
      <div className="d-flex flex-wrap gap-5 justify-content-center">
        <Link href="/services/equipping-enterprises" className={"d-flex flex-column gap-1"}>
          <img className={b('img')} src={image8.src} />
          <span className="sub-title">Оснащение предприятий</span>
        </Link>
        <Link href="/services/service" className={"d-flex flex-column gap-1"}>
          <img className={b('img')} src={image9.src} />
          <span className="sub-title">Сервисное Обслуживание</span>
        </Link>
        <Link href="/services/design" className={"d-flex flex-column gap-1"}>
          <img className={b('img')} src={image4.src} />
          <span className="sub-title">Проектирование</span>
        </Link>
        <Link href="/services/moving" className={"d-flex flex-column gap-1"}>
          <img className={b('img')} src={image2.src} />
          <span className="sub-title">Поставка</span>
        </Link>
      </div>
    </div>
  );
}
