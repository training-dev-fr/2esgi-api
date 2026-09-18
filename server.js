const http = require('http');
const app = require('./app.js');

const server = http.createServer(app);

server.on("listening",() => {
    console.log("Le serveur est en route sur le port :" + 3000);
})

server.listen(3000);