const express = require('express');
const chalk = require('chalk');
const bodyParser = require('body-parser');
const mongoUtils = require('./api/mongoUtils');

const app = express();

app.use(bodyParser.json());

// IMPORT USER ROUTES
const UserRoute = require('./api/routes/UserRoutes');

// SET PORT
const port = 5000;

// ROUTE MIDDLEWARE
app.use('/api', UserRoute);

// START SERVER
app.listen(port, () => console.log(chalk.cyan(`Server started at port ` + chalk.redBright.bold(`${port}`))));