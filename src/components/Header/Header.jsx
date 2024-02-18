import { Link, NavLink } from "react-router-dom";
import NavLinks from "./NavLink";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function Header() {
  const [t, i18n] = useTranslation()
  const [lu,setLu]=useState('en')
  return (

    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom border-1 border-primary">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1" to="/">Tax Hub</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse align-items-center" id="navbarSupportedContent">
            <NavLinks />
            <ul className="buttons   d-flex justify-lg-content-between align-items-center m-0">
              {1 ? <li className="p-2 py-3">
                <div className="dropdown">
                  <div className="p-3 mx-2  dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i className="fas fa-user mx-2"></i>
                    <i className="fas fa-bars"></i>
                  </div>
                  <ul

                    className="dropdown-menu "
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <li>
                      <Link className="dropdown-item" to="/setting">
                        Setting
                      </Link>
                    </li> <li>
                      {1 ? <Link className="dropdown-item" to="/Admin">
                        AdminPanl
                      </Link> : <Link className="dropdown-item" to="/user">
                        Papers
                      </Link>}
                    </li> <li>
                      <p className="dropdown-item m-0" onClick={() => 0}>
                        Logout
                      </p>
                    </li>
                  </ul>
                </div>
              </li> : <>
                <li className="p-2 py-3">
                  <button className="btn btn-primary ">Login</button>
                </li>
                <li className="p-2 py-3">
                  <button className="btn btn-outline-primary">Signup</button>
                </li>
              </>
              }
              <li className="p-2 py-3">
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fas fa-globe"></i> {lu.toUpperCase()}
                  </button>
                  <ul
                    className="dropdown-menu "
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#" onClick={() => {
                        i18n.changeLanguage('en')
                        setLu('en')
                      }}>
                        English
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#" onClick={() => {
                        i18n.changeLanguage('ar')
                        setLu('ar')
                      }}>
                        Arbic
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
