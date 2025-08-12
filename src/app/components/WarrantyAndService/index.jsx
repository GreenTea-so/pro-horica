import bem from "../../utils/bem";
import './index.scss';

const b = bem('warranty-and-service');

export default function WarrantyAndService() {
  return (
    <div className="my-5">
      <span className="title mb-3">Гарантия и сервис</span>
      <div className="d-flex flex-wrap justify-content-center gap-4">
        <div className={b('item')}>
          <span className="sub-title">Гарантия на оборудование</span>
          <span className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus blandit ac metus sed sit tempus hac magna accumsan. Quam mattis magnis scelerisque purus, egestas felis neque dictumst.
          </span>
        </div>
        <div className={b('item')}>
          <span className="sub-title">Условия гарантии</span>
          <span className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus blandit ac metus sed sit tempus hac magna accumsan. Quam mattis magnis scelerisque purus, egestas felis neque dictumst.
          </span>
        </div>
        <div className={b('item')}>
          <span className="sub-title">Сервисное обслуживание</span>
          <span className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus blandit ac metus sed sit tempus hac magna accumsan. Quam mattis magnis scelerisque purus, egestas felis neque dictumst.
          </span>
        </div>
        <div className={b('item')}>
          <span className="sub-title">Как оформить гарантийный или постгарантийный ремонт?</span>
          <span className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus blandit ac metus sed sit tempus hac magna accumsan. Quam mattis magnis scelerisque purus, egestas felis neque dictumst.
          </span>
        </div>
      </div>
    </div>
  );
}
