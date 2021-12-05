import React, { useCallback, useState } from "react";

import "./style.css";

import { Button } from "../index";
import Form from "../Form";

export default function Main() {
  const [isNewEmployeeModeActive, setIsNewEmployeeModeActive] = useState(false);

  const handleOnClickAddEmployee = useCallback(() => {
    setIsNewEmployeeModeActive(!isNewEmployeeModeActive);
  }, [isNewEmployeeModeActive]);

  return (
    <main className={"App-main"}>
      <Button
        label={"Add employee"}
        onClick={handleOnClickAddEmployee}
        style={{ width: "120px", height: "40px", background: "white" }}
      />

      {isNewEmployeeModeActive && <Form />}
    </main>
  );
}
