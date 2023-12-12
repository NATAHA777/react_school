import React, { useState } from "react";

export default function About() {
  return (
    <div className="workarea">
    <div className="heder">
      <div className="search-wrapper">
        <form action="" method="post" className="search">
          <input type="search" name="" placeholder="Поиск..." className="input" />
          <input type="submit" name="" value="" className="submit" />
        </form>
      </div>
      <div className="notice_and_sign_in">
        <div className="notice">
          <button>
              <img src="external/notice.svg" alt="уведомления"/>
          </button>
        </div>
        <div className="sign_in">
        <button>Войти</button>
        </div>
      </div>
  </div>
  <div className="content">
    <div className="general">
      <div className="title_general">
      Основные сведения
      </div>
      <div className="discription_general">
        Школа была основана в 1986 году. Собственное здание школы достраивалось с августа по декабрь 1990 года. В январе 1991 года была открыта первая очередь здания школы № 5. В сентябре 2020 года школа была реорганизована путем присоединения МБОУ СОШ № 14. Наши выпускники поступают в такие вузы, как КГТУ, РАНХиГС, а также в МГУ и СПБГУ
      </div>
    </div>
    <div className="location">
      <div className="title_location">
        Местоположение
      </div>
      <div className="discription_location">
          Фактичесий адрес: 665009, Иркутская область, город Тайшет, микрорайон «Новый», 20.
      </div>
    </div>
    <div className="profil_education">
      <div className="title_education">
        Профильное обучение
      </div>
      <div className="discription_education">
        Школа проводит обучение по трём основным профилям:
      </div>
      <div className="buttons">
          <button id="physics">Физика-математика</button>
          <button>Химия-биология</button>
          <button>Гуманитарные науки</button>
      </div>
    </div>
    <div className="onlice_school">
      <div className="title_online">
        Дистанционное обучение
      </div>
      <div className="discription_online">
        «Онлайн-лицей» — это полноценная общеобразовательная школа с 1 по 11 классы. Наши ученики занимаются в режиме online у себя дома, а качество образования остается на уровне ведущих школ Санкт-Петербурга и Москвы. Домашняя онлайн-школа — это хороший вариант индивидуального подхода к каждому ученику. Все дети разные, и у всех свои способности.
      </div>
      <div className="button_learn_more">
        Узнать больше
        <img src="external/arrow_learn_more.svg" />
      </div>
    </div>
    <div className="teachers">
      <div className="title_teachers">Педагогический состав</div>
      <div className="teacher_list">
        <div>
          <img src="external/director.png" />
          <div className="teacher_name">Александрова <br /> Любовь Васильевна</div>
          <div className="degree">Директор школы</div>
        </div>
        <div>
          <img src="external/director.png" />
          <div className="teacher_name">Александрова <br /> Любовь Васильевна</div>
          <div className="degree">Директор школы</div>
        </div>
        <div>
          <img src="external/director.png" />
          <div className="teacher_name">Александрова <br /> Любовь Васильевна</div>
          <div className="degree">Директор школы</div>
        </div>
        <div>
          <img src="external/director.png" />
          <div className="teacher_name">Александрова <br /> Любовь Васильевна</div>
          <div className="degree">Директор школы</div>
        </div>
        <div>
          <img src="external/director.png" />
          <div className="teacher_name">Александрова <br /> Любовь Васильевна</div>
          <div className="degree">Директор школы</div>
        </div>
        <div>
          <img src="external/director.png" />
          <div className="teacher_name">Александрова <br /> Любовь Васильевна</div>
          <div className="degree">Директор школы</div>
        </div>
      </div>
      <div className="buttons_arrow">
        <div className="button_left">
          <button>
              <img src="external/button_list_none_active.svg" alt="назад"/>
          </button>
        </div>
        <div className="button_right">
          <button>
              <img src="external/button_list_active.svg" alt="далее"/>
          </button>
        </div>
      </div>
    </div>
    <div className="documents">
      <div className="title_documents">
        Документы
      </div>
      <div className="documets_list">
        <div>
          <div>Лицензия на осущещствление образовательной деятельности</div>
          <img src="external/arrow_learn_more.svg" />
        </div>
        <div>
          <div>Устав образовательной организации</div>
          <img src="external/arrow_learn_more.svg" />
        </div>
        <div>
          <div>Правила внутреннего трудового распорядка</div>
          <img src="external/arrow_learn_more.svg" />
        </div>
        <div>
          <div>Отчёт о результатах самообследования</div>
          <img src="external/arrow_learn_more.svg" />
        </div>
        <div>
          <div>Свидетельство о государственной аккридетации</div>
          <img src="external/arrow_learn_more.svg" />
        </div>
      </div>
    </div>
    <div className="contacts">
      <div className="title_contacts">
        Контакты
      </div>
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
          <img src="external/vk.svg"/>
          <img src="external/telegram.svg"/> 
          <img src="external/viber.svg"/>
        </div>
    </div>
  </div>
  </div>
  );
}
