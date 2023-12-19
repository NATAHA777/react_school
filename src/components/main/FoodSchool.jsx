import React from 'react'
import Card from '../../ui/card/Card'

export default function FoodSchool() {
  return (
    <Card className="w-full h-auto">
          <div className="title_education">Питание школьников</div>
          <div className="discription_education">
            Для приёма ребёнка в первый класс необходимо заполнить анкету и
            отправить необходимые документы. Ждём вас и ваших детей 1 сентября!
          </div>
          <div className="button_black">
            <button>Посмотреть меню</button>
          </div>
    </Card>
  )
}
