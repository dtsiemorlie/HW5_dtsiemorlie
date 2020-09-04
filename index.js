const express = require("express");
const Case = require("./database");
const reader = require("./reader.js");
const countries = require("./countries");
const app = express();

app.get("/", (req, res) => {
  const country = req.query.country;
  const date = req.query.date;

  if (country && date) {
    Case.find({ Country: country, Date: date }, (err, docs) => {
      if (err) {
        return res.send().status(400);
      }
      return res.send(docs).status(200);
    });
  } else if (country) {
    Case.find({ Country: country }, (err, docs) => {
      if (err) {
        return res.send().status(400);
      }
      return res.send(docs).status(200);
    });
  } else if (date) {
    Case.find({ Date: date }, (err, docs) => {
      if (err) {
        return res.send().status(400);
      }
      return res.send(docs).status(200);
    });
  } else {
    Case.find((err, docs) => {
      if (err) {
        return res.send().status(400);
      }
      return res.send(docs).status(200);
    });
  }
});
/*return reader(url, countries, res);*/

app.listen(process.env.PORT, () => {
  console.log("server is running.........");
  /*process.env.PORT*/
});
