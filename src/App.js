import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import ResumeApp from './resume_builder/ResumeApp';
import TodoApp from './Todolist/TodoApp';
import NoteApp from './NotesApp/NoteApp';
import Home from './Home/HomeApp';
import Login from './Auth/Login';
import SignUp from './Auth/SignUp';
import PasswordReset from './Auth/PasswordReset'; // Import the Password Reset Component
import { AuthProvider, useAuth } from './AuthContext';
import './App.css';

function App() {
  const { user, logout } = useAuth();

  return (
    <BrowserRouter>
      <div className="App">
        <nav className="App-nav">
          <div className="logout-container">
            {user && <button onClick={logout} className="logout-button">Logout</button>}
          </div>
          <ul className="App-nav-list">
            {!user ? (
              <>
                <li><Link to="/login" className="App-button">Login</Link></li>
                <li><Link to="/signup" className="App-button">Sign Up</Link></li>
                <li><Link to="/password-reset" className="App-button">Forgot Password?</Link></li>
              </>
            ) : (
              <>
                <li><Link to="/" className="App-button">Home</Link></li>
                <li><Link to="/resume" className="App-button">ResumeApp</Link></li>
                <li><Link to="/todo" className="App-button">TodoApp</Link></li>
                <li><Link to="/noteapp" className="App-button">Notes</Link></li>
              </>
            )}
          </ul>
        </nav>
        
        <Routes>
          {!user ? (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/password-reset" element={<PasswordReset />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<ResumeApp />} />
              <Route path="/todo" element={<TodoApp />} />
              <Route path="/noteapp" element={<NoteApp />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default function WrappedApp() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}
