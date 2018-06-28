const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())

const db = require('./app/config/db.config.js');

// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
});

require('./app/route/customer.route.js')(app);

// Create a Server
 app.listen(8081, () => {
  console.log("App listening at localhost 8081")
})
