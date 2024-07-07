// ./Home/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Optional: Create a CSS file for styling

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the Student App</h1>
      <p>This app provides you with various tools to help you manage your academic life.</p>
      
      <div className="feature">
        <h2>Resume Builder</h2>
        <p>Create a professional resume with our easy-to-use resume builder. Add your education, experience, and skills to create a resume that stands out.</p>
        <Link to="/resume" className="feature-link">Go to Resume Builder</Link>
      </div>
      
      <div className="feature">
        <h2>To-Do List</h2>
        <p>Keep track of your tasks and deadlines with our to-do list feature. Add, edit, and delete tasks to stay organized and on top of your workload.</p>
        <Link to="/todo" className="feature-link">Go to To-Do List</Link>
      </div>
      
      <div className="feature">
        <h2>Notes</h2>
        <p>Take and organize notes efficiently. Save your notes for future reference and stay prepared for your classes and assignments.</p>
        <Link to="/noteapp" className="feature-link">Go to Notes</Link>
      </div>
    </div>
  );
}

export default Home;
