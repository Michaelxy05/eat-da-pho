CREATE DATABASE IF NOT EXISTS pho_db;
USE pho_db;

-- If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS pho;

-- Creating the pho table
CREATE TABLE pho (
    id int NOT NULL AUTO_INCREMENT,
    pho_name varchar(255) NOT NULL,
    devoured BOOL DEFAULT false,
    PRIMARY KEY (id)
);
