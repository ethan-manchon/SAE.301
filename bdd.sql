-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : mer. 23 oct. 2024 à 14:10
-- Version du serveur : 10.11.6-MariaDB-0+deb12u1
-- Version de PHP : 8.1.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `manchon3`
--

-- --------------------------------------------------------

--
-- Structure de la table `Cart`
--

CREATE TABLE `Cart` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Category`
--

CREATE TABLE `Category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Category`
--

INSERT INTO `Category` (`id`, `name`) VALUES
(1, 'Light'),
(2, 'Sofa'),
(3, 'Table');

-- --------------------------------------------------------

--
-- Structure de la table `Options`
--

CREATE TABLE `Options` (
  `id` int(11) NOT NULL,
  `name` enum('colour','size','type') DEFAULT NULL,
  `valeur` enum('red','grey','smoked green','ochre yellow pax boucle','grey marl pax boucle','Eclipse Blue Wide Stripe','Nutmeg Orange Corduroy','dark oak','oak','small','medium','large','One','rectangle','round','5 Light cluster pendant','3 Light linear pendant') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Options`
--

INSERT INTO `Options` (`id`, `name`, `valeur`) VALUES
(1, 'size', 'One'),
(2, 'colour', 'red'),
(3, 'colour', 'grey'),
(4, 'colour', 'smoked green'),
(5, 'colour', 'ochre yellow pax boucle'),
(6, 'colour', 'grey marl pax boucle'),
(7, 'colour', 'Eclipse Blue Wide Stripe'),
(8, 'colour', 'Nutmeg Orange Corduroy'),
(9, 'colour', 'dark oak'),
(10, 'colour', 'oak'),
(11, 'size', 'small'),
(12, 'size', 'medium'),
(13, 'size', 'large'),
(14, 'type', 'rectangle'),
(15, 'type', 'round'),
(16, 'type', '5 Light cluster pendant'),
(17, 'type', '3 Light linear pendant');

-- --------------------------------------------------------

--
-- Structure de la table `Orders`
--

CREATE TABLE `Orders` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `cart_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Product`
--

CREATE TABLE `Product` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `description` text DEFAULT NULL,
  `volume` decimal(10,2) DEFAULT NULL,
  `category_id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Product`
--

INSERT INTO `Product` (`id`, `name`, `price`, `description`, `volume`, `category_id`, `image`) VALUES
(1, 'Leilani Rattan Floor Light', '329.00', 'A stylish floor light made from natural rattan, perfect for adding a touch of elegance to any room.', '0.50', 1, '../assets/products/Lighting/LightMush-b.webp'),
(2, 'Astrid Table Lamp', '99.00', 'A modern table lamp with a sleek design, ideal for bedside tables or desks.', '0.20', 1, '../assets/products/Lighting/LightLava-red.webp'),
(3, 'Ilaria Extra Large Cluster Pendant', '359.00', 'An eye-catching pendant light with multiple glass shades, perfect for illuminating large spaces.', '1.00', 1, '../assets/products/Lighting/LightHanged-5.webp'),
(4, 'Knox 2 Seater Sofa Bed', '399.00', 'A versatile 2 seater sofa bed that combines comfort and functionality, ideal for small living spaces.', '2.50', 2, '../assets/products/Sofa/SofaTable-green.webp'),
(5, 'Haru Single 1 Seater Sofa Bed', '350.00', 'A compact single seater sofa bed, perfect for guest rooms or small apartments.', '1.50', 2, '../assets/products/Sofa/SofaSingle-red.webp'),
(6, 'Jasper Conran London Melrose Accent Chair', '749.00', 'A luxurious accent chair with a contemporary design, perfect for adding a touch of sophistication to any room.', '1.20', 2, '../assets/products/Sofa/SofaWaiting.webp'),
(7, 'Jenson Extendable 6 to 8 Seater Dining Table', '999.00', 'An extendable dining table made from high-quality wood, perfect for hosting dinner parties.', '3.00', 3, '../assets/products/Table/TableDining-oak-r.webp'),
(8, 'Cora 6 Seater Dining Table', '949.00', 'A stylish dining table that comfortably seats six, ideal for family meals and gatherings.', '2.80', 3, '../assets/products/Table/TableWood.webp'),
(9, 'Haku 4 Seater Round Dining Table', '429.00', 'A round dining table with a minimalist design, perfect for small dining areas.', '1.80', 3, '../assets/products/Table/TableRound.webp');

-- --------------------------------------------------------

--
-- Structure de la table `ProductOption`
--

