### Schema - burgers_db

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE ingredients
(
	id int NOT NULL AUTO_INCREMENT,
	ingredient_name varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	burger_desc varchar(500) NOT NULL,
	burger_cost int NOT NULL,
	ingredient_id int NOT NULL,
  devoured boolean,
	PRIMARY KEY (id),
	FOREIGN KEY (ingredient_id) REFERENCES ingredients(id)
);