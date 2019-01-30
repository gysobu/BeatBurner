DROP TABLE users;
DROP TABLE register;


-- DROP TABLE users;
-- DROP TABLE music;
-- CREATE TABLE users(
--     id SERIAL PRIMARY KEY,
--     firstName VARCHAR(20),
--     lastName VARCHAR(20),
--     gender VARCHAR(2),
--     weight REAL,
--     age INTEGER
-- );

-- CREATE TABLE difficulty(
-- id SERIAL PRIMARY KEY,
-- difficulty VARCHAR(20)
-- );

<<<<<<< HEAD
<<<<<<< HEAD
CREATE TABLE music(
    id SERIAL PRIMARY KEY,
    difficultyID INTEGER REFERENCES difficulty(id),
    title VARCHAR(90),
    bpm INTEGER,
    artistName VARCHAR(20),
    calories REAL,
    duration NUMERIC
);
=======
-- CREATE TABLE music(
--     id SERIAL PRIMARY KEY,
--     difficultyID INTEGER REFERENCES difficulty(id),
--     title VARCHAR(90),
--     bpm INTEGER,
--     artistName VARCHAR(20),
--     calories REAL,
--     duration NUMERIC
-- );
>>>>>>> d757950dc5be949cdf2abe95fee6f0710c262e8f

-- CREATE TABLE register(
--     sid INTEGER,
--     userName VARCHAR(20),
--     passcode VARCHAR
-- );

<<<<<<< HEAD
 COPY music(id,difficultyID,title,bpm,artistName,calories,duration) FROM '/Users/sobha/BeatBurner/public/music.csv' DELIMITER ',' CSV HEADER;
=======
-- CREATE TABLE music(
--     id SERIAL PRIMARY KEY,
--     difficultyID INTEGER REFERENCES difficulty(id),
--     title VARCHAR(90),
--     bpm INTEGER,
--     artistName VARCHAR(20),
--     calories REAL,
--     duration NUMERIC
-- );

-- CREATE TABLE register(
--     sid INTEGER,
--     userName VARCHAR(20),
--     passcode VARCHAR
-- );

-- COPY music(id,difficultyID,title,bpm,artistName,calories,duration) FROM '/Users/voyager1/Documents/DigitalCrafts/beatburner/public/music.csv' DELIMITER ',' CSV HEADER;
>>>>>>> cd584e08b44d63ef41ff5fec8a8e74322485a485
=======
-- COPY music(id,difficultyID,title,bpm,artistName,calories,duration) FROM '/Users/voyager1/Documents/DigitalCrafts/beatburner/public/music.csv' DELIMITER ',' CSV HEADER;
>>>>>>> d757950dc5be949cdf2abe95fee6f0710c262e8f
