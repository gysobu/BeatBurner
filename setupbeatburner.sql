DROP TABLE users;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(20),
    lastName VARCHAR(20),
    gender VARCHAR(2),
    weight REAL,
    age INTEGER
);

-- CREATE TABLE difficulty(
-- id SERIAL PRIMARY KEY,
-- difficulty VARCHAR(20)
-- );

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