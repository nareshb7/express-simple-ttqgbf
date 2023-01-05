const express = require('express');
const app = express();
const port = 3010;
const path = require('path');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nareshsit7@gmail.com',
    pass: '',
  },
});
const options = {
  from: 'nareshsit7@gmail.com',
  to: 'nareshbjava7@gmail.com',
  subject: 'Testing mail from ExpressJS',
  text: 'It is third mail from nodemailer',
};

// app.use(express.static('static'));

app.get('/', (req, res) => {
  // res.sendFile(path.resolve('pages/index.html'));

  res.write('hello world');
  res.end();
});
app.get('/mail', (req, res) => {
  // res.sendFile(path.resolve('pages/index.html'));
  res.write('loading....');
  transporter.sendMail(options, (err, info) => {
    if (err) {
      res.write('Error Occured');
      console.log(err);
    } else {
      res.write('Email Sent');
      console.log('mail is sent', info.response);
    }
    res.end();
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
