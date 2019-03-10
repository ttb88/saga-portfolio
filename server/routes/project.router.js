// feedback.router.js
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

module.exports = router;