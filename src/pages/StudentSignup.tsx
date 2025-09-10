import { useState } from "react";


function StudentSignup() {
  const [form, setForm] = useState({ name: "", email: "", password: "", address: "", class: "", profile: null as File | null });
  const [message, setMessage] = useState("");

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    setForm(f => ({ ...f, [name]: files ? files[0] : value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setMessage("");
    const data = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (value) data.append(key, value as any);
    });
    try {
      const res = await fetch("http://localhost:7000/api/students/register", {
        method: "POST",
        body: data,
      });
      const result = await res.json();
      if (!res.ok) {
        setMessage(result.message || "Signup failed");
        console.error("Signup error:", result);
        return;
      }
      setMessage("Signup successful! Please login.");
      setForm({ name: "", email: "", password: "", address: "", class: "", profile: null });
    } catch (err) {
      setMessage("Signup failed. Please try again.");
      console.error("Signup error:", err);
    }
  };

  return (
    <div style={{maxWidth:400,margin:"2rem auto",background:'#fff',padding:'2rem',borderRadius:8,boxShadow:'0 2px 8px rgba(0,0,0,0.05)'}}>
      <h2 style={{color:'#003366'}}>Student Signup</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input name="name" type="text" placeholder="Name" value={form.name} onChange={handleChange} required style={{width:'100%',marginBottom:8,padding:8}} />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required style={{width:'100%',marginBottom:8,padding:8}} />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required style={{width:'100%',marginBottom:8,padding:8}} />
        <input name="address" type="text" placeholder="Address" value={form.address} onChange={handleChange} required style={{width:'100%',marginBottom:8,padding:8}} />
        <input name="class" type="text" placeholder="Class (e.g. JSS1)" value={form.class} onChange={handleChange} required style={{width:'100%',marginBottom:8,padding:8}} />
        <input name="profile" type="file" accept="image/*" onChange={handleChange} required style={{width:'100%',marginBottom:8,padding:8}} />
        <button type="submit" style={{width:'100%',background:'#003366',color:'#fff',padding:10,border:'none',borderRadius:4}}>Signup</button>
        {message && <p style={{color: message.includes('successful') ? 'green' : 'red',marginTop:8}}>{message}</p>}
      </form>
    </div>
  );
}

export default StudentSignup;
