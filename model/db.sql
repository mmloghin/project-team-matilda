DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS cart;
DROP TABLE IF EXISTS cart_items;

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
	PRIMARY KEY (`id`)
);

CREATE TABLE `cart_items` (
	`id` int NOT NULL AUTO_INCREMENT,
	`cart_id` int NOT NULL,
	`book_id` int NOT NULL,
	`quantity` int NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `cart` ADD CONSTRAINT `cart_fk0` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);

ALTER TABLE `cart_items` ADD CONSTRAINT `cart_items_fk0` FOREIGN KEY (`cart_id`) REFERENCES `cart`(`id`);

ALTER TABLE `cart_items` ADD CONSTRAINT `cart_items_fk1` FOREIGN KEY (`book_id`) REFERENCES `books`(`id`);




