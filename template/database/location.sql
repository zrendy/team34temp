drop table if exists locations cascade;
create table if not exists locations (
	location_id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL, 
	address VARCHAR(50) NOT NULL,
	state VARCHAR(50) NOT NULL,
	zip VARCHAR(50) NOT NULL
);

COPY locations FROM '/Users/zrendy/HackReactor/hackathonPractice/server/database/location.csv' DELIMITER ',' CSV HEADER;

ALTER SEQUENCE locations_location_id_seq RESTART WITH 11;