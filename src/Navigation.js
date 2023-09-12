import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-expand-md navbar-dark bg-dark">
      <div className="container"> {/* Added container for padding */}
        <Link className="navbar-brand" to="/">
          ImEx Cargo LLC
        </Link>
        <button
          className="navbar-toggler"
          type='button'
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ml-3"> {/* Added ml-3 class for spacing */}
              <Link to="/logistic/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item ml-3"> {/* Added ml-3 class for spacing */}
              <Link to="/tracking" className="nav-link">
                Tracking
              </Link>
            </li>
            <li className="nav-item ml-3"> {/* Added ml-3 class for spacing */}
              <Link to="/services" className="nav-link">
                Services
              </Link>
            </li>
            <li className="nav-item ml-3"> {/* Added ml-3 class for spacing */}
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
