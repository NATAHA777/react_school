import React from "react";
import './sidebar.css'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_logo">
        <img src="public/external/vectorsvg1081-hp4.svg" />
      </div>
      <div className="sidebar_menu main">
        <div>
          <div className="select"></div>
          <img src="public/external/main.svg" />
          <span>Главная</span>
        </div>
        <div>
          <div className="select"></div>
          <img src="public/external/news.svg" />
          <span>Новости</span>
        </div>
        <div className="active">
          <div className="select"></div>
          <img src="public/external/about_school.svg" />
          <span>О школе</span>
        </div>
        <div>
          <div className="select"></div>
          <img src="public/external/calender.svg" />
          <span>Календарь</span>
        </div>
        <div>
          <div className="select"></div>
          <img src="public/external/shedule.svg" />
          <span>Расписание</span>
        </div>
      </div>
      <div className="sidebar_menu">
        <div>
          <div className="select"></div>
          <img src="public/external/vectorsvg1081-nmn8.svg" />
          <span>Настройки</span>
        </div>
        <div>
          <div className="select"></div>
          <img src="public/external/feedback.svg" />
          <span>Обратная связь</span>
        </div>
      </div>
    </div>
  );
}
