// DevotionalsPage.jsx
import React from "react";
import "./App.css";

const devotionals = [
  {
    feeling: "Anxious",
    title: "Finding Peace in His Promises",
    description:
      "When anxiety strikes, turn to God's promises of peace and rest. Learn how to cast your cares upon Him and embrace His comfort.",
    scripture: "Philippians 4:6-7"
  },
  {
    feeling: "Lost",
    title: "Guidance in the Wilderness",
    description:
      "If you feel lost, know that God is always guiding you. Discover how to listen to His voice and find your path through faith.",
    scripture: "Proverbs 3:5-6"
  },
  {
    feeling: "Overwhelmed",
    title: "Rest in His Strength",
    description:
      "When the weight of the world feels too heavy, rest in the strength of the Lord. He is your refuge and fortress.",
    scripture: "Psalm 46:1"
  },
  {
    feeling: "Grateful",
    title: "A Heart of Thanksgiving",
    description:
      "Celebrate God's goodness and express gratitude for His blessings. Reflect on His faithfulness and love.",
    scripture: "1 Thessalonians 5:16-18"
  },
  {
    feeling: "Unworthy",
    title: "Loved Beyond Measure",
    description:
      "Even when you feel unworthy, God's love is unwavering. Discover how His grace covers you, just as you are.",
    scripture: "Romans 8:38-39"
  }
];

const DevotionalsPage = () => {
  return (
    <div className="devotionals-page">
      <h2>Devotionals for Every Season</h2>
      <ul>
        {devotionals.map((devotional, index) => (
          <li key={index} className="devotional-item">
            <h3>{devotional.title}</h3>
            <p><strong>Feeling:</strong> {devotional.feeling}</p>
            <p><strong>Scripture:</strong> {devotional.scripture}</p>
            <p>{devotional.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DevotionalsPage;
