import React from "react";
import "./home.css";
import Header from "../../header/Header";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <Header />
      Home
      <Link to="/contact">masuk ke halaman contact</Link>
    </div>
  );
};
