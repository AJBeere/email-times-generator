import React, { useState, useEffect } from 'react';
import GenerateTimesForm from './GenerateTimesForm';
import Display from './Display';
import Timeline from './Timeline';

function App() {
  const [emailTimes, setEmailTimes] = useState([]);
  const [display, setDisplay] = useState('Display');

  useEffect(() => {
    const getEmailTimes = async () => {
      try {
        const res = await fetch('http://localhost:5000/get-email-times');
        const data = await res.json();
        setEmailTimes(data);
        console.log(data)
      } catch(err) {
        console.log(err);
      }
    }
    getEmailTimes();
  }, []);

  const handleToggle = () => {
    if (display === 'Display') {
      setDisplay('Timeline');
    } else {
      setDisplay('Display');
    }
  }

  const handleEmailTimesUpdate = (newEmailTimes) => {
    setEmailTimes(newEmailTimes);
  }

  return (
    <>
      <GenerateTimesForm emailTimes={emailTimes} handleEmailTimesUpdate={handleEmailTimesUpdate} />
      {emailTimes.length > 0 && (
        <button className="toggle" onClick={handleToggle}>
          {display === 'Display' ? 'Show Timeline' : 'Show Times'}
        </button>
      )}
      {display === 'Display' && <Display emailTimes={emailTimes} />}
      {display === 'Timeline' && <Timeline emailTimes={emailTimes} />}
    </>
  );
}

export default App;
