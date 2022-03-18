DROP TABLE IF EXISTS actors;

CREATE TABLE actors (
    id SERIAL primary key,
    name VARCHAR(255) NOT NULL,
    age INTEGER,
    "Number of Oscars" INTEGER
);

INSERT INTO actors(name, age, "Number of Oscars")
VALUES ('Leonardo DiCaprio', 41, 1); 

INSERT INTO actors(name, age, "Number of Oscars")
VALUES ('Jennifer Lawrence', 25, 1);

INSERT INTO actors(name, age, "Number of Oscars")
VALUES ('Samuel L. Jackson', 67, 0);

INSERT INTO actors(name, age, "Number of Oscars")
VALUES ('Meryl Streep', 66, 3);

INSERT INTO actors(name, age, "Number of Oscars")
VALUES ('John Cho', 43 , 0);


-- Which actors have more than one oscar?
-- SELECT * FROM actors WHERE "Number of Oscars" < 1

-- Which actors are older than 30 years old?
-- SELECT * FROM actors WHERE age > 30
