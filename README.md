# Hexagonal Architecture, DDD in Typescript

This is a basic template for a project using Hexagonal Architecture and Domain-Driven Design (DDD) in TypeScript.

## Description

This template provides the minimum configurations and basic structure to create a backend and frontend project with DDD in TypeScript. The project includes both a backend and a frontend component.

## Features

- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/) with:
  - [JavaScript Standard Style](https://standardjs.com/) with TypeScript configuration (ts-standard)

### Backend

The backend part of the project includes the following features and dependencies:

- [Express](https://expressjs.com/) - A fast and minimalist web framework for Node.js
- [Express Validator](https://express-validator.github.io/) - A set of express.js middlewares that wraps validator.js functions
- [CORS](https://www.npmjs.com/package/cors) - Middleware for enabling Cross-Origin Resource Sharing (CORS)
- [Dotenv](https://www.npmjs.com/package/dotenv) - Module that loads environment variables from a `.env` file
- [Helmet](https://helmetjs.github.io/) - Middleware to secure Express apps by setting various HTTP headers
- [HTTP-Status](https://www.npmjs.com/package/http-status) - Utility to interact with HTTP status codes
- [Node Dependency Injection](https://www.npmjs.com/package/node-dependency-injection) - A lightweight dependency injection container for Node.js
- [UUID](https://www.npmjs.com/package/uuid) - Library for generating unique identifiers
- [Winston](https://www.npmjs.com/package/winston) - Logging library

To install the backend dependencies, navigate to the root directory of the project in your terminal and run the following command:

```bash
npm install
```

You can also use other package managers like Yarn or PNPM by replacing `npm` with the respective command (`yarn` or `pnpm`).

To start the backend server in development mode, run the following command:

```bash
npm run start:mainapp:backend:dev
```

### Frontend

The frontend part of the project is built with Vite.js and TypeScript. It is a basic app created with Vite.js.

To configure the frontend, navigate to the `src/apps/main/frontend` directory in your terminal and run the following command to install the required dependencies:

```bash
npm install
```

You can also use other package managers like Yarn or PNPM by replacing `npm` with the respective command (`yarn` or `pnpm`).

After the dependencies are installed, you can start the frontend development server using the following command:

```bash
npm run dev
```

Alternatively, if you have a different package manager, you can use its corresponding command.

### Usage

Feel free to extend this template and customize it according to your project's needs.

## License

This project is licensed under the ISC License.