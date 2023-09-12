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
        <div className="col-md-6">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Logistics Services"
            className="img-fluid rounded"
          />
        </div>
      </div>
      <section className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Client Testimonials</h2>
              <div className="testimonial">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod mi auctor magna efficitur, sed vestibulum lectus dictum.</p>
                <p className="author">- John Doe, CEO, Company XYZ</p>
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

