const express = require("express");
const ObjectId = require("mongodb").ObjectId;
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = 4000;

// middleware
app.use(cors());
app.use(express.json());

const { MongoClient } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.2uuip.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const run = async () => {
  try {
    await client.connect();
    const database = client.db("test-web");
    const dataCollection = database.collection("fakeData");

    app.get("/fakedata", async (req, res) => {
      const fakeData = await dataCollection.find({}).toArray();
      res.send(fakeData);
    });
    app.get("/fakedata/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const data = await dataCollection.findOne(query);
      res.send(data);
    });
  } finally {
    // await client.close();
  }
};
run().catch(console.dir);

app.get("/", async (req, res) => {
  res.send("server raning");
});

app.listen(port, () => {
  console.log(port);
});
