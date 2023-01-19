import React from 'react';

const EmailTimes = ({ emailTimes }) => {
  return (
    <ul className='list'>
      {emailTimes.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  );
}

export default EmailTimes;