require("dotenv").config();
const bodyParser = require("body-parser");

const express = require("express");
const { MessagingResponse } = require("twilio").twiml;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/sms", (req, res) => {
  const twiml = new MessagingResponse();

  const userMessage = req.body.Body;
  console.log(`User message: ${userMessage}`);

  //TODO: We have the user message for a peer review of the chosen employee, write it to the database.

  twiml.message("Thanks for your feedback!");

  res.type("text/xml").send(twiml.toString());
});

app.listen(3000, () => {
  console.log("Express server listening on port 3000");
});
