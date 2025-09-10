import React, { useEffect, useState } from "react";

function Students() {
  const [students, setStudents] = useState([]);
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
  const [selectedStudent, setSelectedStudent] = useState<any | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [editForm, setEditForm] = useState<any | null>(null);
  // Start editing a student
  const handleEdit = (student: any) => {
    setEditMode(true);
    setEditForm({ ...student, profile: null });
    setSelectedStudent(null);
  };

  // Handle edit form change
  const handleEditChange = (e: any) => {
    const { name, value, files } = e.target;
    setEditForm((f: any) => ({ ...f, [name]: files ? files[0] : value }));
  };

  // Submit edit form
  const handleEditSubmit = (e: any) => {
    e.preventDefault();
    if (!editForm) return;
    setLoading(true);
    setMessage("");
    const data = new FormData();
    Object.entries(editForm).forEach(([key, value]) => {
      if (value && key !== "_id" && key !== "profilePic" && key !== "__v") data.append(key, value as any);
    });
    fetch(`http://localhost:7000/api/students/${editForm._id}`, {
      method: "PUT",
      body: data,
    })
      .then(async (res) => {
        const result = await res.json();
        if (!res.ok) throw new Error(result.message || "Error");
        setMessage("Student updated successfully.");
        setEditMode(false);
        setEditForm(null);
        fetchStudents();
      })
      .catch(() => setMessage("Cannot update student. Please check your server and try again."))
      .finally(() => setLoading(false));
  };

  // Fetch students from backend
  const fetchStudents = () => {
    fetch("http://localhost:7000/api/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  };

  useEffect(() => {
    fetchStudents();
  }, []);

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
        fetchStudents();
      })
      .catch(() => setMessage("Cannot add student. Please check your server is running and try again."))
      .finally(() => setLoading(false));
  };

  // Delete student
  const handleDelete = (id: string) => {
    if (!window.confirm("Are you sure you want to delete this student?")) return;
    fetch(`http://localhost:7000/api/students/${id}`, { method: "DELETE" })
      .then(res => res.json())
      .then(() => fetchStudents());
  };

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
        <input name="profile" type="file" accept="image/*" onChange={handleChange} required style={{width:'100%',marginBottom:8,padding:8}} />
        <button type="submit" style={{width:'100%',background:'#003366',color:'#fff',padding:10,border:'none',borderRadius:4}} disabled={loading}>{loading ? 'Registering...' : 'Register'}</button>
        {message && <p style={{color:'#003366',marginTop:8}}>{message}</p>}
      </form>
    </div>
  );
}

export default Students;
