import React, { useContext, useCallback } from "react";

import { EmployeesContext } from "../../context";

import "./style.css";

export default function Table() {
  const { employeesList } = useContext(EmployeesContext);

  const renderTableHeader = useCallback(() => {
    let header = Object.keys(employeesList?.[0] ?? {});

    return header?.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }, [employeesList]);

  const renderTableData = useCallback(
    () =>
      employeesList.map(({ name, jobTitle, tenure, gender }, idx) => (
        <tr key={idx}>
          <td>{name}</td>
          <td>{jobTitle}</td>
          <td>{tenure}</td>
          <td>{gender}</td>
        </tr>
      )),
    [employeesList]
  );

  return (
    <table className={"App-table"}>
      {employeesList && (
        <>
          <tr>{renderTableHeader()}</tr>
          <tbody>{renderTableData()}</tbody>
        </>
      )}
    </table>
  );
}
