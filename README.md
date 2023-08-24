# syook-assignment
App Demo:https://statuesque-profiterole-f5f94f.netlify.app/
backend Demo:https://twond-7o60.onrender.com/
### Backend API Documentation

#### Introduction

This documentation outlines the APIs and endpoints for the logistics management system backend. The backend manages orders, items, customers, delivery vehicles, and admin functionality.

Base URL: `http://localhost:5000`

#### Admin Authentication

**1. Admin Registration**

- URL: `/admin/register`
- Method: `POST`
- Description: Register a new admin.
- Request Body:
  ```json
  {
    "username": "admin123",
    "password": "adminPassword"
  }
  ```
- Response:
  - Status: 201 Created
  - Content: None

**2. Admin Login**

- URL: `/admin/login`
- Method: `POST`
- Description: Authenticate and get an access token for the admin.
- Request Body:
  ```json
  {
    "username": "admin123",
    "password": "adminPassword"
  }
  ```
- Response:
  - Status: 200 OK
  - Content:
    ```json
    {
      "token": "access_token_here"
    }
    ```

#### Items

**1. Create Item**

- URL: `/items`
- Method: `POST`
- Description: Create a new item.
- Request Body:
  ```json
  {
    "name": "Item Name",
    "price": 100
  }
  ```
- Response:
  - Status: 201 Created
  - Content:
    ```json
    {
      "_id": "item_id_here",
      "name": "Item Name",
      "price": 100
    }
    ```

**2. Get All Items**

- URL: `/items`
- Method: `GET`
- Description: Get a list of all items.
- Response:
  - Status: 200 OK
  - Content:
    ```json
    [
      {
        "_id": "item_id_here",
        "name": "Item Name",
        "price": 100
      },
      // ...
    ]
    ```

#### Customers

**1. Create Customer**

- URL: `/customers`
- Method: `POST`
- Description: Create a new customer.
- Request Body:
  ```json
  {
    "name": "Customer Name",
    "city": "Customer City"
  }
  ```
- Response:
  - Status: 201 Created
  - Content:
    ```json
    {
      "_id": "customer_id_here",
      "name": "Customer Name",
      "city": "Customer City"
    }
    ```

**2. Get All Customers**

- URL: `/customers`
- Method: `GET`
- Description: Get a list of all customers.
- Response:
  - Status: 200 OK
  - Content:
    ```json
    [
      {
        "_id": "customer_id_here",
        "name": "Customer Name",
        "city": "Customer City"
      },
      // ...
    ]
    ```

#### Delivery Vehicles

**1. Create Delivery Vehicle**

- URL: `/delivery-vehicles`
- Method: `POST`
- Description: Create a new delivery vehicle.
- Request Body:
  ```json
  {
    "registrationNumber": "ABC123",
    "vehicleType": "bike",
    "city": "Vehicle City"
  }
  ```
- Response:
  - Status: 201 Created
  - Content:
    ```json
    {
      "_id": "vehicle_id_here",
      "registrationNumber": "ABC123",
      "vehicleType": "bike",
      "city": "Vehicle City",
      "activeOrdersCount": 0
    }
    ```

**2. Get All Delivery Vehicles**

- URL: `/delivery-vehicles`
- Method: `GET`
- Description: Get a list of all delivery vehicles.
- Response:
  - Status: 200 OK
  - Content:
    ```json
    [
      {
        "_id": "vehicle_id_here",
        "registrationNumber": "ABC123",
        "vehicleType": "bike",
        "city": "Vehicle City",
        "activeOrdersCount": 0
      },
      // ...
    ]
    ```

#### Orders

**1. Create Order**

- URL: `/orders`
- Method: `POST`
- Description: Create a new order.
- Request Body:
  ```json
  {
    "itemId": "item_id_here",
    "price": 100,
    "customerId": "customer_id_here",
    "deliveryVehicleId": "vehicle_id_here"
  }
  ```
- Response:
  - Status: 201 Created
  - Content:
    ```json
    {
      "_id": "order_id_here",
      "itemId": "item_id_here",
      "price": 100,
      "customerId": "customer_id_here",
      "deliveryVehicleId": "vehicle_id_here",
      "isDelivered": false
    }
    ```

**2. Get All Orders**

- URL: `/orders`
- Method: `GET`
- Description: Get a list of all orders.
- Response:
  - Status: 200 OK
  - Content:
    ```json
    [
      {
        "_id": "order_id_here",
        "itemId": "item_id_here",
        "price": 100,
        "customerId": "customer_id_here",
        "deliveryVehicleId": "vehicle_id_here",
        "isDelivered": false
      },
      // ...
    ]
    ```

**3. Mark Order as Delivered**

- URL: `/orders/:orderId/deliver`
- Method: `PUT`
- Description: Mark an order as delivered and generate an invoice.
- Response:
  - Status: 200 OK
  - Content:
    ```json
    {
      "message": "Order delivered successfully"
    }
    ```
