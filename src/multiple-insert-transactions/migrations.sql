CREATE DATABASE sales_company;

USE sales_company;

CREATE TABLE `sales` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `total` decimal(18,2) NOT NULL,
  `subtotal` decimal(18,2) NOT NULL,
  `taxes` decimal(18,2) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `sales_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sale_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` decimal(18, 2) NOT NULL,
  `product` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sale_id` (`sale_id`),
  CONSTRAINT `sales_details_ibfk_1` FOREIGN KEY (`sale_id`) REFERENCES `sales` (`id`)
);