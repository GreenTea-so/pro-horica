'use client'

import Carousel from 'react-multi-carousel';
import image1 from '@/app/images/reviews/image1.PNG';
import image2 from '@/app/images/reviews/image2.PNG';
import image3 from '@/app/images/reviews/image3.PNG';
import image4 from '@/app/images/reviews/image4.PNG';
import image5 from '@/app/images/reviews/image5.PNG';
import image6 from '@/app/images/reviews/image6.PNG';
import image7 from '@/app/images/reviews/image7.PNG';
import image8 from '@/app/images/reviews/image8.jpg';
import image9 from '@/app/images/reviews/image9.jpg';
import image10 from '@/app/images/reviews/image10.jpg';
import image11 from '@/app/images/reviews/image11.jpg';
import image12 from '@/app/images/reviews/image12.jpg';
import image13 from '@/app/images/reviews/image13.jpg';
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
    items: 1
  }
};

export default function Reviews() {
  return (
    <div className="my-5">
      <span className="title mb-4">Отзывы</span>
      <Carousel responsive={responsive} arrows={false} infinite={true}>
        <div className={b('item')}>
           <img className={b('img')} src={image1.src} draggable={false} />
        </div>
        <div className={b('item')}>
           <img className={b('img')} src={image2.src} draggable={false} />
        </div>
        <div className={b('item')}>
           <img className={b('img')} src={image3.src} draggable={false} />
        </div>
        <div className={b('item')}>
           <img className={b('img')} src={image4.src} draggable={false} />
        </div>
        <div className={b('item')}>
           <img className={b('img')} src={image5.src} draggable={false} />
        </div>
        <div className={b('item')}>
           <img className={b('img')} src={image6.src} draggable={false} />
        </div>
        <div className={b('item')}>
           <img className={b('img')} src={image7.src} draggable={false} />
        </div>
        <div className={b('item')}>
           <img className={b('img')} src={image8.src} draggable={false} />
        </div>
        <div className={b('item')}>
           <img className={b('img')} src={image9.src} draggable={false} />
        </div>
        <div className={b('item')}>
           <img className={b('img')} src={image10.src} draggable={false} />
        </div>
        <div className={b('item')}>
           <img className={b('img')} src={image11.src} draggable={false} />
        </div>
        <div className={b('item')}>
           <img className={b('img')} src={image12.src} draggable={false} />
        </div>
        <div className={b('item')}>
           <img className={b('img')} src={image13.src} draggable={false} />
        </div>
      </Carousel>;
    </div>
  );
}
