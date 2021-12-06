import React from "react";

import "./App.css";

import { Main } from "./components";

import { EmployeesProvider } from "./context";

export default function App() {
  return (
    <div className="App">
      <EmployeesProvider>
        <header className="App-header">
          <script src="https://cdn.jsdelivr.net/npm/chart.js" />
        </header>
        <Main />

        <div className={"App-Charts"}>
          <div className={"App-BarChart"}>
            <canvas id="barChart" />
          </div>

          <div className={"App-PieChart"}>
            <canvas id="pieChart" />
          </div>
        </div>
      </EmployeesProvider>
    </div>
  );
}
