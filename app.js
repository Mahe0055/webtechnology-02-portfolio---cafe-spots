const express = require("express");
const cors = require("cors");
const app = express();
require('dotenv');
const mysqlConnection = require("./database");
const port = 3000;

const URL_FOR_FRONTEND = "YOUR_GITHUB_PAGE_ORIGIN_HERE";

app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded({extended: true})); //Parse URL-encoded bodies

const cors_url = process.env.NODE_ENV === "prod" ? URL_FOR_FRONTEND : "*";
app.use(
    cors({
        origin: cors_url
    })
);

//Endpoint til cafes. Returnerer alle cafeer i databasen
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
    mysqlConnection.execute(sql, [cafesParameter], (err, results) => {
        res.send(results);
    })
});

//Oprettelse af en ny cafe
app.post('/cafes/create', (req, res,) => {
    //Input værdierne i body'en
    const inputCafeId = req.body.Cafe_id;
    const inputCafeName = req.body.Cafees_name;
    const inputCafeCity = req.body.City;
    const inputCafeAdress = req.body.Address;

    //Oprettelse af cafe og man sender post "send" via Postman
    const sql = "Insert into Cafes (Cafe_id,Cafees_name,City,Address) values (?,?,?,?);"
    mysqlConnection.execute(sql, [inputCafeId, inputCafeName, inputCafeCity, inputCafeAdress], (err, results) => {
        res.send(results);
    })

    res.sendStatus(200); //Ok
});

//filtrere cafeer med query parameters
app.get('/cafequery', (req, res,) => {
    const city = req.query.city;

    //cafequery?city=copenhagen sættes efter localhost:3000
    const sql = 'SELECT * FROM `Cafes` WHERE `City` = ?';
    mysqlConnection.execute(sql, [city], (err, results) => {
        res.send(results);
    })
});

//Endpoint til Favorites. Returnerer alle Favorites i databasen
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

//Get users by favorites
app.get('/favorites/:id', (req, res) => {
    const favoritesParameter = req.params.id;
    const sql = 'SELECT * FROM `Favorites` WHERE `fav_id` = ?';
    mysqlConnection.execute(sql, [favoritesParameter], (err, results) => {
        res.send(results);
    })
});

//Endpoint til users. Returnerer alle users i databasen
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
    const sql = 'SELECT * FROM `Users` WHERE `User_id` = ?';
    mysqlConnection.execute(sql, [usersParameter], (err, results) => {
        res.send(results);
    })
});

//Endpoint til product. Returnerer alle product i databasen
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
    mysqlConnection.execute(sql, [productParameter], (err, results) => {
        res.send(results);
    })
});

//Endpoint til cafe_product. Returnerer alle cafe_product i databasen
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

//Get cafe_product by id
app.get('/Cafe_product/:productId/:cafeId', (req, res) => {
    const productId = req.params.productId;
    const cafeId = req.params.cafeId;
    const sql = 'SELECT * FROM `Cafe_product` WHERE `Product_id` = ? and `Cafe_id` = ?';
    mysqlConnection.execute(sql, [productId, cafeId], (err, results) => {
        res.send(results);
    })
});

//Endpoint til Discribtion. Returnerer alle discribtion i databasen
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
    const sql = 'SELECT * FROM `Discribtion` WHERE `Discribtion_id` = ?';
    mysqlConnection.execute(sql, [discribtionParameter], (err, results) => {
        res.send(results);
    })
});

app.listen(port, () => { //Udskriver http://localhost:3000
    console.log(`Node.js REST API listening at http://localhost:${port}`);
});