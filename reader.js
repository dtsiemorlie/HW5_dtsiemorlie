const request = require("request");
const csv = require("fast-csv");
const countries = require("./countries");
const Case = require("./database");

const url =
  "https://raw.githubusercontent.com/dougymenns/covid-data/master/covid%2019%20data.csv";

cases = [];
function createStreamReader(url, countries, model) {
  csv
    .parseStream(request(url))
    .on("data", (row) => {
      if (countries.includes(row[3])) {
        cases.push({
          Country: row[3],
          Active: row[10],
          Confirmed: row[7],
          Deaths: row[8],
          Recoveries: row[9],
          Date: row[4].split(" ")[0],
        });
        console.log(cases);
      }
    })
    .on("end", () => {
      console.log("csv file successfully processed");

      model.insertMany(cases, () => {});
      /*return res.send(cases).status(200);*/
    });
}
module.exports = createStreamReader;
/*createStreamReader(url, countries, Case);*/