CREATE TABLE `ProductOption` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `option_id` int(11) NOT NULL,
  `url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `ProductOption`
--

INSERT INTO `ProductOption` (`id`, `product_id`, `option_id`, `url`) VALUES
(1, 1, 13, '../assets/products/Lighting/LightMush-b.webp'),
(2, 2, 2, '../assets/products/Lighting/LightLava-red.webp'),
(3, 2, 3, '../assets/products/Lighting/LightLava-grey.webp'),
(4, 3, 16, '../assets/products/Lighting/LightHanged-5.webp'),
(5, 3, 17, '../assets/products/Lighting/LightHanged-3.webp'),
(6, 4, 4, '../assets/products/Sofa/SofaTable-green.webp'),
(7, 4, 5, '../assets/products/Sofa/SofaTable-y.webp'),
(8, 4, 6, '../assets/products/Sofa/SofaTable-grey.webp'),
(9, 5, 7, '../assets/products/Sofa/SofaSingle-blue.webp'),
(10, 5, 8, '../assets/products/Sofa/SofaSingle-red.webp'),
(11, 6, 1, '../assets/products/Sofa/SofaWaiting.webp'),
(12, 7, 9, '../assets/products/Table/TableDining-dark-r.webp'),
(13, 7, 10, '../assets/products/Table/TableDining-oak-r.webp'),
(14, 8, 1, '../assets/products/Table/TableWood.webp'),
(15, 9, 1, '../assets/products/Table/TableRound.webp'),
(16, 1, 11, '../assets/products/Lighting/LightMush-s.webp');

-- --------------------------------------------------------

--
-- Structure de la table `Promo`
--

CREATE TABLE `Promo` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `discount` decimal(2,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Promo`
--

INSERT INTO `Promo` (`id`, `name`, `discount`) VALUES
(1, 'MADE10', '10'),
(2, 'BlackFriday', '50');

-- --------------------------------------------------------

--
-- Structure de la table `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `phone` varchar(10) DEFAULT NULL,
  `mail` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Users`
--

INSERT INTO `Users` (`id`, `name`, `firstname`, `phone`, `mail`, `password`) VALUES
(36, 'Manchon', 'Ethan', '0667699771', 'ethan.manchon@etu.unilim.fr', '$2y$10$RBkXQtit713loXN98ruFHeRT/OGVP25zZ8v4u/5lIQKVrg1/LBqES'),
(38, 'Donzaud', 'Francois', '0675847114', 'francois.donzaud@etu.unilim.fr', '$2y$10$aHC4sew6NI9YAtmAV2L7Bup9Ch0cSWLz2IQEDb9udlpiD.rmTJKuq'),
(45, 'test', 'oui', '0222121567', 'non@gmail.com', '$2y$10$4Hxegk3cQcsrg5MmC2m5TOhfq9jjOzwyERfcYBtcv05vPjDB.qKke'),
(47, 'test', 'OUI', '0675847114', 'test@gmail.com', '$2y$10$gulzjb1wR8Y0StCs9UPJxO1fxTRvPK/0f9kc7yYpDxLotmfycnlnO');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Cart`
--
ALTER TABLE `Cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Index pour la table `Category`
--
ALTER TABLE `Category`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `Options`
--
ALTER TABLE `Options`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `Orders`
--
ALTER TABLE `Orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cart_id` (`cart_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Index pour la table `Product`
--
ALTER TABLE `Product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Index pour la table `ProductOption`
--
ALTER TABLE `ProductOption`
  ADD PRIMARY KEY (`id`),
  ADD KEY `option_id` (`option_id`);

--
-- Index pour la table `Promo`
--
ALTER TABLE `Promo`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `mail` (`mail`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Cart`
--
ALTER TABLE `Cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Category`
--
ALTER TABLE `Category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `Options`
--
ALTER TABLE `Options`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT pour la table `Orders`
--
ALTER TABLE `Orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Product`
--
ALTER TABLE `Product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `ProductOption`
--
ALTER TABLE `ProductOption`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT pour la table `Promo`
--
ALTER TABLE `Promo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `Cart`
--
ALTER TABLE `Cart`
  ADD CONSTRAINT `Cart_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `ProductOption` (`id`);

--
-- Contraintes pour la table `Orders`
--
ALTER TABLE `Orders`
  ADD CONSTRAINT `Orders_ibfk_1` FOREIGN KEY (`cart_id`) REFERENCES `Cart` (`id`),
  ADD CONSTRAINT `Orders_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`);

--
-- Contraintes pour la table `Product`
--
ALTER TABLE `Product`
  ADD CONSTRAINT `Product_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `Category` (`id`);

--
-- Contraintes pour la table `ProductOption`
--
ALTER TABLE `ProductOption`
  ADD CONSTRAINT `ProductOption_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `Product` (`id`),
  ADD CONSTRAINT `ProductOption_ibfk_2` FOREIGN KEY (`option_id`) REFERENCES `Options` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
