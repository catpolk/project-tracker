DROP DATABASE IF EXISTS progress_db;


CREATE DATABASE project_db;

-- Use employee_db; --
USE project_db;

-- Creates the table "produce" within inventory_db --
CREATE TABLE team (
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
  id INT NOT NULL PRIMARY KEY,
  -- Makes a string column called "name" which cannot contain null --
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL
);

-- Add roles table --
CREATE TABLE roles (
    id INT PRIMARY KEY,
    responsibility VARCHAR(100) NOT NULL,
    future_plans VARCHAR(100) 
);
=======


