# Phase 2 Code Challenge: Plantsy

Welcome to Plantsy! Plantsy is a CRM (Customer Relationship Management) application for managing a plant store’s inventory. This application allows users to view, add, edit, search, and manage plant data, including marking plants as "sold out," updating prices, and deleting plants.
## Demo

This is an example of how the app should work.

![Demo GIF](https://curriculum-content.s3.amazonaws.com/phase-2/react-hooks-mock-code-challenge-plantshop/plantsy_demo.gif)

## Features
1. Display all plants with details including name, image, price, and stock status.
2. Use a form to add a new plant to the inventory.
3. Mark Plant as "Sold Out": Toggle each plant’s availability status.
4. Update the price of an existing plant.
5. Remove a plant from the inventory.
6. Search plants by name to quickly filter the list.


## Setup and Installation
1. Clone the repository
`git clone https://github.com/yourusername/react-hooks-cc-plantshop`
`cd react-hooks-cc-plantshop`
2. Run `npm install` in your terminal to install dependencies.
3. Run `npm run server`. This will run your backend on port `6001`. To verify visit:http://localhost:6001/plants
4. In a new terminal, run `npm start` to start the react application


## Endpoints

The base URL for your backend is: `http://localhost:6001`


#### GET /plants 
This retrieves all plants

Example Response:

```json
[
  {
    "id": 1,
    "name": "Aloe",
    "image": "./images/aloe.jpg",
    "price": 15.99
  },
  {
    "id": 2,
    "name": "ZZ Plant",
    "image": "./images/zz-plant.jpg",
    "price": 25.98
  }
]
```

#### POST `/plants`
This adds a new plant
Required Headers:

```js
{
  "Content-Type": "application/json"
}
```

Request Object:

```json
{
  "name": "string",
  "image": "string",
  "price": number
}
```

Example Response:

```json
{
  "id": 1,
  "name": "Aloe",
  "image": "./images/aloe.jpg",
  "price": 15.99
}
```

#### PATCH /plants/:id

Required Headers:

```js
{
  "Content-Type": "application/json"
}
```

Request Object:

```json
{
  "price": number
}
```

Example Response:

```json
{
  "id": 1,
  "name": "Aloe",
  "image": "./images/aloe.jpg",
  "price": 16.99
}
```

#### DELETE /plants/:id

Example Response:

```json
{}
```
