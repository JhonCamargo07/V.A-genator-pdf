const cors = require('cors');
const { join } = require('path');
const morgan = require('morgan');
const colors = require('colors');
const express = require('express');
const nodemon = require('nodemon');
const session = require('express-session');

const app = express();

app.set('appName', 'Hotelia API - Jhon Camargo');
app.set('port', process.env.PORT || 64022);
app.set('host', process.env.HOST || '127.0.0.1');

const corsOptions = {
	origin: [process.env.ALLOWEB_HOST],
	credentials: true,
};

app.use(
	session({
		secret: process.env.JWT_SECRET,
		resave: false,
		saveUninitialized: true,
		cookie: {
			maxAge: 60 * 60 * 1000, // 1 hora en milisegundos
		},
	})
);

app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());

app.use(require('./routers/cards.router.js'));

app.listen(app.get('port'), function () {
	console.log(`App '${app.get('appName')}' corriendo en el puerto ${app.get('port')}`.red);
	console.log(`Go to server: http://${app.get('host')}`.blue);
});

module.exports = app;
