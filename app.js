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

//Get cafes by id
app.get('/cafes/:id', (req, res) => {
    const cafesParameter = req.params.id;
    const sql = 'SELECT * FROM `Cafes` WHERE `Cafe_id` = ?';
    mysqlConnection.execute(sql,[cafesParameter], (err, results) => {
        res.send(results);
    })
});

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

//Get favorites by id
app.get('/favorites/:id', (req, res) => {
    const favoritesParameter = req.params.id;
    const sql = 'SELECT * FROM `favorites` WHERE `fav_id` = ?';
    mysqlConnection.execute(sql,[favoritesParameter], (err, results) => {
        res.send(results);
    })
});

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

//Get users by id
app.get('/users/:id', (req, res) => {
    const usersParameter = req.params.id;
    const sql = 'SELECT * FROM `users` WHERE `user_id` = ?';
    mysqlConnection.execute(sql,[usersParameter], (err, results) => {
        res.send(results);
    })
});

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

//Get product by id
app.get('/product/:id', (req, res) => {
    const productParameter = req.params.id;
    const sql = 'SELECT * FROM `product` WHERE `Product_id` = ?';
    mysqlConnection.execute(sql,[productParameter], (err, results) => {
        res.send(results);
    })
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

//vi mangler
app.get('/Cafe_product/:id', (req, res) => {
    const Cafe_productParameter = req.params.id;
    const sql = 'SELECT * FROM `Cafe_product` WHERE `user_id, cafe_id` = ?';
    mysqlConnection.execute(sql,[Cafe_productParameter], (err, results) => {
        res.send(results);
    })
});

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

//Get discribtion by id
app.get('/discribtion/:id', (req, res) => {
    const discribtionParameter = req.params.id;
    const sql = 'SELECT * FROM `discribtion` WHERE `discribtion_id` = ?';
    mysqlConnection.execute(sql,[discribtionParameter], (err, results) => {
        res.send(results);
    })
});

app.listen(port, () => { //Udskriver http://localhost:3000
    console.log(`Node.js REST API listening at http://localhost:${port}`);
});