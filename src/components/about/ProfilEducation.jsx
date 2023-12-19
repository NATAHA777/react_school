import React from 'react'
import Card from '../../ui/card/Card';


export default function ProfilEducation() {
  return (
    <Card className="w-full">
        <div className="title_education">Профильное обучение</div>
        <div className="discription_education">
          Школа проводит обучение по трём основным профилям:
        </div>
        <div className="buttons">
          <button id="physics">Физика-математика</button>
          <button>Химия-биология</button>
          <button>Гуманитарные науки</button>
        </div>
    </Card>
  );
}
