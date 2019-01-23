
-- DROP TABLE users,playlist,register;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(20),
    lastName VARCHAR(20),
    weight REAL,
    age INTEGER
);

CREATE TABLE playlist(
id SERIAL PRIMARY KEY,
difficulty VARCHAR(20)
);

CREATE TABLE music(
    id SERIAL PRIMARY KEY,
    songID INTEGER REFERENCES playlist(id),
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