import React from "react";
import Card from "./Card";
import { transformForTimeline } from "../services/transformForTimeline";

const Timeline = ({ emailTimes }) => {
  // if (emailTimes.length === 0) return <p>Hello</p>

  const allEmailTImes = transformForTimeline(emailTimes);

  return (
    <div class="timeline">
      <div class="outer">
        {allEmailTImes.map((email, index) => {
          return <Card time={email.time} emailNo={email.emailNo} accountNo={email.accountNo} />
        })}
      </div>
    </div>
  )
}

export default Timeline;