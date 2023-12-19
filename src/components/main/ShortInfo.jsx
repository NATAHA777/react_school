import React from 'react'
import Card from '../../ui/card/Card'

export default function ShortInfo() {
  return (
    <Card className="w-full h-full flex"> 
      <div className="discription_and_elzhur">
        <div className="title_general">МКОУ СОШ № 5 города Тайшет</div>
        <div className="discription_general">
          Наша школа предлагает качественное образование, заботу о студентах и
          поддержку учителей, чтобы обеспечить непрерывное стремление к знаниям
          и достижению выдающихся результатов.
        </div>
        <div className="button">
          <button>Электронный журнал</button>
        </div>
      </div>
      <div className="image_globus h-full">
        <img src="external/Preschool education.png" />
      </div>
    </Card>
  );
}
