import React from 'react'
import Card from '../../ui/card/Card'


export default function LastNews() {
  return (
    <Card className="w-full h-full">
        <div className="title_education">
          Государственная итоговая аттестация
        </div>
        <div className="discription_education">
          Дорогие выпускники! Поздравляем вас с окончанием школы и желаем
          успешной сдачи экзаменов!
        </div>
        <div className="button_about_gia">
          Государственная итоговая аттестация в 2023 году для 9 класса
          <img src="external/arrow_learn_more.svg" />
        </div>
        <div className="button_about_gia">
          График проведения единого государственного экзамена в 2023 году
          <img src="external/arrow_learn_more.svg" />
        </div>
    </Card>
  );
}
