// SubmitPrayerRequest.jsx
import React, { useState } from "react";
import "./App.css";

const SubmitPrayerRequest = () => {
  const [name, setName] = useState("");
  const [request, setRequest] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && request) {
      console.log("Prayer Request Submitted:", { name, request });
      setSubmitted(true);

      // Clear the form after submission
      setName("");
      setRequest("");
    }
  };

  return (
    <div className="submit-prayer-request">
      <h2>Submit a Prayer Request</h2>

      {submitted && (
        <div className="success-message">
          Thank you for submitting your prayer request. We are praying with you.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label>Prayer Request:</label>
          <textarea
            value={request}
            onChange={(e) => setRequest(e.target.value)}
            placeholder="Enter your prayer request"
            required
          />
        </div>

        <button type="submit" className="btn-primary">
          Submit Request
        </button>
      </form>
    </div>
  );
};

// ✅ This is what you are missing:
export default SubmitPrayerRequest;
