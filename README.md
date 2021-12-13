# Products API

This project consists of an API of products made with Nodejs.

## Deployed on Heroku

You can test this app at [Heroku](https://mern-products-backend.herokuapp.com/)

## How to run this project

1. Clone the project

```sh
git clone https://github.com/GianElli99/mern-products-backend.git
cd mern-products-backend
```

2. Create and config your environment variables in a `.env` file, you can use the `.env.example` as a guide
3. Install packages and run the project

```sh
npm install
npm start
```

4. You should see a message in the console like `Server running on YOUR_PORT`

## API Specification

### Get products

`GET /api/products/`

#### Query parameters

| Param       | Description                                                                                                            |
| :---------- | :--------------------------------------------------------------------------------------------------------------------- |
| `name`      | Optional query param used for filtering products by their name field, the match is case insesitive and can be partial  |
| `isDigital` | Optional query param, the possible values are "true" and "false", used for filtering products by their isDigital field |

#### Request body

No needed

#### Response

A list of all the products that match the filters, if no query params are provided, all products are returned

```
[
    {
        "_id": "615e08d641be84500703395d",
        "name": "Iphone 4",
        "price": 45000,
        "shortDescription": "An small Smartphone",
        "fullDescription": "The Iphone 4 is an Smartphone very powerful with 32GB of memory and 2GB of RAM",
        "isDigital": false,
        "weightInKg": 0.5,
        "__v": 0
    },
    {
        "_id": "615e1a40b305873a0404d262",
        "name": "Iphone 5",
        "price": 78000,
        "shortDescription": "Another small Smartphone",
        "fullDescription": "The Iphone 5 is an Smartphone very powerful with 64GB of memory and 3GB of RAM",
        "isDigital": false,
        "weightInKg": 0.4,
        "__v": 0
    }
]
```

### Get product by id

`GET /api/products/:productId`

#### Path parameters

| Param       | Description           |
| :---------- | :-------------------- |
| `productId` | The id of the product |

#### Request body

No needed

#### Response

A product

```
{
    "_id": "615e08d641be84500703395d",
    "name": "Iphone 4",
    "price": 45000,
    "shortDescription": "An small Smartphone",
    "fullDescription": "The Iphone 4 is an Smartphone very powerful with 32GB of memory and 2GB of RAM",
    "isDigital": false,
    "weightInKg": 0.5,
    "__v": 0
}
```

### Add product

`POST /api/products/`

#### Request body

The new product, all the following field are required except for `weightInKg`, which is required only if `isDigital` is `false`

```
{
    "name": "Iphone 4",
    "price": 45000,
    "shortDescription": "An small Smartphone",
    "fullDescription": "The Iphone 4 is an Smartphone very powerful with 32GB of memory and 2GB of RAM",
    "isDigital": false,
    "weightInKg": 0.5,
}
```

#### Response

The added product with its `_id` and `__v` fields

```
{
    "_id": "615e08d641be84500703395d",
    "name": "Iphone 4",
    "price": 45000,
    "shortDescription": "An small Smartphone",
    "fullDescription": "The Iphone 4 is an Smartphone very powerful with 32GB of memory and 2GB of RAM",
    "isDigital": false,
    "weightInKg": 0.5,
    "__v": 0
}
```

### Modify product

`PUT /api/products/:productId`

#### Path parameters

| Param       | Description           |
| :---------- | :-------------------- |
| `productId` | The id of the product |

#### Request body

The modified product, all the following field are required except for `weightInKg`, which is required only if `isDigital` is `false`

```
{
    "name": "Iphone 4",
    "price": 45000,
    "shortDescription": "An small Smartphone",
    "fullDescription": "The Iphone 4 is an Smartphone very powerful with 32GB of memory and 2GB of RAM",
    "isDigital": false,
    "weightInKg": 0.5,
}
```

#### Response

The modified product with its `_id` and `__v` fields

```
{
    "_id": "615e08d641be84500703395d",
    "name": "Iphone 4",
    "price": 45000,
    "shortDescription": "An small Smartphone",
    "fullDescription": "The Iphone 4 is an Smartphone very powerful with 32GB of memory and 2GB of RAM",
    "isDigital": false,
    "weightInKg": 0.5,
    "__v": 0
}
```

### Delete product

`DELETE /api/products/:productId`

#### Path parameters

| Param       | Description           |
| :---------- | :-------------------- |
| `productId` | The id of the product |

#### Request body

No needed.

#### Response

The deleted product with its `_id` and `__v` fields

```
{
    "_id": "615e08d641be84500703395d",
    "name": "Iphone 4",
    "price": 45000,
    "shortDescription": "An small Smartphone",
    "fullDescription": "The Iphone 4 is an Smartphone very powerful with 32GB of memory and 2GB of RAM",
    "isDigital": false,
    "weightInKg": 0.5,
    "__v": 0
}
```

## Failed requests response

All unsuccessuful request will have the same response structure

```
{
    "errors": [
        "The name is invalid",
        "The price is invalid"
    ]
}
```

## Status codes

| Status Code | Description             |
| :---------- | :---------------------- |
| 200         | `OK`                    |
| 201         | `CREATED`               |
| 400         | `BAD REQUEST`           |
| 404         | `NOT FOUND`             |
| 500         | `INTERNAL SERVER ERROR` |

## License

[MIT](https://github.com/GianElli99/mern-products-backend/blob/main/LICENSE)
