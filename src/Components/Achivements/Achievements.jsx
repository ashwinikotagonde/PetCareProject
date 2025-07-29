import React, { useState, useEffect } from 'react';
import './Achievements.css';

const Achievements = () => {
  // Achievements data
  const achievementsData = [
    { id: 1, title: 'Pet Services', count: 50 },
    { id: 2, title: 'Happy Customers', count: 1000 },
    { id: 3, title: 'Service Providers', count: 200 },
  ];

  // State for counting animation
  const [counts, setCounts] = useState(achievementsData.map(() => 0));

  useEffect(() => {
    achievementsData.forEach((achievement, index) => {
      let currentCount = 0;
      const increment = Math.ceil(achievement.count / 100); // Smooth animation step

      const interval = setInterval(() => {
        currentCount += increment;
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[index] = Math.min(currentCount, achievement.count); // Stop at final value
          return newCounts;
        });

        if (currentCount >= achievement.count) clearInterval(interval);
      }, 30);
    });
  }, []);

  return (
    <div className="achievements">
      <h2 className="achievements-title">Achievements</h2>
      <h1 className="achievements-title1">Our Journey</h1>
      <div className="achievements-grid">
        {achievementsData.map((achievement, index) => (
          <div key={achievement.id} className="achievement-card">
            <h2 className="achievement-title">{achievement.title}</h2>
            <h3 className="achievement-count">{counts[index]}+</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
