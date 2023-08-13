
const accountSid = 'AC81175e13e5b351587e1db01a42472cd2';
const authToken = '65e96021f5fb5cde48cbfcffbc1fd92f';
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        from: 'whatsapp:+14155238886',
        body: 'Hello there!',
        to: 'whatsapp:+5215515661651'
    })
    .then(message => console.log(message))
    .catch(err => console.log(err))