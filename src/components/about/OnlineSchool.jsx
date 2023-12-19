import React from 'react'
import Card from '../../ui/card/Card';

export default function OnlineSchool() {
  return (
    <Card className="w-full">
        <div className="title_online">Онлайн обучение</div>
        <div className="discription_online">
          «Онлайн-лицей» — это полноценная общеобразовательная школа с 1 по 11
          классы. Наши ученики занимаются в режиме online у себя дома, а
          качество образования остается на уровне.
        </div>
        <div className="button_learn_more">
          Узнать больше
          <img src="external/arrow_learn_more.svg" />
        </div>
    </Card>
  );
}
