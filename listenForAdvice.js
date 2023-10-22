const { sendMessage } = require("./sendMessage");
const { connectToDB } = require("./databaseProvider");

async function listenForReports() {
  const db = await connectToDB();
  // You can now use the `db` instance to interact with your database
  const collection = await db.collection("advice");
  const changeStream = collection.watch();
  console.log("watching for changes in advice collection");
  changeStream.on("change", async (next) => {

    const changedDocument = next.fullDocument;
    console.log(changedDocument + " document written");
    
    
    sendMessage(
        changedDocument.adviceMessage,
      "+14696056677"
    );
  });
}

listenForReports();
