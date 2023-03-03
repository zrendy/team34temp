drop table if exists users cascade;
create table if not exists users (
    user_id SERIAL NOT NULL PRIMARY KEY,
	username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL,
	email VARCHAR(50)
);

COPY users FROM '/Users/zrendy/HackReactor/hackathonPractice/server/database/user.csv' DELIMITER ',' CSV HEADER;

ALTER SEQUENCE users_user_id_seq RESTART WITH 11;