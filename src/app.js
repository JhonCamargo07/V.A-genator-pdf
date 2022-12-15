const express = require('express');
const morgan = require('morgan');
const colors = require('colors');
const nodemon = require('nodemon');
const { join } = require('path');
const cors = require('cors');

const corsOptions = {
	origin: process.env.ALLOWEB_HOST,
	credentials: true,
};

const app = express();

app.set('appName', 'Hotelia API - Jhon Camargo');
app.set('port', process.env.PORT || 64022);
app.set('host', process.env.HOST || '127.0.0.1');

app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.text());

app.use('/public', express.static(join(__dirname, 'public')));

app.use(require('./routers/cards.router.js'));

app.listen(app.get('port'), function () {
	console.log(`App '${app.get('appName')}' corriendo en el puerto ${app.get('port')}`.red);
	console.log(`Go to server: http://${app.get('host')}:${this.address().port.toString()}`.blue);
});

module.exports = app;
