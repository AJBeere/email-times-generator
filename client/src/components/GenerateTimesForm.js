import React, { useState } from 'react';
import { generateEmailTimes } from '../services/emailTimeService';

const GenerateTimesForm = ({ emailTimes, handleEmailTimesUpdate }) => {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [numEmails, setNumEmails] = useState(0);
  const [numAccounts, setNumAccounts] = useState(0);

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
  };

  const handleNumEmailsChange = (e) => {
    setNumEmails(parseInt(e.target.value));
  };

  const handleNumAccountsChange = (e) => {
    setNumAccounts(parseInt(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      startTime: startTime,
      endTime: endTime,
      numberOfEmails: numEmails,
      numberOfAccounts: numAccounts
    };

    const newEmailTimes = await generateEmailTimes(body);
    handleEmailTimesUpdate(newEmailTimes);
    clearForm();
  };

  const clearForm = () => {
    setStartTime("");
    setEndTime("");
    setNumEmails(0);
    setNumAccounts(0);
  }

  return (
    <div>
      <h1>Generate Email Times</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Start Time:
          <input
            type="time"
            value={startTime}
            onChange={handleStartTimeChange}
          />
        </label>
        <label>
          End Time:
          <input
            type="time"
            value={endTime}
            onChange={handleEndTimeChange}
          />
        </label>
        <label>
          Number of Emails:
          <input
            type="number"
            value={numEmails}
            onChange={handleNumEmailsChange}
          />
        </label>
        <label>
          Number of Accounts:
          <input
            type="number"
            value={numAccounts}
            onChange={handleNumAccountsChange}
          />
        </label>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default GenerateTimesForm;