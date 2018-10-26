const express = require('express');

var app = express();

app.get('/', (req, res) => {
   // res.status(200).send('Hello world!');

   // or
   // res.status(404).send({
   //    error: 'Page not found'

   // or
   res.status(404).send({
      error: 'Page not found',
      name: 'Todo App v1.0'
   });
});

app.get('/users', (req, res) => {
   res.status(200).send([
      {
         name: 'Jeff',
         age: 53
      },
      {
         name: 'Pat',
         age: 58
      },
      {
         name: 'Haley',
         age: 29
      }
   ])
});

app.listen(3000);

module.exports.app = app;
