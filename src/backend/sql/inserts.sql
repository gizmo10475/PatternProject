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
