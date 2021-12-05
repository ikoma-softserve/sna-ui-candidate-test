import { useState, useCallback, useEffect } from "react";

import { employeesData } from "../data";

export default function useEmployees() {
  const [employeesList, setEmployeesList] = useState([]);

  useEffect(() => {
    setEmployeesList(
      employeesData.map(({ name, jobTitle, tenure, gender }) => ({
        name,
        jobTitle,
        tenure,
        gender,
      }))
    );
  }, []);

  return { employeesList };
}
