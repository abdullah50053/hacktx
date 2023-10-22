require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

function sendMessage(message, outgoingPhoneNumber) {
  client.messages
    .create({
      body: message,
      from: "+18443871906",
      to: outgoingPhoneNumber,
    })
    .then((message) => console.log(message.sid));
}

export function messageAllEmployees() {
  const employees = [
    { name: "Tim", phoneNumber: "+14696056677" },
    { name: "Amrit", phoneNumber: "+18178881378" },
    { name: "Abdullah", phoneNumber: "+15106760469" },
    { name: "Farhan", phoneNumber: "+13462199977" },
  ];

  employees.forEach((employee) => {
    const message = `Hey ${employee.name}, have you spoken to Tim lately? We were wondering how he's doing.`;

    sendMessage(message, employee.phoneNumber);
  });
}

export function messageManager() {}
