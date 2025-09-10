import React, { useState } from "react";
import StudentRegistration from "./StudentRegistration";
import StudentLogin from "./StudentLogin";

function StudentBar({ onRegister, onLogin, onLogout, student }: any) {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div style={{ display: 'flex', gap: 8, marginBottom: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
      {!student && <>
        <button onClick={() => { setShowRegister(true); setShowLogin(false); }} style={btnStyle}>Register</button>
        <button onClick={() => { setShowLogin(true); setShowRegister(false); }} style={btnStyle}>Login</button>
      </>}
      {student && <>
        <span style={{ color: '#003366', fontWeight: 'bold' }}>Welcome, {student.name}!</span>
        <button onClick={onLogout} style={btnStyle}>Logout</button>
      </>}
      {showRegister && !student && <StudentRegistration onRegister={() => { setShowRegister(false); onRegister(); }} />}
      {showLogin && !student && <StudentLogin onLogin={onLogin} />}
    </div>
  );
}

const btnStyle = {
  background: '#003366', color: '#fff', border: 'none', borderRadius: 4, padding: '0.5rem 1rem', cursor: 'pointer', fontWeight: 'bold'
};

export default StudentBar;
