'use client'

import Carousel from 'react-multi-carousel';
import logoImg from '../../images/logo.png';
import bem from "../../utils/bem";
import './index.scss';

const b = bem('partners');

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1150 },
    items: 5.5
  },
  tablet: {
    breakpoint: { max: 1150, min: 1000 },
    items: 4.5
  },
  planshet: {
    breakpoint: { max: 1000, min: 800 },
    items: 3.5
  },
  xmobile: {
    breakpoint: { max: 800, min: 680 },
    items: 2.8
  },
  mobile: {
    breakpoint: { max: 680, min: 580 },
    items: 2.5
  },
  minimobile: {
    breakpoint: { max: 580, min: 0 },
    items: 2.2
  }
};

export default function Partners() {
  return (
    <div className="my-5">
      <span className="title mb-4">Наши партнеры</span>
      <Carousel responsive={responsive} arrows={false} infinite={true} autoPlay={true} autoPlaySpeed={2000}>
        <img className={b('img')} src={logoImg.src} draggable={false} />
        <img className={b('img')} src={logoImg.src} draggable={false} />
        <img className={b('img')} src={logoImg.src} draggable={false} />
        <img className={b('img')} src={logoImg.src} draggable={false} />
        <img className={b('img')} src={logoImg.src} draggable={false} />
        <img className={b('img')} src={logoImg.src} draggable={false} />
        <img className={b('img')} src={logoImg.src} draggable={false} />
      </Carousel>;
    </div>
  );
}
