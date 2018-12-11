const express = require('express');
const app = express();

//make everything inside public available
app.use(express.static('public'));

// our first Route
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + "/views/homepage.html");
});

//route2!
app.get('/cat', (request, response, next) => {
  response.sendFile(__dirname + "/views/catpage.html");
});

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
});