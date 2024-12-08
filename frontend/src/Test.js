import React, { useState } from 'react';

const Test = () => {
  const [formData, setFormData] = useState({
    name: '',
    day: '',
    time: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Generate time options (e.g., "09:00", "09:30", "10:00", "10:30", etc.)
  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 0; hour < 24; hour++) {
      const hourFormatted = hour < 10 ? `0${hour}` : hour;
      options.push(`${hourFormatted}:00`);
      options.push(`${hourFormatted}:30`);
    }
    return options;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Schedule Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Day Selection */}
        <div>
          <label htmlFor="day" className="block text-sm font-semibold">Select Day:</label>
          <input
            type="date"
            id="day"
            name="day"
            value={formData.day}
            onChange={handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Time Selection */}
        <div>
          <label htmlFor="time" className="block text-sm font-semibold">Select Time:</label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded"
            required
          >
            <option value="">-- Select Time --</option>
            {generateTimeOptions().map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg w-full hover:bg-teal-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Test;
