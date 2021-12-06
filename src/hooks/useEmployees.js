import { useState, useEffect, useCallback } from "react";

import { employeesData } from "../data";

export default function useEmployees() {
  const [employeesList, setEmployeesList] = useState([]);

  const handleAddNewEmployee = useCallback(
    (data) => {
      employeesList.push(data);
      setEmployeesList([...employeesList]);

      console.log(employeesList);
    },
    [employeesList]
  );

  useEffect(async () => {
    await setEmployeesList(
      employeesData.map(({ name, jobTitle, tenure, gender }) => ({
        name,
        jobTitle,
        tenure,
        gender,
      }))
    );
  }, []);

  return { employeesList, handleAddNewEmployee };
}
