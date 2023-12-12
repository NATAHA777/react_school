import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Workarea from "./components/workarea/Workarea";
import Main from "./components/main/Main";
import Button from "./ui/button/Button";
import Card from "./ui/card/Card";
import Typography from "./ui/typography/Typography";
import LearnMore from "./ui/learnMore/LearnMore";
import ArrowLeftRight from "./ui/ArrowLeftRight/ArrowLeftRight";
import Teacher from "./ui/teachers/Teacher";
import MenuItem from "./ui/MenuItem/MenuItem";
import Input from "./ui/input/Input";
import Filter from "./ui/filter/Filter";
import { ReactSVG } from "react-svg";
import Nav from "./components/Nav";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages";

export default function App() {
  return <RouterProvider router={router} />;
  return (
    <div className="app">
      <Nav />
      <LearnMore>График проведения 2023 </LearnMore>
      <Card>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
        inventore facilis itaque doloremque reiciendis ducimus optio nihil porro
        dolore, vero sunt quibusdam voluptatem eligendi est atque nisi provident
        rem nemo?
      </Card>
      <Filter>Секции</Filter>
      <Input>Введите...</Input>
      <MenuItem
        icon={
          <ReactSVG src="external/arrow_left_right.svg" className={"w-6"} />
        }
      >
        Главная
      </MenuItem>
      <ArrowLeftRight direction={"left"}></ArrowLeftRight>
      <ArrowLeftRight direction={"right"}></ArrowLeftRight>

      <Button variant="secondary">Кнопка</Button>
      {/* <Button style={{ marginBottom: 5, backgroundColor: "#0000ff" }}>
        Другое
      </Button>
      
      <Typography variant="h1">Ткст</Typography>
      <Typography variant="h4">Ткст</Typography> */}
    </div>
  );
}
