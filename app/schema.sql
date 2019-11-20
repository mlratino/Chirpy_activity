DROP DATABASE IF EXISTS `sequelize_chirpy`;
CREATE DATABASE `sequelize_chirpy`;

Use sequelize_chirpy;

CREATE TABLE chirpy(
    id INT NOT NULL AUTO_INCREMENT,
    chirp VARCHAR(50) NOT NULL,
    user_name VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);