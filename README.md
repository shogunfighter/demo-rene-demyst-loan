## Getting Started
```
// development
$ npm run dev
```

## Learn More
To learn more about the package:
- [Next.js](https://nextjs.org/learn)
- [Prisma ORM](https://www.prisma.io/)
- [shadcn](https://ui.shadcn.com/)
- [docker-multi stage](https://towardsserverless.com/articles/dockerize-nextjs-app#multistage-docker-file-for-nextjs-runner-stage)

## Deployment in docker => 1. MySQL | 2. Next JS

Docker, MySQL, Node (builder, runner, deployment)
```
// run this to start 
$ docker-compose build

// then it will fail since you need to setup the DB (Basically, I haven't fully automated this - I need a bit of time to make it seamless)
$ docker run -d --name demyst-mysql-db-instance -p 3306:3306 demyst-mysql-db

// find the ip => 172.17.0.2  
$ docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' demyst-mysql-db-instance
```

### Manually seed the SQL 
todo: automate via prisma seed

```
INSERT INTO user (email, name) VALUES ('user@google.com', 'user');
INSERT INTO `accountProvider` (`id`, `name`) VALUES (-1, '');
INSERT INTO `accountProvider` (`id`, `name`) VALUES (1, 'XERO');
INSERT INTO `accountProvider` (`id`, `name`) VALUES (2, 'MYBO');
INSERT INTO `businessDetail` (`id`, `name`, `summary`, `year`) VALUES (-1, '', 0, 0);
INSERT INTO `businessDetail` (`id`, `name`, `summary`, `year`) VALUES (1, "Barrel & Co.", -2000, 2020);
INSERT INTO `businessDetail` (`id`, `name`, `summary`, `year`) VALUES (2, "The Cocktail Corner", -1000, 2018);
INSERT INTO `businessDetail` (`id`, `name`, `summary`, `year`) VALUES (3, "Draft & Dine", -1400, 2023);
INSERT INTO `businessDetail` (`id`, `name`, `summary`, `year`) VALUES (4, "Sip & Stir", -400, 2023);
INSERT INTO `businessDetail` (`id`, `name`, `summary`, `year`) VALUES (5, "The Refined Rum Room", -6500, 2015);
INSERT INTO `businessDetail` (`id`, `name`, `summary`, `year`) VALUES (6, "The Cheers Collective", -1000, 2013);
INSERT INTO `businessDetail` (`id`, `name`, `summary`, `year`) VALUES (7, "The Crafty Cocktail", 3000, 2020);
INSERT INTO `businessDetail` (`id`, `name`, `summary`, `year`) VALUES (8, "The Gin Garden", 6700, 2022);
INSERT INTO `businessDetail` (`id`, `name`, `summary`, `year`) VALUES (9, "The Brew House", 10000, 2020);
INSERT INTO `loan` (`status`, description, accountProviderId, businessDetailId) VALUES (1, '', 1, 1);
INSERT INTO `loan` (`status`, description, accountProviderId, businessDetailId) VALUES (2, '', 1, 2);
INSERT INTO `loan` (`status`, description, accountProviderId, businessDetailId) VALUES (3, '', 1, 3);
INSERT INTO `loan` (`status`, description, accountProviderId, businessDetailId) VALUES (4, '', 1, 4);
INSERT INTO `loan` (`status`, description, accountProviderId, businessDetailId) VALUES (5, '', 2, 1);
INSERT INTO `loan` (`status`, description, accountProviderId, businessDetailId) VALUES (6, '', 2, 2);
INSERT INTO `loan` (`status`, description, accountProviderId, businessDetailId) VALUES (7, '', 2, 3);
INSERT INTO `loan` (`status`, description, accountProviderId, businessDetailId) VALUES (8, '', 2, 4);
```
### Make sure the DB is accessible before doing the next step 
```
// create the rest - prisma, next js compilation
// prisma require a db connection which will run during build
$ docker-compose build 

// run the app in a separate container
$ docker run -d --name demyst-nextjs-app1 -p 3000:3000 demyst-nextjs-app

// then test by opening in the browser
```

http://localhost:3000