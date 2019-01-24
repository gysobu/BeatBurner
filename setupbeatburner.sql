
-- DROP TABLE users,difficulty,music,register;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(20),
    lastName VARCHAR(20),
    gender VARCHAR(2),
    weight REAL,
    age INTEGER
);

CREATE TABLE difficulty(
id SERIAL PRIMARY KEY,
difficulty VARCHAR(20)
);

CREATE TABLE music(
    id SERIAL PRIMARY KEY,
    difficultyID INTEGER REFERENCES difficulty(id),
    title VARCHAR(20),
    bpm INTEGER,
    artistName VARCHAR(20),
    calories REAL
);

CREATE TABLE register(
    sid INTEGER,
    userName VARCHAR(20),
    passcode VARCHAR
);