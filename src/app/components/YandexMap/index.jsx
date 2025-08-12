'use client'

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import bem from "../../utils/bem";
import './index.scss';

const b = bem('yandex-map');

export default function YandexMap() {
  return (
    <div className="my-5">
      <span className="title mb-4">Филиалы в Москве и Сочи</span>
      <YMaps>
        <div>
          <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} height={550}>
            <Placemark geometry={[55.814750, 37.362711]} />
          </Map>
        </div>
      </YMaps>
    </div>
  );
}