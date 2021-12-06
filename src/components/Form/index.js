import React, { useState, useCallback, useContext } from "react";

import { EmployeesContext } from "../../context";

export default function Form() {
  const { employeesList, handleAddNewEmployee } = useContext(EmployeesContext);

  const [newEmployeeName, setNewEmployeeName] = useState("");
  const [newEmployeeJob, setNewEmployeeJob] = useState("");
  const [newEmployeeTenure, setNewEmployeeTenure] = useState(undefined);
  const [newEmployeeGender, setNewEmployeeGender] = useState("male");

  const handleOnSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      handleAddNewEmployee({
        name: newEmployeeName,
        jobTitle: newEmployeeJob,
        tenure: newEmployeeTenure,
        gender: newEmployeeGender,
      });
    },
    [newEmployeeName, newEmployeeGender, newEmployeeTenure, newEmployeeJob]
  );

  return (
    <form onSubmit={handleOnSubmitForm} className={"App-form"}>
      <input
        type={"text"}
        placeholder={"Name"}
        value={newEmployeeName}
        onChange={(e) => setNewEmployeeName(e.target.value)}
      />
      <input
        type={"text"}
        placeholder={"Job title"}
        value={newEmployeeJob}
        onChange={(e) => setNewEmployeeJob(e.target.value)}
      />
      <input
        type={"number"}
        placeholder={"tenure"}
        value={newEmployeeTenure}
        onChange={(e) => setNewEmployeeTenure(e.target.value)}
      />
      <input
        type={"option"}
        placeholder={"Gender"}
        value={newEmployeeGender}
        onChange={(e) => setNewEmployeeGender(e.target.value)}
      />
      <input type={"submit"} value={"Add"} onSubmit={handleOnSubmitForm} />
    </form>
  );
}
