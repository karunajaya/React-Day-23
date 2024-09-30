import React from "react";


function Header() {
  return (
    <header className="bg-light">
      <div className="container-fluid d-flex justify-content-between align-items-center py-3">
        <a href="/" className="navbar-brand">Start Bootstrap</a>
        <nav>
          <a href="/" className="me-3 text-dark text-decoration-none">Home</a>
          <a href="/" className="me-3 text-dark text-decoration-none">About</a>
          <div className="dropdown d-inline">
            <a
              href="/"
              className="text-dark text-decoration-none dropdown-toggle"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Shop
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><a className="dropdown-item" href="/">All Products</a></li>
              <li><a className="dropdown-item" href="/">Popular Items</a></li>
              <li><a className="dropdown-item" href="/">New Arrivals</a></li>
            </ul>
          </div>
        </nav>
        <div className="cart">
          <a href="/" className="btn btn-outline-dark">
            <i className="bi-cart-fill me-2"></i>
            Cart
            <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;

