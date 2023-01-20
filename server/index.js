import express from 'express';
import emailTimes from './routes/emailTimes.js'
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

mongoose.connect('mongodb://localhost/emailTimesDB', { useNewUrlParser: true }, (err, db) => {
    if (err) {
        console.log(`Error ${err}`);
    }
    console.log('Successfully connected to the database');
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use('/', emailTimes)

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the homepage!');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});


export default app;