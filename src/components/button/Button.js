import React from "react";
import PropTypes from "prop-types";
import "./button.css";

const Button = ({ angka, warna, onClick }) => {
  return (
    <div className="button" style={{ background: warna }} onClick={onClick}>
      Button {angka}
    </div>
  );
};

Button.propTypes = {
  angka: PropTypes.number,
  warna: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  angka: 0,
  warna: "red"
};

export default Button;
