
const database = require("mongoose")

const connect_db = async()=>{
    await database.connect(process.env.MONGO_URL)
    console.log(`Data base connected on Host ${database.connection.host.cyan}`);
};

module.exports = connect_db