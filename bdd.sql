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
    category_id INT NOT NULL,
    image VARCHAR(255),
    FOREIGN KEY (category_id) REFERENCES Category(id)
);

CREATE TABLE Options (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name ENUM('colour', 'size', 'type') NOT NULL,
    valeur ENUM('red', 'grey', 'smoked green', 'ochre yellow pax boucle', 'Eclipse Blue Wide Stripe', 'Nutmeg Orange Corduroy', 'dark oak', 'oak', 'small', 'medium', 'large', 'rectangle', 'round', '5 Light cluster pendant', '3 Light linear pendant'),
    url VARCHAR(255)
);

CREATE TABLE ProductOption (
    product_id INT,
    option_id INT,
    PRIMARY KEY (product_id, option_id),
    FOREIGN KEY (product_id) REFERENCES Product(id),
    FOREIGN KEY (option_id) REFERENCES Options(id)
);

INSERT INTO Options (name, valeur, url) VALUES
('colour', 'red', '../assets'),
('colour', 'grey', '../assets'),
('colour', 'smoked green', '../assets'),
('colour', 'ochre yellow pax boucle', '../assets'),
('colour', 'Eclipse Blue Wide Stripe', '../assets'),
('colour', 'Nutmeg Orange Corduroy', '../assets'),
('colour', 'dark oak', '../assets'),
('colour', 'oak', '../assets'),
('size', 'small', '../assets'),
('size', 'medium', '../assets'),
('size', 'large', '../assets'),
('type', 'rectangle', '../assets'),
('type', 'round', '../assets'),
('type', '5 Light cluster pendant', '../assets'),
('type', '3 Light linear pendant', '../assets');

INSERT INTO Category (name) VALUES 
('Light'), 
('Sofa'), 
('Table');

INSERT INTO Product (name, price, description, volume, category_id, image) VALUES 
('Leilani Rattan Floor Light', 329, 'A stylish floor light made from natural rattan, perfect for adding a touch of elegance to any room.', 0.5, 1, '../assets/products/Lighting/LightHanged.webp'),
('Astrid Table Lamp', 99, 'A modern table lamp with a sleek design, ideal for bedside tables or desks.', 0.2, 1, '../assets/products/Lighting/LightLava.webp'),
('Ilaria Extra Large Cluster Pendant', 359, 'An eye-catching pendant light with multiple glass shades, perfect for illuminating large spaces.', 1.0, 1, '../assets/products/Lighting/LightMush.webp'),
('Knox 2 Seater Sofa Bed', 399, 'A versatile 2 seater sofa bed that combines comfort and functionality, ideal for small living spaces.', 2.5, 2, '../assets/products/Sofa/SofaBed.webp'),
('Haru Single 1 Seater Sofa Bed', 350, 'A compact single seater sofa bed, perfect for guest rooms or small apartments.', 1.5, 2, '../assets/products/Sofa/SofaTable.webp'),
('Jasper Conran London Melrose Accent Chair', 749, 'A luxurious accent chair with a contemporary design, perfect for adding a touch of sophistication to any room.', 1.2, 2, '../assets/products/Sofa/SofaWaiting.webp'),
('Jenson Extendable 6 to 8 Seater Dining Table', 999, 'An extendable dining table made from high-quality wood, perfect for hosting dinner parties.', 3.0, 3, '../assets/products/Table/TableDining.webp'),
('Cora 6 Seater Dining Table', 949, 'A stylish dining table that comfortably seats six, ideal for family meals and gatherings.', 2.8, 3, '../assets/products/Table/TableRound.webp'),
('Haku 4 Seater Round Dining Table', 429, 'A round dining table with a minimalist design, perfect for small dining areas.', 1.8, 3, '../assets/products/Table/TableWood.webp');



-- CREATE TABLE Compte (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     first_name VARCHAR(255) NOT NULL,
--     name VARCHAR(255) NOT NULL,
--     email VARCHAR(255) NOT NULL UNIQUE,
--     password VARCHAR(255) NOT NULL,
--     permission VARCHAR(50) NOT NULL
-- );

-- CREATE TABLE Commande (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     numero INT,
--     product_id INT,
--     FOREIGN KEY (product_id) REFERENCES Product(id)
-- );

-- CREATE TABLE Historique (
--     commande_id INT,
--     compte_id INT,
--     FOREIGN KEY (compte_id) REFERENCES Compte(id),
--     FOREIGN KEY (commande_id) REFERENCES Commande(id)
-- );

-- CREATE TABLE CodePromo (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     reduction DECIMAL(4, 2) NOT NULL CHECK (reduction > 0)
-- );