const cors = require('cors');
const morgan = require('morgan');
const express = require('express');

const app = express();

app.set('appName', 'Hotelia API - Jhon Camargo');
app.set('port', process.env.PORT || 64022);
app.set('host', process.env.HOST || '127.0.0.1');

const corsOptions = {
	origin: [process.env.ALLOWEB_HOST],
	credentials: true,
};

app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());

app.use(require('./routers/cards.router'));
app.use(require('./routers/infoFile.router'));
app.use(require('./routers/others.router'));

app.listen(app.get('port'), function () {
	console.log(`App '${app.get('appName')}' corriendo en el puerto ${app.get('port')}`.red);
	console.log(`Go to server: http://${app.get('host')}`.blue);
});

module.exports = app;
