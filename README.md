# E-Commerce Back End

## Description

This is the back end for an e-commerce site. The application uses Node.js, Express.js, and Sequelize to interact with a MySQL database. The back end includes CRUD operations for managing products, categories, tags, and product tags.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Jakostein97/e-commerce
2. Navigate to the project directory:
    ```bash
    cd e-commerce-backend
3. Install the dependencies:
    ```bash
    npm install
4. Set up the database:
    - Update the config/connection.js file with your MySQL credentials.
    - Create the database by running the SQL commands in the db/schema.sql file.
5. Seed the database:
    ```bash
    node seeds/index
6. Start the server:
    ```bash
    node server

## Usage

-Use a tool like Insomnia or Postman to interact with the API endpoints.
-The server runs on http://localhost:3001.

[GitHub Repository](https://github.com/Jakostein97/e-commerce)

![alt text](assets/images/E-Commerce%20APP%20Walkthrough.gif)

## License

This project is licensed under the MIT License.