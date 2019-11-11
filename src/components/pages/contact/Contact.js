import React from "react";
import "./contact.css";
import { Link } from "react-router-dom";
import Header from "../../header/Header";

export const Contact = () => {
  return (
    <div>
      <Header />
      <Link to="/">masuk ke halaman home</Link>
    </div>
  );
};
