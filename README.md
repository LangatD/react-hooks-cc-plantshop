# Phase 2 Code Challenge: Plantsy

Welcome to Plantsy! Plantsy is a CRM (Customer Relationship Management) application for managing a plant store’s inventory. This application allows users to view, add, edit, search, and manage plant data, including marking plants as "sold out," updating prices, and deleting plants.
## Demo

This is an example of how the app should work.

![Demo GIF](https://curriculum-content.s3.amazonaws.com/phase-2/react-hooks-mock-code-challenge-plantshop/plantsy_demo.gif)

## Features
View Plants: Display all plants with details including name, image, price, and stock status.
Add New Plant: Use a form to add a new plant to the inventory.
Mark Plant as "Sold Out": Toggle each plant’s availability status.
Edit Plant Price: Update the price of an existing plant.
Delete Plant: Remove a plant from the inventory.
Search Plants: Search plants by name to quickly filter the list.


## Setup and Installation
1. Clone the repository
`git clone https://github.com/yourusername/react-hooks-cc-plantshop`
`cd react-hooks-cc-plantshop`
2.Run `npm install` in your terminal to install dependencies.
2. Run `npm run server`. This will run your backend on port `6001`. To verify visit:http://localhost:6001/plants
3. In a new terminal, run `npm start` to start the react application


## Endpoints

The base URL for your backend is: `http://localhost:6001`

## Core Deliverables

As a user:

1. When the app starts, I can see all plants.
2. I can add a new plant to the page by submitting the form.
3. I can mark a plant as "sold out".
4. I can search for plants by their name and see a filtered list of plants.

### Endpoints for Core Deliverables

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
