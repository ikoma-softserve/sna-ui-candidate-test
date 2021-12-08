import React, { useContext, useCallback, useState } from "react";

import { EmployeesContext } from "../../context";

import "./style.css";
import Button from "../Button";

export default function Table() {
  const { employeesList, handleAddNewEmployee } = useContext(EmployeesContext);

  const [newEmployeeData, setNewEmployeeData] = useState({
    name: "",
    job: "",
    tenure: undefined,
    gender: "male",
  });

  const handleOnClickAddEmployee = useCallback(() => {
    handleAddNewEmployee({
      name: newEmployeeData.name,
      jobTitle: newEmployeeData.job,
      tenure: newEmployeeData.tenure,
      gender: newEmployeeData.gender,
    });
  }, [newEmployeeData]);

  const inputHandler = (e) => {
    const val = e.target.value;

    setNewEmployeeData({ ...newEmployeeData, [e.target.name]: val });
  };

  const newEmployeeSet = [
    {
      handler: inputHandler,
      placeholder: "Name",
      type: "text",
      name: "name",
    },
    {
      handler: inputHandler,
      placeholder: "Job",
      type: "text",
      name: "job",
    },
    {
      handler: inputHandler,
      placeholder: "Tenure",
      type: "number",
      name: "tenure",
    },
    {
      handler: inputHandler,
      placeholder: "Gender",
      type: "option",
      name: "gender",
    },
  ];

  const newEmployeeTdArr = newEmployeeSet.map(
    ({ handler, placeholder, type, value, name }, idx) => {
      return (
        <td key={idx ** 2}>
          <input
            key={idx ** 3}
            type={type}
            onChange={handler}
            placeholder={placeholder}
            value={value}
            name={name}
          />
        </td>
      );
    }
  );

  const renderTableData = useCallback(() => {
    const tableList = employeesList.map(
      ({ name, jobTitle, tenure, gender }, idx) => (
        <tr key={idx}>
          <td>{name}</td>
          <td>{jobTitle}</td>
          <td>{tenure}</td>
          <td>{gender}</td>
        </tr>
      )
    );

    tableList.push(<tr key={"set"}>{newEmployeeTdArr}</tr>);

    return tableList;
  }, [employeesList]);

  const renderTableHeader = useCallback(() => {
    let header = Object.keys(employeesList?.[0] ?? {});

    return header?.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }, [employeesList]);

  return (
    <>
      <Button
        label={"Add employee"}
        onClick={handleOnClickAddEmployee}
        style={{
          width: "120px",
          height: "40px",
          background: "#8096c2",
          marginLeft: "auto",
          marginBottom: "40px",
        }}
      />

      <table className={"App-table"}>
        {employeesList && (
          <>
            <tr>{renderTableHeader()}</tr>
            <tbody>{renderTableData()}</tbody>
          </>
        )}
      </table>
    </>
  );
}
