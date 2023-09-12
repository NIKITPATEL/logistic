import React from 'react';

const ServicesPage = () => {
  return (
    <div className="container mt-5">
      <h1>Our Services</h1>
      <p>
        ImEx Cargo LLC is a leading logistics company dedicated to providing
        top-notch transportation and delivery solutions. We offer a wide range
        of logistics services to meet your needs.
      </p>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Service 1"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Express Shipping</h5>
              <p className="card-text">
                Our express shipping services ensure your packages reach their
                destination quickly and securely.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Service 2"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Warehousing</h5>
              <p className="card-text">
                Our state-of-the-art warehouses provide secure storage for your
                goods.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Service 3"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Customs Clearance</h5>
              <p className="card-text">
                We handle all customs clearance processes to ensure smooth
                international shipments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
