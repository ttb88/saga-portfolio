// project.router.js
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// will return all items from "projects" table on database ordered descending by "date" even if tag_id is null
router.get('/', (req, res) => {
    let nullTag;
    pool.query(`SELECT * FROM "projects";`).then((result) => {
        nullTag = result.rows.filter(row => row.tag_id === null)
    })
    pool.query(`SELECT "projects"."id","projects"."name", "description", "thumbnail", "website", "github", "date_completed", "tag_id", "tags"."name" as "tag_name" FROM "projects"
    JOIN "tags" ON "tags"."id"="tag_id"
    ORDER BY "date_completed" DESC;`)
        .then((result) => {
            projects = result.rows;
            res.send([...projects, ...nullTag]);
        }).catch((error) => {
            console.log('errors with projects select', error);
            res.sendStatus(500);
        })
})

// will receive new project item and insert into the applicable fields on "projects" table in database
router.post('/', (req, res) => {
    console.log('project POST route was hit', req.body);
    pool.query(`INSERT INTO "projects" (name, date_completed, tag_id, github, website, description) VALUES ($1,$2, $3, $4, $5, $6);`,
        [req.body.name, req.body.selectedDate, req.body.selectedTag, req.body.gitHubUrl, req.body.websiteUrl, req.body.description]).then(() => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log('errors with project insert', error);
            res.sendStatus(500);
        })
})

// delete selected row on DOM from database
router.delete('/:id', (req, res) => {
    console.log(req.params.id);
    pool.query(`DELETE FROM "projects" WHERE "id" IN ($1);`, [req.params.id]).then(() => {
        res.sendStatus(204);
    }).catch((error) => {
        console.log('errors with project delete query', error);
        res.sendStatus(500);
    })
});

module.exports = router;