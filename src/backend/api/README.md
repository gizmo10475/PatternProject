# API

## Table of Contents

-   [Setup](#Setup)
-   [Development](#Development)
-   [API Endpoints](#API-Endpoints)
    -   [Bike endpoints](#Bike-endpoints)
    -   [City endpoints](#City-endpoints)
    -   [Station endpoints](#Station-endpoints)
    -   [Customer endpoints](#Customer-endpoints)
    -   [Admin endpoints](#Admin-endpoints)
    -   [Account endpoints](#Account-endpoints)

## Setup

After having cloned the repository you need to install all of the dependencies using Composer. This is done with the following command:

```bash
$ composer install
```

## Development

To start the development server you run the following command:

```bash
$ php artisan serve
```

You should have started the database docker container before doing this, as well as filling out your database credentials in a .env file. See [.env.example](.env.example). The following part of the example file are the important bits:

```ini
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```

These should be filled in correctly.

To run the API:s docker container you need to create a similar file, named .env.docker and fill out the appropriate information for the databases docker container.

## API Endpoints

All requests should be prefaced by /api.

### Bike endpoints

Get all bikes

```http
GET /bike
```

Parameters:
|Name|Type|Required|Description|
|----|----|--------|-----------|
|active|bool|no|If set to true only retrieve active bikes.|

Response format:

```json
{
    "data": [
        {
            "id": 1,
            "longitude": 0.0,
            "latitude": 0.0,
            "active": 0,
            "speed": 0,
            "charging": 0,
            "warning": 0
        }
    ]
}
```

---

To add a new bike:

```http
POST /bike
```

Parameters:

| Name      | Type  | Required | Description               |
| --------- | ----- | -------- | ------------------------- |
| longitude | float | yes      | Bike longitude coordinate |
| latitude  | float | yes      | Bike latitude coordinate  |

Response format:

```json
{
    "data": {
        "longitude": 0.0,
        "latitude": 0.0,
        "id": 1
    }
}
```

---

To get a bike:

```http
GET /bike/{id}
```

Response format:

```json5
{
    data: {
        id: 1, // {id}
        longitude: 0.0,
        latitude: 0.0,
        active: 0,
        speed: 0,
        charging: 0,
        warning: 0,
    },
}
```

---

To remove a bike:

```http
DELETE /bike/{id}
```

Response format:

```json5
{
    data: 1,
}
```

Response is 1 if removal was successful, 0 if not.

---

To update a bike:

```http
PUT /bike/{id}
```

Parameters:

| Name      | Type  | Required | Description                      |
| --------- | ----- | -------- | -------------------------------- |
| longitude | float | no       | Longitude coordinate             |
| latitude  | float | no       | Latitude coordinate              |
| active    | bool  | no       | Set bike as active/inactive      |
| speed     | int   | no       | Set current bike speed           |
| charging  | bool  | no       | Set charging status              |
| warning   | bool  | no       | Set battery level warning status |

Response format:

```json5
{
    data: {
        id: 1, // {id}
        longitude: 0.0,
        latitude: 0.0,
        active: 0,
        speed: 0,
        charging: 0,
        warning: 0,
    },
}
```

### City endpoints

Display all cities:

```http
GET /city
```

Response format:

```json
{
    "data": [
        {
            "id": 1,
            "name": "Karlskrona"
        }
    ]
}
```

---

Display a city:

```http
GET /city/{id}
```

Response format:

```json5
{
    data: {
        id: 1, // {id}
        name: "Karlskrona",
    },
}
```

---

Add a city:

```http
POST /city/
```

Parameters:

| Name | Type   | Required | Description |
| ---- | ------ | -------- | ----------- |
| name | string | yes      | City name   |

Response format:

```json
{
    "data": {
        "name": "Karlskrona",
        "id": 1
    }
}
```

---

Remove a city:

```http
DELETE /city/{id}
```

Response format:

```json
{
    "data": 1
}
```

Response is 1 if removal was successful, 0 if not.

---

Update a city:

```http
PUT /city/{id}
```

Parameters:

| Name | Type   | Required | Description   |
| ---- | ------ | -------- | ------------- |
| name | string | no       | New city name |

Response format:

```json5
{
    data: {
        id: 1, // {id}
        name: "Kalmar",
    },
}
```

---

Get all bikes in city: (ROUTE IN DEVELOPMENT)

```http
GET /city/{id}/bikes
```

Parameters:

| Name   | Type | Required | Description                                   |
| ------ | ---- | -------- | --------------------------------------------- |
| active | bool | no       | If true, only get active bikes in chosen city |

Response format:

```json5
{
    data: {
        id: 1, // {id}
        name: "Karlskrona",
    },
}
```

---

Add bike to city: (ROUTE IN DEVELOPMENT)

```http
POST /city/{id}/bikes
```

Parameters:

| Name | Type | Required | Description                        |
| ---- | ---- | -------- | ---------------------------------- |
| id   | int  | yes      | ID of the bike to register to city |

Response format:

```json
To be added
```

---

Get all stations in city: (ROUTE IN DEVELOPMENT)

```http
GET /city/{id}/stations
```

Response format:

```json
[
    {
        "slots": 0,
        "available": 0,
        "longitude": 0.0,
        "latitude": 0.0
    }
]
```

### Station endpoints

Display all stations:

```http
GET /stations
```

Response format:

```json
{
    "data": [
        {
            "id": 1,
            "slots": 10,
            "longitude": 59.8594,
            "latitude": 17.64,
            "available": 0
        }
    ]
}
```

---

Add new station:

```http
POST /stations
```

Parameters:

| Name      | Type | Required | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| slots     | int  | yes      | Total number of parking spaces in station |
| longitude | int  | yes      | Longitude coordinate                      |
| latitude  | int  | yes      | Latitude coordinate                       |
| city      | int  | yes      | ID of the city the station is in          |

Response format:

```json
{
    "data": {
        "longitude": 0.0,
        "latitude": 0.0,
        "slots": 0,
        "id": 1
    }
}
```

---

Display a station:

```http
GET /stations/{id}
```

Response format:

```json5
{
    data: {
        id: 1, // {id}
        longitude: 0.0,
        latitude: 0.0,
        slots: 0,
        available: 0,
    },
}
```

---

Remove a station:

```http
DELETE /stations/{id}
```

Response format:

```json
{
    "data": 1
}
```

Response is 1 if removal was successful, 0 if not.

---

Update a station:

```http
PUT /stations/{id}
```

Parameters:

| Name      | Type | Required | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| slots     | int  | no       | Total number of parking spaces in station |
| longitude | int  | no       | Longitude coordinate                      |
| latitude  | int  | no       | Latitude coordinate                       |

Response format:

```json5
{
    data: {
        id: 1, // {id}
        slots: 0,
        longitude: 0.0,
        latitude: 0.0,
    },
}
```

### Customer endpoints

Display all customers:

```http
GET /customer
```

Response format:

```json
{
    "data": [
        {
            "id": 1,
            "name": "Test Testingson",
            "email": "test@test.com",
            "credits": 0.0,
            "api_key": ""
        }
    ]
}
```

---

Display a customer:

```http
GET /customer/{id}
```

Response format:

```json5
{
    data: {
        id: 1, // {id}
        name: "Test Testingson",
        email: "test@test.com",
        credits: 0.0,
        api_key: "",
    },
}
```

---

Update a customer:

```http
PUT /customer/{id}
```

Parameters:

| Name    | Type   | Required | Description                         |
| ------- | ------ | -------- | ----------------------------------- |
| name    | string | no       | New name for the customer           |
| email   | string | no       | New email for the customer          |
| credits | float  | no       | New credit balance for the customer |

Response format:

```json5
{
    data: {
        id: 1, // {id}
        name: "Test Testingson",
        email: "test@test.com",
        credits: 0.0,
        api_key: "",
    },
}
```

---

Delete customer account.

```http
DELETE /customer/{id}
```

Response format:

```json
{
    "data": 1
}
```

Response is 1 if removal was successful, 0 if not.

---

Display customer history:

```http
GET /customer/{id}/history
```

Response format:

```json5
{
    data: [
        {
            id: 1,
            customer: 1, // {id}
            bike: 1,
            start_longitude: 0.0,
            start_latitude: 0.0,
            start_time: "2021-11-24 15:00:00",
            end_longitude: 0.0,
            end_latitude: 0.0,
            end_time: "2021-11-24 14:14:10",
            cost: 0.0,
            city: 1,
        },
    ],
}
```

---

Save a trip to the log:

```http
POST /customer/{id}/history
```

Parameters:

| Name            | Type   | Required | Description                                |
| --------------- | ------ | -------- | ------------------------------------------ |
| customer        | int    | yes      | ID of the customer                         |
| bike            | int    | yes      | ID of the used bike                        |
| start_longitude | float  | yes      | Longitude coordinate of starting position  |
| start_latitude  | float  | yes      | Latitude coordinate of starting position   |
| start_time      | string | yes      | Time trip started. Desired time format TBD |
| cost            | float  | yes      | Cost of the trip                           |
| end_longitude   | float  | yes      | Longitude coordinate of ending position    |
| end_latitude    | float  | yes      | Latitude coordinate of ending position     |
| city            | int    | yes      | ID of city                                 |

Response format:

```json5
{
    data: {
        id: 1,
        customer: 1, // {id}
        bike: 1,
        start_longitude: 0.0,
        start_latitude: 0.0,
        start_time: "2021-11-24 15:00:00",
        end_longitude: 0.0,
        end_latitude: 0.0,
        end_time: "2021-11-24 14:14:10",
        cost: 0.0,
        city: 1,
    },
}
```

### Admin endpoints

Display all customers:

```http
GET /admin/customers
```

Response format:

```json
{
    "data": [
        {
            "id": 1,
            "name": "Test Testingson",
            "email": "test@test.com",
            "credits": 0.0,
            "api_key": ""
        }
    ]
}
```

---

Remove a customer:

```http
DELETE /admin/customers/{id}
```

Response format:

```json
{
    "data": 1
}
```

Response is 1 if removal was successful, 0 if not.

### Account endpoints

Register account

```http
POST /register
```

Parameters:

| Name  | Type   | Required | Description            |
| ----- | ------ | -------- | ---------------------- |
| email | string | yes      | Email to register with |
| name  | string | yes      | Name to register with  |

Response format:

```json
To be added
```
