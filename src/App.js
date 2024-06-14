 
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ResumeApp from './resume_builder/ResumeApp';
import TodoApp from './Todolist/TodoApp';
import NoteApp from './NotesApp/NoteApp';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="App-nav">
          <ul className="App-nav-list">
            <li><Link to="/" className="App-button">Home</Link></li>
            <li><Link to="/resume" className="App-button">ResumeApp</Link></li>
            <li><Link to="/todo" className="App-button">TodoApp</Link></li>
            <li><Link to="/noteapp" className="App-button">Notes</Link></li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/resume" element={<ResumeApp />} />
          <Route path="/todo" element={<TodoApp />} />
          <Route path="/noteapp" element={<NoteApp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
