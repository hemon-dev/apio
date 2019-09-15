const express = require('express');
const chalk = require('chalk');
const bodyParser = require('body-parser');
const mongoUtils = require('./api/mongoUtils');

const app = express();

app.use(bodyParser.json());

// Import users routes
const UserRoute = require('./api/routes/UserRoutes');

// Set port
const port = 5000;

//Route middleware
app.use('/api', UserRoute);

// Start server
app.listen(port, () => console.log(chalk.cyan(`Server started at port ` + chalk.redBright.bold(`${port}`))));