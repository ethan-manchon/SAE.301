CREATE TABLE Category (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);
CREATE TABLE Product (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    volume DECIMAL(10, 2),
    stock INT,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES Category(id)
);
CREATE TABLE Image (
    id INT PRIMARY KEY AUTO_INCREMENT,
    url VARCHAR(255) NOT NULL
);
CREATE TABLE ProductImage (
    product_id INT,
    image_id INT,
    PRIMARY KEY (product_id, image_id),
    FOREIGN KEY (product_id) REFERENCES Product(id),
    FOREIGN KEY (image_id) REFERENCES Image(id)
);

CREATE TABLE Colour (
    id INT PRIMARY KEY AUTO_INCREMENT,
    url VARCHAR(255) NOT NULL
);
CREATE TABLE ProductColour (
    product_id INT,
    colour_id INT,
    PRIMARY KEY (product_id, colour_id),
    FOREIGN KEY (product_id) REFERENCES Product(id),
    FOREIGN KEY (colour_id) REFERENCES Colour(id)
);
CREATE TABLE Size (
    id INT PRIMARY KEY AUTO_INCREMENT,
    size VARCHAR(50) NOT NULL
);

CREATE TABLE ProductSize (
    product_id INT,
    size_id INT,
    PRIMARY KEY (product_id, size_id),
    FOREIGN KEY (product_id) REFERENCES Product(id),
    FOREIGN KEY (size_id) REFERENCES Size(id)
);
CREATE TABLE Compte (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    permission VARCHAR(50) NOT NULL
);
CREATE TABLE Commande (
    id INT PRIMARY KEY AUTO_INCREMENT,
    numero INT,
    product_id INT,
    FOREIGN KEY (product_id) REFERENCES Product(id)
);

CREATE TABLE Historique (
    commande_id INT,
    compte_id INT,
    FOREIGN KEY (compte_id) REFERENCES Compte(id),
    FOREIGN KEY (commande_id) REFERENCES Commande(id)
);
CREATE TABLE CodePromo (
    id INT PRIMARY KEY AUTO_INCREMENT,
    reduction DECIMAL(4, 2) NOT NULL CHECK (reduction > 0)
);

INSERT INTO Category (name) VALUES ('Electronics'), ('Clothing'), ('Books');

INSERT INTO Product (name, price, description, volume, stock, category_id) VALUES
('Smartphone', 699.99, 'Latest model smartphone with advanced features', 0.5, 100, 1),
('Laptop', 999.99, 'High performance laptop', 2.5, 50, 1),
('T-Shirt', 19.99, 'Comfortable cotton t-shirt', NULL, 200, 2),
('Novel', 14.99, 'Bestselling novel', NULL, 150, 3);