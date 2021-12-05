import React from "react";

import "./App.css";

import { Main } from "./components";

import { EmployeesProvider } from "./context";

export default function App() {
  return (
    <div className="App">
      <EmployeesProvider>
        <header className="App-header" />
        <Main />
      </EmployeesProvider>
    </div>
  );
}
