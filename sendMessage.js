require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

function sendMessage(message) {
  client.messages
    .create({
      body: `Hey ${message.name}, have you talked to Kelly lately? We wanted to check in to see how she was doing`,
      from: "+18443871906",
      to: message.phoneNumber,
    })
    .then((message) => console.log(message.sid));
}

const employees = [
  { name: "Tim", phoneNumber: "+14696056677" },
  { name: "Amrit", phoneNumber: "+18178881378" },
  { name: "Abdullah", phoneNumber: "+15106760469" },
  { name: "Farhan", phoneNumber: "+13462199977" },
];

employees.forEach((employee) => {
  sendMessage(employee);
});
