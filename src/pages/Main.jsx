import React from "react";

export default function Main() {
  return (
    <div className={styles.workarea}>
      <div className="heder">
        <div className="search-wrapper">
          <form action="" method="post" className="search">
            <input
              type="search"
              name=""
              placeholder="Поиск..."
              className="input"
            />
            <input type="submit" name="" value="" className="submit" />
          </form>
        </div>
        <div className="notice_and_sign_in">
          <div className="notice">
            <button>
              <img src="external/notice.svg" alt="уведомления" />
            </button>
          </div>
          <div className="sign_in">
            <button>Войти</button>
          </div>
        </div>
      </div>
      <div className="glavnay_info">
        <div className="short_info">
          <div className="discription_and_elzhur">
            <div className="title_general">МКОУ СОШ № 5 города Тайшет</div>
            <div className="discription_general">
              Наша школа предлагает качественное образование, заботу о студентах
              и поддержку учителей, чтобы обеспечить непрерывное стремление к
              знаниям и достижению выдающихся результатов.
            </div>
            <div className="button">
              <button>Электронный журнал</button>
            </div>
          </div>
          <div className="image_globus">
            <img src="external/Preschool education.png" />
          </div>
        </div>
        <div className="last_news">
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
        </div>

        <div className="extra_lessons">
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
        </div>
        <div className="first_className">
          <div className="title_education">Приём в первый класс</div>
          <div className="discription_education">
            Для приёма ребёнка в первый класс необходимо заполнить анкету и
            отправить необходимые документы. Ждём вас и ваших детей 1 сентября!
          </div>
          <div className="button_black">
            <button>Заполнить анкету</button>
          </div>
        </div>
        <div className="food_school">
          <div className="title_education">Питание школьников</div>
          <div className="discription_education">
            Для приёма ребёнка в первый класс необходимо заполнить анкету и
            отправить необходимые документы. Ждём вас и ваших детей 1 сентября!
          </div>
          <div className="button_black">
            <button>Посмотреть меню</button>
          </div>
        </div>
      </div>
    </div>
  );
}
