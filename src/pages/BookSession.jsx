import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function BookSession() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');

  const timeSlots = ['6:00 PM – 7:30 PM', '7:30 PM – 9:00 PM'];

  const isReadyToSubmit = selectedDate && selectedTime;

  return (
    <div className="book-session">
      <div className="section-bar"></div>
      <h2 className="section-title">Book a Session</h2>
      <p className="section-subtitle">Pick a day and time that works best for you.</p>

      <form
        action="https://formsubmit.co/e6f4d53709924289c2fc6a92c5d25753"
        method="POST"
        className="booking-form"
      >
        {/* Hidden Fields for Submission Meta */}
        <input type="hidden" name="_subject" value="New Session Booking Request" />
        <input type="hidden" name="_template" value="box" />
        <input type="hidden" name="_captcha" value="false" />

        {/* Date (Read Only) */}
        <div className="calendar-container">
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
          />
          <input
            type="hidden"
            name="Selected Date"
            value={selectedDate.toDateString()}
          />
        </div>

        {/* Time Selection */}
        <div className="form-group">
          <label>Select a Time Slot</label>
          <div className="time-options">
            {timeSlots.map((slot) => (
              <button
                key={slot}
                type="button"
                className={`time-slot ${selectedTime === slot ? 'active' : ''}`}
                onClick={() => setSelectedTime(slot)}
              >
                {slot}
              </button>
            ))}
          </div>
          {/* Hidden input to send selected time */}
          <input
            type="hidden"
            name="Selected Time"
            value={selectedTime}
          />
        </div>

        {/* Only show submit button if both date + time selected */}
        {isReadyToSubmit && (
          <button type="submit" className="submit-button">
            Book Session
          </button>
        )}
      </form>
    </div>
  );
}
