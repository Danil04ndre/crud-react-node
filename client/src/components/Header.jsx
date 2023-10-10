import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/Header.css";
const Header = () => {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  }
  return (
    <div className="width">
      <div className="content-header">
        <div className="logo">
          <h1>CRUD</h1>
        </div>
        <div className={active ? "links active" : "links"}>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={() => setActive(false)}
            to="/"
          >
            Registros
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={() => setActive(false)}
            to="add-register"
          >
            Agregar registro
          </NavLink>
          <a className="return" href="#">
            No hace nada
          </a>
        </div>
        <i className="fa-sharp fa-solid fa-bars bars" onClick={handleActive}></i>
      </div>
    </div>
  );
};

export default Header;
