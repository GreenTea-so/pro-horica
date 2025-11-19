import bem from "../../utils/bem";
import './index.scss';

const b = bem('ransom-block');

export default function RansomBlock() {
  return (
    <div className="my-5">
      <span className="title mb-3">Этапы работы</span>
      <div className="d-flex flex-wrap justify-content-center gap-4">
        <div className={b('item')}>
          <span className="sub-title">1. Заявка</span>
          <span className="text">
            Оставьте заявку по телефону <a href="tel:+79672511358">7 967 251-13-58</a>
          </span>
        </div>
        <div className={b('item')}>
          <span className="sub-title">2. Оценка</span>
          <span className="text">
            Наш специалист быстро приедет и оценит стоимость вашего оборудования
          </span>
        </div>
        <div className={b('item')}>
          <span className="sub-title">3. Вывоз</span>
          <span className="text">
            Диагностика, погрузка и вывоз – бесплатно
          </span>
        </div>
        <div className={b('item')}>
          <span className="sub-title">4. Оплата</span>
          <span className="text">
            Расчет производится сразу после вывоза оборудования — наличными или безналом
          </span>
        </div>
      </div>
    </div>
  );
}
