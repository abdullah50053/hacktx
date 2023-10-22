require("dotenv").config();
const bodyParser = require("body-parser");

const express = require("express");
const { MessagingResponse } = require("twilio").twiml;
const { connectToDB } = require("./databaseProvider");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/sms", async (req, res) => {
  const twiml = new MessagingResponse();

  const userMessage = req.body.Body;

  //TODO: We have the user message for a peer review of the chosen employee, write it to the database.
  const document = {
    target: "Tim",
    response: userMessage,
  };

  const client = await connectToDB();
  const collection = await client.collection("surveys");

  collection.insertOne(document, function (err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    client.close();
  });

  twiml.message(
    "Thank you for letting me know. Remember, you can always reach out to these resources if you are ever struggling and need someone to talk to. https://www.betterhelp.com/"
  );

  res.type("text/xml").send(twiml.toString());
});

app.listen(3000, () => {
  console.log("Express server listening on port 3000");
});
