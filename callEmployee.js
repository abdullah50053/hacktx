// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const ngrok_domain = process.env.NGROK_DOMAIN;
const client = require("twilio")(accountSid, authToken);

client.calls
  .create({
    record: true,
    url: `${ngrok_domain}/record`,
    recordingStatusCallback: `${ngrok_domain}/transcript`,
    to: "+14696056677",
    from: "+18443871906",
  })
  .then((call) => console.log(call.sid));
