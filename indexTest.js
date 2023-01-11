const { error } = require('console');
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
// app.use(express.static('index'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('pages'));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nareshsit7@gmail.com',
    pass: 'xdocuqqhhnlwyllg',
  },
});
const options = {
  from: 'nareshsit7@gmail.com',
  to: '',
  subject: '',
  text: '',
};
app.post('/validate', (req, res) => {
  console.log(req.body, 'validate');
  const { email, subject, text } = req.body;
  options.to = email;
  options.subject = subject;
  options.text = text;
  transporter.sendMail(options, (err, info) => {
    console.log(options, 'options');
    if (err) {
      console.log('Error Occured', err.message);
      res.send('Error Occured');
    } else {
      console.log('Mail is sent');
      res.send('Email Sent');
    }
  });
});

/*
Font Awesome Icns link
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
*/

app.listen(3010, () => console.log('server is running....'));
