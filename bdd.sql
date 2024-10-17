
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
        name ENUM('colour', 'size', 'type'),
        valeur ENUM('red', 'grey', 'smoked green', 'ochre yellow pax boucle', 'grey marl pax boucle', 'Eclipse Blue Wide Stripe', 'Nutmeg Orange Corduroy', 'dark oak', 'oak', 
                    'small', 'medium', 'large', 'One', 
                    'rectangle', 'round', '5 Light cluster pendant', '3 Light linear pendant')
    );

    CREATE TABLE ProductOption (
        product_id INT,
        option_id INT,
        url VARCHAR(255),
        PRIMARY KEY (product_id, option_id),
        FOREIGN KEY (product_id) REFERENCES Product(id),
        FOREIGN KEY (option_id) REFERENCES Options(id)
    );

    INSERT INTO Options (name, valeur) VALUES
    ('size', 'One'),
    ('colour', 'red'),
    ('colour', 'grey'),
    ('colour', 'smoked green'),
    ('colour', 'ochre yellow pax boucle'),
    ('colour', 'grey marl pax boucle'),
    ('colour', 'Eclipse Blue Wide Stripe'),
    ('colour', 'Nutmeg Orange Corduroy'),
    ('colour', 'dark oak'),
    ('colour', 'oak'),
    ('size', 'small'),
    ('size', 'medium'),
    ('size', 'large'),
    ('type', 'rectangle'),
    ('type', 'round'),
    ('type', '5 Light cluster pendant'),
    ('type', '3 Light linear pendant');

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

    -- Utiliser des sous-requêtes pour obtenir les IDs des options
    INSERT INTO ProductOption (product_id, option_id, url) VALUES
    (1, (SELECT id FROM Options WHERE name = 'size' AND valeur = 'One' LIMIT 1), '/assets/products/Lighting/LightMush.webp'),
    (2, (SELECT id FROM Options WHERE name = 'colour' AND valeur = 'red' LIMIT 1), '/assets/products/Lighting/LightLava-red.webp'),
    (2, (SELECT id FROM Options WHERE name = 'colour' AND valeur = 'grey' LIMIT 1), '/assets/products/Lighting/LightLava-grey.webp'),
    (3, (SELECT id FROM Options WHERE name = 'type' AND valeur = '5 Light cluster pendant' LIMIT 1), '/assets/products/Lighting/LightHanged-5.webp'),
    (3, (SELECT id FROM Options WHERE name = 'type' AND valeur = '3 Light linear pendant' LIMIT 1), '/assets/products/Lighting/LightHanged-3.webp'),
    (4, (SELECT id FROM Options WHERE name = 'colour' AND valeur = 'smoked green' LIMIT 1), '/assets/products/Sofa/SofaBed-green.webp'),
    (4, (SELECT id FROM Options WHERE name = 'colour' AND valeur = 'ochre yellow pax boucle' LIMIT 1), '/assets/products/Sofa/SofaBed-y.webp'),
    (4, (SELECT id FROM Options WHERE name = 'colour' AND valeur = 'grey marl pax boucle' LIMIT 1), '/assets/products/Sofa/SofaBed-grey.webp'),
    (5, (SELECT id FROM Options WHERE name = 'colour' AND valeur = 'Nutmeg Orange Corduroy' LIMIT 1), '/assets/products/Sofa/SofaSingle-red.webp'),
    (5, (SELECT id FROM Options WHERE name = 'colour' AND valeur = 'Eclipse Blue Wide Stripe' LIMIT 1), '/assets/products/Sofa/SofaSingle-blue.webp'),
    (6, (SELECT id FROM Options WHERE name = 'size' AND valeur = 'One' LIMIT 1), '/assets/products/Sofa/SofaWaiting.webp'),
    (7, (SELECT id FROM Options WHERE name = 'colour' AND valeur = 'dark oak' LIMIT 1), '/assets/products/Table/TableDining-dark-r.webp'),
    (7, (SELECT id FROM Options WHERE name = 'colour' AND valeur = 'oak' LIMIT 1), '/assets/products/Table/TableDining-oak-r.webp'),
    (8, (SELECT id FROM Options WHERE name = 'size' AND valeur = 'One' LIMIT 1), '/assets/products/Table/TableWood.webp'),
    (9, (SELECT id FROM Options WHERE name = 'size' AND valeur = 'One' LIMIT 1), '/assets/products/Table/TableRound.webp');
