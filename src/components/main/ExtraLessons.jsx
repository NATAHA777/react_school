import React from 'react'
import Card from '../../ui/card/Card'

export default function ExtraLessons() {
  return (
    <Card className="w-full h-full"> 
          <div className="title_education">Дополнительные занятия</div>
          <div className="sections_filter">
            <button onclick="myFunction()" className="dropbtn">
              Секции
            </button>
            <div id="myDropdown" className="dropdown-content">
              <a href="#about">Секции</a>
              <a href="#base">Кружки</a>
            </div>
          </div>
          <div className="sections">
            <div className="volleybal">
              <div className="sex_and_age">
                <div className="sex">Волейбол девушки</div>
                <div className="age">14-16 лет</div>
              </div>
              <div className="day_and_time">
                <div className="day">пн,вт,ср</div>
                <div className="time">1,5 часа</div>
              </div>
            </div>
            <div className="volleybal">
              <div className="sex_and_age">
                <div className="sex">Волейбол девушки</div>
                <div className="age">14-16 лет</div>
              </div>
              <div className="day_and_time">
                <div className="day">пн,вт,ср</div>
                <div className="time">1,5 часа</div>
              </div>
            </div>
            <div className="volleybal">
              <div className="sex_and_age">
                <div className="sex">Волейбол девушки</div>
                <div className="age">14-16 лет</div>
              </div>
              <div className="day_and_time">
                <div className="day">пн,вт,ср</div>
                <div className="time">1,5 часа</div>
              </div>
            </div>
            <div className="volleybal">
              <div className="sex_and_age">
                <div className="sex">Волейбол девушки</div>
                <div className="age">14-16 лет</div>
              </div>
              <div className="day_and_time">
                <div className="day">пн,вт,ср</div>
                <div className="time">1,5 часа</div>
              </div>
            </div>
            <div className="volleybal">
              <div className="sex_and_age">
                <div className="sex">Волейбол девушки</div>
                <div className="age">14-16 лет</div>
              </div>
              <div className="day_and_time">
                <div className="day">пн,вт,ср</div>
                <div className="time">1,5 часа</div>
              </div>
            </div>
          </div>
          <div className="button_learn_more">
            Узнать больше
            <img src="external/arrow_learn_more.svg" />
          </div>

    </Card>
  )
}
