'use client'

import Carousel from 'react-multi-carousel';
import bem from "../../utils/bem";
import image1 from '../../images/image1.jpg';
import image6 from '../../images/image6.jpg';
import image7 from '../../images/image7.jpg';
import image8 from '../../images/image8.jpg';
import image9 from '../../images/image9.jpg';
import './index.scss';

const b = bem('about-company');

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 0 },
    items: 1
  }
};

export default function AboutCompany() {
  return (
    <div className={b('')}>
      <div className={b('block')}>
        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={4000}>
          <img className={b('img')} src={image1.src} draggable={false} />
          <img className={b('img')} src={image6.src} draggable={false} />
          <img className={b('img')} src={image7.src} draggable={false} />
          <img className={b('img')} src={image8.src} draggable={false} />
          <img className={b('img')} src={image9.src} draggable={false} />
        </Carousel>
      </div>
      <div className="d-flex flex-column p-3">
        <span className="title mb-4">О компании</span>
        <span className="mb-3 text">Наше холодильное оборудование — это надежное, энергоэффективное и долговечное решение для бизнеса. Мы предлагаем современные модели, которые помогают оптимизировать работу ресторанов, магазинов и производственных предприятий.</span>
        <span className="text">Мы — надежный поставщик профессионального холодильного оборудования для ресторанов, магазинов и производственных предприятий. Наша миссия — обеспечивать клиентов высококачественными, энергоэффективными и надежными решениями для хранения и охлаждения продукции.</span>
      </div>
    </div>
  );
}
