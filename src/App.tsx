
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Students from "./pages/Students";
import StudentList from "./pages/StudentList";
import StudentLogin from "./pages/StudentLogin";
import StudentSignup from "./pages/StudentSignup";
import StudentDashboard from "./pages/StudentDashboard";
import Teachers from "./pages/Teachers";
import Gallery from "./pages/Gallery";

function App() {
  // Simple login state check (beginner-friendly, not secure)
  const student = localStorage.getItem("student");

  return (
    <Router>
      <nav className="navbar">
        <img src="/logo/4.png" alt="School Logo" style={{ height: 40, marginRight: 16, borderRadius: 8, background: '#fff', padding: 2 }} />
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/teachers">Teachers</Link>
        {/* Show student links only if logged in */}
        {student ? (
          <>
            <Link to="/student/dashboard">Dashboard</Link>
            <button onClick={() => { localStorage.removeItem("student"); window.location.href = "/student/login"; }} style={{ background:'#c00', color:'#fff', border:'none', borderRadius:4, padding:'0.25rem 0.75rem', marginLeft:8, cursor:'pointer'}}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/student/login">Student Login</Link>
            <Link to="/student/signup">Student Signup</Link>
          </>
        )}
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/teachers" element={<Teachers />} />
          {/* Student Auth & Protected Routes */}
          <Route path="/student/login" element={<StudentLogin />} />
          <Route path="/student/signup" element={<StudentSignup />} />
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          {/* Registration and List for admin/demo only */}
          <Route path="/students/register" element={<Students />} />
          <Route path="/students/list" element={<StudentList />} />
        </Routes>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <img src="/logo/4.png" alt="School Logo" className="footer-logo" />
            <span className="footer-school">Saint Saviours Secondary School</span>
          </div>
          <div className="footer-links">
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/gallery">Gallery</a>
            <a href="/teachers">Teachers</a>
          </div>
          <div className="footer-copy">
            &copy; {new Date().getFullYear()} Saint Saviours Secondary School. All rights reserved.
          </div>
        </div>
      </footer>
    </Router>
  );
}

export default App;
