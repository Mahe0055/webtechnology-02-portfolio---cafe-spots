CREATE DATABASE IF NOT EXISTS cafe;

USE cafe;

DROP TABLE if exists Cafes;
DROP TABLE if exists Discribtion;
DROP TABLE if exists Users;
DROP TABLE if exists Favorites;
DROP TABLE if exists Product;
DROP TABLE if exists cafe_product;

CREATE TABLE Users (    
    User_id INTEGER,
    User_name VARCHAR(100),
    Study_card BOOLEAN,
    PRIMARY KEY (User_id)
);

CREATE TABLE Cafes (	
	Cafe_id INTEGER, 
	City VARCHAR(100), 
	Address VARCHAR(100), 
    Cafees_name varchar(40) NOT NULL,
	PRIMARY KEY (Cafe_id)
);

CREATE TABLE Discribtion (    
    Discribtion_id INTEGER,
    Sound_level VARCHAR(10),
    Cafe_size VARCHAR(10),
    Price_range VARCHAR(10),
    Cafe_id INTEGER,
    Lightning_level VARCHAR(10),
    Wifi BOOLEAN,
    Study_discount BOOLEAN,
    PRIMARY KEY (Discribtion_id),
    FOREIGN KEY (Cafe_id) REFERENCES Cafes(Cafe_id)
);

CREATE TABLE Favorites (    
    Fav_id INTEGER,
    Cafe_id INTEGER,
    User_id INTEGER,
    PRIMARY KEY (Fav_id),
    FOREIGN KEY (Cafe_id) REFERENCES Cafes(Cafe_id),
    FOREIGN KEY (User_id) REFERENCES Users(User_id)
);

CREATE TABLE Product (    
    Product_id INTEGER,
    Product_name VARCHAR(100),
    User_id INTEGER,
    PRIMARY KEY (Product_id),
    FOREIGN KEY (User_id) REFERENCES Users(User_id)
);

CREATE TABLE Cafe_product (    
    Product_id INTEGER,
    Cafe_id INTEGER,
    FOREIGN KEY (Product_id) REFERENCES Product(Product_id),
    FOREIGN KEY (Cafe_id) REFERENCES Cafes(Cafe_id)
);

Insert into Users (user_id,user_name,study_card) values (1,'Amalie', true);
Insert into Users (user_id,user_name,study_card) values (2,'Maheen', true);
Insert into Users (user_id,user_name,study_card) values (3,'Klara', true);
Insert into Users (user_id,user_name,study_card) values (4,'Mille', false);

Insert into Cafes (Cafe_id,Cafees_name,City,Address) values (1,'Paludans bogcafe','Copenhagen','Fiolstræde 10, 1171 København');
Insert into Cafes (Cafe_id,Cafees_name,City,Address) values (2,'Bastard cafe',"Copenhagen",'Rådhusstræde 13, 1466 København K');
Insert into Cafes (Cafe_id,Cafees_name,City,Address) values (3,'Starbucks',"Copenhagen", 'Falkoner Alle, Frederiksberg Centret 21, 2000 Frederiksberg');
Insert into Cafes (Cafe_id,Cafees_name,City,Address) values (4,'Coffee Collective',"Copenhagen", 'Sankt Hans Torv 3, 2200 København');
Insert into Cafes (Cafe_id,Cafees_name,City,Address) values (5,'Lagekagehuset',"Copenhagen", 'Frederiksberggade 21, 1459 København K');
Insert into Cafes (Cafe_id,Cafees_name,City,Address) values (6,'Café Vintage',"Copenhagen", 'Sløjfen 2, 2000 Frederiksberg');
Insert into Cafes (Cafe_id,Cafees_name,City,Address) values (7,'Kaffehuset',"Copenhagen", 'Nørrebrogade 183, 2200 København');
Insert into Cafes (Cafe_id,Cafees_name,City,Address) values (8,'Espresso House',"Copenhagen", 'Frederiksborggade 24, 1360 København');
Insert into Cafes (Cafe_id,Cafees_name,City,Address) values (9,'Kaffestuen',"Copenhagen", 'Østerbrogade 150, 2100 København');
Insert into Cafes (Cafe_id,Cafees_name,City,Address) values (10,'Brødflov ',"Copenhagen", 'Falkoner Alle 36, 2000 Frederiksberg');
Insert into Cafes (Cafe_id,Cafees_name,City,Address) values (11,'Emmerys ',"Copenhagen", 'Nørre Voldgade, cnr, Frederiksborggade 15, 1360 København');
Insert into Cafes (Cafe_id,Cafees_name,City,Address) values (12,'20 grams',"Copenhagen", 'Rosengården 13, 1174 København');

