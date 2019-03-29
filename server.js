const express = require ('express');
const bodyParser = require ('body-parser');
const app = express ();
const PORT = process.env.PORT || 8080;
app.use (bodyParser.json ());
app.use (
  bodyParser.urlencoded ({
    extended: true,
  })
);

require ('./routes') (app);
app.listen (PORT, function () {
  let name = 'anurag';
  console.log (`a server has started for ${name} on port ${PORT}`);
});
