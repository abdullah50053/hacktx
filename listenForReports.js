const { sendMessage } = require("./sendMessage");
const { connectToDB } = require("./databaseProvider");

async function listenForReports() {
  const db = await connectToDB();
  // You can now use the `db` instance to interact with your database
  const collection = await db.collection("reports");
  const changeStream = collection.watch();
  console.log("watching for changes in reports collection");
  changeStream.on("change", (next) => {
    console.log("new document written");
    sendMessage(
      "In order to better support your team, try to incorporate some sort of team building activities at work today.",
      "+14696056677"
    );
  });
}

listenForReports();