Insert into Discribtion (Discribtion_id, Sound_level, Cafe_size, Price_range, Cafe_id, Lightning_level, Wifi, Study_discount) values (1,"low","small","cheap", 1, "low",true,true);
Insert into Discribtion (Discribtion_id, Sound_level, Cafe_size, Price_range, Cafe_id, Lightning_level, Wifi, Study_discount) values (2,"between","medium", "between",2, "medium",true,true);
Insert into Discribtion (Discribtion_id, Sound_level, Cafe_size, Price_range, Cafe_id, Lightning_level, Wifi, Study_discount) values (3,"high","big","expensive",3,"high",false,true);
Insert into Discribtion (Discribtion_id, Sound_level, Cafe_size, Price_range, Cafe_id, Lightning_level, Wifi, Study_discount) values (4,"low","small","cheap", 4, "low",true,false);
Insert into Discribtion (Discribtion_id, Sound_level, Cafe_size, Price_range, Cafe_id, Lightning_level, Wifi, Study_discount) values (5,"between","medium", "between",5, "medium",true,true);
Insert into Discribtion (Discribtion_id, Sound_level, Cafe_size, Price_range, Cafe_id, Lightning_level, Wifi, Study_discount) values (6,"high","big","expensive",6,"high",true,true);
Insert into Discribtion (Discribtion_id, Sound_level, Cafe_size, Price_range, Cafe_id, Lightning_level, Wifi, Study_discount) values (7,"low","small","cheap", 7, "low",true,false);
Insert into Discribtion (Discribtion_id, Sound_level, Cafe_size, Price_range, Cafe_id, Lightning_level, Wifi, Study_discount) values (8,"between","medium", "mellem",8, "medium",false,true);
Insert into Discribtion (Discribtion_id, Sound_level, Cafe_size, Price_range, Cafe_id, Lightning_level, Wifi, Study_discount) values (9,"high","big","expensive",9,"high",true,true);
Insert into Discribtion (Discribtion_id, Sound_level, Cafe_size, Price_range, Cafe_id, Lightning_level, Wifi, Study_discount) values (10,"high","big","expensive",10,"low",true,true);
Insert into Discribtion (Discribtion_id, Sound_level, Cafe_size, Price_range, Cafe_id, Lightning_level, Wifi, Study_discount) values (11,"between","medium", "between",8, "mediums",false,true);
Insert into Discribtion (Discribtion_id, Sound_level, Cafe_size, Price_range, Cafe_id, Lightning_level, Wifi, Study_discount) values (12,"high","big","expensive",9,"high",true,true);

insert into Favorites (Fav_id, Cafe_id, User_id) values (1, 4, 1);
insert into Favorites (Fav_id, Cafe_id, User_id) values (2, 12,2);
insert into Favorites (Fav_id, Cafe_id, User_id) values (3, 11,3);
insert into Favorites (Fav_id, Cafe_id, User_id) values (4, 9,4);

Insert into Product (Product_id,Product_name, User_id) values (1,'Cafe latte',1);
Insert into Product (Product_id,Product_name, User_id) values (2,'Capuchino', 2);
Insert into Product (Product_id,Product_name, User_id) values (3,'Hot chocolate', 3);
Insert into Product (Product_id,Product_name, User_id) values (4,'Toast', 4);
Insert into Product (Product_id,Product_name, User_id) values (5,'Blueberry Muffin', 1);
Insert into Product (Product_id,Product_name, User_id) values (6,'Apple pie', 3);

Insert into Cafe_product (Product_id,cafe_id) values (1,1);
Insert into Cafe_product (Product_id,cafe_id) values (2,2);
Insert into Cafe_product (Product_id,cafe_id) values (3,3);
Insert into Cafe_product (Product_id,cafe_id) values (4,4);
Insert into Cafe_product (Product_id,cafe_id) values (5,5);
Insert into Cafe_product (Product_id,cafe_id) values (6,6);
Insert into Cafe_product (Product_id,cafe_id) values (1,7);
Insert into Cafe_product (Product_id,cafe_id) values (2,8);
Insert into Cafe_product (Product_id,cafe_id) values (3,9);
Insert into Cafe_product (Product_id,cafe_id) values (4,10);
Insert into Cafe_product (Product_id,cafe_id) values (5,11);
Insert into Cafe_product (Product_id,cafe_id) values (6,12);