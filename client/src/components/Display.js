import React from "react";
import EmailTimes from "./EmailTimes";

const Display = ({ emailTimes }) => {
  if (emailTimes.length === 0) return (
    <p className="message">Enter a time window, the number of emails you want to send and how many accounts you want to send for to generate random email times</p>
  )
  return (
    <div className="lists-container">
      {emailTimes.map((arr, index) => (
        <EmailTimes emailTimes={arr} />
      ))}
    </div>
  );
};

export default Display;