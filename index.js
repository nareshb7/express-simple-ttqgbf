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

// MongoDB shell
// {returnNewDocument: true}

// Ref: https://docs.mongodb.com/manual/reference/method/db.collection.findOneAndUpdate/

// Mongoose
// {new: true}

// Ref: http://mongoosejs.com/docs/api.html#query_Query-findOneAndUpdate

// Node.js MongoDB Driver API:
// {returnOriginal: false}

// 2021 - Mongodb ^4.2.0 Update
// { returnDocument: 'after' }

// Ref: http://mongodb.github.io/node-m
