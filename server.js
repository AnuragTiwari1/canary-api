const express = require ('express');

const app = express ();
const PORT = process.env.PORT || 8080;

require ('./routes') (app);
app.listen (PORT, function () {
  let name = 'anurag';
  console.log (`a server has started for ${name} on port ${PORT}`);
});
