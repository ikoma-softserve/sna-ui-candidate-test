import { useState, useEffect, useCallback } from "react";

import { employeesData } from "../data";

export default function useEmployees() {
  const [employeesList, setEmployeesList] = useState([]);

  const handleAddNewEmployee = useCallback(
    (data) => {
      setEmployeesList([...employeesList]);
      employeesList.push(data);
      setEmployeesList([...employeesList]);
    },
    [employeesList]
  );

  useEffect(() => {
    async function fetchData() {
      await setEmployeesList(
        employeesData.map(({ name, jobTitle, tenure, gender }) => ({
          name,
          jobTitle,
          tenure,
          gender,
        }))
      );
    }
    fetchData();
  }, []);

  return { employeesList, handleAddNewEmployee };
}
