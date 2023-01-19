import React from "react";

const Card = ({ time, emailNo, accountNo }) => {
  return (
    <div class="card">
      <div class="info">
        <h3 class="title">Account {accountNo} - Email {emailNo}</h3>
        <p>{time}</p>
      </div>
    </div>
  )
}

export default Card;