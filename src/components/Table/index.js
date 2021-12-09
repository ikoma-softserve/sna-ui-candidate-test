import React, { useContext, useCallback, useState, useMemo } from "react";

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

  const [sortConfig, setSortConfig] = useState({
    fieldToSort: "name",
    direction: "ascending",
  });

  const sortedList = useMemo(() => {
    let sortedItems = [...employeesList];

    sortedItems.sort((el, nextEl) => {
      if (el[sortConfig.fieldToSort] < nextEl[sortConfig.fieldToSort]) {
        // want to inform about weird issue with the different tenure values
        return sortConfig.direction === "ascending" ? -1 : 1;
      } else if (el[sortConfig.fieldToSort] > nextEl[sortConfig.fieldToSort]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      } else {
        return 0;
      }
    });

    return sortedItems;
  }, [employeesList, sortConfig]);

  const toggleListSorting = useCallback(
    (fieldToSort) => {
      let direction = "ascending";
      if (
        sortConfig.fieldToSort === fieldToSort &&
        sortConfig.direction === "ascending"
      ) {
        direction = "descending";
      }
      setSortConfig({ fieldToSort, direction });
    },
    [sortedList]
  );

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

  const renderTableHeader = useCallback(() => {
    let header = Object.keys(employeesList?.[0] ?? {});

    return header?.map((el, index) => (
      <th onClick={() => toggleListSorting(el)} key={index}>
        {el.toUpperCase()}
      </th>
    ));
  }, [employeesList, toggleListSorting]);

  const renderTableData = useCallback(() => {
    const tableList = sortedList.map(
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
  }, [sortedList, newEmployeeTdArr]);

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
        <thead>
          <tr>{renderTableHeader()}</tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
      </table>
    </>
  );
}
