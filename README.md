# Restaurant Management System API

A backend REST API built with Node.js and Express for managing restaurant operations such as menu items, orders, tables, reservations, and inventory.

This project focuses on clean structure, readable code, and practical backend logic that mirrors real world use cases. It is designed to scale and can easily be connected to a frontend application.

## Why This Project Matters

This project demonstrates how a real restaurant backend can be structured and managed. It shows understanding of API design, route separation, controller logic, environment configuration, and database connection.

It is suitable as a portfolio project and reflects hands on backend development skills.

## Key Features

1. Menu management
   Create, read, update, and delete menu items

2. Order management
   Create customer orders, fetch orders, and update order status

3. Table management
   View all tables and check available tables

4. Reservation handling
   Create and cancel table reservations

5. Inventory management
   Add inventory items, update stock levels, and manage inventory records

## Tech Stack

1. Node.js
2. Express.js
3. JavaScript
4. MongoDB
5. RESTful API design
6. Postman for testing

## Project Structure

controllers
Handles request logic and responses

routes
Defines all API endpoints

config
Database connection logic

data
In memory data handling

server.js
Main application entry point

## Server Configuration

The server uses a unified API prefix and environment variables for configuration.

Base API prefix
/api

Menu routes
/api/menu

Order routes
/api/orders

Table routes
/api/tables

Inventory routes
/api/inventory

The server runs on port 4000 by default or any port defined in the environment file.

## Getting Started

### Requirements

1. Node.js installed
2. npm installed
3. MongoDB running locally or remotely
4. Postman or any API testing tool

### Installation Steps

1. Clone the repository
2. Open the project folder in VS Code
3. Install dependencies

```
npm install
```

4. Create a .env file in the root directory

```
PORT=4000
MONGO_URI=your_mongodb_connection_string
```

5. Start the server

```
npm start
```

Once running, the API will be available at
[http://localhost:4000](http://localhost:4000)


## API Documentation

All endpoints return JSON responses.

### Menu Endpoints

Get all menu items
GET /api/menu

Get a menu item by id
GET /api/menu/:id

Add a new menu item
POST /api/menu

Request body example

```
{
  "name": "Jollof Rice",
  "price": 3000,
  "category": "Main Dish"
}
```

Update a menu item
PUT /api/menu/:id

Delete a menu item
DELETE /api/menu/:id

### Order Endpoints

Create an order
POST /api/orders

Request body example

```
{
  "items": ["Jollof Rice", "Chicken"],
  "tableNumber": 2
}
```

Get all orders
GET /api/orders

Get an order by id
GET /api/orders/:id

Update order status
PUT /api/orders/:id/status

Request body example

```
{
  "status": "completed"
}
```

### Table and Reservation Endpoints

Get all tables
GET /api/tables

Get available tables
GET /api/tables/available

Get all reservations
GET /api/tables/reservations

Create a reservation
POST /api/tables/reserve

Request body example

```
{
  "customerName": "Samuel",
  "tableNumber": 4,
  "time": "7pm"
}
```

Cancel a reservation
DELETE /api/tables/reservations/:id


### Inventory Endpoints

Get all inventory items
GET /api/inventory

Get inventory item by id
GET /api/inventory/:id

Add inventory item
POST /api/inventory

Request body example

```
{
  "itemName": "Rice",
  "quantity": 100
}
```

Update inventory item
PUT /api/inventory/:id

Update inventory stock level
PUT /api/inventory/:id/stock

Request body example

```
{
  "quantity": 80
}
```

Delete inventory item
DELETE /api/inventory/:id

## Testing

All endpoints were tested using Postman.
The API follows predictable request and response patterns and handles common edge cases.

## What A Recruiter Should Notice

1. Clean separation of routes and controllers
2. Consistent API naming and structure
3. Environment based configuration
4. Scalable backend design
5. Clear and testable endpoints

## Future Enhancements

1. Authentication and authorization
2. Role based access for staff and admin
3. Order payment processing
4. API documentation using Swagger
5. Frontend integration

## Author

ADEBOYE EMMANUEL
Backend Developer