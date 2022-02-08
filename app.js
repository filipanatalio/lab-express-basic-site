const express = require("express");
const app = express();

app.use(express.static("public"));

//HOME ROUTE
app.get("/", (request, response, next) => {
  //console.log(request);
  //response.send('<h1>Welcome Ironhackers!</h1>');
  response.sendFile(__dirname + "/public/views/home.html");
});

//ABOUT ROUTE
app.get("/about", (request, response, next) => {
  //console.log(request);
  //response.send('<h1>Welcome Ironhackers!</h1>');
  response.sendFile(__dirname + "/public/views/about.html");
});

//WORKS ROUTE
app.get("/works", (request, response, next) => {
  //console.log(request);
  //response.send('<h1>Welcome Ironhackers!</h1>');
  response.sendFile(__dirname + "/public/views/works.html");
});

app.listen(3000, () => console.log("Server running on port 3000!"));
