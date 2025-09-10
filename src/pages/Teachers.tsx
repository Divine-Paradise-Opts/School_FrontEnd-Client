const teachers = [
  { name: "Mr. Williams", subject: "Mathematics", age: 40, address: "Lagos" },
  { name: "Ms. Brown", subject: "English", age: 35, address: "Abuja" },
  { name: "Mrs. Green", subject: "Science", age: 38, address: "Port Harcourt" },
  { name: "Mr. Okafor", subject: "Biology", age: 42, address: "Owerri" },
  { name: "Mrs. Musa", subject: "Chemistry", age: 37, address: "Kano" },
  { name: "Mr. Adeyemi", subject: "Physics", age: 45, address: "Ibadan" },
  { name: "Ms. Eze", subject: "Literature", age: 33, address: "Enugu" },
  { name: "Mr. Bello", subject: "Geography", age: 39, address: "Kaduna" },
  { name: "Mrs. Hassan", subject: "Economics", age: 36, address: "Jos" },
  { name: "Mr. Uche", subject: "Government", age: 41, address: "Aba" },
  { name: "Ms. Adebayo", subject: "French", age: 34, address: "Oshogbo" },
  { name: "Mr. Chukwu", subject: "Mathematics", age: 38, address: "Onitsha" },
  { name: "Mrs. Danjuma", subject: "English", age: 37, address: "Maiduguri" },
  { name: "Mr. Ojo", subject: "Civic Education", age: 43, address: "Akure" },
  { name: "Ms. Nwosu", subject: "Computer Science", age: 29, address: "Awka" },
  { name: "Mr. Ibrahim", subject: "Islamic Studies", age: 44, address: "Sokoto" },
  { name: "Mrs. Okon", subject: "Home Economics", age: 32, address: "Uyo" },
  { name: "Mr. Yusuf", subject: "Agricultural Science", age: 39, address: "Minna" },
  { name: "Ms. Obi", subject: "Business Studies", age: 31, address: "Asaba" },
  { name: "Mr. Ezeh", subject: "History", age: 46, address: "Nsukka" },
  { name: "Mrs. Lawal", subject: "Mathematics", age: 36, address: "Ilorin" },
  { name: "Mr. Olamide", subject: "English", age: 35, address: "Abeokuta" },
  { name: "Ms. Okeke", subject: "Biology", age: 30, address: "Nnewi" },
  { name: "Mr. Musa", subject: "Chemistry", age: 38, address: "Gombe" },
  { name: "Mrs. Ojo", subject: "Physics", age: 37, address: "Ekiti" },
  { name: "Mr. Nwachukwu", subject: "Literature", age: 41, address: "Abakaliki" },
  { name: "Ms. Bello", subject: "Geography", age: 33, address: "Katsina" },
  { name: "Mr. Hassan", subject: "Economics", age: 40, address: "Makurdi" },
  { name: "Mrs. Udo", subject: "Government", age: 39, address: "Calabar" },
  { name: "Mr. Akin", subject: "French", age: 35, address: "Ife" },
  { name: "Ms. Chika", subject: "Mathematics", age: 28, address: "Owerri" },
  { name: "Mr. Okoro", subject: "English", age: 44, address: "Warri" },
  { name: "Mrs. Abdullahi", subject: "Biology", age: 36, address: "Bauchi" },
  { name: "Mr. Okechukwu", subject: "Chemistry", age: 38, address: "Lokoja" },
  { name: "Ms. Olatunji", subject: "Physics", age: 32, address: "Ado-Ekiti" },
  { name: "Mr. Nwankwo", subject: "Literature", age: 40, address: "Onitsha" },
  { name: "Mrs. Okafor", subject: "Geography", age: 35, address: "Owerri" },
  { name: "Mr. Suleiman", subject: "Economics", age: 42, address: "Kano" },
  { name: "Ms. Umeh", subject: "Government", age: 31, address: "Enugu" },
  { name: "Mr. Ogbu", subject: "French", age: 37, address: "Nsukka" },
  { name: "Mrs. Olamide", subject: "Mathematics", age: 34, address: "Ibadan" },
  { name: "Mr. Okoye", subject: "English", age: 39, address: "Awka" },
  { name: "Ms. Ibrahim", subject: "Biology", age: 33, address: "Sokoto" },
  { name: "Mr. Okon", subject: "Chemistry", age: 41, address: "Uyo" },
  { name: "Mrs. Yusuf", subject: "Physics", age: 36, address: "Minna" },
  { name: "Mr. Obi", subject: "Literature", age: 38, address: "Asaba" },
  { name: "Ms. Ezeh", subject: "Geography", age: 29, address: "Nsukka" },
  { name: "Mr. Lawal", subject: "Economics", age: 45, address: "Ilorin" },
  { name: "Mrs. Musa", subject: "Government", age: 37, address: "Kano" },
  { name: "Mr. Adeyemi", subject: "French", age: 44, address: "Ibadan" },
  { name: "Ms. Eze", subject: "Mathematics", age: 31, address: "Enugu" },
  { name: "Mr. Bello", subject: "English", age: 38, address: "Kaduna" },
  { name: "Mrs. Hassan", subject: "Biology", age: 36, address: "Jos" },
  { name: "Mr. Uche", subject: "Chemistry", age: 41, address: "Aba" },
  { name: "Ms. Adebayo", subject: "Physics", age: 34, address: "Oshogbo" },
  { name: "Mr. Chukwu", subject: "Literature", age: 38, address: "Onitsha" },
  { name: "Mrs. Danjuma", subject: "Geography", age: 37, address: "Maiduguri" },
  { name: "Mr. Ojo", subject: "Economics", age: 43, address: "Akure" },
  { name: "Ms. Nwosu", subject: "Computer Science", age: 29, address: "Awka" },
  { name: "Mr. Ibrahim", subject: "Islamic Studies", age: 44, address: "Sokoto" },
  { name: "Mrs. Okon", subject: "Home Economics", age: 32, address: "Uyo" },
  { name: "Mr. Yusuf", subject: "Agricultural Science", age: 39, address: "Minna" },
  { name: "Ms. Obi", subject: "Business Studies", age: 31, address: "Asaba" },
  { name: "Mr. Ezeh", subject: "History", age: 46, address: "Nsukka" },
  { name: "Mrs. Lawal", subject: "Mathematics", age: 36, address: "Ilorin" },
  { name: "Mr. Olamide", subject: "English", age: 35, address: "Abeokuta" },
  { name: "Ms. Okeke", subject: "Biology", age: 30, address: "Nnewi" },
  { name: "Mr. Musa", subject: "Chemistry", age: 38, address: "Gombe" },
  { name: "Mrs. Ojo", subject: "Physics", age: 37, address: "Ekiti" },
  { name: "Mr. Nwachukwu", subject: "Literature", age: 41, address: "Abakaliki" },
  { name: "Ms. Bello", subject: "Geography", age: 33, address: "Katsina" },
  { name: "Mr. Hassan", subject: "Economics", age: 40, address: "Makurdi" },
  { name: "Mrs. Udo", subject: "Government", age: 39, address: "Calabar" },
  { name: "Mr. Akin", subject: "French", age: 35, address: "Ife" },
  { name: "Ms. Chika", subject: "Mathematics", age: 28, address: "Owerri" },
  { name: "Mr. Okoro", subject: "English", age: 44, address: "Warri" },
  { name: "Mrs. Abdullahi", subject: "Biology", age: 36, address: "Bauchi" },
  { name: "Mr. Okechukwu", subject: "Chemistry", age: 38, address: "Lokoja" },
  { name: "Ms. Olatunji", subject: "Physics", age: 32, address: "Ado-Ekiti" },
  { name: "Mr. Nwankwo", subject: "Literature", age: 40, address: "Onitsha" },
  { name: "Mrs. Okafor", subject: "Geography", age: 35, address: "Owerri" },
  { name: "Mr. Suleiman", subject: "Economics", age: 42, address: "Kano" },
  { name: "Ms. Umeh", subject: "Government", age: 31, address: "Enugu" },
  { name: "Mr. Ogbu", subject: "French", age: 37, address: "Nsukka" },
  { name: "Mrs. Olamide", subject: "Mathematics", age: 34, address: "Ibadan" },
  { name: "Mr. Okoye", subject: "English", age: 39, address: "Awka" },
  { name: "Ms. Ibrahim", subject: "Biology", age: 33, address: "Sokoto" },
  { name: "Mr. Okon", subject: "Chemistry", age: 41, address: "Uyo" },
  { name: "Mrs. Yusuf", subject: "Physics", age: 36, address: "Minna" },
  { name: "Mr. Obi", subject: "Literature", age: 38, address: "Asaba" },
  { name: "Ms. Ezeh", subject: "Geography", age: 29, address: "Nsukka" },
  { name: "Mr. Lawal", subject: "Economics", age: 45, address: "Ilorin" },
  { name: "Mrs. Musa", subject: "Government", age: 37, address: "Kano" },
  { name: "Mr. Adeyemi", subject: "French", age: 44, address: "Ibadan" },
  { name: "Ms. Eze", subject: "Mathematics", age: 31, address: "Enugu" },
  { name: "Mr. Bello", subject: "English", age: 38, address: "Kaduna" },
  { name: "Mrs. Hassan", subject: "Biology", age: 36, address: "Jos" },
  { name: "Mr. Uche", subject: "Chemistry", age: 41, address: "Aba" },
  { name: "Ms. Adebayo", subject: "Physics", age: 34, address: "Oshogbo" },
  { name: "Mr. Chukwu", subject: "Literature", age: 38, address: "Onitsha" },
  { name: "Mrs. Danjuma", subject: "Geography", age: 37, address: "Maiduguri" },
  { name: "Mr. Ojo", subject: "Economics", age: 43, address: "Akure" },
  { name: "Ms. Nwosu", subject: "Computer Science", age: 29, address: "Awka" },
  { name: "Mr. Ibrahim", subject: "Islamic Studies", age: 44, address: "Sokoto" },
  { name: "Mrs. Okon", subject: "Home Economics", age: 32, address: "Uyo" },
  { name: "Mr. Yusuf", subject: "Agricultural Science", age: 39, address: "Minna" },
  { name: "Ms. Obi", subject: "Business Studies", age: 31, address: "Asaba" },
  { name: "Mr. Ezeh", subject: "History", age: 46, address: "Nsukka" },
];

function Teachers() {
  return (
    <div>
      <h1>Our Teachers</h1>
      <table style={{width:'100%',borderCollapse:'collapse',marginTop:'1rem',background:'#fff',borderRadius:'8px',overflow:'hidden',boxShadow:'0 2px 8px rgba(0,0,0,0.05)'}}>
        <thead style={{background:'#003366',color:'#fff'}}>
          <tr>
            <th style={{padding:'0.5rem'}}>Name</th>
            <th style={{padding:'0.5rem'}}>Subject</th>
            <th style={{padding:'0.5rem'}}>Age</th>
            <th style={{padding:'0.5rem'}}>Address</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((t, i) => (
            <tr key={i} style={{background:i%2?'#f0f6ff':'#fff'}}>
              <td style={{padding:'0.5rem',fontWeight:'bold'}}>{t.name}</td>
              <td style={{padding:'0.5rem'}}>{t.subject}</td>
              <td style={{padding:'0.5rem'}}>{t.age}</td>
              <td style={{padding:'0.5rem'}}>{t.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Teachers;
