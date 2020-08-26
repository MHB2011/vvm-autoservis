import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header">
      <div className="row m-0 mt-2">
        <div className="header-titles text-uppercase col ml-4">
          <h1>Automehanika</h1>
          <h1>Održavanje</h1>
          <h1>Servis</h1>
        </div>
        <div className="header-commands col d-flex mt-3">
          <div className="btn-and-label">
            <Link to="/lokacija" className="main-btn">
              <i className="fas fa-map-marker-alt fa-2x"></i>
            </Link>
            <p className="group-label">Lokacija</p>
          </div>
          <div className="btn-and-label">
            <Link to="/kontakt" className="main-btn main-btn-kontakt">
              <i className="fas fa-phone fa-2x"></i>
            </Link>
            <p className="group-label">Kontakt</p>
          </div>
          <div className="btn-and-label">
            <Link to="/o-nama" className="main-btn">
              <i className="fas fa-info fa-2x"></i>
            </Link>
            <p className="group-label">O Nama</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
