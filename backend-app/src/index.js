const express = require('express');
const server = require('socket.io'); 
const path = require('path');
const db = require('./db')
const app = express();
var cors = require('cors');
const redis = require('redis');
const client = redis.createClient(6379) 

const PORT = 3000

// Express global config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(require('./routes/index'));

const io = socket(app.listen(3001, () => {
  console.log('Server running in port 3001');
}));
// Routes middleware

app.listen(PORT, async () => {
  
  console.log('Server running in port', PORT);
  // true significa que se eliminarán las tablas y se volverán a crear cada que se inicie la app
  try {
    await client.connect()
    await db.sync({ force: false });
  } catch (err) {
    console.log(err);
  }
});


module.exports = client
