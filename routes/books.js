var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST new item. */

router.post('/books', function(req, res, next) {
  console.log(req.body)
  db(`INSERT INTO books (title, author, genre, totalpages, description) 
  VALUES ('${req.body.title}', '${req.body.author}', '${req.body.genre}', 
  '${req.body.totalpages}', '${req.body.description}');`)
  .then(results => res.send(results.data))
  .catch(err => res.status(500).send(err.message));
});

/* GET all items */

router.get('/books', function(req, res, next) {
  db(`SELECT * FROM books;`)
  .then(results => res.send(results.data))
  .catch(err => res.status(500).send(err));
})

module.exports = router;
