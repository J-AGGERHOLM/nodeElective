const express = require("express");

const app = express();

console.log(new Date()); // UTC date + time

console.log(Date()); // Local time

console.log(Date.now()); // unix epoch time (Seconds since Jan. 1st 1970)

//task create a route that returns today's day

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

app.get("/today/v1", (req, res) => {
  const date = new Date().getDay() % 7; //or change the order of the array to sunday first
  const day = days[date];
  res.send({ data: day });
});


app.get("/today/v2", (req, res) => {
  const currentDay = new Date().toLocaleDateString("en-uk", { weekday: "long" });
  res.send({data: currentDay})
});



app.get("/months/v1", (req, res) => {
  const date = new Date();
  const month = months[date.getMonth()];

  res.send({ data: month });
});

app.get("/months/v2", (req, res) => {
  const currentMonth = new Date().toLocaleString("en-uk", { month: "long" });
  res.send({ data: currentMonth });
});

/*falsy values:
false, null, undefined, NaN, "" (empty strings)
*/

app.listen(8080, (error) => {
  if (error) {
    //error by default is undefined
    console.log("Error starting the server");
  }

  console.log("server is running on port", 8080);
});
