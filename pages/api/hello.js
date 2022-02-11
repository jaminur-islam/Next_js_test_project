const { MongoClient } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.2uuip.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const run = async () => {
  try {
    client.connect();
    const database = client.db("test-web-data");
    const dataCollection = database.collection("test-data");

    app.get("/", async (req, res) => {
      res.send([{ name: "sagor" }]);
    });
  } finally {
    // client.close()
  }
};
run().catch(console.log(dir));

app.get("/", async (req, res) => {
  res.send("hi server ");
});

app.listen(port, (port) => {
  console.log(port);
});
