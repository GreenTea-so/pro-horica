import bem from "../../utils/bem";
import './index.scss';

const b = bem('our-advantages');

export default function OurAdvantages() {
  return (
    <div className="my-5">
      <span className="title mb-4">Наши преимущества</span>
      <div className="d-flex flex-wrap gap-5 justify-content-center">
        <div className={b('item')}>
          <span className="sub-title mb-3">Широкий ассортимент</span>
          <span className="text">— от промышленных холодильников</span>
          <span className="text">до специализированных</span>
          <span className="text">морозильных камер</span>
        </div>
        <div className={b('item')}>
          <span className="sub-title mb-3">Индивидуальный подход</span>
          <span className="text">— подбираем решения под</span>
          <span className="text">конкретные задачи вашего бизнеса</span>
        </div>
        <div className={b('item')}>
          <span className="sub-title mb-3">Современные технологии</span>
          <span className="text">— оборудование с низким</span>
          <span className="text">энергопотреблением и высокой</span>
          <span className="text">производительностью</span>
        </div>
        <div className={b('item')}>
          <span className="sub-title mb-3">Быстрая доставка</span>
          <span className="text">— работаем оперативно, чтобы ваш бизнес не терял время</span>
        </div>
        <div className={b('item')}>
          <span className="sub-title mb-3">Гарантия и сервис</span>
          <span className="text">— предоставляем полное сопровождение от подбора до</span>
          <span className="text">установки и обслуживания</span>
        </div>
      </div>
    </div>
  );
}
