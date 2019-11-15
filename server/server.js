var express = require("express"),
  app = express(),
  port = process.env.PORT || 7003,
  mongoose = require("mongoose"),
  Task = require("./api/models/todoListModel.js"), //created model loading here
  bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// mongoose instance connection url connection
const uri = process.env.ATLAS_URI;

mongoose
  .connect(
    uri,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

var routes = require("./api/routes/todoListRoutes"); //importing routes
routes(app); //register the routes
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

/*
const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://flaminia:futurecoder2019@cluster0-kydb2.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
client.connect(err => {
  const collection = client.db("test").collection("tasks");
  // perform actions on the collection object
  //client.close();
});
*/
