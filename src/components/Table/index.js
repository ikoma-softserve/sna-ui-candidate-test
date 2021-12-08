import React, { useContext, useCallback, useState } from "react";

import { EmployeesContext } from "../../context";

import Button from "../Button";

import { jobOptions, genderOptions } from "../../config";

import "./style.css";

export default function Table() {
  const { employeesList, handleAddNewEmployee } = useContext(EmployeesContext);

  const [newEmployeeData, setNewEmployeeData] = useState({
    name: "",
    jobTitle: "",
    tenure: 0,
    gender: "",
  });

  const handleOnClickAddEmployee = useCallback(() => {
    handleAddNewEmployee({
      name: newEmployeeData.name,
      jobTitle: newEmployeeData.jobTitle,
      tenure: newEmployeeData.tenure,
      gender: newEmployeeData.gender,
    });
  }, [newEmployeeData, handleAddNewEmployee]);

  const inputHandler = useCallback(
    (e) => {
      const { name, value } = e.target;

      setNewEmployeeData({
        ...newEmployeeData,
        [name]: value,
      });
    },
    [newEmployeeData]
  );

  const newEmployeeSet = [
    {
      handler: inputHandler,
      type: "text",
      name: "name",
    },
    {
      handler: inputHandler,
      type: "text",
      name: "jobTitle",
      options: jobOptions,
    },
    {
      handler: inputHandler,
      type: "number",
      name: "tenure",
    },
    {
      handler: inputHandler,
      type: "select",
      name: "gender",
      options: genderOptions,
    },
  ];

  const newEmployeeTdArr = newEmployeeSet.map(
    ({ handler, placeholder, type, value, name, isSelect, options }, idx) => (
      <td key={idx ** 2}>
        {options ? (
          <select name={name} value={value} onChange={inputHandler}>
            {options.map((el, idx) => (
              <option key={idx} value={el}>
                {el}
              </option>
            ))}
          </select>
        ) : (
          <input
            key={idx ** 3}
            type={type}
            onChange={handler}
            placeholder={placeholder}
            value={value}
            name={name}
          />
        )}
      </td>
    )
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
  }, [employeesList, newEmployeeTdArr]);

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
