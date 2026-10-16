const http = require('http');
const app = require('./app.js');
const database = require('./config/database.js');
const { associate } = require('./config/association.js');

async function launch() {
    try {
        const server = http.createServer(app);

        server.on("listening", () => {
            console.log("Le serveur est en route sur le port :" + 3000);
        })

        await database.authenticate();
        await associate();
        console.log("Connected to database");
        server.listen(3000);
    } catch (e) {
        console.error("Connection to database failed");
    }
}

launch();