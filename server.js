'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

var html = "<h1>Final Alligator Accounting!</h1>";

if (process.env.RUNNING_ENV) {
  html = html + `<p>Running on ${process.env.RUNNING_ENV}`;
}

if (process.env.SECRET) {
  html = html + `<p>The big secret is ${process.env.SECRET}`;
}

app.get('/', (req, res) => {
  res.send(html);
});

app.listen(PORT, HOST);

console.log(`Server running at http://${HOST}:${PORT}`);