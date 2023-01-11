const express = require('express');
// const Vonage = require('@vonage/server-sdk');

const app = express();
// const vonage = new Vonage({
//   apiKey: '326a45a4',
//   apiSecret: 'i7eEFPcm07mVxcYl',
// });
const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  apiKey: '326a45a4',
  apiSecret: 'i7eEFPcm07mVxcYl',
});

const from = 'Vonage APIs';
const to = '919010586402';
const text = 'A text message sent using the Vonage SMS API';

async function sendSMS() {
  await vonage.sms
    .send({ to, from, text })
    .then((resp) => {
      console.log('Message sent successfully');
      console.log(resp);
    })
    .catch((err) => {
      console.log('There was an error sending the messages.');
      console.error(err);
    });
}

sendSMS();

app.listen(3010, () => console.log('server is running....'));
