// PrayerRequestsPage.jsx
import React from "react";
import "./App.css";

const prayerRequests = [
  {
    name: "John Doe",
    request: "Please pray for my mother who is going through surgery next week. Pray for strength and healing."
  },
  {
    name: "Mary Johnson",
    request: "Pray for my job situation; I am looking for stability and peace during this stressful time."
  },
  {
    name: "Samuel Green",
    request: "I need guidance in my education path and to trust God’s plan for my future."
  },
  {
    name: "Emily Brown",
    request: "Please pray for my family to find unity and love as we face difficult challenges."
  },
  {
    name: "Michael Smith",
    request: "Pray for my spiritual journey, that I may grow closer to God and understand His will."
  }
];

const PrayerRequestsPage = () => {
  return (
    <div className="prayer-requests-page">
      <h2>Prayer Requests</h2>
      <ul>
        {prayerRequests.map((prayer, index) => (
          <li key={index}>
            <h3>{prayer.name}</h3>
            <p>{prayer.request}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// ✅ Make sure this is here:
export default PrayerRequestsPage;
