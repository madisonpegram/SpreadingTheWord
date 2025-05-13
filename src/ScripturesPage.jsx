// ScripturesPage.jsx
import React from "react";

const scriptures = [
  "John 3:16 - For God so loved the world...",
  "Psalm 23:1 - The Lord is my shepherd; I shall not want.",
  "Proverbs 3:5 - Trust in the Lord with all your heart...",
  "Romans 8:28 - And we know that in all things God works...",
  "Philippians 4:13 - I can do all things through Christ who strengthens me."
];

const ScripturesPage = () => {
  return (
    <div className="scriptures-page">
      <h2>Scriptures</h2>
      <ul>
        {scriptures.map((verse, index) => (
          <li key={index}>{verse}</li>
        ))}
      </ul>
    </div>
  );
};

// ✅ This is what was missing
export default ScripturesPage;
