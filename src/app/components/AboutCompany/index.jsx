import bem from "../../utils/bem";
import logoImg from '../../images/logo.png';
import './index.scss';

const b = bem('about-company');

export default function AboutCompany() {
  return (
    <div className="d-flex gap-3 my-5">
      <img className={b('img')} src={logoImg.src} />
      <div className="d-flex flex-column p-3">
        <span className="title mb-4">О компании</span>
        <span className="mb-3 text">Наше холодильное оборудование — это надежное, энергоэффективное и долговечное решение для бизнеса. Мы предлагаем современные модели, которые помогают оптимизировать работу ресторанов, магазинов и производственных предприятий.</span>
        <span className="text">Мы — надежный поставщик профессионального холодильного оборудования для ресторанов, магазинов и производственных предприятий. Наша миссия — обеспечивать клиентов высококачественными, энергоэффективными и надежными решениями для хранения и охлаждения продукции.</span>
      </div>
    </div>
  );
}
