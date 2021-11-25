# API

## Table of Contents

- [Setup](#Setup)
- [Development](#Development)
- [API Endpoints](#API-Endpoints)
  - [Bike endpoints](#Bike-endpoints)
  - [City endpoints](#City-endpoints )

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

## API Endpoints

All requests should be prefaced by /api.

### Bike endpoints

```http
GET /bike
```

Response format: 

```json
[
    {
        "id": X,
        "location": "xxxxx",
        "active": X,
        "speed": X,
        "charging": X,
        "warning": X
    },
    {
        "id": X,
        "location": "xxxxx",
        "active": X,
        "speed": X,
        "charging": X,
        "warning": X
    }
]
```

Parameters:
|Name|Type|Required|Description|
|----|----|----|----|
|active|bool|no|If set to true only retrieve active bikes.|

---

To add a new bike:

```http
POST /bike
```

Parameters:

| Name     | Type   | Required |
| -------- | ------ | -------- |
| location | string | yes      |

Response format: 

```json
To be added
```

---

To get specific bike:

```http
GET /bike/{id}
```

Response format:

```json
{
    "id": {id},
    "location": "xxxxx",
    "active": 0,
    "speed": 0,
    "charging": 0,
    "warning": 0
}
```

---

To remove specific bike:

```http
DELETE /bike/{id}
```

---

To update specific bike:

```http
PUT /bike/{id}
```

Parameters:

| Name     | Type   | Required |
| -------- | ------ | -------- |
| location | string | no       |
| active   | bool   | no       |
| speed    | int    | no       |
| charging | bool   | no       |
| warning  | bool   | no       |

### City endpoints

Display all cities:

```http
GET /city
```

Result:

```json
[
    {
        "id": 1,
        "name": "XXXXX"
    },
    {
        "id": 2,
        "name": "XXXXX"
    }
]
```

---

Display specific city:

```http
GET /city/{id}
```

Result:

```
{
    "id": X,
    "name": "XXXXX"
}
```

---

Remove specific city:

```
DELETE /city/{id}
```

---

Update specific city:

```
PUT /city/{id}
```

Optional parameters:

```
name
```

---

Get all bikes in city: (ROUTE IN DEVELOPMENT)

```
GET /city/{id}/bikes
```

Result:

```
ROUTE IN DEVELOPMENT
```

---

Add bike to city: (ROUTE IN DEVELOPMENT)

```
POST /city/{id}/bikes
```

Parameter:

```
bike id (ROUTE IN DEVELOPMENT)
```

---

Get all stations in city: (ROUTE IN DEVELOPMENT)

```
GET /city/{id}/stations
```

Result:

```
ROUTE IN DEVELOPMENT
```

---

# /stations

Display all stations:

```
GET /stations
```

Result:

```
[
    {
        "id": 1,
        "slots": X
    },
    {
        "id": 2,
        "slots": X
    }
]
```

---

Add new station:

```
POST /stations
```

Parameter:

```
Slots
```

---

Display specific stations:

```
GET /stations/{id}
```

Result:

```
{
    "id": X,
    "slots": X
}
```

---

Remove specific station:

```
DELETE /stations/{id}
```

---

Update specific station:

```
PUT /stations/{id}
```

Parameters:

```
Slots
```

---

# /customer

Display all customers:

```
GET /customer
```

Result:

```
[
    {
        "id": X,
        "name": "XXXX",
        "account": X
    },
    {
        "id": X,
        "name": "XXXX",
        "account": X
    }

]
```

---

Display specific customer:

```
GET /customer/{id}
```

Result:

```
{
    "id": X,
    "name": "XXXX",
    "account": X
}
```

---

Update specific customer:

```
PUT /customer/{id}
```

Parameters:

```
??????????
```

---

Display customer history:

```
GET /customer/{id}/history
```

Result:

```
[
    {
        "id": 1,
        "customer": X,
        "bike": X,
        "start_location": "XXXXX",
        "start_time": "2021-11-24 15:00:00",
        "end_location": "XXXXX",
        "end_time": "2021-11-24 14:14:10",
        "cost": XX,
        "city": X
    },
    {
        "id": 2,
        "customer": X,
        "bike": X,
        "start_location": "XXXXX",
        "start_time": "2021-11-24 15:15:00",
        "end_location": "XXXXX",
        "end_time": "2021-11-24 14:16:35",
        "cost": XX,
        "city": X
    }
]
```

---

Add customer log to history:

```
POST /customer/{id}/history
```

Parameters:

```
customer
bike
start_location
start_time
end_location
cost
city
```

---

# /admin

Display all customers:

```
GET /admin/customers
```

Result:

```
[
    {
        "id": X,
        "name": "XXXX",
        "account": X
    },
    {
        "id": X,
        "name": "XXXX",
        "account": X
    }

]
```

---

Remove specific customer:

```
DELETE /admin/customers/{id}
```

---

# /register

Register new customer:

```
POST /register
```

Parameters:

```
UNDER DEVELOPMENT
```
