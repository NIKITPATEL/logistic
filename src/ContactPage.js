import React, { useState } from 'react';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Implement your contact form submission logic here
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h1>Contact Us</h1>
          <form onSubmit={handleContactSubmit}>
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mb-2">
              <textarea
                className="form-control"
                placeholder="Your Message"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary mb-4 ">Submit</button>
          </form>
        </div>
        <div className="col-md-6">
          <h2>Contact Information</h2>
          <p>
            Address: 1234 Logistics Lane, Suite 567, City, Country
          </p>
          <p>
            Phone: +1 (123) 456-7890
          </p>
          <p>
            Email: info@example.com
          </p>
          <p>
            Office Hours: Mon-Fri, 9:00 AM - 5:00 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
