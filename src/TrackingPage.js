import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TrackingPage = () => {
  const [trackingCode, setTrackingCode] = useState('');
  const [trackingResult, setTrackingResult] = useState('');
  const [showRealTimeTracking, setShowRealTimeTracking] = useState(false); // New state for real-time tracking

  const simulateTracking = (code) => {
    // Simulate tracking logic (you should replace this with your actual logic)
    if (code === '123456') {
      setTrackingResult('Your shipment is on its way!');
    } else if (code === '789012') {
      setTrackingResult('Your product is in progress.');
    } else if (code === '345678') {
      setTrackingResult('Your shipment has been shipped.');
    } else {
      setTrackingResult('Tracking code not found.');
    }
  };

  const handleTrackingSubmit = (e) => {
    e.preventDefault();
    simulateTracking(trackingCode);
  };

  useEffect(() => {
    // Simulate initial tracking
    simulateTracking(trackingCode);
  }, [trackingCode]); // Track changes in trackingCode

  // Function to toggle real-time tracking display
  const toggleRealTimeTracking = () => {
    setShowRealTimeTracking(!showRealTimeTracking);
  };

  return (
    <div className="container mx-5">
      <div className="text-center">
        <h1>Track Your Shipment</h1>
      </div>
      <form onSubmit={handleTrackingSubmit}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Tracking Code"
            value={trackingCode}
            onChange={(e) => setTrackingCode(e.target.value)}
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-primary">
              Track
            </button>
          </div>
        </div>
      </form>
      {trackingResult && (
        <div className="text-center">
          <p className="tracking-result">{trackingResult}</p>
        </div>
      )}

      <div className="tracking-status">
        {showRealTimeTracking && (
          <div className="real-time-tracking">
            <p>Real-time tracking information:</p>
            {/* Add real-time tracking information here */}
            <p>Location: [Your Location]</p>
            <p>ETA: [ETA]</p>
          </div>
        )}
      </div>
      <div className="text-center">
        <button
          className="btn btn-primary"
          onClick={toggleRealTimeTracking}
        >
          Toggle Real-Time Tracking
        </button>
      </div>
    </div>
  );
};

export default TrackingPage;

