


import React from "react";
import logo from "/Users/miguelgomezcarmona/Desktop/IoT_SmartHouse/src/assets/logo.png";
import "./Header.css";

export const Header: React.FC = () => {
  return (
    <header>
      <div className="w-100 bg-dark py-3">
        <div className="container">
          <div className="row align-items-center">

            {/* LOGO */}
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3 mb-sm-0 d-flex align-items-center">
              <a href="/" className="d-flex align-items-center">
                <img
                  src={logo}
                  alt="Logo Smart House"
                  className="img-fluid header-logo"
                  style={{ height: 80, width: "auto" }} 
                />
              </a>
            </div>

            {/* LINKS DE NAVEGACIÓN */}
            <div className="col-lg-9 col-md-8 col-sm-6 d-flex justify-content-end">
              <nav className="d-flex gap-4 align-items-center header-nav">
                <a href="/home" className="header-link">
                  Home
                </a>
                <a href="/services" className="header-link">
                  Services
                </a>
                <a href="/contact" className="header-link">
                  Contact
                </a>

                {/* AGREGADO: LINK A USER */}
                <a href="/user" className="header-link">
                  Profile
                </a>
              </nav>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

