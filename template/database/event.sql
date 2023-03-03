drop table if exists events cascade;

create table if not exists events (
	event_id SERIAL NOT NULL PRIMARY KEY,
    school_id SERIAL NOT NULL,
    name VARCHAR(50) NOT NULL,
	reward INT NOT NULL,
    FOREIGN KEY(school_id) REFERENCES locations(location_id)
);

COPY events FROM '/Users/zrendy/HackReactor/hackathonPractice/server/database/event.csv' DELIMITER ',' CSV HEADER;
ALTER SEQUENCE events_event_id_seq RESTART WITH 101;