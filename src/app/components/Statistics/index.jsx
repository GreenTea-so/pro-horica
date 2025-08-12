import bem from "../../utils/bem";
import './index.scss';

const b = bem('statistics');

export default function Statistics() {
  return (
    <div className="d-flex my-5 gap-4 flex-wrap justify-content-center">
      <div className={`${b('item')} d-flex flex-column align-items-center justify-content-center`}>
        <span className="title">5.000+</span>
        <span className={b('bottom')}>товаров в ассортименте</span>
      </div>
      <div className={`${b('item')} d-flex flex-column align-items-center justify-content-center`}>
        <span className="title">10+</span>
        <span className={b('bottom')}>лет на рынке</span>
      </div>
      <div className={`${b('item')} d-flex flex-column align-items-center justify-content-center`}>
        <span className="title">20.000+</span>
        <span className={b('bottom')}>объектов оснастили</span>
      </div>
    </div>
  );
}
