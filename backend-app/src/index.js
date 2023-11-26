const express = require('express');
const path = require('path');
const db = require('./db')
const app = express();


// Express global config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes middleware

app.listen(3000, async () => {
  console.log('Server running in port', 3000);
  // true significa que se eliminarán las tablas y se volverán a crear cada que se inicie la app
  try {
    await db.sync({ force: false });
  } catch (err) {
    console.log(err);
  }
});