CREATE TABLE "tags" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL
);

INSERT INTO "tags" ("name") 
VALUES ('React'), ('jQuery'), ('Node'), ('SQL'), ('Redux'), ('HTML');

CREATE TABLE "projects" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL,
    "description" varchar(2048),
    "thumbnail" varchar(2048), 
    "website" varchar(2048),
    "github" varchar(2048),
    "date_completed" date,
    "tag_id" INT REFERENCES "tags"
);

INSERT INTO "projects" ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id")
VALUES ('SQL To Do List', 'A TO-DO application with a front end experience that allows a user to create a task and then store inside of a database (SQL).  Tasks can be prioritized and categorized for organization purposes.', '/images/to-do-list.png', '', 'https://github.com/ttb88/weekend-sql-to-do-list', '2/17/2019', 4);

INSERT INTO "projects" ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id")
VALUES ('Redux Feedback Loop', 'A feedback form modeled after Primes system. Feedback is collected over 4 views, and when all steps are complete, the app will save the feedback in the database.', '/images/feedback.png', '', 'https://github.com/ttb88/redux-feedback-loop-master', '3/4/2019', 5);

INSERT INTO "projects" ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id")
VALUES ('Server Side Calculator', 'A server-side calculator with all logic for the calculator being implemented on the server.', '/images/calculator.png', '', 'https://github.com/ttb88/jquery-server-side-calculator', '2/10/2019', 2);