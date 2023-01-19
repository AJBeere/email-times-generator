import express from 'express';
import emailTimes from './routes/emailTimes.js'
import mongoose from 'mongoose';
import EmailTimes from './models/emailTimes.js';

const app = express();

mongoose.connect('mongodb://localhost/emailTimesDB', { useNewUrlParser: true }, (err, db) => {
    if (err) {
        console.log(`Error ${err}`);
    }
    console.log('Successfully connected to the database');
});

// Express Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Routes
app.use('/', emailTimes)

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the homepage!');
});

app.post('/api/addData', (req, res) => {
  const data = req.body;
  console.log(data)
  const newData = new EmailTimes({
      startTime: data.startTime,
      endTime: data.endTime,
      numberOfEmails: data.numberOfEmails,
      numberOfAccounts: data.numberOfAccounts,
      emailTimes: data.emailTimes
  });
  newData.save((err, data) => {
      if (err) {
          res.status(500).send(err);
      }
      res.status(201).send(data);
  });
});

// Start Server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});