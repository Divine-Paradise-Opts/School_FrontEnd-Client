
function About() {
  return (
    <div>
      <h1>About Saint Saviours Secondary School</h1>
      <p>
        <strong>Saint Saviours Secondary School</strong> is a place of excellence, learning, and growth. Since our founding, we have been dedicated to helping students achieve their dreams in a safe, friendly, and inspiring environment. Our school is located in the heart of Owerri, Imo State, and welcomes students from all backgrounds.
      </p>
      <h2 style={{color:'#003366'}}>Our Founder</h2>
      <div style={{display:'flex',alignItems:'flex-start',gap:'1.5rem',flexWrap:'wrap',marginBottom:'1.5rem'}}>
        <img src="/MyPhotos/IMG_0576~2.jpeg" alt="Divine Kelechi Nwaebee" style={{width:160,height:160,objectFit:'cover',borderRadius:'50%',border:'3px solid #003366',boxShadow:'0 2px 8px rgba(0,0,0,0.08)'}} />
        <div>
          <p>
            <strong>Divine Kelechi Nwaebee</strong> is the visionary founder of Saint Saviours Secondary School. Born and raised in Owerri, Imo State, Divine has always been passionate about education, youth empowerment, and community development. His journey began with a dream to create a school where every child, regardless of background, could receive quality education and discover their unique talents.
          </p>
          <p>
            Divine is celebrated for his unwavering dedication, leadership, and compassion. He is a mentor to many, inspiring both students and teachers to strive for excellence and integrity. Under his guidance, the school has grown into a vibrant community where learning goes beyond the classroom, and every student is encouraged to dream big, work hard, and support one another.
          </p>
          <p>
            Divine Kelechi Nwaebee is also known for his involvement in local initiatives that uplift the youth and promote social responsibility. He regularly organizes workshops, seminars, and outreach programs to help students develop life skills, confidence, and a sense of purpose. His vision is to nurture future leaders who will make a positive impact in Nigeria and beyond.
          </p>
          <p>
            Through his kindness, wisdom, and tireless work, Divine has touched countless lives. His legacy is seen in the success stories of graduates who have gone on to excel in academics, careers, and service to their communities. Saint Saviours Secondary School stands as a testament to his belief that education is the key to a brighter future for all.
          </p>
        </div>
      </div>
      <h2 style={{color:'#003366'}}>Our Values</h2>
      <ul>
        <li>Quality teaching and learning</li>
        <li>Respect, kindness, and teamwork</li>
        <li>Encouraging creativity and curiosity</li>
        <li>Building confidence and leadership</li>
        <li>Welcoming students from all backgrounds</li>
      </ul>
      <h2 style={{color:'#003366'}}>Activities & Facilities</h2>
      <ul>
        <li>Modern classrooms and science labs</li>
        <li>Computer and technology centers</li>
        <li>Sports, music, and art programs</li>
        <li>Clubs and leadership opportunities</li>
        <li>Supportive teachers and staff</li>
      </ul>
      <p style={{marginTop:'1rem'}}>We believe every child can succeed. Join us and become part of our school family!</p>
    </div>
  );
}

export default About;
