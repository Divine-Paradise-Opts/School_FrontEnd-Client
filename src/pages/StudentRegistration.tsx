import { useState } from "react";

function StudentRegistration({ onRegister }: { onRegister: () => void }) {
  const [form, setForm] = useState({
    name: "",
    address: "",
    email: "",
    class: "",
    password: "",
    profile: null as File | null,
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    setForm(f => ({
      ...f,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    const data = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (value) data.append(key, value as any);
    });
    fetch("http://localhost:7000/api/students/register", {
      method: "POST",
      body: data,
    })
      .then(async (res) => {
        const result = await res.json();
        if (!res.ok) throw new Error(result.message || "Error");
        setMessage(result.message);
        setForm({ name: "", address: "", email: "", class: "", password: "", profile: null });
        onRegister();
      })
      .catch(() => setMessage("Cannot register. Please check your server and try again."))
      .finally(() => setLoading(false));
  };

  return (
    <form onSubmit={handleSubmit} style={{ background: '#f0f6ff', padding: '1rem', borderRadius: '8px', maxWidth: 400, margin: '2rem auto', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
      <h2>Student Registration</h2>
      <input name="name" type="text" placeholder="Name" value={form.name} onChange={handleChange} required style={{width:'100%',marginBottom:8,padding:8}} />
      <input name="address" type="text" placeholder="Address" value={form.address} onChange={handleChange} required style={{width:'100%',marginBottom:8,padding:8}} />
      <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required style={{width:'100%',marginBottom:8,padding:8}} />
      <input name="class" type="text" placeholder="Class (e.g. JSS1)" value={form.class} onChange={handleChange} required style={{width:'100%',marginBottom:8,padding:8}} />
      <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required style={{width:'100%',marginBottom:8,padding:8}} />
      <input name="profile" type="file" accept="image/*" onChange={handleChange} required style={{width:'100%',marginBottom:8,padding:8}} />
      <button type="submit" style={{width:'100%',background:'#003366',color:'#fff',padding:10,border:'none',borderRadius:4}} disabled={loading}>{loading ? 'Registering...' : 'Register'}</button>
      {message && <p style={{color:'#003366',marginTop:8}}>{message}</p>}
    </form>
  );
}

export default StudentRegistration;
