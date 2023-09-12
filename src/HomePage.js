import React from 'react';

const HomePage = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h1>Welcome to Our Logistics Services</h1>
          <p>
            Providing reliable logistics solutions since 20XX. We specialize
            in delivering your goods on time, every time.
          </p>
          <p>
            Our team of experts is dedicated to ensuring the safe and efficient
            transportation of your cargo, no matter the size or destination.
          </p>
        </div>
        <div className="col-md-6 py-3">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Logistics Services"
            className="img-fluid rounded"
          />
        </div>
        <button className="btn btn-primary">Request a Quote</button>

      </div>
      <section className="bg-light py-5 mt-3 mb-3">
        <div className="container py-3">
          <div className="row">
            <div className="col-md-6">
              <h2>Client Testimonials</h2>
              <div className="testimonial">
              <p>"We have been using ImEx Cargo LLC's logistics services for years, and they have consistently exceeded our expectations. Their attention to detail and commitment to on-time delivery is remarkable. The team at ImEx Cargo has made our supply chain more efficient and cost-effective. We highly recommend their services."</p>
              <p className="author">- Jane Smith, Supply Chain Manager, ABC Corporation</p>
              <img src="client-photo.jpg" alt="Client Photo" className="client-photo" />
              <div className="rating">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9734;</span>
              </div>
              <p className="location">New York, USA</p>
              <p className="timestamp">Testimonial given on July 10, 20XX</p>
              </div>
            </div>
            <div className="col-md-6">
              <h2>Latest News</h2>
              <div className="news">
                <p><strong>July 15, 20XX</strong> - We've expanded our services to new regions!</p>
                <p><strong>June 30, 20XX</strong> - Celebrating our 10th anniversary!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dark text-light py-3">
        <div className="container text-center">
          &copy; 20XX Company Name. All rights reserved.
        </div>
      </footer>

      
    </div>

    
  );
};

export default HomePage;

