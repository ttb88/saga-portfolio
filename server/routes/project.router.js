// project.router.js
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// will return all items from "projects" table on database ordered ascending by "date"
router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "projects" ORDER BY "date_completed" ASC;`)
        .then((result) => {
            projects = result.rows;
            console.log(projects);
            res.send(projects);
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
        console.log('errors with feedback insert', error);
        res.sendStatus(500);
    })
})

module.exports = router;