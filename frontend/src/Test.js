import React, { useState } from 'react';

const Test = () => {
  const [formData, setFormData] = useState({
    name: '',
    day: '',
    time: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Generate time options from 9 AM to 4 PM (9:00 to 4:00)
  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 9; hour <= 16; hour++) {
      const hourFormatted = hour < 10 ? `0${hour}` : hour;
      options.push(`${hourFormatted}:00`);
      if (hour !== 16) {  // Skip adding 16:30
        options.push(`${hourFormatted}:30`);
      }
    }
    return options;
  };

  // Handle day selection to ensure Monday to Friday only
  const handleDayChange = (e) => {
    const selectedDay = new Date(e.target.value);
    const dayOfWeek = selectedDay.getDay(); // 0 = Sunday, 6 = Saturday

    if (dayOfWeek === 0 || dayOfWeek === 6) {
      setErrorMessage("Please select a weekday (Monday to Friday).");
    } else {
      setErrorMessage('');
      setFormData({ ...formData, day: e.target.value });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.day || !formData.time) {
      setErrorMessage("All fields are required.");
      return;
    }
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

        {/* Day Selection (Monday to Friday only) */}
        <div>
          <label htmlFor="day" className="block text-sm font-semibold">Select Day:</label>
          <input
            type="date"
            id="day"
            name="day"
            value={formData.day}
            onChange={handleDayChange} // Custom handler
            min="2024-01-01" // Can adjust this to the current date if needed
            className="w-full p-3 mt-2 border border-gray-300 rounded"
            required
          />
          {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
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
