import { useState } from "react";


import { useRef } from "react";

function Students() {
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
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle form input change
  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    setForm(f => ({
      ...f,
      [name]: files ? files[0] : value,
    }));
  };

  // Handle form submit (with file upload)
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setMessage("");
    // Pre-submit validation for all fields
    if (!form.name || !form.address || !form.email || !form.class || !form.password || !form.profile) {
      setMessage("All fields are required.");
      return;
    }
    setLoading(true);
    const data = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (value) data.append(key, value as any);
    });
    fetch("https://school-backend-2-qiyf.onrender.com/api/students/register", {
      method: "POST",
      body: data,
    })
      .then(async (res) => {
        const result = await res.json();
        if (!res.ok) throw new Error(result.message || "Error");
        setMessage(result.message);
        setForm({ name: "", address: "", email: "", class: "", password: "", profile: null });
        // Reset file input manually
        if (fileInputRef.current) fileInputRef.current.value = "";
      })
      .catch((err) => setMessage(err.message || "Cannot add student. Please check your server is running and try again."))
      .finally(() => setLoading(false));
  };

  // ...existing code...

  return (
    <div>
      <h1>Students</h1>
      <p style={{color:'#003366', maxWidth:600, margin:'0 auto 1rem'}}>
        Register a new student using the form below. All registered students will appear in the list.
      </p>
      <form onSubmit={handleSubmit} style={{ background: '#f0f6ff', padding: '1rem', borderRadius: '8px', minWidth: '250px', maxWidth: '400px', width: '100%', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', margin: '2rem auto' }}>
        <h2>Register a Student</h2>
        <input name="name" type="text" placeholder="Name" value={form.name} onChange={handleChange} required style={{width:'100%',marginBottom:8,padding:8}} />
        <input name="address" type="text" placeholder="Address" value={form.address} onChange={handleChange} required style={{width:'100%',marginBottom:8,padding:8}} />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required style={{width:'100%',marginBottom:8,padding:8}} />
        <input name="class" type="text" placeholder="Class (e.g. JSS1)" value={form.class} onChange={handleChange} required style={{width:'100%',marginBottom:8,padding:8}} />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required style={{width:'100%',marginBottom:8,padding:8}} />
  <input name="profile" type="file" accept="image/*" onChange={handleChange} required style={{width:'100%',marginBottom:8,padding:8}} ref={fileInputRef} />
        <button type="submit" style={{width:'100%',background:'#003366',color:'#fff',padding:10,border:'none',borderRadius:4}} disabled={loading}>{loading ? 'Registering...' : 'Register'}</button>
        {message && <p style={{color:'#003366',marginTop:8}}>{message}</p>}
      </form>
    </div>
  );
}

export default Students;
