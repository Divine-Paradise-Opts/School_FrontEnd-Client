
function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Email: info@school.com</p>
      <p>Phone: 081-304-71333</p>
      <a
        href="https://wa.me/2348130471333" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          background: '#25D366',
          color: '#fff',
          padding: '0.75rem 1.5rem',
          borderRadius: '6px',
          textDecoration: 'none',
          fontWeight: 'bold',
          marginTop: '1rem',
        }}
      >
        Contact us on WhatsApp
      </a>
    </div>
  );
}

export default Contact;
