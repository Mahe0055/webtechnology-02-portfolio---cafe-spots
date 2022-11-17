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
app.get('/Cafes', (req, res) => {
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

//Endpoint til Favorites
app.get('/Favorites', (req, res) => {
    mysqlConnection.query(
        "SELECT * FROM Favorites;",
        (err, results, fields) => {
            if (!err) {
                res.json(results);
            } else {
                console.log(err);
            }
        }
    );
})

//Endpoint til users
app.get('/users', (req, res) => {
    mysqlConnection.query(
        "SELECT * FROM users;",
        (err, results, fields) => {
            if (!err) {
                res.json(results);
            } else {
                console.log(err);
            }
        }
    );
})

//Endpoint til product
app.get('/product', (req, res) => {
    mysqlConnection.query(
        "SELECT * FROM product;",
        (err, results, fields) => {
            if (!err) {
                res.json(results);
            } else {
                console.log(err);
            }
        }
    );
})

app.get("/product/:id", (req, res) => {
    const id = req.params.id;
    let allProducts = [];
    console.log(id)
    mysqlConnection.query(
        "SELECT * FROM product;",
        (err, results, fields) => {
            if (!err) {
                return res.json(product);
            } else {
                console.log(err);
            }
        }
    );
    const product = allProducts.find(item => item.id == id);
    console.log(allProducts)
    return res.json(product);
});

//Endpoint til cafe_product
app.get('/Cafe_product', (req, res) => {
    mysqlConnection.query(
        "SELECT * FROM Cafe_product;",
        (err, results, fields) => {
            if (!err) {
                res.json(results);
            } else {
                console.log(err);
            }
        }
    );
})

//Endpoint til Discribtion
app.get('/Discribtion', (req, res) => {
    mysqlConnection.query(
        "SELECT * FROM Discribtion;",
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