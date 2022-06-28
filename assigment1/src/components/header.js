import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
function Header() {
  const [q, setQ] = useState("");
  return (
    <Navbar dark color="primary" expand="md">
      <div className="container">
        <div className="row">
          <NavbarBrand href="/home">Ứng dụng quản lý nhân sự</NavbarBrand>
          <Link className="nav-link text-dark" to="/staff">
            <span className="fa fa-users fa-lg"></span> Nhân Viên
          </Link>
          <Link className="nav-link text-dark" to="/departments">
            <span className="fa fa-address-card fa-lg"></span> Phòng Ban
          </Link>
          <Link className="nav-link text-dark" to="/salary">
            <span className="fa fa-money fa-lg"></span> Bảng lương
          </Link>
          <div className="form-outline">
            <input
              id="search-input"
              type="search"
              className="form-control"
              placeholder="tìm nhân viên"
              onChange={(e) => setQ(e.target.value)}
            />
          </div>
          <Link to={`/search/${q}`}>
            <button
              id="search-button"
              type="button"
              className="btn btn-primary"
              // onClick={handleSearch}
            >
              <i className="fa fa-search fa-lg"></i>
            </button>
          </Link>
        </div>
      </div>
    </Navbar>
  );
}

export default Header;
