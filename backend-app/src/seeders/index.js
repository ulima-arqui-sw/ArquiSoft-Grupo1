const db = require('../db');
require('../models');

const main = () => {
  db.sync({ force: true }).then(() => {
    console.log('DB Connected');
    require('./usuarios')()
      .then(() => {
        db.close().then(() => {
          process.exit();
        });
      });
  });
}

main();
