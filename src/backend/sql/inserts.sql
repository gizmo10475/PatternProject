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
    cities (`name`)
VALUES
    ("Karlskrona"),
    ("Uppsala")
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

