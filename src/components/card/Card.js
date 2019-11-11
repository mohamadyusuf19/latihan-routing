import React from "react";
import PropTypes from "prop-types";
import "./card.css";

const Card = ({ children }) => {
  return <div className="card">{children}</div>;
};

Card.propTypes = {
  children: PropTypes.any.isRequired
};

export default Card;
