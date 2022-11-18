const mysql = require("mysql2");

require('dotenv').config();
console.log(process.env.HOST);
console.log(process.env.PORT);
console.log(process.env.USER);
console.log(process.env.DATABASE);
console.log(process.env.PASSWORD);

const mysqlConnection = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    multipleStatements: true,
    ssl: {
        "rejectUnauthorized": this.host === "localhost"
    }
});

mysqlConnection.connect((err) => {
    if (!err) {
        console.log("Connected");
    } else {
        console.log(err);
        console.log("Connection Failed");
    }
});

module.exports = mysqlConnection;