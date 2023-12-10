-- insert some dummy data so we can use the system

INSERT INTO `user` (`email`, `name`) VALUES ('user@google.com', 'user');

INSERT INTO `accountProvider` (`id`, `name`) VALUES (-1, NULL);
INSERT INTO `accountProvider` (`id`, `name`) VALUES (1, 'XERO');
INSERT INTO `accountProvider` (`id`, `name`) VALUES (2, 'MYBO');

INSERT INTO `businessDetail` (`id`, `name`, `year`, `summary`) VALUES (-1, '', 0, '');
INSERT INTO `businessDetail` (`id`, `name`, `summary`, `year`) VALUES (1, 'Apple', 'ipad maker', 2023);
INSERT INTO `businessDetail` (`id`, `name`, `summary`, `year`) VALUES (2, 'Twitter', 'the blue bird', 2000);
INSERT INTO `businessDetail` (`id`, `name`, `summary`, `year`) VALUES (3, 'Microsoft', 'windows 11', 2011);
INSERT INTO `businessDetail` (`id`, `name`, `summary`, `year`) VALUES (4, 'Facebook', 'everyday scrolling', 2000);

INSERT INTO `loan` (`status`, `description`, `accountProviderId`, `businessDetailId`, `userId`) VALUES (1, '', 1, 1, 1);
INSERT INTO `loan` (`status`, `description`, `accountProviderId`, `businessDetailId`, `userId`) VALUES (2, '', 1, 2, 1);
INSERT INTO `loan` (`status`, `description`, `accountProviderId`, `businessDetailId`, `userId`) VALUES (3, '', 1, 3, 1);
INSERT INTO `loan` (`status`, `description`, `accountProviderId`, `businessDetailId`, `userId`) VALUES (4, '', 1, 4, 1);
INSERT INTO `loan` (`status`, `description`, `accountProviderId`, `businessDetailId`, `userId`) VALUES (5, '', 2, 1, 1);
INSERT INTO `loan` (`status`, `description`, `accountProviderId`, `businessDetailId`, `userId`) VALUES (6, '', 2, 2, 1);
INSERT INTO `loan` (`status`, `description`, `accountProviderId`, `businessDetailId`, `userId`) VALUES (7, '', 2, 3, 1);
INSERT INTO `loan` (`status`, `description`, `accountProviderId`, `businessDetailId`, `userId`) VALUES (8, '', 2, 4, 1);