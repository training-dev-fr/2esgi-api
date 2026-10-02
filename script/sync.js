const database = require('./../config/database.js');
const User = require('./../model/user.model.js');

async function sync(){
    await database.sync();
}

sync();