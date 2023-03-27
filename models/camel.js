const mongoose = require("mongoose");
const schema = mongoose.Schema;

const camelSchema = new schema({
  name:String,
  heartbeat: Number,
  temperature: Number,
});
const Camel = mongoose.model("Camel", camelSchema);
module.exports = Camel;
