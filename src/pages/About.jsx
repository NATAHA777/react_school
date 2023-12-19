import React, { useState } from "react";
import Info from "../components/about/info";
import Location from "../components/about/Location";
import ProfilEducation from "../components/about/ProfilEducation";
import OnlineSchool from "../components/about/OnlineSchool";
import Teachers from "../components/about/Teachers";
import Documents from "../components/about/Documents";
import Contacts from "../components/about/Contacts";

export default function About() {
  return ( <div className="grid grid-cols-3 auto-rows-auto gap-4 p-4 bg-slate-100">
    <div className="col-span-2">
      <Info/>
    </div>
    <div className="row-span-2">
      <Location />
    </div>
    <div >
      <ProfilEducation/>
    </div>
    <div>
      <OnlineSchool/>
    </div>
    <div className="col-span-3">
      <Teachers/>
    </div>
    <div  className="col-span-2">
      <Documents/>
    </div>
    <div>
      <Contacts/>
    </div>
  </div>)
}
