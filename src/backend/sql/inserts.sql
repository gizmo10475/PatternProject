USE pattern;

INSERT INTO 
    bikes (`longitude`, `latitude`)
VALUES
    (56.184011692770454, 15.601425980319892),
    (56.1777331622716, 15.595328794560684),
    (56.22437946616326, 15.632131155357266),
    (59.859409798520964, 17.640017319857975), -- Parkerad Uppsala
    (56.182415374817296, 15.601140152894768) -- Parkerad Karlskrona
;

INSERT INTO
    cities (`name`, `center_long`, `center_lat`, `radius`)
VALUES
    ("Karlskrona", 56.18136536195939, 15.606879366699312, 4),
    ("Uppsala", 59.86043455303328, 17.65091957215461, 5)
;

INSERT INTO
    bike2city (`bike`, `city`)
VALUES
    (1, 1),
    (2, 1),
    (3, 1),
    (4, 2),
    (5, 1)
;

INSERT INTO
    stations (`slots`, `longitude`, `latitude`)
VALUES
    (10, 59.859409798520964, 17.640017319857975), -- Uppsala
    (25, 56.182415374817296, 15.601140152894768) -- Karlskrona
;

INSERT INTO
    station2city (`station`, `city`)
VALUES
    (1, 2),
    (2, 1)
;

INSERT INTO
    bike2station (`bike`, `station`)
VALUES
    (4, 1),
    (5, 2)
;

INSERT INTO
    parking_zones (`center_long`, `center_lat`, `radius`)
VALUES
    (56.18046291525948, 15.590613515182943, 5),
    (56.16699990068946, 15.586665592184954, 15),
    (59.85897634569878, 17.644801749380044, 15)
;

INSERT INTO
    parking_zone2city (`city`, `zone`)
VALUES
    (1, 1),
    (1, 2),
    (2, 3)
;

INSERT INTO
    personal_access_tokens (`tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`)
VALUES
    ('App\\Models\\Account', 1, 'client', '7afea22a6b0bda87889379f16ed170d3c589302c0d5fecec9950be1ac02bd8bf', '["client","admin"]'),
    ('App\\Models\\Account', 2, 'client', '1292be05e22dc23a27fa5c84a32f7747054b97ead2108129c0be8a46b04c6c5f', '["client","customer"]'),
    ('App\\Models\\Account', 3, 'client', '1ca6a539cc1b417df56d4c9611881e40afbe66f1e90b2d490a5e95d31e9debd3', '["client","bike"]')
;

INSERT INTO 
    accounts (`email`, `admin`)
VALUES
    ('admin@client.com', 1),
    ('customer@client.com', 0),
    ('bike@client.com', 0)
;

INSERT INTO
    customers (`name`, `account`, `credits`)
VALUES
    ("Customer App", 2, 0)
;
