const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // await client.connect();

    app.get("/", (req, res) => {
      res.status(200).json({ message: "server is ok!" });
    });

    const toyCollection = client.db("toylandDB").collection("all-toy");

    app.get("/toySearchWithName/:text", async (req, res) => {
      const searchText = req.params.text;

      const result = await toyCollection
        .find({
          name: { $regex: searchText, $options: "i" },
        })
        .toArray();

      res.send(result);
    });

    app.get("/allToy", async (req, res) => {
      const result = await toyCollection.find().toArray();
      res.send(result);
    });

    app.get("/allToyQuantity", async (req, res) => {
      const result = await toyCollection.estimatedDocumentCount();
      res.send({ result });
    });

    app.get("/allToys", async (req, res) => {
      const page = parseInt(req.query.page) || 0;
      const limit = parseInt(req.query.limit) || 20;
      const skip = page * limit;
      const result = await toyCollection
        .find()
        .skip(skip)
        .limit(limit)
        .toArray();
      res.send(result);
    });

    app.get("/allToy/:categoryName", async (req, res) => {
      const param = req.params.categoryName;
      const query = { subCategory: param };
      const result = await toyCollection.find(query).toArray();
      res.send(result);
    });

    app.get("/singleToy/:_id", async (req, res) => {
      const params = req.params._id;
      const query = { _id: new ObjectId(params) };
      const result = await toyCollection.findOne(query);
      res.send(result);
    });

    app.get("/sellerToy/:email", async (req, res) => {
      const param = req.params.email;
      const query = { sellerEmail: param };
      const result = await toyCollection.find(query).toArray();
      res.send(result);
    });

    app.get("/sellerProduct/:email/toys", async (req, res) => {
      const param = req.params.email;
      const value = req.query.value;
      const filter = { sellerEmail: param };
      const sortValue = value === "low" ? 1 : -1;
      const result = await toyCollection
        .find(filter)
        .sort({ price: sortValue })
        .toArray();
      res.send(result);
    });

    app.post("/allToy", async (req, res) => {
      const toyInfoBody = req.body;
      const result = await toyCollection.insertOne(toyInfoBody);
      res.send(result);
    });

    app.patch("/allToy/:_id", async (req, res) => {
      const {
        name,
        subCategory,
        availableQuantity,
        pictureUrl,
        rating,
        price,
        detailDescription,
      } = req.body;

      const filter = { _id: new ObjectId(req.params._id) };
      const options = { upsert: true };
      const updatedToyInfo = {
        $set: {
          name,
          subCategory,
          availableQuantity,
          pictureUrl,
          rating,
          price,
          detailDescription,
        },
      };

      const result = await toyCollection.updateOne(
        filter,
        updatedToyInfo,
        options
      );
      res.send(result);
    });

    app.delete("/allToy/:_id", async (req, res) => {
      const param = req.params._id;
      const filter = { _id: new ObjectId(param) };
      const result = await toyCollection.deleteOne(filter);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");
  } finally {
    // await client.close();
  }
}

run().catch(console.dir);

app.listen(PORT, () => {
  console.log(`server running on port: http://localhost:${PORT}`);
});
