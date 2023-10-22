// db.js
const { MongoClient, ServerApiVersion } = require("mongodb");

const uri =
  "mongodb+srv://hacker:ffzK61HllJvM19St@cluster0.acqccxh.mongodb.net/?retryWrites=true&w=majority";

let _db;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectToDB() {
  if (_db) {
    return _db;
  }

  await client.connect();
  _db = client.db("db");
  return _db;
}

module.exports = { connectToDB };
