# ORM_Ecommerce_Back_end

[Walkthrough Video](https://drive.google.com/file/d/1w6MhoIIoVNAJqnmQNyeawnB2CKUtr2ay/view)

# Description

Welcome to the E-commerce Back-End project, where we delve into the world of internet retail and electronic products.
The electronics industry is driven by e-commerce, enabling businesses and consumers to engage in convenient online buying and selling of products. Dive into the world of online retail, where internet-based sales of products dominate the market.
In this project, we'll explore the fundamental architecture of e-commerce sites by building the backbone of an e-commerce platform with Sequelize as the ORM (Object-Relational Mapping) and Express.js to create an API for managing products, categories, tags, and more. It provides a set of API routes to perform CRUD (Create, Read, Update, Delete) operations on these entities..


# Table of Contents

- [Description](#description)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Database Setup](#database-setup)
- [API Routes](#api-routes)
- [Contributing](#contributing)
- [License](#license)


# Technologies Used

- Node.js
- Express.js
- Sequelize
- MySQL

# Installation

1. Clone the repository to your local machine:

```
git clone https://github.com/sharktank3800/ORM_Ecommerce_Back_end.git
```

2. Navigate to the project directory:

```
cd ecommerce-backend
```

3. Install the required dependencies:

```
npm i
```

4. Create a MySQL database and update the database configuration in ``config/connection.js``.


5. Seed the database with sample data:

```
npm run seed
```

6. Start the **server**:

```
npm start
```

# Usage

- The API provides various endpoints for interacting with products, categories, and tags.

- We can use tools like Postman or curl to make API requests, For myself i used Insomnia.

- Refer to the API Routes section below for details on available routes and their usage.


## Database Setup

- We need to set up our database and configure the connection in the ``config/connection.js`` file.

- Run the following command to create the tables in the database:

```
npm run db:create
```

- To seed the database with sample data, run:

```
npm run seed
```

## API Routes

### *Below are some of the available API routes*:

- ``GET /api/products``: Get a list of all products.
- ``GET /api/products/:id``: Get a product by its ID.
- ``POST /api/products``: Create a new product.
- ``PUT /api/products/:id``: Update a product by its ID.
- ``DELETE /api/products/:id``: Delete a product by its ID.

Similar routes are available for categories and tags.
**Customize this section with specific details about your API routes.**


# License

This project is licensed under the MIT license.