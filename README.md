This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.



This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


# docker mysql
# docker node
```
$ docker-compose build
$ docker-compose up -d
```

### ORM (Prisma)

```
https://www.prisma.io/docs/orm/overview/databases/mysql

# prisma npm dependencies
npm install prisma ts-node @types/node --save-dev

# prisma  create/set confiuguration filprismes
npx prisma
npx prisma init

# prisma client
npm install @prisma/client

# prisma update the tables on first run
npx prisma migrate deploy

```



### DUMMY DB

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

# shadcn
```
https://ui.shadcn.com/docs/installation/next
$ npx shadcn-ui@latest init

# components
$ npx shadcn-ui@latest add card
$ npx shadcn-ui@latest add label
$ npx shadcn-ui@latest add select
$ npx shadcn-ui@latest add input
$ npx shadcn-ui@latest add button
$ npx shadcn-ui@latest add table
```

# reference
https://github.com/steven-tey/prisma-server-actions/blob/main/lib/prisma.ts


https://github.com/shadcn-ui/taxonomy/blob/main/lib/utils.ts



https://github.com/DemystData/code-kata/blob/main/README.md



```
// create the mysql image
$ docker-compose build 

// run instance of mysql
$ docker run -d --name demyst-mysql-db-instance -p 3306:3306 demyst-mysql-db

// find the ip => 172.17.0.2  
$ docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' demyst-mysql-db-instance

// update .env if necessary for the ip

// create the rest of the image
$ docker-compose build 


$ docker run -d --name demyst-nextjs-app1 -p 3000:3000 demyst-nextjs-app
```