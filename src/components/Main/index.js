import React, { useContext, useMemo } from "react";

import BarChart from "../BarChart";
import PieChart from "../PieChart";
import Table from "../Table";

import { EmployeesContext } from "../../context";

import "./style.css";

export default function Main() {
  const { employeesList } = useContext(EmployeesContext);

  const malesCount = useMemo(
    () =>
      employeesList.reduce((el, nexEl) => el + (nexEl.gender === "Male"), 0),
    [employeesList]
  );

  const femalesCount = useMemo(
    () =>
      employeesList.reduce((el, nexEl) => el + (nexEl.gender === "Female"), 0),
    [employeesList]
  );

  const CEOsCount = useMemo(
    () =>
      employeesList.reduce((el, nexEl) => el + (nexEl.jobTitle === "CEO"), 0),
    [employeesList]
  );

  const QAsCount = useMemo(
    () =>
      employeesList.reduce((el, nexEl) => el + (nexEl.jobTitle === "QA"), 0),
    [employeesList]
  );

  const developersCount = useMemo(
    () =>
      employeesList.reduce(
        (el, nexEl) => el + (nexEl.jobTitle === "Developer"),
        0
      ),
    [employeesList]
  );

  const marketingSpecialistCount = useMemo(
    () =>
      employeesList.reduce(
        (el, nexEl) => el + (nexEl.jobTitle === "Marketing Specialist"),
        0
      ),
    [employeesList]
  );

  const CFOsCount = useMemo(
    () =>
      employeesList.reduce((el, nexEl) => el + (nexEl.jobTitle === "CFO"), 0),
    [employeesList]
  );

  return (
    <main className={"App-main"}>
      <Table />

      <div className={"App-Charts"}>
        <PieChart
          marketingSpecialistCount={marketingSpecialistCount}
          developersCount={developersCount}
          QAsCount={QAsCount}
          CEOsCount={CEOsCount}
          CFOsCount={CFOsCount}
        />

        <BarChart malesCount={malesCount} femalesCount={femalesCount} />
      </div>
    </main>
  );
}
