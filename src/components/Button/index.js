import React from "react";
import PropTypes from "prop-types";

export default function Button({ label, onClick, style, classes }) {
  return (
    <button onClick={onClick} style={style} className={classes}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  onClick: PropTypes.func,
  style: PropTypes.shape({}),
  classes: PropTypes.string,
};
