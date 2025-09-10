
import React, { useState } from "react";

const images = [
  "images (2).jpg",
  "images (3).jpg",
  "images (4).jpg",
  "images (5).jpg",
  "images (6).jpg",
  "istockphoto-643591384-612x612.jpg",
  "istockphoto-911026578-612x612 (1).jpg",
  "istockphoto-911026578-612x612.jpg",
];

function Gallery() {
  const [modalImg, setModalImg] = useState<string | null>(null);
  return (
    <div style={{
      background: "linear-gradient(120deg, #eaf3fa 60%, #cbe0f7 100%)",
      borderRadius: 32,
      boxShadow: "0 8px 48px #00336622, 0 2px 12px #fff",
      padding: "2.5rem 0 3rem 0",
      margin: "3.5rem 0",
    }}>
      <h1 style={{
        color: "#0a174e",
        textAlign: "center",
        marginBottom: "2.2rem",
        fontSize: "2.7rem",
        fontFamily: "'Montserrat', 'Segoe UI', Arial, sans-serif",
        fontWeight: 900,
        letterSpacing: 2,
        textShadow: "0 4px 24px #00336633, 0 2px 12px #fff",
        background: "linear-gradient(90deg, #0a174e 60%, #fff 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}>School Gallery</h1>
      <p style={{maxWidth: 700, margin: '0 auto 2.5rem', color: '#003366', textAlign: 'center', fontSize: '1.18rem', fontWeight: 500}}>
        Explore our school moments! Here are some photos from our classrooms, events, and activities.
      </p>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '3.5rem',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
        {images.map((img, idx) => (
          <div key={img} style={{
            background: '#fff',
            borderRadius: '32px',
            boxShadow: '0 12px 48px #0a174e33, 0 2px 12px #fff',
            border: '5px solid #fff',
            outline: '3px solid #0a174e',
            cursor: 'pointer',
            position: 'relative',
            width: 520,
            height: 370,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            zIndex: 1,
            transition: 'transform 0.32s cubic-bezier(.77,0,.18,1), box-shadow 0.32s, outline 0.22s, border 0.22s',
          }}
            onClick={() => setModalImg(`/images/${img}`)}
            onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.16) rotate(-2deg)')}
            onMouseOut={e => (e.currentTarget.style.transform = 'none')}
          >
            <img
              src={`/images/${img}`}
              alt={`School ${idx + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '28px', boxShadow: '0 2px 8px #fff', transition: 'box-shadow 0.2s' }}
            />
            <div style={{
              position: 'absolute',
              bottom: 18,
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(10,23,78,0.82)',
              color: '#fff',
              fontSize: '1.08rem',
              padding: '0.35rem 1.2rem',
              borderRadius: 18,
              opacity: 0.92,
              pointerEvents: 'none',
              zIndex: 3,
              fontWeight: 600,
              letterSpacing: 0.5,
            }}>Click to view</div>
          </div>
        ))}
      </div>
      {modalImg && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, width: '100vw', height: '100vh',
          background: 'linear-gradient(120deg, #0a174e 60%, #003366 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000,
          animation: 'modalFadeIn 0.3s',
          backdropFilter: 'blur(2.5px)',
        }} onClick={() => setModalImg(null)}>
          <img src={modalImg} alt="Full View" style={{
            maxWidth: '96vw',
            maxHeight: '88vh',
            borderRadius: 28,
            boxShadow: '0 16px 64px #fff, 0 8px 32px #0a174e99',
            border: '6px solid #fff',
            background: '#fff',
            objectFit: 'contain',
            animation: 'modalImgPop 0.4s cubic-bezier(.77,0,.18,1)',
          }} />
          <button onClick={e => { e.stopPropagation(); setModalImg(null); }} style={{
            position: 'absolute',
            top: '3vh',
            right: '5vw',
            fontSize: '3.2rem',
            color: '#0a174e',
            background: '#fff',
            border: '3px solid #0a174e',
            borderRadius: '50%',
            cursor: 'pointer',
            zIndex: 2001,
            fontWeight: 'bold',
            boxShadow: '0 2px 8px #0a174e33',
            transition: 'color 0.2s, background 0.2s, transform 0.2s',
            width: 60,
            height: 60,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>&times;</button>
        </div>
      )}
    </div>
  );
}

export default Gallery;
