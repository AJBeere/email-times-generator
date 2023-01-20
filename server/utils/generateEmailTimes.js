import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat.js';
dayjs.extend(customParseFormat);

const generateEmailTimes = (numEmails, startTime, endTime) => {
  const randomTimes = [];
  const start = dayjs(startTime, 'HH:mm');
  const end = dayjs(endTime, 'HH:mm');

  let previousTime = start;
  let totalTimeRemaining = end.diff(start, 'minutes');

  for (let i = 0; i < numEmails; i++) {
    const randomMinutes = Math.floor(
      Math.random() * (totalTimeRemaining / (numEmails - i) + 1)
    );
    const randomTime = previousTime.add(randomMinutes, 'minutes').format('HH:mm');

    randomTimes.push(randomTime);
    previousTime = previousTime.add(randomMinutes, 'minutes');
    totalTimeRemaining -= randomMinutes;
  }

  return randomTimes;
};

export default generateEmailTimes;
