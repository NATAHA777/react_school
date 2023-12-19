import React from 'react'
import Card from '../../ui/card/Card'

export default function FirstClass() {
  return (
    <Card className="w-full h-full">
          <div className="title_education">Приём в первый класс</div>
          <div className="discription_education">
            Для приёма ребёнка в первый класс необходимо заполнить анкету и
            отправить необходимые документы. Ждём вас и ваших детей 1 сентября!
          </div>
          <div className="button_black">
            <button>Заполнить анкету</button>
          </div>
    </Card>
  )
}
