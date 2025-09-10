import { useState } from 'react';

const heroBg = '/images/istockphoto-643591384-612x612.jpg';
const galleryImages = [
  '/images/images (6).jpg',
  '/images/istockphoto-911026578-612x612.jpg',
  '/images/istockphoto-911026578-612x612 (1).jpg',
];

function Home() {
  const [modalImg, setModalImg] = useState<string | null>(null);
  return (
    <div className="homepage-container">
      {/* Hero Section */}
      <section className="hero-section">
        <img src={heroBg} alt="Saint Saviours" className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Welcome to <span className="school-name">Saint Saviours Secondary School</span></h1>
          <p className="hero-sub">Empowering Nigerian students for a brighter tomorrow</p>
          <a href="#about" className="hero-btn">Learn More</a>
        </div>
      </section>

      {/* School Highlights */}
      <section style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', margin: '2rem 0', justifyContent: 'center' }}>
        <div style={{ flex: '1 1 300px', background: '#fff', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '2rem', minWidth: '260px', maxWidth: '350px', textAlign: 'center' }}>
          <img src="/images/images (2).jpg" alt="Classroom" style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem', height: '160px', objectFit: 'cover' }} />
          <h2 style={{ color: '#003366', marginBottom: '0.5rem' }}>Modern Classrooms</h2>
          <p>Spacious, well-equipped classrooms designed for interactive and effective learning.</p>
        </div>
        <div style={{ flex: '1 1 300px', background: '#fff', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '2rem', minWidth: '260px', maxWidth: '350px', textAlign: 'center' }}>
          <img src="/images/images (3).jpg" alt="Science Lab" style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem', height: '160px', objectFit: 'cover' }} />
          <h2 style={{ color: '#003366', marginBottom: '0.5rem' }}>Science & Computer Labs</h2>
          <p>Hands-on experiments and digital skills in our state-of-the-art labs.</p>
        </div>
        <div style={{ flex: '1 1 300px', background: '#fff', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '2rem', minWidth: '260px', maxWidth: '350px', textAlign: 'center' }}>
          <img src="/images/images (4).jpg" alt="Sports" style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem', height: '160px', objectFit: 'cover' }} />
          <h2 style={{ color: '#003366', marginBottom: '0.5rem' }}>Sports & Arts</h2>
          <p>Vibrant sports and creative arts programs for all-round development.</p>
        </div>
        <div style={{ flex: '1 1 300px', background: '#fff', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '2rem', minWidth: '260px', maxWidth: '350px', textAlign: 'center' }}>
          <img src="/images/images (5).jpg" alt="Community" style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem', height: '160px', objectFit: 'cover' }} />
          <h2 style={{ color: '#003366', marginBottom: '0.5rem' }}>Supportive Community</h2>
          <p>We foster a caring, inclusive, and safe environment for every student.</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ background: 'rgba(0,51,102,0.07)', borderRadius: '10px', padding: '2.5rem 2rem', margin: '2rem 0', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2rem' }}>
        <img src="/logo/4.png" alt="School Logo" style={{ width: '120px', height: '120px', borderRadius: '50%', background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', marginRight: '2rem' }} />
        <div style={{ flex: '1 1 300px', minWidth: '260px' }}>
          <h2 style={{ color: '#003366', marginBottom: '0.5rem' }}>About Saint Saviours</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
            Founded in 2005, Saint Saviours Secondary School has grown into a beacon of academic excellence and character development in Nigeria. Our mission is to empower students with knowledge, skills, and values for a successful future.
          </p>
          <ul style={{ margin: '1rem 0', paddingLeft: '1.2rem', fontSize: '1rem' }}>
            <li>Over 1,000 successful graduates</li>
            <li>Dedicated and experienced teachers</li>
            <li>Strong focus on STEM and creative arts</li>
            <li>Active alumni network</li>
          </ul>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="gallery-section">
        <h2 className="gallery-title">A Glimpse of School Life</h2>
        <div className="gallery-grid">
          {galleryImages.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Gallery ${i + 1}`}
              className="gallery-img"
              onClick={() => setModalImg(src)}
            />
          ))}
        </div>
        {modalImg && (
          <div className="gallery-modal" onClick={() => setModalImg(null)}>
            <img src={modalImg} alt="Full View" className="gallery-modal-img" />
            <button className="gallery-modal-close" onClick={e => { e.stopPropagation(); setModalImg(null); }}>&times;</button>
          </div>
        )}
      </section>

      {/* Call to Action */}
      <section style={{ background: '#003366', color: '#fff', borderRadius: '10px', padding: '2rem', margin: '2rem 0', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
        <h2 style={{ marginBottom: '1rem' }}>Ready to Join Us?</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>Register as a student or contact us to learn more about admissions, programs, and school life.</p>
        <a href="/students" style={{
          background: '#fff',
          color: '#003366',
          padding: '0.7rem 2rem',
          borderRadius: '24px',
          fontWeight: 'bold',
          textDecoration: 'none',
          fontSize: '1.1rem',
          boxShadow: '0 1px 4px rgba(0,0,0,0.08)'
        }}>Register Now</a>
      </section>
    </div>
  );
}

export default Home;
