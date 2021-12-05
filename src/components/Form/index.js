import React, { useState, useCallback } from "react";

export default function Form() {
  const [newEmployeeName, setNewEmployeeName] = useState("");
  const [newEmployeeJob, setNewEmployeeJob] = useState("");
  const [newEmployeeTenure, setNewEmployeeTenure] = useState(undefined);
  const [newEmployeeGender, setNewEmployeeGender] = useState("male");

  const handleOnSubmitForm = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <form onSubmit={handleOnSubmitForm} className={"App-form"}>
      <input
        type={"text"}
        value={newEmployeeName}
        onChange={(e) => setNewEmployeeName(e.target.value)}
      />
      <input
        type={"text"}
        value={newEmployeeJob}
        onChange={(e) => setNewEmployeeJob(e.target.value)}
      />
      <input
        type={"number"}
        value={newEmployeeTenure}
        onChange={(e) => setNewEmployeeTenure(e.target.value)}
      />
      <input
        type={"option"}
        value={newEmployeeGender}
        onChange={(e) => setNewEmployeeGender(e.target.value)}
      />
    </form>
  );
}
