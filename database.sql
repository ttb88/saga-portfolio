CREATE TABLE "tags" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255)
);

INSERT INTO "tags" ("name") 
VALUES ('React'), ('jQuery'), ('Node'), ('SQL'), ('Redux'), ('HTML');

CREATE TABLE "projects" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL,
    "description" varchar(1000),
    "thumbnail" varchar(255), 
    "website" varchar(255),
    "github" varchar(255),
    "technologies" varchar(255),
    "date_completed" date,
    "tag_id" INT REFERENCES "tags"
);


INSERT INTO "projects" ("name", "description", "thumbnail", "website", "github", "technologies", "date_completed", "tag_id")
VALUES ('SQL To Do List', 'A to-do application with a front end experience that allows a user to create a task and then store inside of a database.  Tasks can be prioritized and categorized for organization purposes.', '/images/to-do-list.png', 'https://sql-to-do-list-app.herokuapp.com', 'https://github.com/ttb88/weekend-sql-to-do-list', 'jQuery, Node.js, PostgreSQL, Bootstrap, CSS', '2/17/2019', 4);

INSERT INTO "projects" ("name", "description", "thumbnail", "website", "github", "technologies", "date_completed", "tag_id")
VALUES ('Redux Feedback Loop', 'A feedback form modeled after Primes system. Feedback is collected over 4 views, and when all steps are complete, the app will save the feedback in the database.', '/images/feedback.png', 'https://redux-feedback-loop-app.herokuapp.com', 'https://github.com/ttb88/redux-feedback-loop-master', 'React.js, React-Redux, Node.js, PostgreSQL, Material UI, CSS', '3/4/2019', 5);

INSERT INTO "projects" ("name", "description", "thumbnail", "website", "github", "technologies", "date_completed", "tag_id")
VALUES ('Server Side Calculator', 'A server-side calculator with all logic for the calculator being implemented on the server.', '/images/calculator.png', 'https://jquery-server-calculator.herokuapp.com', 'https://github.com/ttb88/jquery-server-side-calculator', 'jQuery, Node.js, CSS', '2/10/2019', 2);

INSERT INTO "projects" ("name", "description", "thumbnail", "website", "github", "technologies", "date_completed", "tag_id")
VALUES ('Stream (Solo Project)', 'Full-stack web application that seamlessly takes the user through a simple 4 step process, combining imagery, genre, mood and energy selection to deliver a curated Spotify playlist that’s personalized to their current or desired state of mind and musical tastes.', '/images/Stream.png', 'https://prime-solo-project-stream.herokuapp.com', 'https://github.com/ttb88/prime-solo-project-master', 'React.js, React-Redux, Spotify API/OAuth, Node.js, PostgreSQL, Async/Await, Material-UI, CSS', '4/01/2019', 1);

INSERT INTO "projects" ("name", "description", "thumbnail", "website", "github", "technologies", "date_completed", "tag_id")
VALUES ('End In Mind (Group Project)', 'Full-stack admin application to automate the coordination between the organization and community administrators.  Features dashboard with data analytics, file management with upload/download capability, event manager and public facing calendar.', '/images/end_in_mind_3.png', 'https://end-in-mind-admin-app.herokuapp.com', 'https://github.com/ttb88/End-In-Mind-Project', '	React.js, React-Redux, AWS, Node.js, PostgreSQL, Material-UI, CSS', '5/01/2019', 1);