import { useState } from "react";

type Props = {
  onLogin?: (student: any) => void;
};

function StudentLogin({ onLogin }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    fetch("http://localhost:7000/api/students/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Error");
        setMessage("Login successful!");
        if (onLogin) {
          onLogin(data.student);
        } else {
          localStorage.setItem("student", JSON.stringify(data.student));
          window.location.href = "/student/dashboard";
        }
      })
      .catch((err) => setMessage("Invalid credentials or server error."))
      .finally(() => setLoading(false));
  };

  return (
    <form onSubmit={handleSubmit} style={{ background: '#f0f6ff', padding: '1rem', borderRadius: '8px', maxWidth: 400, margin: '2rem auto', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
      <h2>Student Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required style={{width:'100%',marginBottom:8,padding:8}} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required style={{width:'100%',marginBottom:8,padding:8}} />
      <button type="submit" style={{width:'100%',background:'#003366',color:'#fff',padding:10,border:'none',borderRadius:4}} disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
      {message && <p style={{color:'#003366',marginTop:8}}>{message}</p>}
    </form>
  );
}

export default StudentLogin;
