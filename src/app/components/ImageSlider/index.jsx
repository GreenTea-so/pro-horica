
"use client"

import { useState } from "react";
import bem from "../../utils/bem";
import './index.scss';

const b = bem('image-slider');

export default function ImageSlider(props) {
  const { list, className } = props;

  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className={`d-flex flex-column gap-3 ${className}`}>
      <div className={b('block')}>
        <img className={b('main-img')} src={list[selectedImage]} />
        {selectedImage > 0 &&
          <button 
            style={{ top: '48%'}}
            aria-label="Go to previous slide"
            className="react-multiple-carousel__arrow react-multiple-carousel__arrow--left"
            type="button"
            onClick={() => setSelectedImage(selectedImage - 1)}
          />
        }
        {selectedImage < list.length - 1 &&
          <button 
            style={{ top: '48%'}}
            aria-label="Go to next slide"
            className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right"
            type="button"
            onClick={() => setSelectedImage(selectedImage + 1)}
          />
        }
      </div>
      <div className="d-flex gap-3 overflow-auto">
        {list.map((item, index) => (
          <img key={index} className={b('img', { selected: index === selectedImage })} src={item} onClick={() => setSelectedImage(index)} />
        ))}
      </div>
    </div>
  );
}
