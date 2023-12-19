import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function MapSchool() {
  const defaultState = {
    center: [55.93963092058016, 98.03228220237276],
    zoom: 15,
  };

  return (
    <YMaps>
      <Map defaultState={defaultState} width={"100%"} height={'300px'}>
        <Placemark geometry={[55.93963092058016, 98.03228220237276]} />
      </Map>
    </YMaps>
  );
}