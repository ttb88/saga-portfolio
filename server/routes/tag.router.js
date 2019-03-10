// tag.router.js
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// will return all items from "tags" table on database ordered ascending by "name"
router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "tags" ORDER BY "name" ASC;`)
        .then((result) => {
            tags = result.rows;
            console.log(tags);
            res.send(tags);
        }).catch((error) => {
            console.log('errors with projects select', error);
            res.sendStatus(500);
        })
})

module.exports = router;