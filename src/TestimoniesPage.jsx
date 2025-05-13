// TestimoniesPage.jsx
import React from "react";
import "./App.css";

const testimonies = [
  {
    name: "Jessica Brown",
    testimony:
      "I was struggling with my faith for years, but one night I prayed for guidance. I felt peace like never before. Since that night, my relationship with God has only grown stronger."
  },
  {
    name: "Samuel Lee",
    testimony:
      "I was diagnosed with a severe illness, and doctors said it would be a long journey. My church family prayed for me continuously. Against all odds, I recovered faster than anyone expected. Praise God!"
  },
  {
    name: "Maria Gomez",
    testimony:
      "After losing my job, I felt hopeless. I prayed for provision, and two weeks later, I found a new job with better pay and supportive coworkers. God is faithful!"
  },
  {
    name: "David Johnson",
    testimony:
      "I struggled with anxiety for years. Through prayer and scripture, I learned to trust in God's plan. Now, I live with more peace than I ever imagined."
  },
  {
    name: "Aaliyah Smith",
    testimony:
      "When my family was going through a tough time, I didn't know how we'd get through it. But God made a way. We came out stronger than ever."
  }
];

const TestimoniesPage = () => {
  return (
    <div className="testimonies-page">
      <h2>Testimonies of Faith and Victory</h2>
      <ul>
        {testimonies.map((testimony, index) => (
          <li key={index} className="testimony-item">
            <h3>{testimony.name}</h3>
            <p>{testimony.testimony}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// ✅ Make sure this is here:
export default TestimoniesPage;
