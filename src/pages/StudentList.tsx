
import { useEffect, useState } from "react";


type Student = {
  _id?: string;
  name: string;
  address: string;
  email: string;
  class?: string;
  password?: string;
  profilePic?: string;
};


function StudentList() {
  // All hooks at the top, always in the same order
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [editForm, setEditForm] = useState<Student | null>(null);
  const [message, setMessage] = useState("");
  const [loadingEdit, setLoadingEdit] = useState(false);

  useEffect(() => {
    fetch("https://school-backend-2-qiyf.onrender.com/api/students")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load students.");
        setLoading(false);
      });
  }, []);

  // Delete student
  const handleDelete = (id?: string) => {
    if (!id) return;
    if (!window.confirm("Are you sure you want to delete this student?")) return;
    fetch(`https://school-backend-2-qiyf.onrender.com/api/students/${id}`, { method: "DELETE" })
      .then(res => res.json())
      .then(() => setStudents(students.filter(s => s._id !== id)));
  };

  // Edit student
  const handleEdit = (student: Student) => {
    setEditMode(true);
    setEditForm({ ...student });
    setSelectedStudent(null);
  };

  const handleEditChange = (e: any) => {
    const { name, value, files } = e.target;
    setEditForm(f => f ? { ...f, [name]: files ? files[0] : value } : null);
  };

  const handleEditSubmit = (e: any) => {
    e.preventDefault();
    if (!editForm || !editForm._id) return;
    setLoadingEdit(true);
    setMessage("");
    const data = new FormData();
    Object.entries(editForm).forEach(([key, value]) => {
      if (value && key !== "_id" && key !== "profilePic" && key !== "__v") data.append(key, value as any);
    });
    fetch(`https://school-backend-2-qiyf.onrender.com/api/students/${editForm._id}`, {
      method: "PUT",
      body: data,
    })
      .then(async (res) => {
        const result = await res.json();
        if (!res.ok) throw new Error(result.message || "Error");
        setMessage("Student updated successfully.");
        setEditMode(false);
        setEditForm(null);
        setStudents(students.map(s => s._id === result.student._id ? result.student : s));
      })
      .catch(() => setMessage("Cannot update student. Please try again."))
      .finally(() => setLoadingEdit(false));
  };

  if (loading) return <div>Loading students...</div>;
  if (error) return <div style={{color:'red'}}>Failed to load students. Please check your internet connection or try again later.</div>;

  return (
    <div style={{maxWidth:'900px',margin:'2rem auto',background:'#fff',borderRadius:'8px',boxShadow:'0 2px 8px rgba(0,0,0,0.05)',padding:'2rem'}}>
      <h2 style={{color:'#003366',marginBottom:'1.5rem'}}>Registered Students</h2>
      {message && <p style={{color: message.includes('success') ? 'green' : 'red',marginBottom:8}}>{message}</p>}
      {students.length === 0 ? (
        <div>No students registered yet.</div>
      ) : (
        <table style={{width:'100%',borderCollapse:'collapse'}}>
          <thead style={{background:'#003366',color:'#fff'}}>
            <tr>
              <th style={{padding:'0.5rem'}}>Photo</th>
              <th style={{padding:'0.5rem'}}>Name</th>
              <th style={{padding:'0.5rem'}}>Class</th>
              <th style={{padding:'0.5rem'}}>Address</th>
              <th style={{padding:'0.5rem'}}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s, i) => (
              <tr key={s._id || i} style={{background:i%2?'#f0f6ff':'#fff'}}>
                <td style={{padding:'0.5rem'}}>
                  {s.profilePic ? (
                    <img 
                      src={
                        s.profilePic.startsWith('http')
                          ? s.profilePic
                          : `https://school-backend-2-qiyf.onrender.com${s.profilePic.startsWith('/uploads') ? s.profilePic : `/uploads/${s.profilePic.replace(/^\/uploads\//, '')}`}`
                      }
                      alt="Profile"
                      style={{width:'48px',height:'48px',borderRadius:'50%',objectFit:'cover'}}
                      onError={e => { (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=No+Photo&background=003366&color=fff&size=48'; }}
                    />
                  ) : (
                    <span style={{color:'#aaa'}}>No Photo</span>
                  )}
                </td>
                <td style={{padding:'0.5rem',fontWeight:'bold',cursor:'pointer',color:'#003366'}} onClick={() => setSelectedStudent(s)}>{s.name}</td>
                <td style={{padding:'0.5rem'}}>{s.class}</td>
                <td style={{padding:'0.5rem'}}>{s.address}</td>
                <td style={{padding:'0.5rem'}}>
                  <button onClick={() => handleEdit(s)} style={{ background:'#003366', color:'#fff', border:'none', borderRadius:4, padding:'0.25rem 0.75rem', cursor:'pointer', marginRight:8 }}>Edit</button>
                  <button onClick={() => handleDelete(s._id)} style={{ background:'#c00', color:'#fff', border:'none', borderRadius:4, padding:'0.25rem 0.75rem', cursor:'pointer'}}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {/* Modal for single student view */}
      {selectedStudent && !editMode && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
        }}
          onClick={() => setSelectedStudent(null)}
        >
          <div
            style={{ background: '#fff', padding: '2rem', borderRadius: '10px', minWidth: 250, maxWidth: 350, boxShadow: '0 2px 16px rgba(0,0,0,0.15)', position: 'relative' }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedStudent(null)}
              style={{ position: 'absolute', top: 10, right: 10, background: '#003366', color: '#fff', border: 'none', borderRadius: '50%', width: 28, height: 28, cursor: 'pointer' }}
              aria-label="Close"
            >
              &times;
            </button>
            <h3 style={{color:'#003366', marginBottom: 12}}>Student Details</h3>
            {selectedStudent.profilePic && (
              <img 
                src={
                  selectedStudent.profilePic.startsWith('http')
                    ? selectedStudent.profilePic
                    : `https://school-backend-2-qiyf.onrender.com${selectedStudent.profilePic.startsWith('/uploads') ? selectedStudent.profilePic : `/uploads/${selectedStudent.profilePic.replace(/^\/uploads\//, '')}`}`
                }
                alt="profile"
                style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', border: '2px solid #003366', marginBottom: 12 }}
                onError={e => { (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=No+Photo&background=003366&color=fff&size=80'; }}
              />
            )}
            <div><strong>Name:</strong> {selectedStudent.name}</div>
            <div><strong>Email:</strong> {selectedStudent.email}</div>
            <div><strong>Class:</strong> {selectedStudent.class}</div>
            <div><strong>Address:</strong> {selectedStudent.address}</div>
          </div>
        </div>
      )}
      {/* Modal for editing student */}
      {editMode && editForm && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
        }}
          onClick={() => setEditMode(false)}
        >
          <form
            style={{ background: '#fff', padding: '2rem', borderRadius: '10px', minWidth: 250, maxWidth: 350, boxShadow: '0 2px 16px rgba(0,0,0,0.15)', position: 'relative', display: 'flex', flexDirection: 'column', gap: 12 }}
            onClick={e => e.stopPropagation()}
            onSubmit={handleEditSubmit}
          >
            <button
              onClick={() => setEditMode(false)}
              type="button"
              style={{ position: 'absolute', top: 10, right: 10, background: '#003366', color: '#fff', border: 'none', borderRadius: '50%', width: 28, height: 28, cursor: 'pointer' }}
              aria-label="Close"
            >
              &times;
            </button>
            <h3 style={{color:'#003366', marginBottom: 12}}>Edit Student</h3>
            <input name="name" type="text" placeholder="Name" value={editForm.name} onChange={handleEditChange} required style={{width:'100%',marginBottom:8,padding:8}} />
            <input name="address" type="text" placeholder="Address" value={editForm.address} onChange={handleEditChange} required style={{width:'100%',marginBottom:8,padding:8}} />
            <input name="email" type="email" placeholder="Email" value={editForm.email} onChange={handleEditChange} required style={{width:'100%',marginBottom:8,padding:8}} />
            <input name="class" type="text" placeholder="Class (e.g. JSS1)" value={editForm.class} onChange={handleEditChange} required style={{width:'100%',marginBottom:8,padding:8}} />
            <input name="password" type="password" placeholder="Password" value={editForm.password || ''} onChange={handleEditChange} required style={{width:'100%',marginBottom:8,padding:8}} />
            <input name="profile" type="file" accept="image/*" onChange={handleEditChange} style={{width:'100%',marginBottom:8,padding:8}} />
            <button type="submit" style={{width:'100%',background:'#003366',color:'#fff',padding:10,border:'none',borderRadius:4}} disabled={loadingEdit}>{loadingEdit ? 'Saving...' : 'Save Changes'}</button>
            {message && <p style={{color:'#003366',marginTop:8}}>{message}</p>}
          </form>
        </div>
      )}
    </div>
  );
}

export default StudentList;
