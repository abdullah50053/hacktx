// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

client.calls
  .create({
    record: true,
    url: "https://1396-198-214-82-206.ngrok-free.app/record",
    recordingStatusCallback:
      "https://1396-198-214-82-206.ngrok-free.app/transcript",
    to: "+14696056677",
    from: "+18443871906",
  })
  .then((call) => console.log(call.sid));
