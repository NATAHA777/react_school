import React from 'react'
import Card from '../../ui/card/Card'
import MapSchool from '../../ui/MapSchool';


export default function Location() {
  return (
    <Card className="w-full">
      <div className="title_location">Местоположение</div>
      <div className="discription_location">
        Фактичесий адрес: 665009, Иркутская область, город Тайшет, микрорайон
        «Новый», 20.
      </div>
      <MapSchool></MapSchool>
    </Card>
  );
}
