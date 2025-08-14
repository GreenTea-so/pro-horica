'use client'

import { useState } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import bem from "../../utils/bem";
import './index.scss';

const b = bem('yandex-map');

export default function YandexMap() {
  
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(true);
  }

  return (
    <div className="my-5">
      <span className="title mb-4">Наш выставочный зал в Красногорске</span>
      <YMaps>
        <Map id="map" defaultState={{ center: [55.75, 37.57], zoom: 9 }} height={550}>
        <div className={b('vual', { click: isClick })} onClick={handleClick} />

          <Placemark geometry={[55.814750, 37.362711]} />
        </Map>
      </YMaps>
    </div>
  );
}