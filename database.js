const mongoose = require("mongoose");
//local uri="mongodb://localhost:27017/NODECovid"
//Cloud uri ="mongodb+srv://Oscar:bWOxr0CAmfm2Lznj@cluster0.pkhui.mongodb.net/<dbname>?retryWrites=true&w=majority";

const uri =
  "mongodb+srv://<username>:<password>@cluster0.pkhui.mongodb.net/NODECovid?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const schema = mongoose.Schema({
  Country: String,
  Active: Number,
  Deaths: Number,
  Recoveries: Number,
  Confirmed: Number,
  Date: String,
});

const Case = mongoose.model("Case", schema);

module.exports = Case;
