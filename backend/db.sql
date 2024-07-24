CREATE DATABASE student_management_db;
USE student_management_db;

CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  image VARCHAR(255) DEFAULT NULL
);

INSERT INTO `students` (`id`, `name`, `email`, `phone`, `image`) VALUES
(1, 'Me Minion', 'minion.me@newzydev.com', '0654836545', '1721786673447-416736814_759759022847105_3968248449604532942_n.jpg');