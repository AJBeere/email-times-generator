import mongoose from 'mongoose';

const emailTimesSchema = new mongoose.Schema({
    timestamp: {type: Date, default: Date.now},
    startTime: {type: String, required: true},
    endTime: {type: String, required: true},
    numberOfEmails: {type: Number, required: true},
    numberOfAccounts: {type: Number, required: true},
    emailTimes: {type: [[String]], required: true}
});

const EmailTimes = mongoose.model('EmailTimes', emailTimesSchema);

export default EmailTimes;