import React, { useCallback, useState } from "react";

import Button from "../Button";
import Form from "../Form";
import Table from "../Table";

import "./style.css";

export default function Main() {
  const [isNewEmployeeModeActive, setIsNewEmployeeModeActive] = useState(false);

  const handleOnClickAddEmployee = useCallback(() => {
    setIsNewEmployeeModeActive(!isNewEmployeeModeActive);
  }, [isNewEmployeeModeActive]);

  return (
    <main className={"App-main"}>
      <Table />

      <Button
        label={"Add employee"}
        onClick={handleOnClickAddEmployee}
        style={{ width: "120px", height: "40px", background: "white" }}
      />

      {isNewEmployeeModeActive && <Form />}
    </main>
  );
}
