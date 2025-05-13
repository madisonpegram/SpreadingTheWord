// DevotionalPlanPage.jsx
import React, { useState } from "react";
import "./App.css";

const plans = [
  {
    title: "Overcoming Anxiety",
    description:
      "A 7-day devotional to help you find peace and overcome anxiety by trusting in God's promises.",
    scriptures: ["Philippians 4:6-7", "Psalm 55:22", "Matthew 6:34"]
  },
  {
    title: "Walking in Faith",
    description:
      "A 5-day journey that strengthens your faith and encourages you to walk boldly in God's promises.",
    scriptures: ["2 Corinthians 5:7", "Hebrews 11:1", "Romans 10:17"]
  },
  {
    title: "Finding Rest in Him",
    description:
      "A 3-day devotional focused on finding rest in God's presence and letting go of stress.",
    scriptures: ["Matthew 11:28", "Psalm 62:5", "Isaiah 40:31"]
  },
  {
    title: "Growing in Love",
    description:
      "A 4-day plan that explores God's love and how we can reflect that love to others.",
    scriptures: ["1 Corinthians 13:4-7", "1 John 4:19", "Ephesians 4:2"]
  }
];

const DevotionalPlanPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <div className="devotional-plan-page">
      <h2>Select a Devotional Plan</h2>

      {!selectedPlan ? (
        <ul className="plan-list">
          {plans.map((plan, index) => (
            <li key={index} className="plan-item">
              <h3>{plan.title}</h3>
              <p>{plan.description}</p>
              <button
                className="btn-primary"
                onClick={() => setSelectedPlan(plan)}
              >
                Start Plan
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="selected-plan">
          <h2>{selectedPlan.title}</h2>
          <p>{selectedPlan.description}</p>
          <h4>Scriptures:</h4>
          <ul>
            {selectedPlan.scriptures.map((scripture, idx) => (
              <li key={idx}>{scripture}</li>
            ))}
          </ul>
          <button
            className="btn-outline"
            onClick={() => setSelectedPlan(null)}
          >
            Back to Plans
          </button>
        </div>
      )}
    </div>
  );
};

export default DevotionalPlanPage;
