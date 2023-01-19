import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat.js';
dayjs.extend(customParseFormat);

export const transformForTimeline = (data) => {
  return data.map((account, accIdx) => {
    return account.map((time, timeIdx) => {
      return {
        time,
        accountNo: accIdx+1,
        emailNo: timeIdx+1,
      }
    });
  }).flat().sort((a, b) => {
    const timeA = dayjs(a.time, 'HH:mm');
    const timeB = dayjs(b.time, 'HH:mm');

    if (timeA.isBefore(timeB)) {
      return -1;
    } else if (timeA.isAfter(timeB)) {
      return 1;
    } else if (a.accountNo < b.accountNo) {
      return -1;
    } else {
      return 1;
    }
  });
}
