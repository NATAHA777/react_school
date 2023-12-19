import React, { useState } from "react";
import ShortInfo from "../components/main/ShortInfo";
import LastNews from "../components/main/LastNews";
import ExtraLessons from "../components/main/ExtraLessons";
import FirstClass from "../components/main/FirstClass";
import FoodSchool from "../components/main/FoodSchool";

export default function Main() {
  return ( <div className="grid grid-cols-3 grid-rows-3 gap-4 p-4 bg-slate-100">
    <div className="col-span-3">
      <ShortInfo />
    </div>
    <div className="col-span-2">
      <LastNews/>
    </div>
    <div className="row-span-2">
      <ExtraLessons/>
    </div>
    <div>
      <FirstClass/>
    </div>
    <div>
      <FoodSchool/>
    </div>
  </div>)
}
