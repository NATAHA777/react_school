import React from "react";
import NavMenuItem from "../ui/NavMenuItem";
import { ReactSVG } from "react-svg";
import { useLocation } from "react-router-dom";

export default function Nav() {
  const { pathname } = useLocation();

  return (
    <div className="sm:w-64 lg:w-68 flex flex-col gap-2 border-2 bg-zinc-800 rounded-r-2xl h-screen border-none pt-5">
      <ReactSVG
        src="external/logo.svg"
        style={{ paddingLeft: 28, paddingBottom: 12 }}
      />
      <NavMenuItem 
        icon={<ReactSVG src="external/main.svg" />}
        to="/"
        active={pathname.includes("/")}>
        Главная
      </NavMenuItem>
      <NavMenuItem
        icon={<ReactSVG src="external/news.svg" />}
        to="news"
        active={pathname.includes("news")}
      >
        Новости
      </NavMenuItem>
      <NavMenuItem
        icon={<ReactSVG src="external/about_school.svg" />}
        to="about"
        active={pathname.includes("about")}
      >
        О школе
      </NavMenuItem>
      <NavMenuItem 
        icon={<ReactSVG src="external/calender.svg" />}
        to="calender"
        active={pathname.includes("calender")}
      >
        Календарь
      </NavMenuItem>
      <NavMenuItem 
        icon={<ReactSVG src="external/shedule.svg" />}
        to="shedule"
        active={pathname.includes("shedule")}
      >
        Расписание
      </NavMenuItem>
      <NavMenuItem 
        icon={<ReactSVG src="external/elzhur.svg" />}
        to="elzhur"
        active={pathname.includes("elzhur")}
        >
        Эл. журнал
      </NavMenuItem>
      <NavMenuItem 
        icon={<ReactSVG src="external/vectorsvg1081-nmn8.svg" />}
        to="settings"
        active={pathname.includes("settings")}
      >
        Настройки
      </NavMenuItem>
      <NavMenuItem
        icon={<ReactSVG src="external/feedback.svg" />}
        style={{ marginBottom: 2 }}
        to="feedback"
        active={pathname.includes("feedback")}
      >
        Обратная связь
      </NavMenuItem>
    </div>
  );
}
