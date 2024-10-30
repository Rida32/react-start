import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="fashion">
        <div className=" m-3 px-2">
          <div className="d-flex justify-content-between align-items-center">
            <a className="logo">
              <span className="text-danger">Little</span> Fashion
            </a>
            <div className="nav-links d-flex align-items-center gap-3">
              <a>Home</a>
              <a href="#">Story</a>
              <a>Products</a>
              <div className="dropdown">
                <a href="#" className="dropbtn">
                  FAQs
                </a>
                <div className="dropdown-content">
                  <a href="#faq1">What is your return policy?</a>
                  <a href="#faq2">How do I track my order?</a>
                  <a href="#faq3">Can I purchase items in bulk?</a>
                </div>
              </div>
              <a href="#">Contact</a>
            </div>
            <div className="watch d-flex">
              <a href="#" className="me-2">
                <i className="fas fa-shopping-cart"></i> Cart
              </a>
              <a href="#">
                <i className="fas fa-heart"></i> Wishlist
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
