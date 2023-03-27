const express = require("express");
const cors = require("cors");
const app = express();

const db_connect = require("./db_connect");
require("dotenv").config();
db_connect();
app.use(cors());
app.use(express.json());
app.use("/camel", require("./routes/camel"));

app.listen(process.env.PORT, (err) =>
  err ? console.log(err) : console.log("server is running")
);
