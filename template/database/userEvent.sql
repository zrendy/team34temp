drop table if exists userevents cascade;
create table if not exists userevents (
    user_id SERIAL REFERENCES users(user_id) NOT NULL,
    event_id SERIAL REFERENCES events(event_id) NOT NULL,
	date DATE NOT NULL,
    time TIME NOT NULL
);

COPY userevents FROM '/Users/zrendy/HackReactor/hackathonPractice/server/database/userEvent.csv' DELIMITER ',' CSV HEADER;

create view usereventtable as SELECT u.username, e.name as event FROM users u JOIN userevents ue ON u.user_id = ue.user_id JOIN 
events e ON ue.event_id = e.event_id ORDER BY u.username DESC;