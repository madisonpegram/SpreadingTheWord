// App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ScripturesPage from "./ScripturesPage";
import PrayerRequestsPage from "./PrayerRequestsPage";
import DevotionalsPage from "./DevotionalsPage";
import TestimoniesPage from "./TestimoniesPage";
import SubmitPrayerRequest from "./SubmitPrayerRequest";
import DevotionalPlanPage from "./DevotionalPlanPage";
import "./App.css"; // Your styling goes here

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Verses that rotate on the home page
  const verse = [
    "Let your light shine before others – Matthew 5:16",
    "I can do all things through Christ who strengthens me – Philippians 4:13",
    "Trust in the Lord with all your heart – Proverbs 3:5",
    "The Lord is my shepherd; I shall not want – Psalm 23:1"
  ];

  // Interval to rotate the verse
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % verse.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [verse.length]);

  return (
    <Router>
      <div className="Home">
        <header className="header">
          <h1 className="Website-Title">Becoming Beloved</h1>
          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>
          <nav className={`nav ${menuOpen ? "open" : ""}`}>
            
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/scriptures" onClick={() => setMenuOpen(false)}>Scriptures</Link>
              <Link to="/prayer-requests" onClick={() => setMenuOpen(false)}>Prayer Requests</Link>
              <Link to="/devotionals" onClick={() => setMenuOpen(false)}>Devotionals</Link>
              <Link to="/testimonies" onClick={() => setMenuOpen(false)}>Testimonies</Link>
          </nav>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <section className="hero">
                <h2 className="hero-title">Spreading the Word of God</h2>
                <p className="hero-text">
                  Discover daily devotionals, explore Scriptures, and share your faith journey.
                </p>
                <div className="hero-buttons">
                  <Link to="/devotional-plan" onClick={() => setMenuOpen(false)}>
                    <button className="btn-primary">Start a devotional plan</button></Link>
                  <Link to="/submit-prayer-request" onClick={() => setMenuOpen(false)}>
                    <button className= "btn-primary">Submit a Prayer Request</button></Link>
                </div>

                <section className="verse">
                  <h3 className="verse-title">Verse of the Day</h3>
                  <blockquote className="verse-text">{verse[index]}</blockquote>
                </section>
              </section>
            }
          />
          <Route path="/scriptures" element={<ScripturesPage />} />
          <Route path="/prayer-requests" element={<PrayerRequestsPage />} />
          <Route path="/devotionals" element={<DevotionalsPage />} />
          <Route path="/testimonies" element={<TestimoniesPage />} />
          <Route path="/submit-prayer-request" element={<SubmitPrayerRequest />} />
          <Route path="/devotional-plan" element={<DevotionalPlanPage />} />
        </Routes>

        <footer className="footer">
          <p>2025 Becoming Beloved. All rights reserved</p>
        </footer>
      </div>
    </Router>
  );
}
