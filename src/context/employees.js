import { createContext, createElement } from "react";
import PropTypes from "prop-types";

import { useEmployees } from "../hooks";

export const EmployeesContext = createContext({});

export const EmployeesProvider = ({ children }) => {
  const { employeesList } = useEmployees();

  return createElement(
    EmployeesContext.Provider,
    { value: { employeesList: employeesList } },
    children
  );
};

EmployeesProvider.propTypes = {
  children: PropTypes.node,
};
