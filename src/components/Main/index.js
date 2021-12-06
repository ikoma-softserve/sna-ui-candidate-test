import React, { useContext, useMemo } from "react";

import BarChart from "../BarChart";
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

  return (
    <main className={"App-main"}>
      <Table />

      {malesCount && femalesCount && (
        <BarChart malesCount={malesCount} femalesCount={femalesCount} />
      )}

      <div>
        <canvas id="myChart" />
      </div>
    </main>
  );
}
