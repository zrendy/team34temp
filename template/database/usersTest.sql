drop table if exists users_test cascade;
create table if not exists users_test (
    user_id SERIAL NOT NULL PRIMARY KEY,
	email VARCHAR(50) UNIQUE NOT NULL,
    bio TEXT,
    image_url VARCHAR(50) NOT NULL
);

COPY users_test FROM '/Users/zrendy/HackReactor/hackathonPractice/server/database/users_test.csv' DELIMITER ',' CSV HEADER;

ALTER SEQUENCE users_test_user_id_seq RESTART WITH 101;