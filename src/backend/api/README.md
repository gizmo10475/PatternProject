# API

## Setup

After having cloned the repository you need to install all of the dependencies using Composer. This is done with the following command:

```bash
$ composer install
```

## Development

To start the development server you run the following command:

```
$ php artisan serve
```

You should have started the database docker container before doing this, as well as filling out your database credentials in a .env file. See [.env.example](.env.example). The following part of the example file are the important bits:

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```

These should be filled in correctly.





## Use of API

# /bike
To get all bikes:
```
GET /bike
```
Result:

```
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
___

To add a new bike:
```
POST /bike
```
Required parameters:
```
location
```
___
To get specific bike:
```
GET /bike/{id}
```

Result:

```
{
    "id": {id},
    "location": "xxxxx",
    "active": 0,
    "speed": 0,
    "charging": 0,
    "warning": 0
}
```
___
To remove specific bike:
```
DELETE /bike/{id}
```
___
To update specific bike:
```
PUT /bike/{id}
```

Optional parameters:
```
location
active
speed
charging
warning
```
___
# /city

Display all cities:
```
GET /city
```

Result:

```
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
___
Display specific city:
```
GET /city/{id}
```
Result:

```
{
    "id": X,
    "name": "XXXXX"
}
```
___
Remove specific city:
```
DELETE /city/{id}
```
___
Update specific city:
```
PUT /city/{id}
```
Optional parameters:
```
name
```
___
Get all bikes in city: (ROUTE IN DEVELOPMENT)
```
GET /city/{id}/bikes
```
Result:

```
ROUTE IN DEVELOPMENT
```
___
Add bike to city: (ROUTE IN DEVELOPMENT)
```
POST /city/{id}/bikes
```
Parameter:

```
bike id (ROUTE IN DEVELOPMENT)
```
___

Get all stations in city: (ROUTE IN DEVELOPMENT)
```
GET /city/{id}/stations
```
Result:

```
ROUTE IN DEVELOPMENT
```
___
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
___
Add new station:
```
POST /stations
```
Parameter:

```
Slots
```
___
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
___
Remove specific station:
```
DELETE /stations/{id}
```
___
Update specific station:
```
PUT /stations/{id}
```
Parameters:

```
Slots
```
___
# /customers

Display all customers:
```
GET /customers
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
___

Display specific customer:
```
GET /customers/{id}
```
Result:

```
{
    "id": X,
    "name": "XXXX",
    "account": X
}
```
___
Update specific customer:
```
PUT /customers/{id}
```
Parameters:

```
??????????
```
___

Display customer history:
```
GET /customers/{id}/history
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
___

Add customer log to history:
```
POST /customers/{id}/history
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
___
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
___
Remove specific customer:
```
DELETE /admin/customers/{id}
```
___
# /register

Register new customer:
```
POST /register
```
Parameters:

```
UNDER DEVELOPMENT
```


