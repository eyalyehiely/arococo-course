import React, { useState } from 'react';

function UserDataForm() {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    location: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would send the data to Google Analytics
  };

  const cities = [
    'Tel Aviv',
    'Jerusalem',
    'Haifa',
    'Beer Sheva',
    'Eilat',
    'Netanya',
    'Herzliya',
    'Ramat Gan',
    'Ashdod'
  ];

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <div className="mb-4">
        <label className="block mb-2">Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Gender:</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2">Location:</label>
        <select
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select City</option>
          {cities.map(city => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      <button 
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}

export default UserDataForm;