const express = require("express");
const Camel = require("../models/camel");
const camelRouter = express.Router();

//add camel
camelRouter.post("/add", async (req, res) => {
  try {
    let newcamel = new Camel(req.body);
    let result = await newcamel.save();
    res.send({ camel: result, msg: "camel is added" });
  } catch (error) {
    console.log(error);
  }
});
//get all camels
camelRouter.get("/", async (req, res) => {
  try {
    let result = await Camel.find();
    res.send({ camel: result, msg: "all camels" });
  } catch (error) {
    console.log(error);
  }
});
//get camel by id
camelRouter.get("/:id", async (req, res) => {
  try {
    let result = await Camel.findById(req.params.id);
    res.send({ camel: result, msg: "one camel" });
  } catch (error) {
    console.log(error);
  }
});
//delete camel
camelRouter.delete("/:id", async (req, res) => {
  try {
    let result = await Camel.findByIdAndDelete(req.params.id);
    res.send({ msg: "camel is deleted" });
  } catch (error) {
    console.log(error);
  }
});
//update camel
camelRouter.put("/:id", async (req, res) => {
  try {
    let result = await Camel.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ Camel: "result", msg: "camel updated" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = camelRouter;
