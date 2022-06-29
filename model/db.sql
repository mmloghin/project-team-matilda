DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS cart;
DROP TABLE IF EXISTS product;

CREATE TABLE `users` (
	`id` int NOT NULL AUTO_INCREMENT,
	`email` varchar(100) NOT NULL UNIQUE,
	`password` varchar(64) NOT NULL,
	`created_at` DATETIME NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `cart` (
	`id` int NOT NULL AUTO_INCREMENT,
	`user_id` int NOT NULL,
	`order_total` int,
	PRIMARY KEY (`cart_id`)
);

CREATE TABLE `product` (
	`id` int NOT NULL AUTO_INCREMENT,
	`cart_id` int NOT NULL,
	`book_id` int NOT NULL,
	`quantity` int NOT NULL,
	PRIMARY KEY (`product_id`)
);

ALTER TABLE `cart` ADD CONSTRAINT `cart_fk0` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);

ALTER TABLE `product` ADD CONSTRAINT `product_fk0` FOREIGN KEY (`cart_id`) REFERENCES `cart`(`cart_id`);

ALTER TABLE `product` ADD CONSTRAINT `product_fk1` FOREIGN KEY (`book_id`) REFERENCES `books`(`id`);