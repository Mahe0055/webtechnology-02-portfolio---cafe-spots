const express = require("express");
const cors = require("cors");
const app = express();
require('dotenv');
const mysqlConnection = require("./database");
const port = 3000;

const URL_FOR_FRONTEND = "YOUR_GITHUB_PAGE_ORIGIN_HERE";

app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

const cors_url = process.env.NODE_ENV === "prod" ? URL_FOR_FRONTEND : "*";
app.use(
    cors({
        origin: cors_url
    })
);

//Endpoint til cafes
app.get('/cafes', (req, res) => {
    mysqlConnection.query(
        "SELECT * FROM cafes;",
        (err, results, fields) => {
            if (!err) {
                res.json(results);
            } else {
                console.log(err);
            }
        }
    );
})

app.listen(port, () => { //Udskriver http://localhost:3000
    console.log(`Node.js REST API listening at http://localhost:${port}`);
});