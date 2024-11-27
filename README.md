# Pokédex App

This is a simple Pokédex application built with Angular, allowing users to view a list of Pokémon and see detailed information about each one. Data is fetched from [PokéAPI](https://pokeapi.co) using HTTP requests.

## Table of Contents
- [Getting Started](#getting-started)
- [Features](#features)
- [Development](#development)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
  - [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

Follow the steps below to run the Pokédex app locally and start exploring Pokémon data.

## Features
- Displays a list of Pokémon fetched from PokéAPI.
- Allows users to click on a Pokémon name to see more detailed information, including type, height, weight, abilities, and base stats.
- Displays the official artwork for each Pokémon.

## Development

### Prerequisites
- [Node.js](https://nodejs.org) (v14 or later)
- [Angular CLI](https://angular.io/cli) (v13 or later)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/George2Times/NotBug-Tasks.git
   cd pokemon-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application
To start the development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/` to view the app.

### Running Tests
#### Unit Tests
To run unit tests using [Karma](https://karma-runner.github.io):

```bash
ng test
```

#### End-to-End Tests
For end-to-end testing, we use [Cypress](https://www.cypress.io/). To run the Cypress tests:

1. Open Cypress Test Runner:
   ```bash
   npx cypress open
   ```
2. Or run the Cypress tests in the CLI:
   ```bash
   npx cypress run
   ```

Note: Some of the tests may currently be failing due to known issues, particularly related to dynamic data fetching and UI rendering delays.

## Project Structure
The main structure of the project is as follows:

```
.
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── pokemon-list/
│   │   │   ├── pokemon-detail/
│   │   ├── services/
│   │   ├── app.component.ts
│   │   ├── app.routes.ts
│   ├── assets/
│   ├── index.html
│   └── main.ts
├── e2e/
│   └── cypress/
│       └── e2e/
│           └── pokemon-app.cy.js
├── angular.json
├── package.json
└── README.md
```

- **Components**: Contains reusable UI components for the Pokédex app.
- **Services**: Manages HTTP requests to PokéAPI and provides data to components.

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### TODO
- [ ] Improve end-to-end test stability, especially concerning dynamically rendered content.
- [ ] Add pagination for the Pokémon list.
- [ ] Implement search functionality to filter Pokémon by name.
- [ ] Refactor code to use standalone components where possible.

For any questions or suggestions, feel free to open an issue or reach out!

