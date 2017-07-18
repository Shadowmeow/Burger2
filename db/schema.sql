CREATE DATABASE burgers_db;
USE burgers_db;


CREATE TABLE burgers
(
	id int(10) NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);

USE burgers_db;

INSERT INTO burgers (burger_name, devoured, date) VALUES ("Bacon Burger", false, CURRENT_TIMESTAMP);
INSERT INTO burgers (burger_name, devoured, date) VALUES ("Half Pounder", false, CURRENT_TIMESTAMP);
INSERT INTO burgers (burger_name, devoured, date) VALUES ("Texas", false, CURRENT_TIMESTAMP);