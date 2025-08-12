import bem from "../../utils/bem";
import './index.scss';

const b = bem('delivery-and-payment');

export default function DeliveryAndPayment() {
  return (
    <div className="my-5">
      <span className="title mb-3">Доставка и оплата</span>
      <div className="d-flex flex-wrap justify-content-center gap-4">
        <div className={b('item')}>
          <span className="sub-title">Описание</span>
          <span className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus blandit ac metus sed sit tempus hac magna accumsan. Quam mattis magnis scelerisque purus, egestas felis neque dictumst.
          </span>
        </div>
        <div className={b('item')}>
          <span className="sub-title">Детали</span>
          <span className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus blandit ac metus sed sit tempus hac magna accumsan. Quam mattis magnis scelerisque purus, egestas felis neque dictumst.
          </span>
        </div>
        <div className={b('item')}>
          <span className="sub-title">Условия доставки</span>
          <span className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus blandit ac metus sed sit tempus hac magna accumsan. Quam mattis magnis scelerisque purus, egestas felis neque dictumst.
          </span>
        </div>
        <div className={b('item')}>
          <span className="sub-title">Условия оплаты</span>
          <span className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus blandit ac metus sed sit tempus hac magna accumsan. Quam mattis magnis scelerisque purus, egestas felis neque dictumst.
          </span>
        </div>
      </div>
    </div>
  );
}
