'use client'

import Carousel from 'react-multi-carousel';
import logoImg from '../../images/logo.png';
import bem from "../../utils/bem";
import './index.scss';

const b = bem('reviews');

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1150 },
    items: 3.5
  },
  tablet: {
    breakpoint: { max: 1150, min: 1000 },
    items: 3.2
  },
  planshet: {
    breakpoint: { max: 1000, min: 800 },
    items: 2.5
  },
  xmobile: {
    breakpoint: { max: 800, min: 680 },
    items: 1.8
  },
  mobile: {
    breakpoint: { max: 680, min: 580 },
    items: 1.5
  },
  minimobile: {
    breakpoint: { max: 580, min: 0 },
    items: 1.2
  }
};

export default function Reviews() {
  return (
    <div className="my-5">
      <span className="title mb-4">Отзывы</span>
      <Carousel responsive={responsive} arrows={false} infinite={true}>
        <div className={b('item')}>
           <img className={b('img')} src={logoImg.src} draggable={false} />
        </div>
        <div className={b('item')}>
           <img className={b('img')} src={logoImg.src} draggable={false} />
        </div>
        <div className={b('item')}>
           <img className={b('img')} src={logoImg.src} draggable={false} />
        </div>
        <div className={b('item')}>
           <img className={b('img')} src={logoImg.src} draggable={false} />
        </div>
        <div className={b('item')}>
           <img className={b('img')} src={logoImg.src} draggable={false} />
        </div>
        <div className={b('item')}>
           <img className={b('img')} src={logoImg.src} draggable={false} />
        </div>
        <div className={b('item')}>
           <img className={b('img')} src={logoImg.src} draggable={false} />
        </div>
        <div className={b('item')}>
           <img className={b('img')} src={logoImg.src} draggable={false} />
        </div>
      </Carousel>;
    </div>
  );
}
