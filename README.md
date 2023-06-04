# Hexagonal Architecture, DDD in Typescript

This is a basic template for a project using Hexagonal Architecture and Domain-Driven Design (DDD) in TypeScript.

## Description

This template provides the minimum configurations and basic structure to create a backend and frontend project with DDD in TypeScript. The project includes both a backend and a frontend component.

## Features

- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/) with:
  - [JavaScript Standard Style](https://standardjs.com/) with TypeScript configuration (ts-standard)

## Folder Structure

The project has the following folder structure:

```
typescript-ddd-skeleton
├─ .eslintrc.json
├─ .gitignore
├─ package.json
├─ src
│  ├─ apps
│  │  └─ main
│  │     ├─ backend
│  │     │  ├─ controllers
│  │     │  │  ├─ Controller.ts
│  │     │  │  └─ user
│  │     │  │     ├─ GetUserController.ts
│  │     │  │     └─ PostUserController.ts
│  │     │  ├─ dependencies
│  │     │  │  ├─ dependencies.yaml
│  │     │  │  ├─ index.ts
│  │     │  │  └─ main.yaml
│  │     │  ├─ routes
│  │     │  │  ├─ index.ts
│  │     │  │  └─ user.route.ts
│  │     │  ├─ server.ts
│  │     │  └─ start.ts
│  │     └─ frontend
│  │        ├─ .eslintrc.cjs
│  │        ├─ .gitignore
│  │        ├─ index.html
│  │        ├─ package.json
│  │        ├─ public
│  │        │  └─ vite.svg
│  │        ├─ src
│  │        │  ├─ counter.ts
│  │        │  ├─ main.ts
│  │        │  ├─ services
│  │        │  │  └─ UserService.ts
│  │        │  ├─ style.css
│  │        │  ├─ types.d.ts
│  │        │  ├─ typescript.svg
│  │        │  └─ vite-env.d.ts
│  │        └─ tsconfig.json
│  └─ Contexts
│     ├─ Shared
│     │  ├─ domain
│     │  │  ├─ HttpError.ts
│     │  │  ├─ Logger.ts
│     │  │  └─ UseCase.ts
│     │  └─ infrastructure
│     │     ├─ Config.ts
│     │     ├─ dependencies
│     │     │  └─ dependencies.yaml
│     │     ├─ Responses.ts
│     │     └─ WinstonLogger.ts
│     └─ User
│        ├─ application
│        │  ├─ Create
│        │  │  └─ CreateUserUseCase.ts
│        │  └─ Get
│        │     └─ ListAllUserUseCase.ts
│        ├─ domain
│        │  ├─ User.ts
│        │  └─ UserRepository.ts
│        └─ infrastructure
│           ├─ dependencies
│           │ 

 └─ dependencies.yaml
│           └─ InMemoryUserRepository.ts
├─ tests
└─ tsconfig.json
```

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

The frontend part of the project is built using Vite.js with TypeScript. It is located in the `src/apps/main/frontend` directory.

To configure the frontend, navigate to the `src/apps/main/frontend` directory in your terminal and run the following command to install the required dependencies:

```bash
npm install
```

You can also use other package managers like Yarn or PNPM by replacing `npm` with the respective command (`yarn` or `pnpm`).

After the dependencies are installed, you can use the following scripts:

- `npm run dev`: Starts the development server for the frontend.
- `npm run build`: Builds the frontend project for production.
- `npm run preview`: Serves the production build locally for previewing.
- `npm run lint`: Lints the frontend code using ESLint.

### Running Tests

Please note that the tests are not implemented in this template. You are encouraged to write tests for your backend and frontend code.

If you would like to contribute to this project, feel free to create a pull request with the implementation of tests.

### Usage

Feel free to extend this template and customize it according to your project's needs.

## License

This project is licensed under the ISC License.
