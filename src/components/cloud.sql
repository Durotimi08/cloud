SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


CREATE TABLE `messages` (
  `msg_id` int(11) NOT NULL,
  `unique-item` int(255) NOT NULL,
  `name` varchar(1000) NOT NULL,
  `img` varchar(255) NOT NULL,
  `msg` varchar(1000) NOT NULL,
  `like` json
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `item` (
  `item_id` int(11) NOT NULL,
  `unique-item` int(255) NOT NULL,
  `title` int(255) NOT NULL,
  `desc` varchar(1000) NOT NULL,
  `price` varchar(1000) NOT NULL,
  `rating` json,
  `size` json,
  `color` json,
  `image` json
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `cart` (
  `cart_id` int(11) NOT NULL,
  `unique-id` int(255) NOT NULL,
  `unique-item` int(255) NOT NULL,
  `quantity` int(255) NOT NULL,
  `title` varchar(1000) NOT NULL,
  `desc` varchar(1000) NOT NULL,
  `price` varchar(1000) NOT NULL,
  `size` varchar(1000) NOT NULL,
  `color` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `unique_id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `img` varchar(255),
  `address` varchar(255),
  `postal` varchar(255),
  `number` int(11),
  `like` json
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE `cart`
  ADD PRIMARY KEY (`cart_id`);

ALTER TABLE `item`
  ADD PRIMARY KEY (`item_id`);

ALTER TABLE `messages`
  ADD PRIMARY KEY (`msg_id`);

ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

ALTER TABLE `cart`
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `item`
  MODIFY `item_id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `messages`
  MODIFY `msg_id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;
