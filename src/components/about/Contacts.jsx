import React from 'react'
import Card from '../../ui/card/Card'

export default function Contacts() {
  return (
    <Card className="w-full">
      <div className="title_contacts">Контакты</div>
      <div className="contact_list">
        <div>
          <img src="external/phone.svg" />
          <span>+7 954 143 83 83</span>
        </div>
        <div>
          <img src="external/mail.svg" />
          <span>sosh5taishet@mail.ru</span>
        </div>
      </div>
      <div className="social_network">
        <img src="external/vk.svg" />
        <img src="external/telegram.svg" />
        <img src="external/viber.svg" />
      </div>
    </Card>
  );
}
