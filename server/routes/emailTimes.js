import express from 'express';
import generateEmailTimes from '../utils/generateEmailTimes.js';
import EmailTimes from '../models/emailTimes.js';

const router = express.Router();

// router.get('/get-email-times', (req, res) => {
//   EmailTimes.find({}, (err, data) => {
//       if (err) {
//           res.status(500).send(err);
//       }
//       if (data.length > 0) {
//         res.status(200).send(data.sort((a, b) => b.timestamp - a.timestamp)[0].emailTimes);
//       } else {
//         res.status(200).send([]);
//       }
//   });
// });

router.get('/get-email-times', (req, res) => {
  EmailTimes.find().sort({ timestamp: -1 }).limit(1)
      .exec((err, data) => {
          if (err) {
              res.status(500).send(err);
          }
          if (data.length > 0) {
            res.status(200).send(data[0].emailTimes);
          } else {
            res.status(200).send([]);
          }
      });
});

router.post('/generate-email-times', (req, res) => {
  const { numberOfEmails, startTime, endTime, numberOfAccounts } = req.body;
  const emailTimes = [];

  for (let i = 0; i < numberOfAccounts; i++) {
    emailTimes.push(generateEmailTimes(numberOfEmails, startTime, endTime));
  }

  const emailTimesModel = new EmailTimes({
    numberOfEmails,
    startTime,
    endTime,
    numberOfAccounts,
    emailTimes
  });

  emailTimesModel.save((err, data) => {
      if (err) {
          res.send(err);
      } else {
          res.json({
              emailTimes
          });
      }
  });
});

router.delete('/delete-all-email-times', (req, res) => {
  EmailTimes.deleteMany({}, (err) => {
      if (err) {
          res.status(500).send(err);
      } else {
          res.sendStatus(204);
      }
  });
});

export default router;