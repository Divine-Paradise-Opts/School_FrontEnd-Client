import { useEffect, useState } from "react";

function StudentDashboard() {
  const [student, setStudent] = useState<any>(null);

  useEffect(() => {
    const s = localStorage.getItem("student");
    if (s) setStudent(JSON.parse(s));
  }, []);

  if (!student) {
    return <div style={{textAlign:'center',marginTop:'2rem'}}>You must be logged in to view this page.</div>;
  }

  return (
    <div style={{maxWidth:600,margin:'2rem auto',background:'#fff',padding:'2rem',borderRadius:8,boxShadow:'0 2px 8px rgba(0,0,0,0.05)'}}>
      <h2 style={{color:'#003366'}}>Welcome, {student.name || student.email}!</h2>
      <p>This is your student dashboard. Here you can view your details and access student-only features.</p>
      <div style={{marginTop:'1.5rem'}}>
        <strong>Email:</strong> {student.email}<br/>
        <strong>Class:</strong> {student.class || student.className}<br/>
        <strong>Address:</strong> {student.address}
      </div>
      <a href="/students" style={{
        display:'inline-block',
        marginTop:'2rem',
        background:'#003366',
        color:'#fff',
        padding:'0.5rem 1.5rem',
        borderRadius:4,
        textDecoration:'none',
        fontWeight:'bold',
        marginRight:'1rem'
      }}>View All Students</a>
      <button onClick={() => { localStorage.removeItem("student"); window.location.href = "/student/login"; }} style={{marginTop:'2rem',background:'#c00',color:'#fff',padding:'0.5rem 1.5rem',border:'none',borderRadius:4}}>Logout</button>
    </div>
  );
}

export default StudentDashboard;
