// Importaciones de terceros
require('dotenv').config();

// Codigo mio que importo
const Server = require('./models/server');

const server = new Server();

server.listen();
